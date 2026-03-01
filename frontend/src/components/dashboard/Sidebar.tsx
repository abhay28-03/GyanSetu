import {
  LayoutDashboard,
  HelpCircle,
  Phone,
  Info,
  Gift,
  BookOpen,
  FileQuestion,
  FolderOpen,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: HelpCircle, label: "Help" },
  { icon: Phone, label: "Contact Us" },
  { icon: Info, label: "About" },
];

const quickLinks = [
  { icon: BookOpen, label: "Courses" },
  { icon: FileQuestion, label: "Quizzes" },
  { icon: FolderOpen, label: "Resources" },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar = ({ open, onClose }: SidebarProps) => {
  const [quickLinksOpen, setQuickLinksOpen] = useState(true);

  return (
    <>
      {/* Overlay for mobile */}
      {open && (
        <div className="fixed inset-0 bg-foreground/40 z-30 lg:hidden" onClick={onClose} />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-40 h-full w-56 gradient-sidebar flex flex-col text-sidebar-foreground shrink-0 transition-transform duration-300
          lg:static lg:translate-x-0
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="px-4 py-4 border-b border-sidebar-border">
          <span className="text-sm font-bold">Menu</span>
        </div>

        <nav className="flex-1 px-2 py-2 space-y-0.5 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={onClose}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition ${
                item.active
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "hover:bg-sidebar-accent/50 text-sidebar-foreground/80"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}

          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-bold gradient-accent text-accent-foreground mt-2">
            <Gift className="h-4 w-4" />
            Refer & Earn
            <ChevronDown className="h-3 w-3 ml-auto" />
          </button>
        </nav>

        <div className="px-2 pb-4">
          <button
            onClick={() => setQuickLinksOpen(!quickLinksOpen)}
            className="flex items-center justify-between w-full px-3 py-2 text-sm font-bold text-sidebar-foreground"
          >
            Quick Links
            {quickLinksOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
          {quickLinksOpen && (
            <div className="space-y-0.5">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-semibold hover:bg-sidebar-accent/50 transition text-sidebar-foreground/80"
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
