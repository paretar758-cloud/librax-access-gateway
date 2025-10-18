import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import MapView from "./pages/MapView";
import Roadmap from "./pages/Roadmap";
import SkillDetail from "./pages/SkillDetail";
import FullRoadmap from "./pages/FullRoadmap";
import ExamDetail from "./pages/ExamDetail";
import FullExamRoadmap from "./pages/FullExamRoadmap";
import Requests from "./pages/Requests";
import BorrowHistory from "./pages/BorrowHistory";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
