import { Book } from "@/data/booksData";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const isAvailable = book.available_copies > 0;

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
    <div className="flex gap-6 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <img
        src={book.cover_url}
        alt={book.title}
        className="w-20 h-28 object-cover rounded-lg shadow-md flex-shrink-0"
      />
      
      <div className="flex-1 flex items-center justify-between gap-6">
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-gray-900">{book.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{book.author}</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className={`${getLevelColor(book.level)} text-white px-4 py-2 rounded-full font-semibold text-sm`}>
            {book.level}
          </div>
          
          {isAvailable ? (
            <div className="text-sm text-right">
              <div className="font-semibold text-green-600">Available</div>
              <div className="text-gray-600">Volumes: {book.available_copies}</div>
            </div>
          ) : (
            <div className="bg-gray-900 text-white px-4 py-2 rounded-full font-semibold text-sm">
              Not Available
            </div>
          )}
        </div>
      </div>

      <div className="flex-shrink-0 text-sm text-gray-600 max-w-[200px] text-right">
        {isAvailable ? (
          <p>{book.shelf_location}</p>
        ) : (
          <p>Expected Date ~ {book.expected_date}</p>
        )}
      </div>
    </div>
  );
};

export default BookCard;
