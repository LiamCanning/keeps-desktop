import { useState } from "react";
import { TrendingUp, Users, MapPin, Calendar, MessageSquare, Bell, Target, PieChart, BarChart, Clock, Banknote } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { OptimizedImage } from "@/components/ui/optimized-image";

export default function OrganisationDashboard() {
  const [selectedMetric, setSelectedMetric] = useState("overview");

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex items-center gap-6">
        <div className="p-4 bg-white rounded-2xl shadow-lg border">
          <OptimizedImage
            src="/lovable-uploads/6ce10e58-9e3e-4723-a481-326f200edc4e.png"
            alt="McLaren F1 logo"
            className="w-16 h-16 object-contain"
          />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gradient">McLaren F1 Dashboard</h1>
          <p className="text-lg text-muted-foreground">Organisation insights and investor metrics</p>
          <Badge variant="success" className="text-sm">Live Asset</Badge>
        </div>
      </div>

      {/* Key Investor Insights */}
      <Card className="card-professional bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Users className="w-5 h-5" />
            Key Investor Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            McLaren F1's investor base demonstrates exceptional engagement with Formula 1 and motorsport technology. 
            The majority are high-net-worth individuals aged 35-55 who value innovation, performance, and exclusive experiences. 
            These investors show strong brand loyalty and are motivated by both financial returns and access to McLaren's 
            cutting-edge technology and racing heritage. Average investment sizes are significantly above platform average, 
            indicating confidence in the team's performance and commercial strategy.
          </p>
        </CardContent>
      </Card>

      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="card-professional">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/20 rounded-lg">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Investors</p>
                <p className="text-2xl font-bold">2,847</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-professional">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-success/20 rounded-lg">
                <Banknote className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Raised</p>
                <p className="text-2xl font-bold">£92M</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-professional">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-warning/20 rounded-lg">
                <Clock className="w-5 h-5 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Avg. Time on Page</p>
                <p className="text-2xl font-bold">4.2m</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-professional">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Funding Progress</p>
                <p className="text-2xl font-bold">92%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Investor Demographics */}
        <Card className="card-professional">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <PieChart className="w-5 h-5" />
              Investor Age Demographics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">25-34 years</span>
                <span className="font-semibold">18%</span>
              </div>
              <Progress value={18} className="h-2" />
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">35-44 years</span>
                <span className="font-semibold">42%</span>
              </div>
              <Progress value={42} className="h-2" />
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">45-54 years</span>
                <span className="font-semibold">28%</span>
              </div>
              <Progress value={28} className="h-2" />
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">55+ years</span>
                <span className="font-semibold">12%</span>
              </div>
              <Progress value={12} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Investment by Age Category */}
        <Card className="card-professional">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <BarChart className="w-5 h-5" />
              Average Investment by Age
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                <span className="text-sm font-medium">25-34 years</span>
                <span className="font-bold text-primary">£28,500</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                <span className="text-sm font-medium">35-44 years</span>
                <span className="font-bold text-primary">£45,200</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                <span className="text-sm font-medium">45-54 years</span>
                <span className="font-bold text-primary">£62,800</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                <span className="text-sm font-medium">55+ years</span>
                <span className="font-bold text-primary">£78,900</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Geographic Distribution */}
        <Card className="card-professional">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Top Investor Locations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {[
                { location: "London, UK", percentage: 24, count: "683 investors" },
                { location: "Manchester, UK", percentage: 18, count: "512 investors" },
                { location: "Birmingham, UK", percentage: 12, count: "341 investors" },
                { location: "Edinburgh, UK", percentage: 8, count: "228 investors" },
                { location: "Bristol, UK", percentage: 6, count: "171 investors" }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">{item.location}</p>
                    <p className="text-xs text-muted-foreground">{item.count}</p>
                  </div>
                  <Badge variant="secondary">{item.percentage}%</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Marketing Section */}
        <Card className="card-professional">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Marketing Tools
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/20">
              <div className="flex items-center gap-2 mb-3">
                <Bell className="w-5 h-5 text-primary" />
                <h4 className="font-semibold">Push Notifications</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Send targeted merchandise offers and exclusive experiences directly to your investors.
              </p>
              <Button size="sm" className="w-full">
                Send Notification to Investors
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-muted/20 rounded-lg text-center">
                <p className="text-sm text-muted-foreground">This Month</p>
                <p className="text-xl font-bold">12</p>
                <p className="text-xs text-muted-foreground">Notifications Sent</p>
              </div>
              <div className="p-3 bg-muted/20 rounded-lg text-center">
                <p className="text-sm text-muted-foreground">Avg. Open Rate</p>
                <p className="text-xl font-bold text-success">86%</p>
                <p className="text-xs text-muted-foreground">Above Industry</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="card-professional">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Recent Investor Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { time: "2 hours ago", action: "New investor joined Platinum tier", amount: "£35,000" },
              { time: "5 hours ago", action: "Merchandise notification sent", recipients: "2,847 investors" },
              { time: "1 day ago", action: "Quarterly update published", engagement: "94% open rate" },
              { time: "2 days ago", action: "VIP paddock experience sold out", tier: "Diamond tier" },
              { time: "3 days ago", action: "New investor joined Gold tier", amount: "£15,000" }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/10 rounded-lg">
                <div>
                  <p className="text-sm font-medium">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
                <Badge variant="outline">
                  {activity.amount || activity.recipients || activity.engagement || activity.tier}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}