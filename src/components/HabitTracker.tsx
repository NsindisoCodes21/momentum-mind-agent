
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useHabits } from '@/hooks/useHabits';

export const HabitTracker = () => {
  const { habits, loading, toggleHabit } = useHabits();

  if (loading) {
    return (
      <Card className="bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-gray-800">Daily Habits</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="h-6 bg-gray-200 animate-pulse rounded"></div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (habits.length === 0) {
    return (
      <Card className="bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-gray-800">Daily Habits</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500 text-center">No habits yet. Start building good habits!</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-gray-800">Daily Habits</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {habits.map((habit) => (
            <div key={habit.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => toggleHabit(habit.id, !habit.completed_today)}
                  className={`w-4 h-4 rounded-full transition-colors ${
                    habit.completed_today ? 'bg-green-500' : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                />
                <span className="text-sm font-medium text-gray-700">
                  {habit.name}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500">🔥</span>
                <span className="text-sm font-semibold text-orange-600">
                  {habit.streak}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
