import { useState } from "react";
import { TrendingUp, TrendingDown, BarChart3, Target, Calendar, DollarSign, Flame, Eye, AlertTriangle, Lightbulb, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { LogoImage } from "@/components/ui/logo-image";

const marketData = [
  {
    sector: "Football Clubs",
    performance: "+15.2%",
    trend: "up",
    volume: "£125M",
    deals: 12,
    logo: "/lovable-uploads/001420e5-847e-4145-addb-8bec6a73c63e.png",
    description: "Premier League and Championship clubs showing strong growth"
  },
  {
    sector: "Formula 1 Racing",
    performance: "+22.1%",
    trend: "up",
    volume: "£67M",
    deals: 5,
    logo: "/lovable-uploads/e0b86990-9fbb-421a-b689-b9e7ac420908.png",
    description: "McLaren and other F1 teams driving exceptional returns"
  },
  {
    sector: "Golf Tournaments",
    performance: "+12.8%",
    trend: "up",
    volume: "£89M",
    deals: 8,
    logo: "/lovable-uploads/3c841089-35f1-4a8e-bb45-856c04bcd5fe.png",
    description: "Ryder Cup and premium golf events in high demand"
  },
  {
    sector: "Basketball",
    performance: "+8.5%",
    trend: "up",
    volume: "£34M",
    deals: 4,
    logo: "/lovable-uploads/6a8fabb5-8bea-4444-90e6-00bab260b29c.png",
    description: "US college basketball opportunities emerging"
  }
];

const hotDeals = [
  {
    name: "McLaren F1 Racing",
    type: "Revenue Share",
    raised: "£92M",
    target: "£100M",
    progress: 92,
    investors: 2847,
    roi: "18.7%",
    logo: "/lovable-uploads/e0b86990-9fbb-421a-b689-b9e7ac420908.png",
    trend: "+22%",
    tags: ["🔥 Hot", "Almost Funded"]
  },
  {
    name: "Liverpool FC Equity",
    type: "Team Equity",
    raised: "£78M",
    target: "£80M", 
    progress: 97,
    investors: 5200,
    roi: "15.2%",
    logo: "/lovable-uploads/001420e5-847e-4145-addb-8bec6a73c63e.png",
    trend: "+15%",
    tags: ["⚡ Trending", "97% Funded"]
  },
  {
    name: "Ryder Cup 2025",
    type: "Event Rights",
    raised: "£45M",
    target: "£50M",
    progress: 90,
    investors: 1800,
    roi: "12.8%",
    logo: "/lovable-uploads/3c841089-35f1-4a8e-bb45-856c04bcd5fe.png",
    trend: "+13%",
    tags: ["⭐ Premium", "Limited Access"]
  }
];

const marketInsights = [
  {
    title: "F1 Racing Dominates Returns",
    description: "Formula 1 investments are delivering 22%+ returns driven by McLaren's exceptional season performance and growing global audience. The sport's increasing popularity in key markets is creating significant value for investors.",
    impact: "High",
    date: "Today",
    icon: Flame,
    category: "Hot Trend"
  },
  {
    title: "Football Clubs Show Resilience", 
    description: "Premier League clubs continue strong performance with Liverpool FC nearing full funding. The combination of broadcast revenue, commercial deals, and international expansion creates stable investment opportunities.",
    impact: "High",
    date: "2 days ago",
    icon: TrendingUp,
    category: "Market Leader"
  },
  {
    title: "Golf Market Expansion",
    description: "Ryder Cup 2025 showing strong investor interest with premium hospitality packages sold out. Golf's affluent demographic and exclusive access benefits are driving demand beyond expectations.",
    impact: "Medium",
    date: "1 week ago", 
    icon: Eye,
    category: "Opportunity"
  },
  {
    title: "Emerging Basketball Opportunities",
    description: "Ohio State basketball programs entering the platform present new investment categories. College sports offer unique revenue sharing models with high engagement audiences.",
    impact: "Medium",
    date: "1 week ago",
    icon: Lightbulb,
    category: "New Sector"
  }
];

export default function MarketTrends() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 p-8 border border-primary/20">
        <div className="relative z-10 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gradient mb-2">Market Intelligence</h1>
              <p className="text-xl text-muted-foreground">Real-time sports investment insights and opportunities</p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="success" className="flex items-center gap-2 px-4 py-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                Live Data
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                <Flame className="w-4 h-4 mr-1" />
                Hot Trends
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4 bg-card/80 backdrop-blur-sm border">
          <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Market Overview</TabsTrigger>
          <TabsTrigger value="sectors" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Hot Sectors</TabsTrigger>
          <TabsTrigger value="deals" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Hot Deals</TabsTrigger>
          <TabsTrigger value="insights" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">AI Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          {/* Market Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="card-professional bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Total Market Volume</p>
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <DollarSign className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-foreground">£315M</p>
                <p className="text-sm text-success flex items-center gap-1 mt-2">
                  <TrendingUp className="w-4 h-4" />
                  +12.5% vs last quarter
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional bg-gradient-to-br from-success/10 to-success/5 border-success/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Hot Deals Active</p>
                  <div className="p-2 bg-success/20 rounded-lg">
                    <Flame className="w-4 h-4 text-success" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-foreground">15</p>
                <p className="text-sm text-success flex items-center gap-1 mt-2">
                  <Star className="w-4 h-4" />
                  6 trending now
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional bg-gradient-to-br from-warning/10 to-warning/5 border-warning/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Average ROI</p>
                  <div className="p-2 bg-warning/20 rounded-lg">
                    <BarChart3 className="w-4 h-4 text-warning" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-foreground">16.8%</p>
                <p className="text-sm text-success flex items-center gap-1 mt-2">
                  <TrendingUp className="w-4 h-4" />
                  +3.2% vs target
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                  <div className="p-2 bg-accent/20 rounded-lg">
                    <Target className="w-4 h-4 text-accent" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-foreground">97%</p>
                <p className="text-sm text-muted-foreground mt-2">Deals fully funded</p>
              </CardContent>
            </Card>
          </div>

          {/* What's Hot Section */}
          <Card className="card-professional bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gradient flex items-center gap-3">
                <Flame className="w-6 h-6 text-primary" />
                What's Hot in Sports Investment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {marketData.slice(0, 3).map((sector, index) => (
                  <div key={index} className="p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <LogoImage 
                        src={sector.logo}
                        alt={sector.sector}
                        size="lg"
                        className="bg-white/50"
                      />
                      <div>
                        <h3 className="font-bold text-lg text-card-foreground">{sector.sector}</h3>
                        <Badge variant="success" className="mt-1">
                          {sector.performance} growth
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{sector.description}</p>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Volume:</span>
                      <span className="font-semibold">{sector.volume}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Active deals:</span>
                      <span className="font-semibold">{sector.deals}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Market Pulse */}
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Market Pulse - Investor Interest
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {marketData.map((sector, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-muted/10 to-transparent rounded-lg border border-border/30">
                    <div className="flex items-center gap-4">
                      <LogoImage 
                        src={sector.logo}
                        alt={sector.sector}
                        size="md"
                      />
                      <div>
                        <p className="font-medium text-card-foreground">{sector.sector}</p>
                        <p className="text-sm text-muted-foreground">{sector.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="success" className="mb-2">
                        {sector.performance}
                      </Badge>
                      <div className="text-sm text-muted-foreground">
                        {sector.volume} • {sector.deals} deals
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sectors" className="mt-6">
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-gradient">Hottest Investment Sectors</h2>
              <p className="text-muted-foreground">Top-performing sectors driving investor returns</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {marketData.map((sector, index) => (
                <Card key={index} className="card-professional bg-gradient-to-br from-card/80 to-card/60 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <LogoImage 
                          src={sector.logo}
                          alt={sector.sector}
                          size="xl"
                          className="bg-white/80"
                        />
                        <div>
                          <CardTitle className="text-xl text-gradient">{sector.sector}</CardTitle>
                          <p className="text-sm text-muted-foreground">{sector.description}</p>
                        </div>
                      </div>
                      <Badge variant="success" className="text-lg px-4 py-2">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {sector.performance}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                        <p className="text-sm text-muted-foreground mb-1">Total Volume</p>
                        <p className="text-2xl font-bold text-primary">{sector.volume}</p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-success/10 to-success/5 rounded-lg border border-success/20">
                        <p className="text-sm text-muted-foreground mb-1">Active Deals</p>
                        <p className="text-2xl font-bold text-success">{sector.deals}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Market Share</span>
                        <span className="font-semibold">{Math.round((parseInt(sector.volume.replace('£', '').replace('M', '')) / 315) * 100)}%</span>
                      </div>
                      <Progress value={(parseInt(sector.volume.replace('£', '').replace('M', '')) / 315) * 100} className="h-3" />
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg">
                      <span className="text-sm font-medium">Investor Interest</span>
                      <Badge variant="outline" className="bg-white/50">
                        {index === 0 ? "🔥 Extremely High" : index === 1 ? "⚡ Very High" : index === 2 ? "📈 High" : "👀 Growing"}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="deals" className="mt-6">
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-gradient flex items-center justify-center gap-2">
                <Flame className="w-6 h-6 text-primary" />
                Hottest Investment Opportunities
              </h2>
              <p className="text-muted-foreground">The most in-demand deals on the Keeps platform right now</p>
            </div>
            
            <div className="space-y-6">
              {hotDeals.map((deal, index) => (
                <Card key={index} className="card-professional bg-gradient-to-r from-card/90 to-card/70 border-primary/30 hover:border-primary/50 transition-all duration-300 hover:shadow-elegant">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
                      <div className="lg:col-span-2">
                        <div className="flex items-center gap-4 mb-4">
                          <LogoImage 
                            src={deal.logo}
                            alt={deal.name}
                            size="xl"
                            className="bg-white/80"
                          />
                          <div>
                            <h3 className="font-bold text-xl text-gradient mb-1">{deal.name}</h3>
                            <Badge variant="outline" className="mb-2">{deal.type}</Badge>
                            <div className="flex gap-2">
                              {deal.tags.map((tag, tagIndex) => (
                                <Badge key={tagIndex} variant={tagIndex === 0 ? "destructive" : "secondary"} className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-semibold">{deal.progress}%</span>
                        </div>
                        <Progress value={deal.progress} className="h-3" />
                        <p className="text-sm text-muted-foreground">
                          <span className="font-semibold text-primary">{deal.raised}</span> of {deal.target}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
                          <p className="text-xl font-bold text-primary">{deal.investors.toLocaleString()}</p>
                          <p className="text-xs text-muted-foreground">Investors</p>
                        </div>
                        <div className="p-3 bg-gradient-to-br from-success/10 to-success/5 rounded-lg">
                          <p className="text-xl font-bold text-success">{deal.roi}</p>
                          <p className="text-xs text-muted-foreground">Expected ROI</p>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-3">
                        <Badge variant="success" className="text-lg px-4 py-2">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          {deal.trend}
                        </Badge>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Momentum</p>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-3 h-3 ${i < (index === 0 ? 5 : index === 1 ? 4 : 3) ? 'text-warning fill-warning' : 'text-muted-foreground'}`} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="card-professional bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20">
              <CardContent className="p-6 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                    <Eye className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground">Want to see more hot deals?</h3>
                    <p className="text-muted-foreground">Join Keeps to access exclusive opportunities and early-bird pricing</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="insights" className="mt-6">
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-gradient flex items-center justify-center gap-2">
                <Lightbulb className="w-6 h-6 text-primary" />
                AI Market Intelligence
              </h2>
              <p className="text-muted-foreground">Advanced analytics and predictions for smart investors</p>
            </div>
            
            <div className="space-y-6">
              {marketInsights.map((insight, index) => {
                const IconComponent = insight.icon;
                return (
                  <Card key={index} className="card-professional bg-gradient-to-r from-card/90 to-card/70 border-primary/20 hover:border-primary/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-6">
                        <div className={`p-4 rounded-xl ${
                          insight.impact === "High" 
                            ? "bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30" 
                            : "bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/30"
                        }`}>
                          <IconComponent className={`w-6 h-6 ${insight.impact === "High" ? "text-primary" : "text-accent"}`} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="font-bold text-xl text-card-foreground mb-2">{insight.title}</h3>
                              <Badge variant="outline" className="mb-3">
                                {insight.category}
                              </Badge>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                              <Badge variant={insight.impact === "High" ? "destructive" : "secondary"} className="px-3 py-1">
                                {insight.impact} Impact
                              </Badge>
                              <p className="text-sm text-muted-foreground">{insight.date}</p>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground leading-relaxed text-base">{insight.description}</p>
                          
                          <div className="mt-4 p-4 bg-gradient-to-r from-accent/5 to-accent/10 rounded-lg border border-accent/20">
                            <div className="flex items-center gap-2 text-sm text-accent">
                              <AlertTriangle className="w-4 h-4" />
                              <span className="font-medium">
                                {insight.impact === "High" 
                                  ? "High-priority opportunity - Consider immediate action" 
                                  : "Monitor for potential investment opportunities"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            <Card className="card-professional bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <BarChart3 className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2">Powered by Advanced AI Analytics</h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Our AI continuously analyzes market data, performance metrics, and investor sentiment to provide 
                      you with actionable insights that give you an edge in sports investment opportunities.
                    </p>
                  </div>
                  <div className="flex justify-center gap-4 mt-6">
                    <Badge variant="outline" className="px-4 py-2">Real-time Analysis</Badge>
                    <Badge variant="outline" className="px-4 py-2">Predictive Modeling</Badge>
                    <Badge variant="outline" className="px-4 py-2">Risk Assessment</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}