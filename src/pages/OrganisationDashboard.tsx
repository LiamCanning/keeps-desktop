import { useState } from "react";
import { TrendingUp, Users, MapPin, Calendar, MessageSquare, Bell, Target, PieChart, BarChart, Clock, Banknote } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { OrganisationLogin } from "@/components/OrganisationLogin";
import { InvestorMessaging } from "@/components/InvestorMessaging";

export default function OrganisationDashboard() {
  const [selectedMetric, setSelectedMetric] = useState("overview");
  const [showLogin, setShowLogin] = useState(() => {
    // Check if user is already logged in
    return !localStorage.getItem("mclaren-admin-logged-in");
  });

  if (showLogin) {
    return (
      <div className="relative min-h-screen bg-background flex items-center justify-center p-0 overflow-hidden -mx-4 sm:-mx-6 -mt-4 sm:-mt-6 -mb-4 sm:-mb-6">
        {/* Background image for desktop */}
        <div className="hidden md:block absolute inset-0 z-0 pointer-events-none">
          <img
            src="/lovable-uploads/f9489b3f-9784-4b93-8f3d-77f58cba7577.png"
            alt="Formula 1 racing background"
            className="w-full h-full object-cover opacity-60"
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-background/50" />
        </div>
        <Card className="w-full max-w-md relative z-20 bg-gradient-to-br from-background/95 to-background/90 backdrop-blur-lg border border-primary/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl w-fit shadow-lg backdrop-blur-sm">
              <OptimizedImage
                src="/lovable-uploads/10864fdf-2d7a-4243-a715-724e5ddfb866.png"
                alt="McLaren Racing logo"
                className="w-16 h-16 object-contain"
              />
            </div>
            <CardTitle className="text-2xl">McLaren Employee Portal</CardTitle>
            <p className="text-muted-foreground">Access your organisation dashboard and investor analytics</p>
          </CardHeader>
          <CardContent>
            <OrganisationLogin onLoginSuccess={() => setShowLogin(false)} />
            <Button 
              variant="ghost" 
              className="w-full mt-4"
              onClick={() => {
                localStorage.setItem("mclaren-admin-logged-in", "true");
                setShowLogin(false);
              }}
            >
              Continue as Demo User
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 xl:p-8 space-y-6 max-w-7xl mx-auto 2xl:max-w-none 2xl:w-full 2xl:mx-0 2xl:px-8 min-[1800px]:px-12">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
        <div className="p-4 bg-white rounded-2xl shadow-lg border">
          <OptimizedImage
            src={"/lovable-uploads/10864fdf-2d7a-4243-a715-724e5ddfb866.png"}
            alt="McLaren Racing logo"
            className="w-16 h-16 object-contain"
          />
        </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gradient">McLaren Racing Dashboard</h1>
            <p className="text-lg text-muted-foreground">Organisation insights and investor metrics</p>
            <Badge variant="success" className="text-sm">Live Asset</Badge>
          </div>
        </div>
        <Button 
          variant="outline" 
          onClick={() => {
            localStorage.removeItem("mclaren-admin-logged-in");
            setShowLogin(true);
          }}
        >
          Logout
        </Button>
      </div>

      {/* Key Investor Insights */}
      <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 border border-primary/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
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
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-primary/30 to-primary/20 rounded-xl shadow-sm">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Investors</p>
                <p className="text-2xl font-bold">8,750</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-success/10 to-success/5 border border-success/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-success/30 to-success/20 rounded-xl shadow-sm">
                <Banknote className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Raised</p>
                <p className="text-2xl font-bold">£92M</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-warning/10 to-warning/5 border border-warning/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-warning/30 to-warning/20 rounded-xl shadow-sm">
                <Clock className="w-5 h-5 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Avg. Time on Page</p>
                <p className="text-2xl font-bold">4.2m</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-accent/30 to-accent/20 rounded-xl shadow-sm">
                <Target className="w-5 h-5 text-accent" />
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
        <Card className="bg-gradient-to-br from-background/80 to-muted/20 border border-primary/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
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
        <Card className="bg-gradient-to-br from-background/80 to-muted/20 border border-primary/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
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
          <Card className="bg-gradient-to-br from-background/80 to-muted/20 border border-primary/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Global Investor Distribution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  { location: "London, UK", percentage: 18, count: "512 investors", flag: "🇬🇧" },
                  { location: "New York, USA", percentage: 15, count: "427 investors", flag: "🇺🇸" },
                  { location: "Dubai, UAE", percentage: 12, count: "341 investors", flag: "🇦🇪" },
                  { location: "Singapore", percentage: 10, count: "285 investors", flag: "🇸🇬" },
                  { location: "Sydney, Australia", percentage: 8, count: "228 investors", flag: "🇦🇺" },
                  { location: "Tokyo, Japan", percentage: 7, count: "199 investors", flag: "🇯🇵" },
                  { location: "Toronto, Canada", percentage: 6, count: "171 investors", flag: "🇨🇦" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{item.flag}</span>
                      <div>
                        <p className="text-sm font-medium">{item.location}</p>
                        <p className="text-xs text-muted-foreground">{item.count}</p>
                      </div>
                    </div>
                    <Badge variant="secondary">{item.percentage}%</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* McLaren Store Marketing */}
          <Card className="bg-gradient-to-br from-primary/8 to-accent/8 border border-primary/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                McLaren Store Marketing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/5 rounded-xl border border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Bell className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Exclusive McLaren Store Offers</h4>
                    <p className="text-sm text-muted-foreground">Send premium discounts to your investor community</p>
                  </div>
                </div>
                
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg border border-primary/10 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Current Offer Available:</span>
                    <Badge variant="success">20% OFF</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Exclusive 20% discount on McLaren team wear, F1 memorabilia, and limited edition merchandise from mclarenstore.com
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>Valid until: 31st August 2025</span>
                    <span>•</span>
                    <span>Minimum spend: £50</span>
                  </div>
                </div>
                
                <Button size="sm" className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                  Send Store Discount to All Investors
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-muted/10 rounded-lg border">
                  <p className="text-sm font-medium">Total Sent</p>
                  <p className="text-xl font-bold text-primary">1,247</p>
                </div>
                <div className="p-3 bg-muted/10 rounded-lg border">
                  <p className="text-sm font-medium">Purchase Rate</p>
                  <p className="text-xl font-bold text-success">34.2%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Investor Performance Section - Made landscape to match Recent Activity */}
          <Card className="bg-gradient-to-br from-background/80 to-muted/20 border border-primary/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Investor Performance Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-gradient-to-r from-success/10 to-success/5 rounded-lg border border-success/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        <span className="font-medium text-success text-sm">Retention Rate</span>
                      </div>
                      <p className="text-xl font-bold">92.4%</p>
                    </div>
                    <p className="text-xs text-muted-foreground">12-month retention</p>
                  </div>
                </div>
                
                <div className="p-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="font-medium text-primary text-sm">Avg Investment</span>
                      </div>
                      <p className="text-xl font-bold">£84K</p>
                    </div>
                    <p className="text-xs text-muted-foreground">Per investor</p>
                  </div>
                </div>
                
                <div className="p-3 bg-gradient-to-r from-warning/10 to-warning/5 rounded-lg border border-warning/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 bg-warning rounded-full"></div>
                        <span className="font-medium text-warning text-sm">Engagement Score</span>
                      </div>
                      <p className="text-xl font-bold">8.7/10</p>
                    </div>
                    <p className="text-xs text-muted-foreground">Platform engagement</p>
                  </div>
                </div>
                
                <div className="p-3 bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg border border-accent/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="font-medium text-sm">ROI Satisfaction</span>
                      </div>
                      <p className="text-xl font-bold">94%</p>
                    </div>
                    <p className="text-xs text-muted-foreground">Satisfied with returns</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
      </div>

      {/* Investor Communications */}
      <InvestorMessaging />

      {/* Recent Activity */}
      <Card className="bg-gradient-to-br from-background/80 to-muted/20 border border-primary/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
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