import { useState } from "react";
import { TrendingUp, TrendingDown, BarChart3, PieChart, DollarSign, Calendar, Target, Award, Eye, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PortfolioHolding {
  id: string;
  name: string;
  logo: string;
  investment: string;
  shares: string;
  purchaseDate: string;
  purchasePrice: string;
  currentPrice: string;
  return: string;
  returnPercent: number;
  tier: string;
  dividendPotential: string;
  type: string;
}

const portfolioHoldings: PortfolioHolding[] = [
  {
    id: "1",
    name: "Liverpool FC",
    logo: "/lovable-uploads/001420e5-847e-4145-addb-8bec6a73c63e.png",
    investment: "£25,000",
    shares: "50 (£500 per share)",
    purchaseDate: "15/07/2025",
    purchasePrice: "£500.00 per share",
    currentPrice: "£575.00 per share",
    return: "+£3,750",
    returnPercent: 15.0,
    tier: "Gold",
    dividendPotential: "4-8% annually",
    type: "Equity"
  },
  {
    id: "2",
    name: "McLaren Racing",
    logo: "/lovable-uploads/e0b86990-9fbb-421a-b689-b9e7ac420908.png",
    investment: "£200,000",
    shares: "200 (£1000 per share)",
    purchaseDate: "10/07/2025",
    purchasePrice: "£1000.00 per share",
    currentPrice: "£1220.00 per share",
    return: "+£44,000",
    returnPercent: 22.0,
    tier: "Diamond",
    dividendPotential: "6-12% annually",
    type: "ISA"
  },
  {
    id: "3",
    name: "Ryder Cup",
    logo: "/lovable-uploads/1075da4a-349e-420a-b050-72aad7295b63.png",
    investment: "£15,000",
    shares: "3 debentures (£5000 per debenture)",
    purchaseDate: "05/07/2025",
    purchasePrice: "£5000.00 per debenture",
    currentPrice: "£5935.00 per debenture",
    return: "+£2,805",
    returnPercent: 18.7,
    tier: "Silver",
    dividendPotential: "5% + Principal",
    type: "Debenture"
  },
  {
    id: "4",
    name: "British Cycling",
    logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    investment: "£10,000",
    shares: "10 (£1000 per share)",
    purchaseDate: "01/07/2025",
    purchasePrice: "£1000.00 per share",
    currentPrice: "£1180.00 per share",
    return: "+£1,800",
    returnPercent: 18.0,
    tier: "Gold",
    dividendPotential: "6% + Principal Return",
    type: "Equity"
  }
];

function HoldingCard({ holding }: { holding: PortfolioHolding }) {
  const isPositive = holding.returnPercent >= 0;

  return (
    <Card className="card-professional">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={holding.logo}
              alt={holding.name}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <CardTitle className="text-lg text-card-foreground">{holding.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{holding.investment} Investment</p>
              <Badge variant={holding.tier.toLowerCase() as any} className="mt-1">
                {holding.tier} Tier
              </Badge>
            </div>
          </div>
          <div className="text-right">
            <p className={`text-lg font-bold ${isPositive ? 'text-success' : 'text-destructive'}`}>
              {holding.return}
            </p>
            <p className={`text-sm flex items-center gap-1 ${isPositive ? 'text-success' : 'text-destructive'}`}>
              {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              {holding.returnPercent > 0 ? '+' : ''}{holding.returnPercent}%
            </p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">{holding.type === 'Debenture' ? 'Debentures Owned' : 'Shares Owned'}</p>
            <p className="font-medium text-card-foreground">{holding.shares}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Current Price</p>
            <p className="font-medium text-card-foreground">{holding.currentPrice}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Purchase Date</p>
            <p className="font-medium text-card-foreground">{holding.purchaseDate}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Type</p>
            <p className="font-medium text-card-foreground">{holding.type}</p>
          </div>
        </div>
        
        <div className="p-3 rounded-lg bg-success/20 border border-success/30">
          <p className="text-sm font-medium text-success">
            <Target className="w-4 h-4 inline mr-1" />
            {holding.dividendPotential}
          </p>
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            className="flex-1 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white"
            onClick={() => window.location.href = `/deal/${holding.name.toLowerCase().replace(/\s+/g, '-').replace('racing', 'f1')}`}
          >
            <Eye className="w-4 h-4 mr-2" />
            View Benefits
          </Button>
          <Button 
            className="btn-invest flex-1"
            onClick={() => window.location.href = `/sell-asset`}
          >
            <Activity className="w-4 h-4 mr-2" />
            Sell {holding.type === 'Debenture' ? 'Debentures' : 'Shares'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("overview");

  const totalInvested = 250000;
  const totalValue = 302355;
  const totalReturn = totalValue - totalInvested;
  const returnPercent = (totalReturn / totalInvested) * 100;

  return (
    <div className="space-y-6">
      {/* Sticky Portfolio Banner */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-border p-4 shadow-sm">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div>
            <h2 className="text-lg font-bold text-gradient">Liam's Portfolio</h2>
            <p className="text-sm text-muted-foreground">Total Value: £{totalValue.toLocaleString()}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-success">+£{totalReturn.toLocaleString()}</p>
            <p className="text-sm text-success">+{returnPercent.toFixed(1)}%</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gradient">Portfolio Overview</h1>
          <p className="text-lg text-foreground/80">Track your sports investments</p>
        </div>

      {/* Portfolio Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="card-elevated p-6 col-span-1 md:col-span-2">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Total Portfolio Value</p>
            <p className="text-3xl font-bold text-card-foreground">£{totalValue.toLocaleString()}</p>
            <div className="flex items-center gap-2">
              <span className="text-success font-semibold">+£{totalReturn.toLocaleString()}</span>
              <Badge variant="success" className="flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                +{returnPercent.toFixed(1)}%
              </Badge>
            </div>
          </div>
        </Card>
        
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <DollarSign className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Invested</p>
              <p className="font-semibold text-xl text-card-foreground">£{totalInvested.toLocaleString()}</p>
            </div>
          </div>
        </Card>
        
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-success/20 rounded-lg">
              <PieChart className="w-5 h-5 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Teams</p>
              <p className="font-semibold text-xl text-card-foreground">4</p>
            </div>
          </div>
        </Card>
      </div>

      {/* AI Portfolio Analysis */}
      <Card className="card-professional">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-card-foreground">
            <BarChart3 className="w-5 h-5 text-primary" />
            AI Portfolio Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-muted/20 rounded-lg">
            <p className="text-sm text-card-foreground leading-relaxed">
              Your portfolio shows strong diversification across different sports sectors. McLaren Racing (80% of holdings) 
              represents a significant concentration risk, but its strong performance (+22.0% current return) justifies the allocation. 
              Consider adding exposure to emerging sports markets for additional growth potential. Your current projected annual 
              return is 18.4%, outperforming the sports investment index by 2.1%.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Portfolio Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
          <TabsTrigger value="overview">Your Investments</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-card-foreground">Your Investments</h2>
              <Badge variant="success">
                4 Holdings
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {portfolioHoldings.map((holding) => (
                <HoldingCard key={holding.id} holding={holding} />
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="mt-6">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-card-foreground">Performance Overview</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="card-professional p-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Best Performer</p>
                  <p className="font-semibold text-card-foreground">McLaren Racing</p>
                  <Badge variant="success">+22.0%</Badge>
                </div>
              </Card>
              
              <Card className="card-professional p-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Avg Annual Yield</p>
                  <p className="font-semibold text-card-foreground">18.4%</p>
                  <Badge variant="success">Above Market</Badge>
                </div>
              </Card>
              
              <Card className="card-professional p-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Portfolio Risk</p>
                  <p className="font-semibold text-card-foreground">Medium</p>
                  <Badge variant="warning">Diversify</Badge>
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="mt-6">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-card-foreground">Portfolio Analytics</h2>
            
            <Card className="card-professional p-6">
              <h3 className="font-semibold mb-4 text-card-foreground">Asset Allocation</h3>
              <div className="space-y-4">
                {portfolioHoldings.map((holding) => {
                  const percentage = (parseInt(holding.investment.replace(/[£,]/g, '')) / totalInvested) * 100;
                  return (
                    <div key={holding.id} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-card-foreground">{holding.name}</span>
                        <span className="text-muted-foreground">{percentage.toFixed(1)}%</span>
                      </div>
                      <Progress value={percentage} className="h-2" />
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
      </div>
    </div>
  );
}