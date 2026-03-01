import { Trophy } from "lucide-react";

const leaders = [
  { rank: 1, name: "Ananya", hours: 120, medal: "🥇" },
  { rank: 2, name: "Rahul", hours: 110, medal: "🥈" },
  { rank: 3, name: "Meera", hours: 95, medal: "🥉" },
  { rank: 4, name: "Aarav", hours: 85 },
  { rank: 5, name: "Simran", hours: 75 },
  { rank: 6, name: "Kunal", hours: 68 },
];

const Leaderboard = () => {
  return (
    <div className="bg-card rounded-xl p-4 shadow-sm border border-border h-full">
      <div className="flex items-center gap-2 mb-3">
        <Trophy className="h-5 w-5 text-accent" />
        <h3 className="font-extrabold text-foreground">Leaderboard</h3>
      </div>
      <div className="space-y-2.5">
        {leaders.map((l) => (
          <div key={l.rank} className="flex items-center gap-3">
            <span className="text-sm font-bold w-6 text-center">
              {l.medal || `${l.rank}.`}
            </span>
            <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-secondary-foreground">
              {l.name[0]}
            </div>
            <span className="font-semibold text-sm text-foreground flex-1">{l.name}</span>
            <span className="text-sm font-bold text-muted-foreground">{l.hours} hrs</span>
          </div>
        ))}
      </div>
      <button className="w-full mt-3 py-1.5 text-sm font-bold text-primary border border-dashed border-primary rounded-lg hover:bg-secondary transition">
        View All
      </button>
    </div>
  );
};

export default Leaderboard;
