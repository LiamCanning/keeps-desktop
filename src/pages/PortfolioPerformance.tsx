import { useState } from "react";
import { TrendingUp, TrendingDown, BarChart3, PieChart, DollarSign, Calendar, Target, Activity, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RechartsPieChart, Cell } from "recharts";

export default function PortfolioPerformance() {
  const [activeTab, setActiveTab] = useState("overview");

  // Historical performance data
  const performanceData = [
    { month: "Jul", value: 275000, liverpoolFC: 25000, mclaren: 200000, ryderCup: 50000, return: 0 },
    { month: "Aug", value: 290000, liverpoolFC: 26200, mclaren: 215000, ryderCup: 52800, return: 5.5 },
    { month: "Sep", value: 303000, liverpoolFC: 27100, mclaren: 225000, ryderCup: 55400, return: 10.2 },
    { month: "Oct", value: 310000, liverpoolFC: 27800, mclaren: 230000, ryderCup: 56900, return: 12.7 },
    { month: "Nov", value: 320000, liverpoolFC: 28200, mclaren: 238000, ryderCup: 58300, return: 16.4 },
    { month: "Dec", value: 327355, liverpoolFC: 28750, mclaren: 244000, ryderCup: 59350, return: 19.0 }
  ];

  // Volatility data
  const volatilityData = [
    { asset: "Liverpool FC", volatility: 8.5, sharpe: 1.8 },
    { asset: "McLaren Racing", volatility: 12.3, sharpe: 1.9 },
    { asset: "Ryder Cup", volatility: 6.2, sharpe: 2.1 }
  ];

  // Risk metrics
  const riskMetrics = [
    { metric: "Portfolio Beta", value: "0.87", good: true },
    { metric: "Value at Risk (95%)", value: "£12,450", good: false },
    { metric: "Max Drawdown", value: "-5.2%", good: true },
    { metric: "Correlation to Market", value: "0.65", good: true }
  ];

  const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444'];

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
        {/* Mobile tab selector */}
        <div className="md:hidden mb-3">
          <Select value={activeTab} onValueChange={setActiveTab}>
            <SelectTrigger aria-label="Select performance section">
              <SelectValue placeholder="Select section" />
            </SelectTrigger>
            <SelectContent className="z-50">
              <SelectItem value="overview">Performance Overview</SelectItem>
              <SelectItem value="charts">Advanced Charts</SelectItem>
              <SelectItem value="allocation">Asset Allocation</SelectItem>
              <SelectItem value="analytics">Risk Analytics</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <TabsList className="hidden md:grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 shadow-[var(--shadow-elegant)] rounded-md">
          <TabsTrigger value="overview">Performance Overview</TabsTrigger>
          <TabsTrigger value="charts">Advanced Charts</TabsTrigger>
          <TabsTrigger value="allocation">Asset Allocation</TabsTrigger>
          <TabsTrigger value="analytics">Risk Analytics</TabsTrigger>
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

        <TabsContent value="charts" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Portfolio Value Over Time */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-success" />
                  Portfolio Value Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))', 
                          border: '1px solid hsl(var(--border))', 
                          borderRadius: '8px' 
                        }}
                        formatter={(value) => [`£${Number(value).toLocaleString()}`, 'Portfolio Value']}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="hsl(var(--primary))" 
                        fill="hsl(var(--primary) / 0.2)" 
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Returns Percentage */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" />
                  Return Percentage Over Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))', 
                          border: '1px solid hsl(var(--border))', 
                          borderRadius: '8px' 
                        }}
                        formatter={(value) => [`${Number(value).toFixed(1)}%`, 'Return']}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="return" 
                        stroke="hsl(var(--success))" 
                        strokeWidth={3}
                        dot={{ fill: 'hsl(var(--success))', strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Asset Breakdown Chart */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-warning" />
                  Asset Value Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={performanceData.slice(-1)} layout="horizontal">
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                      <YAxis dataKey="month" type="category" stroke="hsl(var(--muted-foreground))" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))', 
                          border: '1px solid hsl(var(--border))', 
                          borderRadius: '8px' 
                        }}
                      />
                      <Bar dataKey="liverpoolFC" fill="hsl(var(--success))" name="Liverpool FC" />
                      <Bar dataKey="mclaren" fill="hsl(var(--primary))" name="McLaren Racing" />
                      <Bar dataKey="ryderCup" fill="hsl(var(--warning))" name="Ryder Cup" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Volatility Analysis */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent" />
                  Risk vs Return Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {volatilityData.map((item, index) => (
                    <div key={index} className="p-3 bg-muted/20 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-sm">{item.asset}</h4>
                        <Badge variant="outline" className="text-xs">
                          Sharpe: {item.sharpe}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span>Volatility</span>
                          <span>{item.volatility}%</span>
                        </div>
                        <Progress value={item.volatility} className="h-1" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Advanced Risk Metrics */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Advanced Risk Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {riskMetrics.map((metric, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                      <span className="text-sm font-medium">{metric.metric}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{metric.value}</span>
                        <Badge variant={metric.good ? "success" : "warning"} className="text-xs">
                          {metric.good ? "Good" : "Monitor"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Portfolio Correlation Matrix */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Asset Correlation Matrix</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-4 gap-2 text-xs text-center font-medium">
                    <div></div>
                    <div>LFC</div>
                    <div>MCL</div>
                    <div>RYD</div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div className="font-medium">LFC</div>
                    <div className="bg-success/20 p-2 rounded text-center">1.00</div>
                    <div className="bg-warning/20 p-2 rounded text-center">0.34</div>
                    <div className="bg-success/20 p-2 rounded text-center">0.12</div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div className="font-medium">MCL</div>
                    <div className="bg-warning/20 p-2 rounded text-center">0.34</div>
                    <div className="bg-success/20 p-2 rounded text-center">1.00</div>
                    <div className="bg-warning/20 p-2 rounded text-center">0.28</div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div className="font-medium">RYD</div>
                    <div className="bg-success/20 p-2 rounded text-center">0.12</div>
                    <div className="bg-warning/20 p-2 rounded text-center">0.28</div>
                    <div className="bg-success/20 p-2 rounded text-center">1.00</div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Lower correlation indicates better diversification
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Monte Carlo Simulation */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Risk Simulation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">12-Month Projections</p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-xs">Best Case (95%)</span>
                        <span className="text-xs font-semibold text-success">£385,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs">Expected (50%)</span>
                        <span className="text-xs font-semibold">£342,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs">Worst Case (5%)</span>
                        <span className="text-xs font-semibold text-destructive">£285,000</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-muted/20 rounded-lg">
                    <p className="text-xs text-muted-foreground">
                      Based on historical volatility and correlation analysis
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Diversification Recommendations */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Optimisation Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 border-l-4 border-warning bg-warning/10 rounded">
                    <p className="text-sm font-medium">Concentration Risk</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      McLaren Racing represents 80% of your portfolio. Consider reducing concentration.
                    </p>
                  </div>
                  <div className="p-3 border-l-4 border-success bg-success/10 rounded">
                    <p className="text-sm font-medium">Good Diversification</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Low correlation between assets provides good risk spread.
                    </p>
                  </div>
                  <div className="p-3 border-l-4 border-primary bg-primary/10 rounded">
                    <p className="text-sm font-medium">Opportunity</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Consider adding US sports or emerging markets for further diversification.
                    </p>
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