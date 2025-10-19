import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills, exams } from "@/data/skillsData";
import { cn } from "@/lib/utils";

const Roadmap = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Roadmap</h1>
          <p className="text-muted-foreground text-lg">Choose a skill to begin your learning journey</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Skills Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {skills.map((skill) => (
                <Button
                  key={skill.id}
                  variant="outline"
                  className="w-full justify-start text-lg h-auto py-4 px-6 rounded-full font-semibold transition-all hover:scale-105 hover:bg-orange-500 hover:text-white hover:border-orange-500"
                  onClick={() => navigate(`/roadmap/${skill.id}`)}
                >
                  {skill.name}
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* Exams/Competitions Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Exams/Competitions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {exams.map((exam) => (
                <Button
                  key={exam.id}
                  variant="outline"
                  className="w-full justify-start text-lg h-auto py-4 px-6 rounded-full font-semibold transition-all hover:scale-105 hover:bg-orange-500 hover:text-white hover:border-orange-500"
                  onClick={() => navigate(`/exam/${exam.id}`)}
                >
                  {exam.name}
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Roadmap;
