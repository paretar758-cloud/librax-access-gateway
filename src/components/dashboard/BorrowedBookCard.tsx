import { differenceInDays } from "date-fns";
import { cn } from "@/lib/utils";

interface BorrowedBookCardProps {
  borrowedBook: any;
  onUpdate?: () => void;
}

const BorrowedBookCard = ({ borrowedBook }: BorrowedBookCardProps) => {
  const daysLeft = differenceInDays(new Date(borrowedBook.due_date), new Date());
  const isOverdue = daysLeft < 0;
  const isDueSoon = daysLeft >= 0 && daysLeft <= 2;
  const isGood = daysLeft > 2;

  const bgColor = isOverdue
    ? "bg-red-500"
    : isDueSoon
    ? "bg-yellow-400"
    : "bg-green-400";

  return (
    <div className={cn("rounded-2xl p-6 flex items-center gap-6", bgColor)}>
      <div className="flex-shrink-0">
        <img
          src={borrowedBook.books?.cover_url || "/placeholder.svg"}
          alt={borrowedBook.books?.title}
          className="w-24 h-32 object-cover rounded-lg shadow-lg"
        />
      </div>

      <div className="flex-1 bg-white rounded-3xl px-8 py-4">
        <h3 className="text-xl font-semibold text-gray-900">
          {borrowedBook.books?.title}
        </h3>
        <p className="text-sm text-gray-600 mt-1">by {borrowedBook.books?.author}</p>
        <p className="text-sm text-gray-700 mt-2">
          <strong>Borrower:</strong> {borrowedBook.profiles?.full_name}
        </p>
        <p className="text-sm text-gray-700">
          <strong>Email:</strong> {borrowedBook.profiles?.email}
        </p>
      </div>

      <div className="flex items-center gap-4">
        {isOverdue && borrowedBook.penalty_amount > 0 && (
          <div className="bg-white rounded-full px-6 py-3 text-red-600 font-bold">
            {borrowedBook.penalty_amount}rs Penalty
          </div>
        )}
        <div className="bg-white rounded-full px-6 py-3 font-semibold">
          {isOverdue ? `${Math.abs(daysLeft)} days overdue` : `${daysLeft} days left`}
        </div>
      </div>
    </div>
  );
};

export default BorrowedBookCard;
