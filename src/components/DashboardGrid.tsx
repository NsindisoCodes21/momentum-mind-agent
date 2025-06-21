
import React from 'react';
import { GoalCard } from '@/components/GoalCard';
import { HabitTracker } from '@/components/HabitTracker';
import { ProgressRing } from '@/components/ProgressRing';
import { TodaySchedule } from '@/components/TodaySchedule';

export const DashboardGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <div className="lg:col-span-2">
        <TodaySchedule />
      </div>
      <div className="space-y-6">
        <ProgressRing 
          title="Daily Progress" 
          percentage={68} 
          color="from-blue-500 to-purple-500"
        />
        <GoalCard 
          title="Work Focus" 
          category="productivity"
          progress={3}
          target={5}
          icon="💼"
        />
      </div>
      <GoalCard 
        title="Fitness Goals" 
        category="health"
        progress={2}
        target={3}
        icon="🏃‍♂️"
      />
      <GoalCard 
        title="Creative Projects" 
        category="creativity"
        progress={1}
        target={2}
        icon="🎨"
      />
      <div className="lg:col-span-1">
        <HabitTracker />
      </div>
    </div>
  );
};
