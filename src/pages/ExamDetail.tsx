import { useParams, useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { exams } from "@/data/skillsData";
import { ArrowLeft, CheckCircle2, Map } from "lucide-react";

const ExamDetail = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  
  const exam = exams.find(e => e.id === examId);

  if (!exam) {
    return (
      <DashboardLayout>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold">Exam not found</h1>
          <Button onClick={() => navigate("/roadmap")} className="mt-4">
            Back to Roadmap
          </Button>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/roadmap")}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Roadmap
        </Button>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-4xl">{exam.name}</CardTitle>
              <p className="text-lg text-muted-foreground mt-1">
                {exam.fullName}
              </p>
              <p className="text-xl text-muted-foreground mt-2">
                {exam.description}
              </p>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Benefits of {exam.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {exam.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="flex justify-center pt-4">
            <Button 
              size="lg"
              onClick={() => navigate(`/exam/${examId}/roadmap`)}
              className="gap-2"
            >
              <Map className="w-5 h-5" />
              View Full Preparation Roadmap
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ExamDetail;
