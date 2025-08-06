import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Dashboard from "@/pages/Dashboard";
import Benefits from "@/pages/Benefits";
import Content from "@/pages/Content";
import Portfolio from "@/pages/Portfolio";
import Market from "@/pages/Market";
import Account from "@/pages/Account";
import DealDetails from "@/pages/DealDetails";
import ForOrganisations from "@/pages/ForOrganisations";
import SupportHub from "@/pages/SupportHub";
import AboutUs from "@/pages/AboutUs";
import MarketTrends from "@/pages/MarketTrends";
import UserProfile from "@/pages/UserProfile";
import BuyAsset from "@/pages/BuyAsset";
import SellAsset from "@/pages/SellAsset";
import SectorPerformance from "@/pages/SectorPerformance";
import Community from "@/pages/Community";
import CommunityContent from "@/pages/CommunityContent";
import CommunityComments from "@/pages/CommunityComments";
import Article from "@/pages/Article";
import TradingInterface from "@/pages/TradingInterface";
import RegulatoryCompliance from "@/pages/RegulatoryCompliance";
import InvestorRelations from "@/pages/InvestorRelations";
import InvestorLeaderboard from "@/pages/InvestorLeaderboard";
import Notifications from "@/pages/Notifications";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/content" element={<Content />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/market" element={<Market />} />
            <Route path="/my-account" element={<Account />} />
            <Route path="/deal/:dealId" element={<DealDetails />} />
            <Route path="/user/:username" element={<UserProfile />} />
            <Route path="/buy-asset" element={<BuyAsset />} />
            <Route path="/sell-asset" element={<SellAsset />} />
            <Route path="/for-organisations" element={<ForOrganisations />} />
            <Route path="/support-hub" element={<SupportHub />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/market-trends" element={<MarketTrends />} />
            <Route path="/sector-performance" element={<SectorPerformance />} />
            <Route path="/community" element={<CommunityContent />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/community-comments/:id" element={<CommunityComments />} />
            <Route path="/trade/:assetId" element={<TradingInterface />} />
            <Route path="/investors/:assetId" element={<InvestorLeaderboard />} />
            <Route path="/regulatory-compliance" element={<RegulatoryCompliance />} />
            <Route path="/investor-relations" element={<InvestorRelations />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
