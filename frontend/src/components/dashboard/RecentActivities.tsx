import { CheckCircle2, FileQuestion, Award } from "lucide-react";

const activities = [
  { icon: CheckCircle2, label: "Completed: Python Basics", time: "2 hrs ago", color: "text-success" },
  { icon: FileQuestion, label: "New Quiz: History Test", time: "1 hr ago", color: "text-primary" },
  { icon: Award, label: "Achievement: Level Up!", time: "Today", color: "text-accent" },
];

const RecentActivities = () => {
  return (
    <div className="bg-card rounded-xl p-4 shadow-sm border border-border">
      <h3 className="font-extrabold text-foreground mb-3">Recent Activities</h3>
      <div className="space-y-3">
        {activities.map((a) => (
          <div key={a.label} className="flex items-center gap-3">
            <a.icon className={`h-5 w-5 ${a.color} shrink-0`} />
            <span className="font-semibold text-sm text-foreground flex-1">{a.label}</span>
            <span className="text-xs font-semibold text-muted-foreground whitespace-nowrap">{a.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;
