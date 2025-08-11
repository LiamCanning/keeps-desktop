import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TrendingUp, Calendar, MapPin, Users, Star, ArrowRight, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogoImage } from "@/components/ui/logo-image";
import mclarenLogo from "@/assets/logos/mclaren-racing-logo.png";
import ryderLogo from "@/assets/logos/ryder-cup-logo.png";

interface Asset {
  id: string;
  name: string;
  logo: string;
  banner: string;
  status: "live" | "coming-soon" | "completed";
  description: string;
  minInvestment: string;
  expectedReturn: string;
  fundingProgress: number;
  totalFunding: string;
  category: string;
  launchDate: string;
}

const assets: Asset[] = [
  {
    id: "liverpool-fc",
    name: "Liverpool FC",
    logo: "/lovable-uploads/c0f719b9-a198-429d-b736-b4081a14de86.png",
    banner: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=400&fit=crop",
    status: "live",
    description: "Own a stake in one of the world's most successful football clubs with global reach and consistent performance.",
    minInvestment: "£500",
    expectedReturn: "4-8%",
    fundingProgress: 75,
    totalFunding: "£40M",
    category: "Equity",
    launchDate: "July 2025"
  },
  {
    id: "mclaren-racing",
    name: "McLaren Racing",
    logo: mclarenLogo,
    banner: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
    status: "live",
    description: "Income sharing agreement providing direct participation in McLaren F1's commercial success over 10 years.",
    minInvestment: "£2,000",
    expectedReturn: "7%",
    fundingProgress: 70,
    totalFunding: "£50M",
    category: "Income Sharing Agreement",
    launchDate: "July 2025"
  },
  {
    id: "ryder-cup",
    name: "Ryder Cup",
    logo: ryderLogo,
    banner: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&h=400&fit=crop",
    status: "live",
    description: "Debenture investment in golf's most prestigious team tournament with guaranteed returns and exclusive access.",
    minInvestment: "£1,000",
    expectedReturn: "5% + Principal",
    fundingProgress: 90,
    totalFunding: "£42.5M",
    category: "Debentures",
    launchDate: "July 2025"
  },
  {
    id: "hexagon-fan-team",
    name: "Hexagon Fan Team",
    logo: "/lovable-uploads/6e897916-7050-40ca-a142-0d028232a4b7.png",
    banner: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop",
    status: "coming-soon",
    description: "75% equity stake in innovative fan engagement platform with global tournament integration.",
    minInvestment: "£500",
    expectedReturn: "20%+",
    fundingProgress: 0,
    totalFunding: "£1.25M",
    category: "Equity",
    launchDate: "September 2025"
  },
  {
    id: "cardiff-city",
    name: "Cardiff City",
    logo: "/lovable-uploads/32e5079c-7a6a-4a36-9545-a4faa7411f89.png",
    banner: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=400&fit=crop",
    status: "coming-soon",
    description: "10% equity stake in Welsh football club with passionate fanbase and Championship growth potential.",
    minInvestment: "£1,000",
    expectedReturn: "12%+",
    fundingProgress: 0,
    totalFunding: "£4M",
    category: "Equity",
    launchDate: "October 2025"
  },
  {
    id: "ohio-state",
    name: "Ohio State",
    logo: "/lovable-uploads/fcb5a91d-487c-486c-a923-d4255d9db988.png",
    banner: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&h=400&fit=crop",
    status: "coming-soon",
    description: "Income sharing agreement providing 10% of future stadium revenues from elite university athletics programme.",
    minInvestment: "£2,500",
    expectedReturn: "8-12%",
    fundingProgress: 0,
    totalFunding: "£80M",
    category: "Income Sharing Agreement",
    launchDate: "November 2025"
  }
];

function AssetCard({ asset }: { asset: Asset }) {
  const navigate = useNavigate();
  
  return (
    <Card className="investment-card group cursor-pointer" onClick={() => navigate(`/assets/${asset.id}`)}>
      <div className="relative overflow-hidden rounded-t-xl h-48 flex items-center justify-center bg-gradient-to-br from-primary/10 via-white to-accent/10 border-b border-primary/20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        <div className="relative text-center space-y-4 z-10">
          <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/40">
            <LogoImage
              src={asset.logo}
              alt={`${asset.name} logo`}
              size="xl"
            />
          </div>
          <Badge variant={asset.status === "live" ? "success" : asset.status === "coming-soon" ? "warning" : "secondary"} className="shadow-md">
            {asset.status === "live" ? "Live" : asset.status === "coming-soon" ? "Coming Soon" : "Completed"}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div>
          <CardTitle className="text-lg mb-2">{asset.name}</CardTitle>
          <p className="text-sm text-muted-foreground line-clamp-2">{asset.description}</p>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Min Investment</span>
            <span className="font-semibold">{asset.minInvestment}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Expected Return</span>
            <span className="font-semibold text-success">{asset.expectedReturn}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Category</span>
            <Badge variant="outline">{asset.category}</Badge>
          </div>
        </div>
        
        {asset.status !== "completed" && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Funding Progress</span>
              <span className="font-semibold">{asset.fundingProgress}%</span>
            </div>
            <div className="progress-bar h-2">
              <div 
                className="progress-fill" 
                style={{ width: `${asset.fundingProgress}%` }}
              />
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between pt-2">
          <div className="text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 inline mr-1" />
            {asset.launchDate}
          </div>
          <Button 
            variant="outline" 
            size="sm"
            className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/assets/${asset.id}`);
            }}
          >
            View Details
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Assets() {
  const [activeTab, setActiveTab] = useState("live");
  const navigate = useNavigate();

  // Store current section in sessionStorage when tab changes
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    sessionStorage.setItem('assetsSection', tab);
  };
  
  const filteredAssets = assets.filter(asset => {
    if (activeTab === "all") return true;
    return asset.status === activeTab;
  });

  const liveAssets = assets.filter(a => a.status === "live").length;
  const comingSoonAssets = assets.filter(a => a.status === "coming-soon").length;
  const completedAssets = assets.filter(a => a.status === "completed").length;

  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="space-y-2 text-left">
        <h1 className="text-2xl sm:text-3xl font-bold text-gradient">All Assets</h1>
        <p className="text-base sm:text-lg text-muted-foreground">Discover and invest in world-class sports organisations</p>
      </div>

      {/* Filter Tabs - Replacing the banner */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-4 sm:p-6 border border-primary/20">
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-background/80 backdrop-blur-sm h-auto">
            <TabsTrigger value="live" className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium p-2 sm:p-3">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="hidden sm:inline">Live Deals ({liveAssets})</span>
              <span className="sm:hidden">Live ({liveAssets})</span>
            </TabsTrigger>
            <TabsTrigger value="coming-soon" className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium p-2 sm:p-3">
              <div className="w-2 h-2 bg-warning rounded-full"></div>
              <span className="hidden sm:inline">Coming Soon ({comingSoonAssets})</span>
              <span className="sm:hidden">Coming ({comingSoonAssets})</span>
            </TabsTrigger>
            <TabsTrigger value="completed" className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium p-2 sm:p-3">
              <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
              <span className="hidden sm:inline">Completed</span>
              <span className="sm:hidden">Done</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>


      {/* Assets Content */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-left">
            {activeTab === "live" ? "Live Investment Assets" :
             activeTab === "coming-soon" ? "Upcoming Assets" :
             "Completed Assets"}
          </h2>
          <Badge variant={activeTab === "live" ? "success" : activeTab === "coming-soon" ? "warning" : "secondary"}>
            {filteredAssets.length} Available
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {filteredAssets.map((asset) => (
            <AssetCard key={asset.id} asset={asset} />
          ))}
        </div>
      </div>

      {/* Request Your Team Section */}
      <div className="mt-8 sm:mt-12 p-4 sm:p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/20">
        <div className="text-center space-y-3 sm:space-y-4">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full mb-2 sm:mb-4">
            <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gradient">Request Your Team</h3>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Don't see your favourite sports organisation? Let us know which team or organisation you'd like to invest in and we'll consider adding them to our platform.
          </p>
          <Button 
            size="lg" 
            className="mt-4 sm:mt-6 min-h-[44px] w-full sm:w-auto"
            onClick={() => navigate('/request-team')}
          >
            Request Your Team
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}