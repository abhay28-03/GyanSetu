import { useState } from "react";
import courseHero from "@/assets/course-hero.png";

const courses = ["B.Sc", "B.Com", "B.Tech", "Other"];

const CourseSelector = () => {
  const [selected, setSelected] = useState("B.Sc");

  return (
    <div className="gradient-hero rounded-xl p-5 text-primary-foreground relative overflow-hidden">
      <h2 className="text-xl font-extrabold mb-3">Choose Your Course</h2>
      <div className="flex gap-2 mb-3 relative z-10">
        {courses.map((c) => (
          <button
            key={c}
            onClick={() => setSelected(c)}
            className={`px-4 py-1.5 rounded-lg text-sm font-bold transition ${
              selected === c
                ? "bg-card text-primary shadow-md"
                : "bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <img
        src={courseHero}
        alt="Students studying together"
        className="absolute right-0 bottom-0 h-36 object-cover opacity-90 rounded-br-xl"
      />
    </div>
  );
};

export default CourseSelector;
