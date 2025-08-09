import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Clock, Users, TrendingUp, Star, ArrowRight, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Investment {
  id: string;
  name: string;
  logo: string;
  amount: string;
  type: string;
  progress: number;
  investors: string;
  timeRemaining: string;
  status: "live" | "coming-soon" | "completed";
  featured?: boolean;
  dividendPotential?: string;
  tier?: string;
}

const liveDeals: Investment[] = [
  {
    id: "1",
    name: "Liverpool FC",
    logo: "/lovable-uploads/c0f719b9-a198-429d-b736-b4081a14de86.png",
    amount: "£40,000,000",
    type: "Equity Raise",
    progress: 75,
    investors: "10,250",
    timeRemaining: "5 days",
    status: "live",
    featured: true,
    dividendPotential: "4-8% annually",
    tier: "Gold"
  },
  {
    id: "2", 
    name: "McLaren F1",
    logo: "/lovable-uploads/10864fdf-2d7a-4243-a715-724e5ddfb866.png",
    amount: "£50,000,000",
    type: "Income Sharing Agreement",
    progress: 70,
    investors: "8,750",
    timeRemaining: "2 weeks",
    status: "live",
    dividendPotential: "7% annually",
    tier: "Diamond"
  },
  {
    id: "3",
    name: "Ryder Cup",
    logo: "/lovable-uploads/89e0f872-2b6e-443e-a0d7-bcb3dead15dd.png",
    amount: "£42,500,000", 
    type: "Debenture Programme",
    progress: 90,
    investors: "2,340",
    timeRemaining: "48 hours",
    status: "live",
    dividendPotential: "5% + Principal",
    tier: "Silver"
  }
];

const comingSoonDeals: Investment[] = [
  {
    id: "4",
    name: "Ohio State",
    logo: "/lovable-uploads/fcb5a91d-487c-486c-a923-d4255d9db988.png",
    amount: "£80,000,000",
    type: "Income Sharing Agreement",
    progress: 0,
    investors: "0",
    timeRemaining: "1 day",
    status: "coming-soon",
    dividendPotential: "10% of future stadium revenues",
    tier: "Bronze"
  },
  {
    id: "5",
    name: "Cardiff City", 
    logo: "/lovable-uploads/32e5079c-7a6a-4a36-9545-a4faa7411f89.png",
    amount: "£4,000,000",
    type: "Equity",
    progress: 0,
    investors: "0", 
    timeRemaining: "2 weeks",
    status: "coming-soon",
    dividendPotential: "10% equity stake",
    tier: "Silver"
  },
  {
    id: "6",
    name: "Hexagon Fan Team",
    logo: "/lovable-uploads/6e897916-7050-40ca-a142-0d028232a4b7.png",
    amount: "£1,250,000",
    type: "Equity", 
    progress: 0,
    investors: "0",
    timeRemaining: "3 weeks",
    status: "coming-soon",
    dividendPotential: "75% equity in Hexagon Fan Team",
    tier: "Platinum"
  }
];

function InvestmentCard({ investment }: { investment: Investment }) {
  const navigate = useNavigate();
  
  const getDealSlug = (name: string) => {
    const slug = name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    // Special-case mapping
    if (slug === 'mclaren-f1' || name.toLowerCase().includes('mclaren')) return 'mclaren-racing';
    return slug;
  };

  const handleCardClick = () => {
    navigate(`/assets/${getDealSlug(investment.name)}`);
  };

  return (
    <Card 
      className="investment-card group bg-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative overflow-hidden">
        {investment.status === "live" ? (
          <div className="w-full h-64 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative">
            <div className={`absolute inset-0 bg-cover bg-center ${
              investment.name === 'Liverpool FC' 
                ? "bg-[url('/lovable-uploads/921dc679-1319-4920-b7ca-3e98397ffd2f.png')]" 
                : investment.name === 'McLaren F1' 
                ? "bg-[url('/lovable-uploads/f1c416aa-6bce-4a96-af14-85280bd218d8.png')]" 
                : investment.name === 'Ryder Cup'
                ? "bg-[url('/lovable-uploads/2e283d73-dfc0-468d-8412-ea95e97eb268.png')]"
                : "bg-[url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=400&fit=crop')]"
            }`}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            {/* Ambient background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-xl"></div>
          </div>
        ) : (
          <div className="w-full h-64 bg-gradient-to-br from-muted/30 to-muted/50 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border border-border/20">
            <img 
              src={investment.logo}
              alt={investment.name}
              className="w-32 h-32 object-contain"
            />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {investment.featured && (
          <Badge variant="warning" className="absolute top-4 left-4 flex items-center gap-1 text-xs z-10">
            <Star className="w-3 h-3" />
            Trending
          </Badge>
        )}
        
        {investment.status === "live" && (
          <Badge variant="success" className="absolute top-4 right-4 text-xs z-10">
            LIVE NOW
          </Badge>
        )}

      </div>
      
      <CardContent className="p-6 space-y-4">
        {/* Asset Name, Amount, and Type */}
        <div className="space-y-2 border-b border-border pb-4">
          <div className="flex items-center gap-4">
            <img 
              src={investment.logo}
              alt={investment.name}
              className="w-16 h-16 object-contain"
            />
            <div>
              <h3 className="text-2xl font-bold text-card-foreground">{investment.name}</h3>
              <p className="text-xl font-semibold text-primary">{investment.amount}</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">{investment.type}</p>
        </div>
        
        {/* Key metrics in cards */}
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center p-3 bg-muted/30 rounded-lg">
            <p className="text-xs text-muted-foreground mb-1">Min Entry</p>
            <p className="font-bold text-sm text-card-foreground">£500</p>
          </div>
          <div className="text-center p-3 bg-muted/30 rounded-lg">
            <Users className="w-4 h-4 mx-auto text-primary mb-1" />
            <p className="font-bold text-sm text-card-foreground">{investment.investors}</p>
          </div>
          <div className="text-center p-3 bg-muted/30 rounded-lg">
            <Clock className="w-4 h-4 mx-auto text-destructive mb-1" />
            <p className="font-bold text-sm text-card-foreground">{investment.timeRemaining}</p>
          </div>
        </div>

        {/* Progress section */}
        {investment.status === "live" && (
          <div className="space-y-3 p-4 bg-success/5 rounded-lg border border-success/20">
            <div className="flex justify-between text-sm">
              <span className="font-semibold text-card-foreground">
                £{Math.round((investment.progress / 100) * parseFloat(investment.amount.replace(/[£,]/g, '')) / 1000000)}M raised
              </span>
              <span className="text-muted-foreground">{investment.progress}% complete</span>
            </div>
            <Progress value={investment.progress} className="h-2" />
            <p className="text-xs text-muted-foreground text-center">
              Goal: {investment.amount}
            </p>
          </div>
        )}
        
        {investment.dividendPotential && (
          <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
            <p className="text-sm text-card-foreground font-medium">
              <TrendingUp className="w-4 h-4 inline mr-1 text-success" />
              {investment.dividendPotential}
            </p>
          </div>
        )}
        
        <Button 
          className="w-full btn-invest text-base font-semibold py-3"
          size="lg"
          onClick={(e) => {
            e.stopPropagation();
            if (investment.status === "live") {
              navigate(`/assets/${getDealSlug(investment.name)}`);
            } else {
              navigate('/buy-asset', { state: { dealId: investment.id, dealName: investment.name } });
            }
          }}
        >
          {investment.status === "live" ? "View Deal" : "Get Early Access"}
        </Button>
      </CardContent>
    </Card>
  );
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("live");
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="space-y-2 text-left">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground text-left">Welcome Back <span className="text-primary">Liam</span></h1>
            <p className="text-lg text-foreground/80 text-left">Ready to invest?</p>
          </div>
        </div>
      </div>

      {/* Featured Investment Opportunities */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 p-8 border border-primary/20 mt-8">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
        <div className="relative z-10 space-y-6">
          <div className="text-center space-y-3">
            <h2 className="text-4xl font-bold text-gradient">Featured Investment Opportunities</h2>
            <p className="text-xl text-foreground/90 font-medium">Premium sports assets with proven track records • Limited availability</p>
            <div className="flex justify-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {liveDeals.map((investment) => (
              <InvestmentCard key={investment.id} investment={investment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}