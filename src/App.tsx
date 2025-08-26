
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useIsMobile } from "./hooks/use-mobile";
import Sidebar from "./components/Sidebar";
import SinglePageLayout from "./components/SinglePageLayout";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./components/ThemeProvider";

const queryClient = new QueryClient();

const App = () => {
  const isMobile = useIsMobile();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen flex bg-background transition-colors duration-200">
              <Sidebar />
              <main className="flex-1 overflow-x-hidden lg:ml-64">
                <Routes>
                  <Route path="/" element={<SinglePageLayout />} />
                  <Route path="/about" element={<SinglePageLayout />} />
                  <Route path="/projects" element={<SinglePageLayout />} />
                  <Route path="/journey" element={<SinglePageLayout />} />
                  <Route path="/education" element={<SinglePageLayout />} />
                  <Route path="/opensource" element={<SinglePageLayout />} />
                  <Route path="/volunteering" element={<SinglePageLayout />} />
                  <Route path="/blog" element={<SinglePageLayout />} />
                  <Route path="/contact" element={<SinglePageLayout />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
