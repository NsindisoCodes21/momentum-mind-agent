
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

interface Habit {
  id: string;
  name: string;
  streak: number;
  completed_today: boolean;
}

export function useHabits() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  const fetchHabits = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('habits')
        .select('*')
        .eq('user_id', user.id);

      if (error) throw error;

      setHabits(data || []);
    } catch (error) {
      console.error('Error fetching habits:', error);
      toast({
        title: "Error",
        description: "Failed to fetch habits",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const toggleHabit = async (id: string, completed: boolean) => {
    if (!user) return;

    try {
      const habit = habits.find(h => h.id === id);
      if (!habit) return;

      const newStreak = completed ? habit.streak + 1 : Math.max(0, habit.streak - 1);

      const { data, error } = await supabase
        .from('habits')
        .update({ 
          completed_today: completed,
          streak: newStreak
        })
        .eq('id', id)
        .eq('user_id', user.id)
        .select()
        .single();

      if (error) throw error;

      setHabits(prev => prev.map(habit => habit.id === id ? data : habit));
    } catch (error) {
      console.error('Error updating habit:', error);
      toast({
        title: "Error",
        description: "Failed to update habit",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchHabits();
  }, [user]);

  return {
    habits,
    loading,
    toggleHabit,
    refetch: fetchHabits,
  };
}
