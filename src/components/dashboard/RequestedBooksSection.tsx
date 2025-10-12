import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const RequestedBooksSection = () => {
  const [requests, setRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const { data, error } = await supabase
        .from('book_requests')
        .select('*')
        .eq('status', 'pending')
        .order('request_count', { ascending: false });

      if (error) throw error;
      setRequests(data || []);
    } catch (error) {
      console.error("Error fetching requests:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (id: string) => {
    try {
      const { error } = await supabase
        .from('book_requests')
        .update({ status: 'approved' })
        .eq('id', id);

      if (error) throw error;
      toast({ title: "Request approved" });
      fetchRequests();
    } catch (error) {
      toast({ title: "Error approving request", variant: "destructive" });
    }
  };

  const handleDeny = async (id: string) => {
    try {
      const { error } = await supabase
        .from('book_requests')
        .update({ status: 'denied' })
        .eq('id', id);

      if (error) throw error;
      toast({ title: "Request denied" });
      fetchRequests();
    } catch (error) {
      toast({ title: "Error denying request", variant: "destructive" });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Requested Books</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="text-center py-8 text-muted-foreground">Loading...</div>
        ) : requests.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">No pending requests</div>
        ) : (
          <div className="space-y-4">
            {requests.map((request) => (
              <div
                key={request.id}
                className="flex items-center justify-between p-4 bg-secondary rounded-lg"
              >
                <div>
                  <h4 className="font-semibold">{request.book_title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {request.request_count} request{request.request_count > 1 ? 's' : ''}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={() => handleApprove(request.id)}
                    className="bg-green-500 hover:bg-green-600"
                  >
                    Approve
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDeny(request.id)}
                  >
                    Deny
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RequestedBooksSection;
