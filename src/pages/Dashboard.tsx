import { useState } from "react";
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
    logo: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&h=600&fit=crop",
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
    logo: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&h=600&fit=crop",
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
    logo: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&h=600&fit=crop",
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
    logo: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&h=600&fit=crop",
    amount: "£80,000,000",
    type: "Income Sharing Agreement",
    progress: 0,
    investors: "0",
    timeRemaining: "1 day",
    status: "coming-soon",
    dividendPotential: "8% annual dividends from stadium revenues"
  },
  {
    id: "5",
    name: "Cardiff City", 
    logo: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop",
    amount: "£4,000,000",
    type: "Equity",
    progress: 0,
    investors: "0", 
    timeRemaining: "2 weeks",
    status: "coming-soon",
    dividendPotential: "12% annual dividends from club profits"
  },
  {
    id: "6",
    name: "Hexagon Fan Team",
    logo: "https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=800&h=600&fit=crop",
    amount: "£1,250,000",
    type: "Equity", 
    progress: 0,
    investors: "0",
    timeRemaining: "3 weeks",
    status: "coming-soon",
    dividendPotential: "15% annual returns from tournament winnings"
  }
];

function InvestmentCard({ investment }: { investment: Investment }) {
  return (
    <Card className="investment-card group">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={investment.logo}
              alt={investment.name}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <CardTitle className="text-lg">{investment.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{investment.amount} {investment.type}</p>
            </div>
          </div>
          {investment.featured && (
            <Badge variant="warning" className="flex items-center gap-1">
              <Star className="w-3 h-3" />
              Featured
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {investment.status === "live" && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{investment.progress}% Funded</span>
              <span className="text-muted-foreground">Goal: {investment.amount}</span>
            </div>
            <Progress value={investment.progress} className="h-2" />
          </div>
        )}
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span>{investment.investors} Investors</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span>{investment.timeRemaining} Remaining</span>
          </div>
        </div>
        
        {investment.dividendPotential && (
          <div className="p-3 rounded-lg bg-success/10 border border-success/20">
            <p className="text-sm text-success-foreground">
              <TrendingUp className="w-4 h-4 inline mr-1" />
              {investment.dividendPotential}
            </p>
          </div>
        )}
        
        <div className="flex items-center justify-between pt-2">
          <Badge variant={investment.status}>
            {investment.status === "live" ? "Live" : 
             investment.status === "coming-soon" ? "Coming Soon" : "Completed"}
          </Badge>
          
          <Button 
            className="btn-invest"
            size="sm"
          >
            {investment.status === "live" ? "Invest Now" : "Get Early Access"}
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("live");

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gradient">Hello Liam Canning</h1>
            <p className="text-lg text-muted-foreground">Welcome Back!</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Total Portfolio</p>
                  <p className="font-semibold text-lg">£302,355</p>
                  <p className="text-sm text-success">+£52,355 (20.9%)</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Investment Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
          <TabsTrigger value="live" className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full animate-glow-pulse"></div>
            Live Deals
          </TabsTrigger>
          <TabsTrigger value="coming-soon" className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Coming Soon
          </TabsTrigger>
          <TabsTrigger value="completed" className="flex items-center gap-2">
            Completed Deals
          </TabsTrigger>
        </TabsList>

        <TabsContent value="live" className="mt-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Live Deals</h2>
              <Badge variant="live" className="animate-glow-pulse">
                {liveDeals.length} Active
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {liveDeals.map((investment) => (
                <InvestmentCard key={investment.id} investment={investment} />
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="coming-soon" className="mt-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Coming Soon</h2>
              <Badge variant="coming-soon">
                {comingSoonDeals.length} Upcoming
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
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