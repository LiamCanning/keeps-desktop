import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TrendingUp, Calendar, MapPin, Users, Star, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OptimizedImage } from "@/components/ui/optimized-image";

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
    logo: "/src/assets/brands/liverpool-fc-logo.png",
    banner: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=400&fit=crop",
    status: "live",
    description: "Own a stake in one of the world's most successful football clubs with global reach and consistent performance.",
    minInvestment: "£500",
    expectedReturn: "8-12%",
    fundingProgress: 85,
    totalFunding: "£50M",
    category: "Football",
    launchDate: "July 2025"
  },
  {
    id: "mclaren-racing",
    name: "McLaren Racing",
    logo: "/src/assets/brands/mclaren-logo.png",
    banner: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
    status: "live",
    description: "Invest in Formula 1 excellence with McLaren's racing team, technology innovation, and global partnerships.",
    minInvestment: "£1,000",
    expectedReturn: "10-15%",
    fundingProgress: 92,
    totalFunding: "£100M",
    category: "Motorsport",
    launchDate: "July 2025"
  },
  {
    id: "ryder-cup",
    name: "Ryder Cup",
    logo: "/public/lovable-uploads/c23214c5-7f7c-4f20-9656-38c43a09385e.png",
    banner: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&h=400&fit=crop",
    status: "live",
    description: "Debenture investment in golf's most prestigious team tournament with guaranteed returns and exclusive access.",
    minInvestment: "£5,000",
    expectedReturn: "5% + Principal",
    fundingProgress: 78,
    totalFunding: "£25M",
    category: "Golf",
    launchDate: "July 2025"
  },
  {
    id: "tottenham-hotspur",
    name: "Tottenham Hotspur",
    logo: "/src/assets/brands/tottenham-logo.png",
    banner: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&h=400&fit=crop",
    status: "coming-soon",
    description: "Premier League powerhouse with new stadium infrastructure and growing commercial partnerships worldwide.",
    minInvestment: "£750",
    expectedReturn: "9-13%",
    fundingProgress: 0,
    totalFunding: "£40M",
    category: "Football",
    launchDate: "September 2025"
  },
  {
    id: "manchester-united",
    name: "Manchester United",
    logo: "/src/assets/brands/manchester-united-logo.png",
    banner: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=400&fit=crop",
    status: "coming-soon",
    description: "The world's most valuable football brand with massive global fanbase and commercial revenue potential.",
    minInvestment: "£1,000",
    expectedReturn: "12-18%",
    fundingProgress: 0,
    totalFunding: "£75M",
    category: "Football",
    launchDate: "October 2025"
  },
  {
    id: "british-cycling",
    name: "British Cycling",
    logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop",
    banner: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
    status: "completed",
    description: "Olympic cycling excellence with proven track record and sustainable growth in global cycling markets.",
    minInvestment: "£1,000",
    expectedReturn: "15%",
    fundingProgress: 100,
    totalFunding: "£20M",
    category: "Cycling",
    launchDate: "June 2025"
  }
];

function AssetCard({ asset }: { asset: Asset }) {
  const navigate = useNavigate();
  
  return (
    <Card className="investment-card group cursor-pointer" onClick={() => navigate(`/assets/${asset.id}`)}>
      <div className="relative overflow-hidden rounded-t-xl">
        <OptimizedImage
          src={asset.banner}
          alt={asset.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <Badge variant={asset.status === "live" ? "success" : asset.status === "coming-soon" ? "warning" : "secondary"}>
            {asset.status === "live" ? "Live" : asset.status === "coming-soon" ? "Coming Soon" : "Completed"}
          </Badge>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
          <OptimizedImage
            src={asset.logo}
            alt={`${asset.name} logo`}
            className="w-8 h-8 object-contain"
          />
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
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredAssets = assets.filter(asset => {
    if (activeTab === "all") return true;
    return asset.status === activeTab;
  });

  const liveAssets = assets.filter(a => a.status === "live").length;
  const comingSoonAssets = assets.filter(a => a.status === "coming-soon").length;
  const completedAssets = assets.filter(a => a.status === "completed").length;

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="space-y-2 text-left">
        <h1 className="text-3xl font-bold text-gradient">All Assets</h1>
        <p className="text-lg text-muted-foreground">Discover and invest in world-class sports organisations</p>
      </div>

      {/* Assets Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Assets</p>
              <p className="font-semibold text-xl">{assets.length}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-success/20 rounded-lg">
              <Star className="w-5 h-5 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Live Assets</p>
              <p className="font-semibold text-xl">{liveAssets}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-warning/20 rounded-lg">
              <Calendar className="w-5 h-5 text-warning" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Coming Soon</p>
              <p className="font-semibold text-xl">{comingSoonAssets}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-muted/40 rounded-lg">
              <Users className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Completed</p>
              <p className="font-semibold text-xl">{completedAssets}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Assets Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
          <TabsTrigger value="all">All Assets</TabsTrigger>
          <TabsTrigger value="live" className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            Live
          </TabsTrigger>
          <TabsTrigger value="coming-soon">Coming Soon</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-left">
                {activeTab === "all" ? "All Available Assets" :
                 activeTab === "live" ? "Live Investment Assets" :
                 activeTab === "coming-soon" ? "Upcoming Assets" :
                 "Completed Assets"}
              </h2>
              <Badge variant={activeTab === "live" ? "success" : activeTab === "coming-soon" ? "warning" : "secondary"}>
                {filteredAssets.length} Available
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredAssets.map((asset) => (
                <AssetCard key={asset.id} asset={asset} />
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}