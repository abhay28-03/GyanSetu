import { useState } from "react";
import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import StatsBar from "@/components/dashboard/StatsBar";
import CourseSelector from "@/components/dashboard/CourseSelector";
import Leaderboard from "@/components/dashboard/Leaderboard";
import UpcomingTasks from "@/components/dashboard/UpcomingTasks";
import RecentActivities from "@/components/dashboard/RecentActivities";
import AILearningTips from "@/components/dashboard/AILearningTips";
import ReferEarn from "@/components/dashboard/ReferEarn";
import Chatbot from "@/components/dashboard/Chatbot";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header sidebarOpen={sidebarOpen} onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 overflow-y-auto p-3 md:p-5 space-y-4">
          <StatsBar />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 space-y-4">
              <CourseSelector />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <UpcomingTasks />
                <RecentActivities />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AILearningTips />
                <ReferEarn />
              </div>
            </div>
            <Leaderboard />
          </div>
        </main>
      </div>
      <Chatbot />
    </div>
  );
};

export default Index;
