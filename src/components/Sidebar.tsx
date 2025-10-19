import { NavLink } from "react-router-dom";
import { Home, Search, Map, Route, MessageSquare, BookOpen, ClipboardList, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { memo } from "react";

interface SidebarProps {
  role: string | null;
}

const Sidebar = memo(({ role }: SidebarProps) => {
  const navItems = [
    { title: "Profile", icon: User, path: "/profile", roles: ["admin", "student"] },
    { title: "Home", icon: Home, path: "/dashboard", roles: ["admin", "student"] },
    { title: "Search", icon: Search, path: "/search", roles: ["admin", "student"] },
    { title: "Map", icon: Map, path: "/map", roles: ["admin", "student"] },
    { title: "Roadmap", icon: Route, path: "/roadmap", roles: ["student"] },
    { title: "Requests", icon: ClipboardList, path: "/requests", roles: ["admin", "student"] },
  ];

  const filteredItems = navItems.filter(item => 
    role && item.roles.includes(role)
  );

  return (
    <aside className="w-72 min-h-screen bg-background border-r border-border flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-center">
          <div className="w-24 h-24 rounded-full border-4 border-foreground flex items-center justify-center bg-background">
            <BookOpen className="w-12 h-12" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-center mt-4">LibraX</h1>
      </div>

      <nav className="flex-1 p-6 space-y-2">
        {filteredItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 ease-in-out",
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "text-foreground hover:bg-secondary hover:translate-x-1"
              )
            }
          >
            <item.icon className="w-6 h-6" />
            {item.title}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
