
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const HabitTracker = () => {
  const habits = [
    { name: 'Morning Exercise', streak: 7, completed: true },
    { name: 'Read 30 min', streak: 5, completed: true },
    { name: 'Drink 8 glasses', streak: 3, completed: false },
    { name: 'Meditate', streak: 12, completed: true },
  ];

  return (
    <Card className="bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-gray-800">Daily Habits</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {habits.map((habit, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded-full ${
                  habit.completed ? 'bg-green-500' : 'bg-gray-200'
                }`} />
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
