import { useAuth } from "@/hooks/useAuth";
import DashboardLayout from "@/components/DashboardLayout";
import ProfileSection from "@/components/dashboard/ProfileSection";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <DashboardLayout quoteOfTheDay="Loading your profile...">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">Loading...</div>
        </div>
      </DashboardLayout>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <DashboardLayout quoteOfTheDay="Manage your personal information.">
      <div className="space-y-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-2xl">👤</span>
          </div>
          <h1 className="text-4xl font-bold">Profile</h1>
        </div>

        <ProfileSection user={user} />
      </div>
    </DashboardLayout>
  );
};

export default Profile;
