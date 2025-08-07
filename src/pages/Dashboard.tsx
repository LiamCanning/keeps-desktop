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
    logo: "/lovable-uploads/1fb754c3-b31b-4c0f-a408-bd31310d7927.png",
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
    logo: "/placeholder.svg",
    amount: "£50,000,000",
    type: "ISA",
    progress: 70,
    investors: "8,750",
    timeRemaining: "2 weeks",
    status: "live",
    dividendPotential: "6-12% annually",
    tier: "Diamond"
  },
  {
    id: "3",
    name: "Ryder Cup",
    logo: "/placeholder.svg",
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
    logo: "/placeholder.svg",
    amount: "£80,000,000",
    type: "Income Sharing Agreement",
    progress: 0,
    investors: "0",
    timeRemaining: "1 day",
    status: "coming-soon",
    dividendPotential: "8% annual dividends from stadium revenues",
    tier: "Bronze"
  },
  {
    id: "5",
    name: "Cardiff City", 
    logo: "/placeholder.svg",
    amount: "£4,000,000",
    type: "Equity",
    progress: 0,
    investors: "0", 
    timeRemaining: "2 weeks",
    status: "coming-soon",
    dividendPotential: "12% annual dividends from club profits",
    tier: "Silver"
  },
  {
    id: "6",
    name: "Hexagon Fan Team",
    logo: "/placeholder.svg",
    amount: "£1,250,000",
    type: "Equity", 
    progress: 0,
    investors: "0",
    timeRemaining: "3 weeks",
    status: "coming-soon",
    dividendPotential: "15% annual returns from tournament winnings",
    tier: "Platinum"
  }
];

function InvestmentCard({ investment }: { investment: Investment }) {
  const navigate = useNavigate();
  
  const getDealSlug = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
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
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=400&fit=crop')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="relative z-10 text-center space-y-4">
              <div className="p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/40">
                <img 
                  src={investment.logo}
                  alt={investment.name}
                  className="w-16 h-16 object-contain mx-auto"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
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
            Featured
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
          <h3 className="text-2xl font-bold text-card-foreground">{investment.name}</h3>
          <p className="text-xl font-semibold text-primary">{investment.amount}</p>
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

      {/* Investment Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3 bg-card">
          <TabsTrigger value="live" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <div className="w-2 h-2 bg-success rounded-full animate-glow-pulse"></div>
            Live Deals
          </TabsTrigger>
          <TabsTrigger value="coming-soon" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <Calendar className="w-4 h-4" />
            Coming Soon
          </TabsTrigger>
          <TabsTrigger value="completed" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Completed Deals
          </TabsTrigger>
        </TabsList>

        <TabsContent value="live" className="mt-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-foreground text-left">Featured Investment Opportunities</h2>
              <p className="text-foreground/70 text-right">Premium sports assets with proven track records</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              {liveDeals.map((investment) => (
                <InvestmentCard key={investment.id} investment={investment} />
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="coming-soon" className="mt-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-left">Coming Soon</h2>
              <Badge variant="coming-soon">
                {comingSoonDeals.length} Upcoming
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 items-start">
              {comingSoonDeals.map((investment) => (
                <InvestmentCard key={investment.id} investment={investment} />
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="completed" className="mt-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Completed Deals</h2>
              <Badge variant="completed">
                View Archive
              </Badge>
            </div>
            
            <Card className="p-8 text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                  <BarChart3 className="w-8 h-8 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">No Completed Deals Yet</h3>
                  <p className="text-muted-foreground">Completed investments will appear here once deals close.</p>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}