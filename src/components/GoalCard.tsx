
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface GoalCardProps {
  title: string;
  category: string; // Changed from union type to string
  progress: number;
  target: number;
  icon: string;
}

export const GoalCard: React.FC<GoalCardProps> = ({
  title,
  category,
  progress,
  target,
  icon
}) => {
  const percentage = (progress / target) * 100;
  
  const categoryColors: Record<string, string> = {
    productivity: 'from-blue-500 to-indigo-500',
    health: 'from-green-500 to-teal-500',
    creativity: 'from-purple-500 to-pink-500',
    finance: 'from-yellow-500 to-orange-500'
  };

  // Use default color if category is not found
  const gradientClass = categoryColors[category] || 'from-gray-500 to-gray-600';

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-gray-800">
            {title}
          </CardTitle>
          <span className="text-2xl">{icon}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Progress</span>
            <span>{progress}/{target}</span>
          </div>
          <Progress value={percentage} className="h-2" />
          <div className={`h-1 bg-gradient-to-r ${gradientClass} rounded-full opacity-20`} />
        </div>
      </CardContent>
    </Card>
  );
};
