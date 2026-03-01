import { Gift } from "lucide-react";

const ReferEarn = () => {
  return (
    <div className="gradient-accent rounded-xl p-5 text-accent-foreground flex items-center gap-4">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <Gift className="h-5 w-5" />
          <h3 className="font-extrabold text-lg">Refer & Earn</h3>
        </div>
        <p className="text-sm font-semibold opacity-90 mb-3">Invite Friends & Earn Rewards!</p>
        <button className="bg-card text-accent font-bold px-5 py-2 rounded-lg text-sm hover:shadow-lg transition">
          Invite Now
        </button>
      </div>
    </div>
  );
};

export default ReferEarn;
