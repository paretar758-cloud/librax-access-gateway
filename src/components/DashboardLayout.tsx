import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import Sidebar from "./Sidebar";
import { Button } from "./ui/button";
import { LogOut, Clock } from "lucide-react";
import { signOut } from "@/lib/supabase";
import { toast } from "@/hooks/use-toast";

interface DashboardLayoutProps {
  children: ReactNode;
  quoteOfTheDay?: string;
}

const DashboardLayout = ({ children, quoteOfTheDay }: DashboardLayoutProps) => {
  const { user, role, loading } = useAuth();

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({ title: "Error signing out", variant: "destructive" });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar role={role} />
      
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-secondary/50 border-b border-border">
          <div className="px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                {quoteOfTheDay && (
                  <p className="text-sm md:text-base font-medium">
                    <span className="font-bold">Quote of the Day :-</span> "{quoteOfTheDay}"
                  </p>
                )}
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-2"
                  onClick={() => window.location.href = '/borrow-history'}
                >
                  <Clock className="w-4 h-4" />
                  Your Borrow History
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleSignOut}
                  className="gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
