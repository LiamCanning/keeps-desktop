import { useState } from "react";
import { TrendingUp, Users, MapPin, Calendar, MessageSquare, Bell, Target, PieChart, BarChart, Clock, Banknote, Trophy, ChevronRight, Ticket, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { OrganisationLogin } from "@/components/OrganisationLogin";
import { InvestorMessagingAO } from "@/components/InvestorMessagingAO";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export default function OrganisationDashboardAustralianOpen() {
  const [selectedMetric, setSelectedMetric] = useState("overview");
  const [showLogin, setShowLogin] = useState(() => {
    return !localStorage.getItem("australianopen-admin-logged-in");
  });

  if (showLogin) {
    return (
      <div className="relative min-h-screen bg-background flex items-center justify-center p-0 overflow-hidden -mx-4 sm:-mx-6 -mt-4 sm:-mt-6 -mb-4 sm:-mb-6">
        <div className="hidden md:block absolute inset-0 z-0 pointer-events-none">
          <img
            src="/lovable-uploads/australian-open-background.png"
            alt="Australian Open tennis court background"
            className="w-full h-full object-cover opacity-60"
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-background/50" />
        </div>
        <Card className="w-full max-w-md relative z-20 bg-gradient-to-br from-background/95 to-background/90 backdrop-blur-lg border border-primary/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl w-fit shadow-lg backdrop-blur-sm">
              <OptimizedImage
                src="/lovable-uploads/australian-open-logo.png"
                alt="Australian Open logo"
                className="w-16 h-16 object-contain"
              />
            </div>
            <CardTitle className="text-2xl">Australian Open Employee Portal</CardTitle>
            <p className="text-muted-foreground">Access your organisation dashboard and investor analytics</p>
          </CardHeader>
          <CardContent>
            <OrganisationLogin 
              onLoginSuccess={() => setShowLogin(false)}
              logoSrc="/lovable-uploads/australian-open-logo.png"
              logoAlt="Australian Open logo"
              title="Australian Open Employee Access"
              description="Access your organization dashboard and analytics"
              demoEmail="admin@australianopen.com"
              demoPassword="ausopen2024"
              storageKey="australianopen-admin-logged-in"
            />
            <Button 
              variant="ghost" 
              className="w-full mt-4"
              onClick={() => {
                localStorage.setItem("australianopen-admin-logged-in", "true");
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
          <div className="p-4 bg-[#0085CA] rounded-2xl shadow-lg border">
            <OptimizedImage
              src="/lovable-uploads/australian-open-logo.png"
              alt="Australian Open logo"
              className="w-16 h-16 object-contain"
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gradient">Australian Open Dashboard</h1>
            <p className="text-lg text-muted-foreground">Organisation insights and investor metrics</p>
            <Badge variant="success" className="text-sm">SOLD OUT - 2,500 Debentures</Badge>
          </div>
        </div>
        <Button 
          variant="outline" 
          onClick={() => {
            localStorage.removeItem("australianopen-admin-logged-in");
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
            Australian Open debenture holders are passionate tennis enthusiasts and Grand Slam fans spanning two tiers: Platinum (2,000 holders at £25k) and Diamond (500 holders at £50k). The majority are aged 35-54 with strong Australian and Asia-Pacific representation. Diamond tier holders show 31% representation in the 55+ demographic, reflecting higher investment capacity. These investors value exclusivity, access to world-class tennis, and premium hospitality experiences, with benefit utilization rates ranging from 78% (younger investors) to 92% (55+ demographic). Additional spending averages £1,980-£4,630 per investor annually on merchandise and hospitality upgrades.
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
                <p className="text-2xl font-bold">2,500</p>
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
                <p className="text-2xl font-bold">£75M</p>
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
                <p className="text-2xl font-bold">5.8m</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-primary/30 to-primary/20 rounded-xl shadow-sm">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Funding Progress</p>
                <p className="text-2xl font-bold">100%</p>
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
                <span className="font-semibold">32%</span>
              </div>
              <Progress value={32} className="h-2" />
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">45-54 years</span>
                <span className="font-semibold">35%</span>
              </div>
              <Progress value={35} className="h-2" />
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">55+ years</span>
                <span className="font-semibold">15%</span>
              </div>
              <Progress value={15} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Age Demographics: Tier Distribution & Engagement */}
        <Card className="bg-gradient-to-br from-background/80 to-muted/20 border border-primary/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <BarChart className="w-5 h-5" />
              Age Demographics: Tier Distribution & Engagement
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {/* 25-34 years */}
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-primary/5 transition-colors">
                <div className="flex items-center gap-3">
                  <ChevronRight className="w-4 h-4 text-primary" />
                  <span className="font-semibold">25-34 years</span>
                  <span className="text-sm text-muted-foreground">• 450 investors (18%)</span>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-7 pt-3 space-y-3">
                <div>
                  <div className="text-sm font-medium mb-2">Tier Distribution</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Platinum (405)</span>
                      <span className="text-muted-foreground">90%</span>
                    </div>
                    <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500" style={{ width: '90%' }} />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Diamond (45)</span>
                      <span className="text-muted-foreground">10%</span>
                    </div>
                    <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500" style={{ width: '10%' }} />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-background/50 rounded-lg">
                    <div className="text-xs text-muted-foreground">Avg. Additional Spending</div>
                    <div className="text-lg font-semibold">£1,980</div>
                  </div>
                  <div className="p-3 bg-background/50 rounded-lg">
                    <div className="text-xs text-muted-foreground">Benefit Utilization</div>
                    <div className="text-lg font-semibold">78%</div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* 35-44 years */}
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-primary/5 transition-colors">
                <div className="flex items-center gap-3">
                  <ChevronRight className="w-4 h-4 text-primary" />
                  <span className="font-semibold">35-44 years</span>
                  <span className="text-sm text-muted-foreground">• 800 investors (32%)</span>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-7 pt-3 space-y-3">
                <div>
                  <div className="text-sm font-medium mb-2">Tier Distribution</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Platinum (680)</span>
                      <span className="text-muted-foreground">85%</span>
                    </div>
                    <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500" style={{ width: '85%' }} />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Diamond (120)</span>
                      <span className="text-muted-foreground">15%</span>
                    </div>
                    <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500" style={{ width: '15%' }} />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-background/50 rounded-lg">
                    <div className="text-xs text-muted-foreground">Avg. Additional Spending</div>
                    <div className="text-lg font-semibold">£3,000</div>
                  </div>
                  <div className="p-3 bg-background/50 rounded-lg">
                    <div className="text-xs text-muted-foreground">Benefit Utilization</div>
                    <div className="text-lg font-semibold">84%</div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* 45-54 years */}
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-primary/5 transition-colors">
                <div className="flex items-center gap-3">
                  <ChevronRight className="w-4 h-4 text-primary" />
                  <span className="font-semibold">45-54 years</span>
                  <span className="text-sm text-muted-foreground">• 875 investors (35%)</span>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-7 pt-3 space-y-3">
                <div>
                  <div className="text-sm font-medium mb-2">Tier Distribution</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Platinum (655)</span>
                      <span className="text-muted-foreground">75%</span>
                    </div>
                    <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500" style={{ width: '75%' }} />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Diamond (220)</span>
                      <span className="text-muted-foreground">25%</span>
                    </div>
                    <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500" style={{ width: '25%' }} />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-background/50 rounded-lg">
                    <div className="text-xs text-muted-foreground">Avg. Additional Spending</div>
                    <div className="text-lg font-semibold">£3,820</div>
                  </div>
                  <div className="p-3 bg-background/50 rounded-lg">
                    <div className="text-xs text-muted-foreground">Benefit Utilization</div>
                    <div className="text-lg font-semibold">89%</div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* 55+ years */}
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-primary/5 transition-colors">
                <div className="flex items-center gap-3">
                  <ChevronRight className="w-4 h-4 text-primary" />
                  <span className="font-semibold">55+ years</span>
                  <span className="text-sm text-muted-foreground">• 375 investors (15%)</span>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-7 pt-3 space-y-3">
                <div>
                  <div className="text-sm font-medium mb-2">Tier Distribution</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Platinum (260)</span>
                      <span className="text-muted-foreground">69%</span>
                    </div>
                    <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500" style={{ width: '69%' }} />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Diamond (115)</span>
                      <span className="text-muted-foreground">31%</span>
                    </div>
                    <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500" style={{ width: '31%' }} />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-background/50 rounded-lg">
                    <div className="text-xs text-muted-foreground">Avg. Additional Spending</div>
                    <div className="text-lg font-semibold">£4,630</div>
                  </div>
                  <div className="p-3 bg-background/50 rounded-lg">
                    <div className="text-xs text-muted-foreground">Benefit Utilization</div>
                    <div className="text-lg font-semibold">92%</div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
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
                { location: "Melbourne, Australia", percentage: 32, count: "800 investors", flag: "🇦🇺" },
                { location: "Sydney, Australia", percentage: 18, count: "450 investors", flag: "🇦🇺" },
                { location: "Singapore", percentage: 12, count: "300 investors", flag: "🇸🇬" },
                { location: "Hong Kong", percentage: 10, count: "250 investors", flag: "🇭🇰" },
                { location: "London, UK", percentage: 8, count: "200 investors", flag: "🇬🇧" },
                { location: "Tokyo, Japan", percentage: 7, count: "175 investors", flag: "🇯🇵" },
                { location: "Auckland, New Zealand", percentage: 5, count: "125 investors", flag: "🇳🇿" },
                { location: "Perth, Australia", percentage: 4, count: "100 investors", flag: "🇦🇺" },
                { location: "Brisbane, Australia", percentage: 4, count: "100 investors", flag: "🇦🇺" }
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

        {/* Australian Open Store Marketing */}
        <Card className="bg-gradient-to-br from-primary/8 to-accent/8 border border-primary/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Australian Open Store Marketing
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/5 rounded-xl border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Bell className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Exclusive AO Store Offers</h4>
                  <p className="text-sm text-muted-foreground">Send premium discounts to your investor community</p>
                </div>
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg border border-primary/10 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Current Offer Available:</span>
                  <Badge variant="success">25% OFF</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Exclusive 25% discount on official Australian Open merchandise, premium apparel, championship collectibles, and limited-edition items from the AO Store
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>Valid until: 31st December 2025</span>
                  <span>•</span>
                  <span>Minimum spend: AUD $75</span>
                </div>
              </div>
              
              <Button size="sm" className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                Send Store Discount to All Investors
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-muted/10 rounded-lg border">
                <p className="text-sm font-medium">Total Sent</p>
                <p className="text-xl font-bold text-primary">2,387</p>
              </div>
              <div className="p-3 bg-muted/10 rounded-lg border">
                <p className="text-sm font-medium">Purchase Rate</p>
                <p className="text-xl font-bold text-success">43.2%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Session & Court Preferences */}
        <Card className="bg-gradient-to-br from-background/80 to-muted/20 border border-primary/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Session & Court Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Day Sessions (11am-5pm)</span>
                  <span className="font-semibold">38%</span>
                </div>
                <Progress value={38} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Night Sessions (7pm-11pm)</span>
                  <span className="font-semibold">62%</span>
                </div>
                <Progress value={62} className="h-2" />
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm font-medium mb-3">Court Preferences</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-muted/20 rounded">
                    <span className="text-sm">Rod Laver Arena</span>
                    <Badge>68%</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted/20 rounded">
                    <span className="text-sm">Margaret Court Arena</span>
                    <Badge variant="secondary">22%</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted/20 rounded">
                    <span className="text-sm">John Cain Arena</span>
                    <Badge variant="secondary">10%</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Premium Experience Analytics */}
        <Card className="bg-gradient-to-br from-background/80 to-muted/20 border border-primary/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Premium Experience Uptake
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-3 bg-gradient-to-r from-success/10 to-success/5 rounded-lg border border-success/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Hospitality Packages Used</p>
                    <p className="text-xl font-bold">84%</p>
                  </div>
                  <p className="text-xs text-muted-foreground">1,680 investors</p>
                </div>
              </div>
              
              <div className="p-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Player Meet-and-Greet Interest</p>
                    <p className="text-xl font-bold">92%</p>
                  </div>
                  <p className="text-xs text-muted-foreground">1,840 investors</p>
                </div>
              </div>

              <div className="p-3 bg-gradient-to-r from-warning/10 to-warning/5 rounded-lg border border-warning/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Behind-the-Scenes Tours</p>
                    <p className="text-xl font-bold">76%</p>
                  </div>
                  <p className="text-xs text-muted-foreground">1,520 investors</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Investor Performance Section */}
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
                      <span className="font-medium text-success text-sm">Debenture Holder Retention Rate</span>
                    </div>
                    <p className="text-xl font-bold">72%</p>
                  </div>
                  <p className="text-xs text-muted-foreground">Investors retaining debentures (not reselling)</p>
                </div>
              </div>
              
              <div className="p-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="font-medium text-primary text-sm">Average Investment Value</span>
                    </div>
                    <p className="text-xl font-bold">£26,250</p>
                  </div>
                  <p className="text-xs text-muted-foreground">Per debenture</p>
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
                  <p className="text-xs text-muted-foreground">Event attendance & communications</p>
                </div>
              </div>

              <div className="p-3 bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg border border-accent/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="font-medium text-accent text-sm">Referral Rate</span>
                    </div>
                    <p className="text-xl font-bold">18.4%</p>
                  </div>
                  <p className="text-xs text-muted-foreground">Investors referring new prospects</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Secondary Market Activity */}
        <Card className="bg-gradient-to-br from-background/80 to-muted/20 border border-primary/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Secondary Market Activity
            </CardTitle>
            <CardDescription>Trading activity for debentures and individual tickets</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Debenture Sales */}
            <div className="p-4 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-lg border border-blue-500/20">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-blue-500" />
                <h4 className="font-semibold">Debenture Sales</h4>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-xs text-muted-foreground">Trading Volume</div>
                  <div className="text-lg font-bold">187 debentures</div>
                  <div className="text-xs text-muted-foreground mt-1">7.5% of total</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Avg. Sale Price</div>
                  <div className="text-lg font-bold">£32,400</div>
                  <Badge variant="secondary" className="mt-1 bg-green-500/10 text-green-700 dark:text-green-400">
                    +29.6% vs primary
                  </Badge>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Total Volume</div>
                  <div className="text-lg font-bold">£6.06M</div>
                </div>
              </div>
            </div>

            {/* Individual Ticket Sales */}
            <div className="p-4 bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-lg border border-purple-500/20">
              <div className="flex items-center gap-2 mb-3">
                <Ticket className="w-5 h-5 text-purple-500" />
                <h4 className="font-semibold">Individual Ticket Sales</h4>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-xs text-muted-foreground">Trading Volume</div>
                  <div className="text-lg font-bold">4,823 tickets</div>
                  <div className="text-xs text-muted-foreground mt-1">Various sessions</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Avg. Sale Price</div>
                  <div className="text-lg font-bold">£145</div>
                  <div className="text-xs text-muted-foreground mt-1">per ticket</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Total Volume</div>
                  <div className="text-lg font-bold">£699K</div>
                </div>
              </div>
            </div>

            {/* Market Insights */}
            <div className="p-4 bg-muted/30 rounded-lg border border-primary/10">
              <div className="flex items-center gap-2 mb-3">
                <BarChart className="w-5 h-5 text-primary" />
                <h4 className="font-semibold">Market Insights</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                  <span><strong>Most Active Category:</strong> Quarter-Final Tickets</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                  <span><strong>Peak Trading Period:</strong> November-December 2024</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                  <span><strong>Price Premium:</strong> Diamond debentures +35% vs Platinum</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Investor Communications */}
        <Card className="bg-gradient-to-br from-background/80 to-muted/20 border border-primary/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Investor Communications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <InvestorMessagingAO />
          </CardContent>
        </Card>

        {/* Recent Investor Activity */}
        <Card className="bg-gradient-to-br from-background/80 to-muted/20 border border-primary/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Recent Investor Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { action: "500 Diamond tier investors automatically entered into Carlos Alcaraz racquet raffle", time: "1 hour ago", type: "raffle" },
                { action: "1,847 Platinum tier investors opted into raffle (92.4% opt-in rate)", time: "2 hours ago", type: "raffle" },
                { action: "2,387 investors received AO Store 25% discount offer", time: "3 hours ago", type: "store" },
                { action: "2,500 investors confirmed attendance for AO 2026", time: "1 day ago", type: "event" },
                { action: "Player meet-and-greet schedule published for both tiers", time: "2 days ago", type: "event" },
                { action: "Updated hospitality menu released for Championship Week", time: "3 days ago", type: "hospitality" },
                { action: "1,032 investors registered for behind-the-scenes tour", time: "4 days ago", type: "event" },
                { action: "Newsletter sent: 'Road to AO 2026 - Tournament Updates'", time: "5 days ago", type: "communication" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-muted/5 rounded-lg border border-primary/5 hover:border-primary/20 transition-colors">
                  <div className="mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{item.action}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.time}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">{item.type}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
