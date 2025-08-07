import { useState } from "react";
import { TrendingUp, TrendingDown, BarChart3, PieChart, DollarSign, Calendar, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

export default function PortfolioPerformance() {
  const [activeTab, setActiveTab] = useState("overview");

  const portfolioData = {
    totalValue: 302355,
    totalInvested: 250000,
    totalReturn: 52355,
    returnPercent: 20.9,
    assets: [
      {
        name: "Liverpool FC",
        value: 28750,
        invested: 25000,
        return: 3750,
        returnPercent: 15.0,
        allocation: 9.5
      },
      {
        name: "McLaren Racing", 
        value: 244000,
        invested: 200000,
        return: 44000,
        returnPercent: 22.0,
        allocation: 80.7
      },
      {
        name: "Ryder Cup",
        value: 17805,
        invested: 15000,
        return: 2805,
        returnPercent: 18.7,
        allocation: 5.9
      },
      {
        name: "Ohio State",
        value: 11800,
        invested: 10000,
        return: 1800,
        returnPercent: 18.0,
        allocation: 3.9
      }
    ]
  };

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gradient">Portfolio Performance</h1>
        <p className="text-lg text-muted-foreground">Track your investment returns and analytics</p>
      </div>

      {/* Performance Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="card-elevated p-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Total Portfolio Value</p>
            <p className="text-3xl font-bold text-card-foreground">£{portfolioData.totalValue.toLocaleString()}</p>
            <div className="flex items-center gap-2">
              <span className="text-success font-semibold">+£{portfolioData.totalReturn.toLocaleString()}</span>
              <Badge variant="success" className="flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                +{portfolioData.returnPercent}%
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
              <p className="font-semibold text-xl text-card-foreground">£{portfolioData.totalInvested.toLocaleString()}</p>
            </div>
          </div>
        </Card>
        
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-success/20 rounded-lg">
              <TrendingUp className="w-5 h-5 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Best Performer</p>
              <p className="font-semibold text-xl text-card-foreground">McLaren Racing</p>
            </div>
          </div>
        </Card>

        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-warning/20 rounded-lg">
              <BarChart3 className="w-5 h-5 text-warning" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Avg Return</p>
              <p className="font-semibold text-xl text-card-foreground">18.4%</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Performance Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
          <TabsTrigger value="overview">Performance Overview</TabsTrigger>
          <TabsTrigger value="allocation">Asset Allocation</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <Card className="card-professional">
            <CardHeader>
              <CardTitle>Asset Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {portfolioData.assets.map((asset, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">{asset.name}</h4>
                      <Badge variant={asset.returnPercent > 0 ? "success" : "destructive"}>
                        {asset.returnPercent > 0 ? "+" : ""}{asset.returnPercent}%
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Current Value</p>
                        <p className="font-semibold">£{asset.value.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Invested</p>
                        <p className="font-semibold">£{asset.invested.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Return</p>
                        <p className={`font-semibold ${asset.return > 0 ? 'text-success' : 'text-destructive'}`}>
                          {asset.return > 0 ? "+" : ""}£{asset.return.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="allocation" className="mt-6">
          <Card className="card-professional">
            <CardHeader>
              <CardTitle>Portfolio Allocation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {portfolioData.assets.map((asset, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-card-foreground">{asset.name}</span>
                      <span className="text-muted-foreground">{asset.allocation}%</span>
                    </div>
                    <Progress value={asset.allocation} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Risk Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Portfolio Risk Level</p>
                    <Badge variant="warning">Medium Risk</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Diversification Score</p>
                    <Progress value={65} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">65/100 - Consider diversifying across more sectors</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sharpe Ratio</span>
                    <span className="font-semibold">1.24</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Volatility</span>
                    <span className="font-semibold">12.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Max Drawdown</span>
                    <span className="font-semibold">-5.2%</span>
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