import { Badge } from "@/components/ui/badge";
import { Book } from "@/data/booksData";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const isAvailable = book.available_copies > 0;

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-500 text-white";
      case "Intermediate":
        return "bg-yellow-500 text-black";
      case "Advanced":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="flex gap-4 p-4 bg-card rounded-lg border hover:shadow-md transition-shadow">
      <img
        src={book.cover_url}
        alt={book.title}
        className="w-20 h-28 object-cover rounded"
      />
      
      <div className="flex-1">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-semibold text-lg">{book.title}</h3>
          
          <div className="flex flex-col items-end gap-2">
            <Badge className={getLevelColor(book.level)}>
              {book.level}
            </Badge>
            
            {isAvailable ? (
              <div className="text-sm">
                <span className="text-green-600 font-medium">Available</span>
                <div className="text-muted-foreground">
                  Volumes: {book.available_copies}
                </div>
              </div>
            ) : (
              <Badge variant="destructive">Not Available</Badge>
            )}
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mt-1">{book.author}</p>
        
        <div className="mt-3 text-sm">
          {isAvailable ? (
            <p className="text-muted-foreground">{book.shelf_location}</p>
          ) : (
            <p className="text-muted-foreground">
              Expected Date: {book.expected_date}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
