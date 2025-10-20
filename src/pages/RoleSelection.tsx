import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Shield } from "lucide-react";

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-hero-gradient flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-brand font-black mb-4 text-primary tracking-tight">LibraX</h1>
          <p className="text-xl text-muted-foreground">Choose your role to continue</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card
            className="p-8 cursor-pointer hover:shadow-soft-lg transition-all duration-300 hover:scale-[1.02] bg-card border-border"
            onClick={() => navigate("/auth?role=student")}
          >
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-foreground">Student</h2>
                <p className="text-muted-foreground">
                  Access your library account, browse books, and manage your borrowings
                </p>
              </div>
              <Button variant="hero" size="lg" className="w-full">
                Continue as Student
              </Button>
            </div>
          </Card>

          <Card
            className="p-8 cursor-pointer hover:shadow-soft-lg transition-all duration-300 hover:scale-[1.02] bg-card border-border"
            onClick={() => navigate("/auth?role=admin")}
          >
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-foreground">Admin</h2>
                <p className="text-muted-foreground">
                  Manage the library system, monitor activities, and handle requests
                </p>
              </div>
              <Button variant="hero" size="lg" className="w-full">
                Continue as Admin
              </Button>
            </div>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="text-muted-foreground"
          >
            ← Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
