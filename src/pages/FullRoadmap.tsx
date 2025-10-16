import { useParams, useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/skillsData";
import { mockBooks } from "@/data/booksData";
import { ArrowLeft, BookOpen } from "lucide-react";

const FullRoadmap = () => {
  const { skillId } = useParams();
  const navigate = useNavigate();
  
  const skill = skills.find(s => s.id === skillId);

  if (!skill) {
    return (
      <DashboardLayout>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold">Roadmap not found</h1>
          <Button onClick={() => navigate("/roadmap")} className="mt-4">
            Back to Roadmap
          </Button>
        </div>
      </DashboardLayout>
    );
  }

  const getBooks = (bookIds: string[]) => {
    return bookIds.map(id => mockBooks.find(book => book.id === id)).filter(Boolean);
  };

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        <Button 
          variant="ghost" 
          onClick={() => navigate(`/roadmap/${skillId}`)}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Skill Details
        </Button>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">{skill.name} Learning Roadmap</h1>
          <p className="text-xl text-muted-foreground">Follow this path from start to finish</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-8 top-16 bottom-16 w-1 bg-gradient-to-b from-primary via-primary/50 to-primary hidden md:block" />

          <div className="space-y-8">
            {/* START */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold z-10 flex-shrink-0">
                START
              </div>
              <Card className="flex-1">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold">Begin Your Journey</h3>
                  <p className="text-muted-foreground mt-2">
                    Follow the steps below to master {skill.name}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Roadmap Steps */}
            {skill.roadmap.map((step, index) => (
              <div key={step.id} className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-2xl font-bold z-10 flex-shrink-0">
                  {step.id}
                </div>
                <Card className="flex-1">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        <BookOpen className="w-4 h-4" />
                        Recommended Books:
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {getBooks(step.bookIds).map((book) => book && (
                          <div 
                            key={book.id}
                            className="flex gap-3 p-3 rounded-lg border bg-card hover:bg-accent transition-colors cursor-pointer"
                            onClick={() => navigate(`/search?title=${encodeURIComponent(book.title)}`)}
                          >
                            <img 
                              src={book.cover_url} 
                              alt={book.title}
                              className="w-16 h-20 object-cover rounded"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-sm line-clamp-2">{book.title}</h4>
                              <p className="text-xs text-muted-foreground mt-1">{book.author}</p>
                              <Badge variant={book.available_copies > 0 ? "default" : "secondary"} className="mt-2">
                                {book.available_copies > 0 ? "Available" : "Borrowed"}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}

            {/* FINISH */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center text-lg font-bold z-10 flex-shrink-0">
                FINISH
              </div>
              <Card className="flex-1">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold">Congratulations! 🎉</h3>
                  <p className="text-muted-foreground mt-2">
                    You've completed the {skill.name} roadmap. Keep practicing and building projects!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FullRoadmap;
