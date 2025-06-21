
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, CheckCircle2 } from 'lucide-react';

export const TodaySchedule = () => {
  const tasks = [
    { time: '9:00 AM', task: 'Team standup meeting', completed: true, type: 'work' },
    { time: '10:30 AM', task: 'Focus: Write product specs', completed: true, type: 'work' },
    { time: '12:00 PM', task: 'Lunch & walk break', completed: false, type: 'health' },
    { time: '2:00 PM', task: 'Client presentation prep', completed: false, type: 'work' },
    { time: '4:00 PM', task: 'Creative writing session', completed: false, type: 'creativity' },
    { time: '6:00 PM', task: 'Gym workout', completed: false, type: 'health' },
  ];

  const typeColors = {
    work: 'bg-blue-100 text-blue-800',
    health: 'bg-green-100 text-green-800',
    creativity: 'bg-purple-100 text-purple-800'
  };

  return (
    <Card className="bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-gray-800">
          <Clock className="w-5 h-5" />
          <span>Today's Schedule</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((item, index) => (
            <div key={index} className={`flex items-center space-x-4 p-3 rounded-lg transition-all ${
              item.completed ? 'bg-gray-50 opacity-60' : 'bg-white hover:bg-gray-50'
            }`}>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className={`w-5 h-5 ${
                  item.completed ? 'text-green-500' : 'text-gray-300'
                }`} />
                <span className="text-sm font-medium text-gray-600 min-w-[70px]">
                  {item.time}
                </span>
              </div>
              <div className="flex-1 flex items-center justify-between">
                <span className={`text-sm ${
                  item.completed ? 'line-through text-gray-500' : 'text-gray-800'
                }`}>
                  {item.task}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${typeColors[item.type]}`}>
                  {item.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
