import React from "react";
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
import CommunityProfile from "@/pages/CommunityProfile";
import CommunityComments from "@/pages/CommunityComments";
import Article from "@/pages/Article";
import TradingInterface from "@/pages/TradingInterface";
import RegulatoryCompliance from "@/pages/RegulatoryCompliance";
import InvestorRelations from "@/pages/InvestorRelations";
import InvestorLeaderboard from "./pages/InvestorLeaderboard";
import ListAsset from "./pages/ListAsset";
import Notifications from "@/pages/Notifications";
import NotFound from "./pages/NotFound";
import Assets from "./pages/Assets";
import AssetDetails from "./pages/AssetDetails";
import Login from "./pages/Login";
import SellShares from "./pages/SellShares";
import RequestTeam from "./pages/RequestTeam";
import KnowledgeBase from "./pages/KnowledgeBase";
import OrganisationDashboard from "./pages/OrganisationDashboard";
import CommunityMessages from "./pages/CommunityMessages";
import CommunitySavedPosts from "./pages/CommunitySavedPosts";
import CommunityFindPeople from "./pages/CommunityFindPeople";
import PersonalInformation from "./pages/PersonalInformation";
import PaymentMethods from "./pages/PaymentMethods";
import DocumentsVerification from "./pages/DocumentsVerification";
import ConnectedDevices from "./pages/ConnectedDevices";
import PortfolioPerformance from "./pages/PortfolioPerformance";
import InvestmentHistory from "./pages/InvestmentHistory";
import OrderConfirmation from "./pages/OrderConfirmation";
import SaleConfirmation from "./pages/SaleConfirmation";
import TransactionDetails from "./pages/TransactionDetails";
import ReferralProgram from "./pages/ReferralProgram";
import CommunityForum from "./pages/CommunityForum";
import CommunityTopicDetail from "./pages/CommunityTopicDetail";
import SupportChat from "./pages/SupportChat";
import { TermsAndConditions } from "./pages/TermsAndConditions";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { CookiePolicy } from "./pages/CookiePolicy";
import { RiskDisclosure } from "./pages/RiskDisclosure";

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
            <Route path="/support-chat" element={<SupportChat />} />
            <Route path="/referral-program" element={<ReferralProgram />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/market-trends" element={<MarketTrends />} />
            <Route path="/sector-performance" element={<SectorPerformance />} />
          <Route path="/community" element={<Community />} />
          <Route path="/community-profile/:username" element={<CommunityProfile />} />
          <Route path="/community-comments/:postId" element={<CommunityComments />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/community-comments/:id" element={<CommunityComments />} />
            <Route path="/trade/:assetId" element={<TradingInterface />} />
            <Route path="/investors/:assetId" element={<InvestorLeaderboard />} />
            <Route path="/regulatory-compliance" element={<RegulatoryCompliance />} />
          <Route path="/investor-relations" element={<InvestorRelations />} />
          <Route path="/investor-leaderboard" element={<InvestorLeaderboard />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/assets/:assetId" element={<AssetDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sell-shares" element={<SellShares />} />
          <Route path="/request-team" element={<RequestTeam />} />
          <Route path="/organisation-dashboard" element={<OrganisationDashboard />} />
          <Route path="/list-asset" element={<ListAsset />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/community-messages" element={<CommunityMessages />} />
          <Route path="/community-saved-posts" element={<CommunitySavedPosts />} />
          <Route path="/community-find-people" element={<CommunityFindPeople />} />
          <Route path="/personal-information" element={<PersonalInformation />} />
          <Route path="/payment-methods" element={<PaymentMethods />} />
          <Route path="/documents-verification" element={<DocumentsVerification />} />
          <Route path="/connected-devices" element={<ConnectedDevices />} />
          <Route path="/portfolio-performance" element={<PortfolioPerformance />} />
          <Route path="/investment-history" element={<InvestmentHistory />} />
          <Route path="/community-profile" element={<CommunityProfile />} />
            <Route path="/sell-shares" element={<SellShares />} />
            <Route path="/sell/liverpool" element={<SellShares />} />
            <Route path="/sell/mclaren" element={<SellShares />} />
            <Route path="/sell/ryder-cup" element={<SellShares />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/sale-confirmation" element={<SaleConfirmation />} />
        <Route path="/community-forum" element={<CommunityForum />} />
        <Route path="/community-forum/:topicId" element={<CommunityTopicDetail />} />
        <Route path="/sale-confirmation" element={<SaleConfirmation />} />
            <Route path="/transaction-details/:id" element={<TransactionDetails />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/risk-disclosure" element={<RiskDisclosure />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
