import { Calendar, BookOpen, FileText } from "lucide-react";

const tasks = [
  { icon: BookOpen, label: "Science Quiz", due: "Tomorrow", color: "text-primary" },
  { icon: FileText, label: "Math Assignment", due: "Due in 2 Days", color: "text-accent" },
];

const UpcomingTasks = () => {
  return (
    <div className="bg-card rounded-xl p-4 shadow-sm border border-border">
      <div className="flex items-center gap-2 mb-3">
        <Calendar className="h-5 w-5 text-primary" />
        <h3 className="font-extrabold text-foreground">Upcoming Tasks</h3>
      </div>
      <div className="space-y-3">
        {tasks.map((t) => (
          <div key={t.label} className="flex items-center gap-3">
            <div className={`h-8 w-8 rounded-lg bg-secondary flex items-center justify-center ${t.color}`}>
              <t.icon className="h-4 w-4" />
            </div>
            <span className="font-semibold text-sm text-foreground flex-1">{t.label}</span>
            <span className="text-xs font-semibold text-muted-foreground">{t.due}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingTasks;
