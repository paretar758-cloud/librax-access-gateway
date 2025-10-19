import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";

const BorrowHistory = () => {
  return (
    <DashboardLayout>
      <div className="flex items-center gap-4 mb-6 animate-fade-in">
        <h1 className="text-4xl font-bold">Your Borrow History</h1>
      </div>
      <Card className="p-8 animate-fade-in">
        <p className="text-muted-foreground text-center">Borrow history feature coming soon...</p>
      </Card>
    </DashboardLayout>
  );
};

export default BorrowHistory;
