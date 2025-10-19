import DashboardLayout from "@/components/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Search as SearchIcon } from "lucide-react";
import { useState, useMemo, memo } from "react";
import { mockBooks } from "@/data/booksData";
import BookCard from "@/components/search/BookCard";

const BookCardMemo = memo(BookCard);

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [branchFilter, setBranchFilter] = useState("all");
  const [skillFilter, setSkillFilter] = useState("all");
  const [levelFilter, setLevelFilter] = useState("all");
  const [examFilter, setExamFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  // Extract unique values for filters
  const branches = useMemo(() => {
    const unique = Array.from(new Set(mockBooks.map(book => book.branch)));
    return unique.sort();
  }, []);

  const skills = useMemo(() => {
    const unique = Array.from(new Set(mockBooks.map(book => book.skill)));
    return unique.sort();
  }, []);

  const exams = useMemo(() => {
    const unique = Array.from(new Set(mockBooks.map(book => book.exam)));
    return unique.sort();
  }, []);

  // Filter books based on search and filters
  const filteredBooks = useMemo(() => {
    return mockBooks.filter(book => {
      const matchesSearch = searchQuery === "" || 
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesBranch = branchFilter === "all" || book.branch === branchFilter;
      const matchesSkill = skillFilter === "all" || book.skill === skillFilter;
      const matchesLevel = levelFilter === "all" || book.level === levelFilter;
      const matchesExam = examFilter === "all" || book.exam === examFilter;

      return matchesSearch && matchesBranch && matchesSkill && matchesLevel && matchesExam;
    });
  }, [searchQuery, branchFilter, skillFilter, levelFilter, examFilter]);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Search Bar */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search by Title or Author"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 rounded-2xl bg-white border-gray-200 shadow-sm"
            />
          </div>
          <Button className="h-14 px-8 rounded-2xl bg-gray-900 hover:bg-gray-800">
            <SearchIcon className="h-5 w-5" />
          </Button>
        </div>

        {/* Filters and Results */}
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          {/* Filters Row */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
            <div className="flex gap-3 flex-wrap">
              <Select value={branchFilter} onValueChange={setBranchFilter}>
                <SelectTrigger className="w-[150px] rounded-xl bg-white border-gray-300">
                  <SelectValue placeholder="Branch" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="all">All Branches</SelectItem>
                  {branches.map(branch => (
                    <SelectItem key={branch} value={branch}>{branch}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={skillFilter} onValueChange={setSkillFilter}>
                <SelectTrigger className="w-[150px] rounded-xl bg-white border-gray-300">
                  <SelectValue placeholder="Skills" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="all">All Skills</SelectItem>
                  {skills.map(skill => (
                    <SelectItem key={skill} value={skill}>{skill}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={levelFilter} onValueChange={setLevelFilter}>
                <SelectTrigger className="w-[150px] rounded-xl bg-white border-gray-300">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>

              <Select value={examFilter} onValueChange={setExamFilter}>
                <SelectTrigger className="w-[150px] rounded-xl bg-white border-gray-300">
                  <SelectValue placeholder="Exam Tags" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="all">All Exams</SelectItem>
                  {exams.map(exam => (
                    <SelectItem key={exam} value={exam}>{exam}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button 
              variant="ghost" 
              onClick={() => setShowFilters(!showFilters)}
              className="text-sm hover:bg-gray-100 rounded-xl"
            >
              Filter
            </Button>
          </div>

          {/* Results Section */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Search Results</h2>
              <p className="text-sm text-gray-600">
                {filteredBooks.length} {filteredBooks.length === 1 ? 'book' : 'books'} found
              </p>
            </div>

            <div className="space-y-4 animate-fade-in">
              {filteredBooks.length > 0 ? (
                filteredBooks.map(book => (
                  <BookCardMemo key={book.id} book={book} />
                ))
              ) : (
                <p className="text-center text-gray-500 py-12">
                  No books found matching your criteria
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Search;
