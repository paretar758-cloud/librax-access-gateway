import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

// Eager load critical pages
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";

// Lazy load other pages for faster initial load
const RoleSelection = lazy(() => import("./pages/RoleSelection"));
const Profile = lazy(() => import("./pages/Profile"));
const Search = lazy(() => import("./pages/Search"));
const MapView = lazy(() => import("./pages/MapView"));
const Roadmap = lazy(() => import("./pages/Roadmap"));
const SkillDetail = lazy(() => import("./pages/SkillDetail"));
const FullRoadmap = lazy(() => import("./pages/FullRoadmap"));
const ExamDetail = lazy(() => import("./pages/ExamDetail"));
const FullExamRoadmap = lazy(() => import("./pages/FullExamRoadmap"));
const Requests = lazy(() => import("./pages/Requests"));
const BorrowHistory = lazy(() => import("./pages/BorrowHistory"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes
    },
  },
});

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-pulse space-y-4 w-full max-w-4xl px-8">
      <div className="h-8 bg-gray-200 rounded w-1/4"></div>
      <div className="h-64 bg-gray-200 rounded"></div>
      <div className="h-32 bg-gray-200 rounded"></div>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/role-selection" element={<RoleSelection />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/map" element={<MapView />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/roadmap/:skillId" element={<SkillDetail />} />
            <Route path="/roadmap/:skillId/full" element={<FullRoadmap />} />
            <Route path="/exam/:examId" element={<ExamDetail />} />
            <Route path="/exam/:examId/roadmap" element={<FullExamRoadmap />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/borrow-history" element={<BorrowHistory />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
