
import React, { useEffect } from 'react';
import { Header } from '@/components/Header';
import { DashboardGrid } from '@/components/DashboardGrid';
import { AIAssistant } from '@/components/AIAssistant';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse">
            <span className="text-white font-bold text-lg">AI</span>
          </div>
          <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading your personal assistant...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const currentHour = new Date().getHours();
  let greeting = "Good morning";
  let emoji = "🌅";
  
  if (currentHour >= 12 && currentHour < 17) {
    greeting = "Good afternoon";
    emoji = "☀️";
  } else if (currentHour >= 17) {
    greeting = "Good evening";
    emoji = "🌙";
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Welcome Section */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl mb-6 shadow-lg">
              <span className="text-white font-bold text-2xl">AI</span>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
              {greeting}! {emoji}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Your AI-powered personal assistant has prepared today's focus areas and insights to help you achieve your goals
            </p>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-4xl mx-auto">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                <div className="text-3xl font-bold text-blue-600 mb-2">Today</div>
                <p className="text-gray-600">Stay focused on your priorities</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                <div className="text-3xl font-bold text-purple-600 mb-2">Smart</div>
                <p className="text-gray-600">AI-driven recommendations</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                <div className="text-3xl font-bold text-indigo-600 mb-2">Growth</div>
                <p className="text-gray-600">Track your progress daily</p>
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="space-y-8">
            <DashboardGrid />
            <AIAssistant />
          </div>

          {/* Motivational Footer */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">✨ You're on the right track!</h3>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                Every small step counts towards your bigger goals. Let's make today productive and meaningful.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
