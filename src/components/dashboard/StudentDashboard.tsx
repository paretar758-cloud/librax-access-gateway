import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import BorrowedBookCard from "./BorrowedBookCard";
import ProfileSection from "./ProfileSection";

const StudentDashboard = () => {
  const { user } = useAuth();
  const [borrowedBooks, setBorrowedBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchMyBorrowedBooks();
    }
  }, [user]);

  const fetchMyBorrowedBooks = async () => {
    try {
      const { data, error } = await supabase
        .from('borrowed_books')
        .select(`
          *,
          books (title, author, cover_url)
        `)
        .eq('user_id', user?.id)
        .is('returned_at', null)
        .order('due_date', { ascending: true });

      if (error) throw error;
      setBorrowedBooks(data || []);
    } catch (error) {
      console.error("Error fetching borrowed books:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {user && <ProfileSection user={user} />}

      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
          <span className="text-2xl">🏠</span>
        </div>
        <h1 className="text-4xl font-bold">Home</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">My Borrowed Books :-</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {loading ? (
            <div className="text-center py-8 text-muted-foreground">Loading...</div>
          ) : borrowedBooks.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              You haven't borrowed any books yet
            </div>
          ) : (
            borrowedBooks.map((borrowedBook) => (
              <BorrowedBookCard
                key={borrowedBook.id}
                borrowedBook={{ ...borrowedBook, profiles: null }}
                onUpdate={fetchMyBorrowedBooks}
              />
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentDashboard;
