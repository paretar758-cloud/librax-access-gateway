import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";

const MapView = () => {
  return (
    <DashboardLayout>
      <div className="flex items-center gap-4 mb-6">
        <h1 className="text-4xl font-bold">Library Map</h1>
      </div>
      <Card className="p-8">
        <p className="text-muted-foreground text-center">Library map visualization coming soon...</p>
      </Card>
    </DashboardLayout>
  );
};

export default MapView;
