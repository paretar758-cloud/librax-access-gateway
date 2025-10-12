import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate("/dashboard");
    }
  }, [user, loading, navigate]);

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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="text-center space-y-8 max-w-2xl">
        <div className="flex justify-center">
          <div className="w-32 h-32 rounded-full border-4 border-foreground flex items-center justify-center bg-background">
            <BookOpen className="w-16 h-16" />
          </div>
        </div>
        
        <div>
          <h1 className="text-5xl font-bold mb-4">Welcome to LibraX</h1>
          <p className="text-xl text-muted-foreground mb-2">
            Smart Library Management System
          </p>
          <p className="text-lg text-muted-foreground italic">
            "learning without curiosity is just a waste of time."
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => navigate("/auth")}
            className="bg-accent hover:bg-accent/90 text-lg px-8"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
