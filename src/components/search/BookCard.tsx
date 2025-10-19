import { Book } from "@/data/booksData";
import { Button } from "@/components/ui/button";
import { MapPin, Heart, MessageCircle, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { formatDistanceToNow } from "date-fns";

interface BookCardProps {
  book: Book;
}

interface Comment {
  id: string;
  user_id: string;
  comment_text: string;
  created_at: string;
  profiles: {
    full_name: string;
  };
}

const BookCard = ({ book }: BookCardProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const isAvailable = book.available_copies > 0;
  
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [comments, setComments] = useState<Comment[]>([]);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    fetchLikesAndComments();
    checkCurrentUser();
  }, [book.id]);

  const checkCurrentUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setCurrentUser(user);
  };

  const fetchLikesAndComments = async () => {
    // Check if book ID is a valid UUID (real database book)
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    const isValidUUID = uuidRegex.test(book.id);
    
    if (!isValidUUID) {
      // Skip database calls for mock books with string IDs
      return;
    }

    try {
      // Fetch likes count
      const { count: likes, error: likesError } = await supabase
        .from("book_likes")
        .select("*", { count: "exact", head: true })
        .eq("book_id", book.id);
      
      if (!likesError) {
        setLikeCount(likes || 0);
      }

      // Check if current user liked
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data } = await supabase
          .from("book_likes")
          .select("id")
          .eq("book_id", book.id)
          .eq("user_id", user.id)
          .maybeSingle();
        
        setIsLiked(!!data);
      }

      // Fetch comments count
      const { count: commentsNum, error: commentsError } = await supabase
        .from("book_comments")
        .select("*", { count: "exact", head: true })
        .eq("book_id", book.id);
      
      if (!commentsError) {
        setCommentCount(commentsNum || 0);
      }

      // Fetch comments with user profiles
      const { data: commentsData } = await supabase
        .from("book_comments")
        .select("*")
        .eq("book_id", book.id)
        .order("created_at", { ascending: false });
      
      if (commentsData) {
        // Fetch profiles separately for each comment
        const commentsWithProfiles = await Promise.all(
          commentsData.map(async (comment) => {
            const { data: profile } = await supabase
              .from("profiles")
              .select("full_name")
              .eq("id", comment.user_id)
              .maybeSingle();
            
            return {
              ...comment,
              profiles: profile || { full_name: "Anonymous" },
            };
          })
        );

        setComments(commentsWithProfiles);
      }
    } catch (error) {
      console.error("Error fetching likes and comments:", error);
    }
  };

  const handleLike = async () => {
    // Check if book ID is a valid UUID
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(book.id)) {
      toast({
        title: "Feature unavailable",
        description: "Likes are only available for library books",
        variant: "destructive",
      });
      return;
    }

    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please log in to like books",
        variant: "destructive",
      });
      return;
    }

    if (isLiked) {
      // Unlike
      await supabase
        .from("book_likes")
        .delete()
        .eq("book_id", book.id)
        .eq("user_id", user.id);
      
      setIsLiked(false);
      setLikeCount(prev => prev - 1);
    } else {
      // Like
      await supabase
        .from("book_likes")
        .insert({ book_id: book.id, user_id: user.id });
      
      setIsLiked(true);
      setLikeCount(prev => prev + 1);
    }
  };

  const handleAddComment = async () => {
    if (!newComment.trim()) return;

    // Check if book ID is a valid UUID
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(book.id)) {
      toast({
        title: "Feature unavailable",
        description: "Comments are only available for library books",
        variant: "destructive",
      });
      return;
    }

    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please log in to comment",
        variant: "destructive",
      });
      return;
    }

    const { error } = await supabase
      .from("book_comments")
      .insert({
        book_id: book.id,
        user_id: user.id,
        comment_text: newComment.trim(),
      });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to add comment",
        variant: "destructive",
      });
      return;
    }

    setNewComment("");
    fetchLikesAndComments();
    toast({
      title: "Success",
      description: "Comment added successfully",
    });
  };

  const handleViewOnMap = () => {
    navigate(`/map?shelf=${encodeURIComponent(book.shelf_location)}`);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-500";
      case "Intermediate":
        return "bg-yellow-400";
      case "Advanced":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4 bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow border">
      <div className="flex gap-6">
        <img
          src={book.cover_url}
          alt={book.title}
          className="w-20 h-28 object-cover rounded-lg shadow-md flex-shrink-0"
        />
        
        <div className="flex-1 flex items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-foreground">{book.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{book.author}</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className={`${getLevelColor(book.level)} text-white px-4 py-2 rounded-full font-semibold text-sm`}>
              {book.level}
            </div>
            
            {isAvailable ? (
              <div className="text-sm text-right">
                <div className="font-semibold text-green-600">Available</div>
                <div className="text-muted-foreground">Volumes: {book.available_copies}</div>
              </div>
            ) : (
              <div className="bg-gray-900 text-white px-4 py-2 rounded-full font-semibold text-sm">
                Not Available
              </div>
            )}
          </div>
        </div>

        <div className="flex-shrink-0 flex flex-col gap-2 items-end max-w-[200px]">
          <div className="text-sm text-muted-foreground text-right">
            {isAvailable ? (
              <p>{book.shelf_location}</p>
            ) : (
              <p>Expected Date ~ {book.expected_date}</p>
            )}
          </div>
          {isAvailable && (
            <Button
              size="sm"
              variant="outline"
              onClick={handleViewOnMap}
              className="gap-2"
            >
              <MapPin className="w-4 h-4" />
              View on Map
            </Button>
          )}
        </div>
      </div>

      {/* Like and Comment Section */}
      <div className="flex flex-col gap-3 border-t pt-3">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
            className="gap-2 hover:bg-accent"
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
            <span className="text-sm font-medium">{likeCount}</span>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowComments(!showComments)}
            className="gap-2 hover:bg-accent"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm font-medium">{commentCount}</span>
          </Button>
        </div>

        {showComments && (
          <div className="flex flex-col gap-3">
            {/* Add Comment */}
            {currentUser && (
              <div className="flex gap-2">
                <Textarea
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="min-h-[60px] resize-none"
                />
                <Button
                  size="sm"
                  onClick={handleAddComment}
                  disabled={!newComment.trim()}
                  className="self-end"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            )}

            {/* Comments List */}
            <div className="flex flex-col gap-3 max-h-[300px] overflow-y-auto">
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <div key={comment.id} className="flex flex-col gap-1 p-3 bg-accent/50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm text-foreground">
                        {comment.profiles?.full_name || 'Anonymous'}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {formatDistanceToNow(new Date(comment.created_at), { addSuffix: true })}
                      </span>
                    </div>
                    <p className="text-sm text-foreground">{comment.comment_text}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground text-center py-4">
                  No comments yet. Be the first to comment!
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookCard;
