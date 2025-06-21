
import React from 'react';
import { Header } from '@/components/Header';
import { DashboardGrid } from '@/components/DashboardGrid';
import { AIAssistant } from '@/components/AIAssistant';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Good morning! 🌟
            </h1>
            <p className="text-lg text-gray-600">
              Your AI assistant has prepared today's focus areas
            </p>
          </div>
          <DashboardGrid />
          <AIAssistant />
        </div>
      </main>
    </div>
  );
};

export default Index;
