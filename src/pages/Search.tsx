import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";

const Search = () => {
  return (
    <DashboardLayout>
      <div className="flex items-center gap-4 mb-6">
        <h1 className="text-4xl font-bold">Search</h1>
      </div>
      <Card className="p-8">
        <p className="text-muted-foreground text-center">Search functionality coming soon...</p>
      </Card>
    </DashboardLayout>
  );
};

export default Search;
