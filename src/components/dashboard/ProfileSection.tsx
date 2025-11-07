import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Edit2, Save, X, Upload } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { User } from "@supabase/supabase-js";

interface ProfileSectionProps {
  user: User;
}

interface ProfileData {
  full_name: string;
  email: string;
  phone_number: string;
  profile_photo_url: string;
  current_year: string;
}

const ProfileSection = ({ user }: ProfileSectionProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<ProfileData>({
    full_name: "",
    email: "",
    phone_number: "",
    profile_photo_url: "",
    current_year: "",
  });
  const [editedProfile, setEditedProfile] = useState<ProfileData>(profile);
  const { toast } = useToast();

  useEffect(() => {
    fetchProfile();
  }, [user]);

  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (error) throw error;

      const profileData = {
        full_name: data.full_name || "",
        email: data.email || "",
        phone_number: data.phone_number || "",
        profile_photo_url: data.profile_photo_url || "",
        current_year: data.current_year || "",
      };

      setProfile(profileData);
      setEditedProfile(profileData);
    } catch (error) {
      console.error("Error fetching profile:", error);
      toast({
        title: "Error",
        description: "Failed to load profile",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      const { error } = await supabase
        .from("profiles")
        .update({
          full_name: editedProfile.full_name,
          phone_number: editedProfile.phone_number,
          profile_photo_url: editedProfile.profile_photo_url,
          current_year: editedProfile.current_year,
        })
        .eq("id", user.id);

      if (error) throw error;

      setProfile(editedProfile);
      setIsEditing(false);
      toast({
        title: "Success",
        description: "Profile updated successfully",
      });
    } catch (error) {
      console.error("Error updating profile:", error);
      toast({
        title: "Error",
        description: "Failed to update profile",
        variant: "destructive",
      });
    }
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center">Loading profile...</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Profile</CardTitle>
        {!isEditing ? (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsEditing(true)}
          >
            <Edit2 className="w-4 h-4 mr-2" />
            Edit
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleCancel}>
              <X className="w-4 h-4 mr-2" />
              Cancel
            </Button>
            <Button size="sm" onClick={handleSave}>
              <Save className="w-4 h-4 mr-2" />
              Save
            </Button>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Profile Photo */}
          <div className="flex flex-col items-center gap-3">
            <Avatar className="w-24 h-24">
              <AvatarImage
                src={isEditing ? editedProfile.profile_photo_url : profile.profile_photo_url}
                alt={profile.full_name}
              />
              <AvatarFallback className="text-2xl">
                {getInitials(profile.full_name || "User")}
              </AvatarFallback>
            </Avatar>
            {isEditing && (
              <div className="w-full">
                <Label htmlFor="profile_photo" className="text-sm">
                  Photo URL
                </Label>
                <Input
                  id="profile_photo"
                  placeholder="https://..."
                  value={editedProfile.profile_photo_url}
                  onChange={(e) =>
                    setEditedProfile({
                      ...editedProfile,
                      profile_photo_url: e.target.value,
                    })
                  }
                  className="mt-1"
                />
              </div>
            )}
          </div>

          {/* Profile Details */}
          <div className="flex-1 space-y-4">
            <div>
              <Label htmlFor="full_name">Full Name</Label>
              {isEditing ? (
                <Input
                  id="full_name"
                  value={editedProfile.full_name}
                  onChange={(e) =>
                    setEditedProfile({
                      ...editedProfile,
                      full_name: e.target.value,
                    })
                  }
                  className="mt-1"
                />
              ) : (
                <p className="mt-1 text-lg font-medium">{profile.full_name}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email">Student Email ID</Label>
              <p className="mt-1 text-muted-foreground">{profile.email}</p>
            </div>

            <div>
              <Label htmlFor="phone_number">Phone Number</Label>
              {isEditing ? (
                <Input
                  id="phone_number"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={editedProfile.phone_number}
                  onChange={(e) =>
                    setEditedProfile({
                      ...editedProfile,
                      phone_number: e.target.value,
                    })
                  }
                  className="mt-1"
                />
              ) : (
                <p className="mt-1 text-lg">
                  {profile.phone_number || "Not provided"}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="current_year">Current Year</Label>
              {isEditing ? (
                <Input
                  id="current_year"
                  placeholder="e.g., 2nd Year, 3rd Year"
                  value={editedProfile.current_year}
                  onChange={(e) =>
                    setEditedProfile({
                      ...editedProfile,
                      current_year: e.target.value,
                    })
                  }
                  className="mt-1"
                />
              ) : (
                <p className="mt-1 text-lg">
                  {profile.current_year || "Not provided"}
                </p>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileSection;
