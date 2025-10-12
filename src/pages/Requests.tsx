import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import RequestedBooksSection from "@/components/dashboard/RequestedBooksSection";

const Requests = () => {
  const { user, role } = useAuth();
  const [bookTitle, setBookTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmitRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookTitle.trim() || !user) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from('book_requests')
        .insert({
          book_title: bookTitle,
          user_id: user.id,
          status: 'pending'
        });

      if (error) throw error;

      toast({ title: "Book request submitted successfully!" });
      setBookTitle("");
    } catch (error: any) {
      toast({
        title: "Error submitting request",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="flex items-center gap-4 mb-6">
        <h1 className="text-4xl font-bold">Book Requests</h1>
      </div>

      {role === "student" && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Request a Book</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmitRequest} className="space-y-4">
              <div>
                <Label htmlFor="bookTitle">Book Title</Label>
                <Input
                  id="bookTitle"
                  value={bookTitle}
                  onChange={(e) => setBookTitle(e.target.value)}
                  placeholder="Enter the title of the book you'd like to request"
                  required
                />
              </div>
              <Button type="submit" disabled={loading} className="bg-accent hover:bg-accent/90">
                {loading ? "Submitting..." : "Submit Request"}
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      {role === "admin" && <RequestedBooksSection />}
    </DashboardLayout>
  );
};

export default Requests;
