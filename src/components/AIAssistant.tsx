
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Lightbulb, TrendingUp } from 'lucide-react';

export const AIAssistant = () => {
  const [activeInsight, setActiveInsight] = useState(0);

  const insights = [
    {
      icon: <Lightbulb className="w-5 h-5 text-yellow-600" />,
      title: "Smart Suggestion",
      message: "You're most productive between 10-12 AM. I've scheduled your important tasks during this window."
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-green-600" />,
      title: "Progress Update",
      message: "Great job! You've completed 85% of this week's goals. Keep up the momentum!"
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-blue-600" />,
      title: "Gentle Reminder",
      message: "It's been 2 hours since your last break. How about a quick walk to recharge?"
    }
  ];

  return (
    <Card className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold">AI</span>
          </div>
          <span>Your AI Assistant</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-start space-x-3">
              {insights[activeInsight].icon}
              <div className="flex-1">
                <h4 className="font-semibold text-sm mb-1">
                  {insights[activeInsight].title}
                </h4>
                <p className="text-sm text-white/90">
                  {insights[activeInsight].message}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-2">
            {insights.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveInsight(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeInsight ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
          
          <Button 
            variant="secondary" 
            size="sm" 
            className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30"
          >
            Chat with AI Assistant
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
