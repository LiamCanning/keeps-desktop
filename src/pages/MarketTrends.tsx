import { useState } from "react";
import { TrendingUp, TrendingDown, BarChart3, Target, Calendar, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const marketData = [
  {
    sector: "Football Clubs",
    performance: "+15.2%",
    trend: "up",
    volume: "£125M",
    deals: 12
  },
  {
    sector: "Stadium Development",
    performance: "+8.7%",
    trend: "up", 
    volume: "£89M",
    deals: 8
  },
  {
    sector: "Formula 1",
    performance: "+22.1%",
    trend: "up",
    volume: "£67M",
    deals: 5
  },
  {
    sector: "Golf Courses",
    performance: "-2.3%",
    trend: "down",
    volume: "£34M",
    deals: 7
  }
];

const topDeals = [
  {
    name: "Manchester United Training Facility",
    type: "Stadium Development",
    raised: "£45M",
    target: "£50M",
    progress: 90,
    investors: 8500,
    roi: "12.4%"
  },
  {
    name: "Mercedes F1 Team Equity",
    type: "Team Equity", 
    raised: "£32M",
    target: "£40M",
    progress: 80,
    investors: 5200,
    roi: "18.7%"
  },
  {
    name: "Wimbledon Court Debentures",
    type: "Venue Rights",
    raised: "£28M",
    target: "£30M", 
    progress: 93,
    investors: 1800,
    roi: "6.2%"
  }
];

const insights = [
  {
    title: "Football Dominates Investment Volume",
    description: "Football-related investments account for 47% of total platform volume this quarter",
    impact: "High",
    date: "3 days ago"
  },
  {
    title: "Motorsport Showing Strong Growth",
    description: "F1 and motorsport investments up 35% compared to last quarter",
    impact: "Medium", 
    date: "1 week ago"
  },
  {
    title: "Stadium Infrastructure in Demand",
    description: "Development projects consistently oversubscribed by 150%+",
    impact: "High",
    date: "2 weeks ago"
  }
];

export default function MarketTrends() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Market Trends</h1>
            <p className="text-lg text-muted-foreground">Sports investment market analysis and insights</p>
          </div>
          <Badge variant="secondary" className="flex items-center gap-1">
            <BarChart3 className="w-4 h-4" />
            Live Data
          </Badge>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4 bg-card">
          <TabsTrigger value="overview">Market Overview</TabsTrigger>
          <TabsTrigger value="sectors">Sector Analysis</TabsTrigger>
          <TabsTrigger value="deals">Top Deals</TabsTrigger>
          <TabsTrigger value="insights">Market Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          {/* Market Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-card border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Total Volume</p>
                  <DollarSign className="w-4 h-4 text-primary" />
                </div>
                <p className="text-2xl font-bold text-foreground">£315M</p>
                <p className="text-xs text-success flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  +12.5% vs last quarter
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Active Deals</p>
                  <Target className="w-4 h-4 text-primary" />
                </div>
                <p className="text-2xl font-bold text-foreground">32</p>
                <p className="text-xs text-success flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  +6 new this month
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Avg. ROI</p>
                  <BarChart3 className="w-4 h-4 text-primary" />
                </div>
                <p className="text-2xl font-bold text-foreground">11.8%</p>
                <p className="text-xs text-success flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  +1.2% vs target
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                  <Calendar className="w-4 h-4 text-primary" />
                </div>
                <p className="text-2xl font-bold text-foreground">94%</p>
                <p className="text-xs text-muted-foreground">Deals fully funded</p>
              </CardContent>
            </Card>
          </div>

          {/* Sector Performance */}
            <Card className="bg-card border-0 shadow-elegant">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-card-foreground">Sector Performance (Last 30 Days)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {marketData.map((sector, index) => (
                    <div key={index} className="flex items-center justify-between p-6 bg-gradient-to-r from-muted/20 to-muted/10 rounded-xl border border-border/50 hover:border-primary/20 transition-all duration-200">
                      <div className="flex items-center gap-6">
                        <div className="text-lg font-bold text-card-foreground">{sector.sector}</div>
                        <Badge 
                          variant={sector.trend === "up" ? "default" : "secondary"}
                          className={`flex items-center gap-1 px-3 py-1 font-semibold ${
                            sector.trend === "up" 
                              ? "bg-success/10 text-success border-success/20" 
                              : "bg-destructive/10 text-destructive border-destructive/20"
                          }`}
                        >
                          {sector.trend === "up" ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                          {sector.performance}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg text-card-foreground">{sector.volume}</p>
                        <p className="text-sm text-muted-foreground font-medium">{sector.deals} deals</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="sectors" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {marketData.map((sector, index) => (
              <Card key={index} className="bg-card border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{sector.sector}</CardTitle>
                    <Badge variant={sector.trend === "up" ? "success" : "destructive"}>
                      {sector.performance}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Volume</p>
                      <p className="text-xl font-bold text-foreground">{sector.volume}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Active Deals</p>
                      <p className="text-xl font-bold text-foreground">{sector.deals}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Market Share</span>
                      <span>{Math.round((parseInt(sector.volume.replace('£', '').replace('M', '')) / 315) * 100)}%</span>
                    </div>
                    <Progress value={(parseInt(sector.volume.replace('£', '').replace('M', '')) / 315) * 100} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="deals" className="mt-6">
          <div className="space-y-6">
            {topDeals.map((deal, index) => (
              <Card key={index} className="bg-card border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-1">{deal.name}</h3>
                      <Badge variant="secondary">{deal.type}</Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span className="font-medium">{deal.progress}%</span>
                      </div>
                      <Progress value={deal.progress} />
                      <p className="text-xs text-muted-foreground">
                        {deal.raised} of {deal.target}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="text-lg font-bold text-foreground">{deal.investors.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">Investors</p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-success">{deal.roi}</p>
                        <p className="text-xs text-muted-foreground">Expected ROI</p>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Badge variant="success" className="text-xs">
                        Trending
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="insights" className="mt-6">
          <div className="space-y-6">
            {insights.map((insight, index) => (
              <Card key={index} className="bg-card border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-foreground mb-2">{insight.title}</h3>
                      <p className="text-muted-foreground">{insight.description}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant={insight.impact === "High" ? "destructive" : "secondary"}>
                        {insight.impact} Impact
                      </Badge>
                      <p className="text-xs text-muted-foreground">{insight.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}