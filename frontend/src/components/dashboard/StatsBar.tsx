import { BookOpen, FileQuestion, TrendingUp, Target } from "lucide-react";

const stats = [
  { icon: BookOpen, label: "My Courses", value: "12", progress: 60, color: "bg-primary" },
  { icon: FileQuestion, label: "Quizzes", value: "5", progress: 40, color: "bg-primary" },
  { icon: TrendingUp, label: "Progress", value: "85%", progress: 85, color: "bg-success" },
  { icon: Target, label: "Daily Goal", value: "3 hrs / 4 hrs", progress: 75, color: "bg-success" },
];

const StatsBar = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-card rounded-xl p-4 shadow-sm border border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-muted-foreground">{stat.label}</span>
            <div className="flex items-center gap-1.5">
              <stat.icon className="h-4 w-4 text-primary" />
              <span className="text-lg font-extrabold text-foreground">{stat.value}</span>
            </div>
          </div>
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full ${stat.color} transition-all duration-700`}
              style={{ width: `${stat.progress}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsBar;
