
import React from 'react';
import { GoalCard } from '@/components/GoalCard';
import { HabitTracker } from '@/components/HabitTracker';
import { ProgressRing } from '@/components/ProgressRing';
import { TodaySchedule } from '@/components/TodaySchedule';
import { useGoals } from '@/hooks/useGoals';
import { useHabits } from '@/hooks/useHabits';

export const DashboardGrid = () => {
  const { goals, loading: goalsLoading } = useGoals();
  const { habits, loading: habitsLoading } = useHabits();

  // Calculate overall progress
  const overallProgress = goals.length > 0 
    ? Math.round(goals.reduce((acc, goal) => acc + (goal.progress / goal.target), 0) / goals.length * 100)
    : 0;

  const completedHabits = habits.filter(h => h.completed_today).length;
  const habitProgress = habits.length > 0 ? Math.round((completedHabits / habits.length) * 100) : 0;

  const displayProgress = goals.length > 0 ? overallProgress : habitProgress;

  if (goalsLoading || habitsLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <TodaySchedule />
        </div>
        <div className="space-y-6">
          <ProgressRing 
            title="Daily Progress" 
            percentage={0} 
            color="from-blue-500 to-purple-500"
          />
          <div className="h-32 bg-gray-200 animate-pulse rounded-lg"></div>
        </div>
        <div className="h-32 bg-gray-200 animate-pulse rounded-lg"></div>
        <div className="h-32 bg-gray-200 animate-pulse rounded-lg"></div>
        <div className="lg:col-span-1">
          <HabitTracker />
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <div className="lg:col-span-2">
        <TodaySchedule />
      </div>
      <div className="space-y-6">
        <ProgressRing 
          title="Daily Progress" 
          percentage={displayProgress} 
          color="from-blue-500 to-purple-500"
        />
        {goals.length > 0 ? (
          <GoalCard 
            title={goals[0].title}
            category={goals[0].category}
            progress={goals[0].progress}
            target={goals[0].target}
            icon={goals[0].icon}
          />
        ) : (
          <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200">
            <p className="text-gray-500 text-center">No goals yet. Create your first goal!</p>
          </div>
        )}
      </div>
      {goals.slice(1, 3).map((goal) => (
        <GoalCard 
          key={goal.id}
          title={goal.title}
          category={goal.category}
          progress={goal.progress}
          target={goal.target}
          icon={goal.icon}
        />
      ))}
      {goals.length < 2 && (
        <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200">
          <p className="text-gray-500 text-center">Create more goals to see them here!</p>
        </div>
      )}
      {goals.length < 3 && (
        <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200">
          <p className="text-gray-500 text-center">Add another goal!</p>
        </div>
      )}
      <div className="lg:col-span-1">
        <HabitTracker />
      </div>
    </div>
  );
};
