import { useAuth } from "@/hooks/useAuth";
import DashboardLayout from "@/components/DashboardLayout";
import AdminDashboard from "@/components/dashboard/AdminDashboard";
import StudentDashboard from "@/components/dashboard/StudentDashboard";

const Dashboard = () => {
  const { role } = useAuth();

  return (
    <DashboardLayout quoteOfTheDay="learning without curiosity is just a waste of time.">
      {role === "admin" ? <AdminDashboard /> : <StudentDashboard />}
    </DashboardLayout>
  );
};

export default Dashboard;
