import { Lightbulb, CheckCircle2 } from "lucide-react";

const AILearningTips = () => {
  return (
    <div className="bg-card rounded-xl p-4 shadow-sm border border-border">
      <div className="flex items-center gap-2 mb-2">
        <Lightbulb className="h-5 w-5 text-accent" />
        <h3 className="font-extrabold text-foreground">AI Learning Tips</h3>
      </div>
      <div className="flex items-start gap-2">
        <CheckCircle2 className="h-4 w-4 text-success mt-0.5 shrink-0" />
        <p className="text-sm text-muted-foreground font-semibold">
          Enhance your skills with daily practice. Consistency is the key to mastery!
        </p>
      </div>
    </div>
  );
};

export default AILearningTips;
