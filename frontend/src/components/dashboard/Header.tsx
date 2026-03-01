import { Bell, Globe, ChevronDown, BookOpen, Menu, X } from "lucide-react";

interface HeaderProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}

const Header = ({ sidebarOpen, onToggleSidebar }: HeaderProps) => {
  return (
    <header className="gradient-hero px-4 md:px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button onClick={onToggleSidebar} className="lg:hidden p-1.5 rounded-lg bg-card/20 text-primary-foreground hover:bg-card/30 transition">
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <BookOpen className="h-7 w-7 md:h-8 md:w-8 text-primary-foreground" />
        <div>
          <h1 className="text-lg md:text-xl font-extrabold text-primary-foreground tracking-tight">Gyansetu</h1>
          <p className="text-[10px] md:text-xs text-primary-foreground/70 font-semibold -mt-0.5">AI Education Platform</p>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <button className="hidden sm:flex items-center gap-1.5 rounded-full bg-card/20 backdrop-blur px-3 py-1.5 text-sm font-semibold text-primary-foreground hover:bg-card/30 transition">
          <Globe className="h-4 w-4" />
          Language
          <ChevronDown className="h-3 w-3" />
        </button>

        <button className="relative rounded-full bg-card/20 backdrop-blur p-2 text-primary-foreground hover:bg-card/30 transition">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-accent text-[10px] font-bold flex items-center justify-center text-accent-foreground">3</span>
        </button>

        <div className="h-8 w-8 md:h-9 md:w-9 rounded-full bg-card flex items-center justify-center text-primary font-bold text-sm border-2 border-primary-foreground/30">
          A
        </div>
      </div>
    </header>
  );
};

export default Header;
