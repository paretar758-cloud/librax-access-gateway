import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Bell, Map, BookMarked } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import heroImage from "@/assets/hero-library.jpg";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Search,
      title: "Smart Search & Filtering",
      description: "Find books instantly with advanced search capabilities and intelligent filtering options"
    },
    {
      icon: BookMarked,
      title: "Color-Coded Dashboard",
      description: "Track your borrowings at a glance with an intuitive, color-coded interface"
    },
    {
      icon: Map,
      title: "Map-Based Navigation",
      description: "Locate books easily with our interactive shelf mapping system"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Stay informed about due dates, new arrivals, and penalty reminders"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl md:text-4xl font-brand font-black text-primary tracking-tight">LibraX</h1>
          <Button variant="outline" onClick={() => navigate("/role-selection")}>
            Sign In
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-hero-gradient py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-brand font-black leading-tight text-foreground">
                Your Smart
                <span className="block text-primary">Library Gateway</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Experience library management reimagined. Find, borrow, and track books with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="xl" 
                  variant="hero"
                  onClick={() => navigate("/role-selection")}
                >
                  Get Started
                </Button>
                <Button 
                  size="xl" 
                  variant="outline"
                  onClick={() => {
                    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Modern library interior"
                className="rounded-2xl shadow-soft-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-brand font-black mb-4 text-foreground">
              Powerful Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for a seamless library experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-hero-gradient">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-brand font-black mb-6 text-foreground">
            Ready to Transform Your Library Experience?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join LibraX today and discover a smarter way to manage your reading journey.
          </p>
          <Button 
            size="xl" 
            variant="hero"
            onClick={() => navigate("/role-selection")}
          >
            Get Started Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6 bg-card">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">
            © 2025 LibraX. Smart Library Management System.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
