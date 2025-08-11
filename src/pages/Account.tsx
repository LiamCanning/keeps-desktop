import { useState } from "react";
import { Settings, Bell, Shield, CreditCard, FileText, LogOut, MapPin, Star, Building2, Smartphone, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { LogoImage } from "@/components/ui/logo-image";
import liamAvatar from "@/assets/liam-avatar.png";
import axaLogo from "@/assets/brands/axa-logo.png";
import bmwLogo from "@/assets/brands/bmw-logo.png";
import cadburyLogo from "@/assets/brands/cadbury-logo.png";
import adidasLogo from "@/assets/brands/adidas-logo.png";
import rolexLogo from "@/assets/brands/rolex-logo.png";
import santanderLogo from "@/assets/brands/santander-logo.png";


interface FavoriteTeam {
  id: string;
  name: string;
  emoji: string;
  sport: string;
}

interface DataPartner {
  id: string;
  name: string;
  logo: string;
  description: string;
  optedIn: boolean;
}

const favoriteTeams: FavoriteTeam[] = [
  { id: "1", name: "Liverpool FC", emoji: "⚽", sport: "Football" },
  { id: "2", name: "Ryder Cup", emoji: "⛳", sport: "Golf" },
  { id: "3", name: "British Cycling", emoji: "🚴", sport: "Cycling" },
  { id: "4", name: "England Cricket", emoji: "🏏", sport: "Cricket" }
];

// Brand logos mapping
const brandLogos: Record<string, string> = {
  "Adidas": adidasLogo,
  "Rolex": rolexLogo,
  "AXA": axaLogo,
  "Santander": santanderLogo,
  "BMW": bmwLogo,
  "Cadbury": cadburyLogo
};

const dataPartners: DataPartner[] = [
  {
    id: "1",
    name: "Rolex",
    logo: rolexLogo,
    description: "Luxury timepiece experiences and VIP watch exhibitions",
    optedIn: true
  },
  {
    id: "2",
    name: "AXA",
    logo: axaLogo,
    description: "Premium insurance benefits and financial planning services",
    optedIn: false
  },
  {
    id: "3",
    name: "Santander",
    logo: santanderLogo,
    description: "Banking perks and investment opportunities",
    optedIn: true
  },
  {
    id: "4",
    name: "BMW",
    logo: bmwLogo,
    description: "Luxury vehicle test drives and motorsport experiences",
    optedIn: false
  },
  {
    id: "5",
    name: "Cadbury",
    logo: cadburyLogo,
    description: "Chocolate tastings and exclusive confectionery collections",
    optedIn: true
  }
];

export default function Account() {
  const [activeTab, setActiveTab] = useState("profile");
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    marketing: true
  });

  const [partners, setPartners] = useState(dataPartners);

  const togglePartner = (partnerId: string) => {
    setPartners(partners.map(partner => 
      partner.id === partnerId 
        ? { ...partner, optedIn: !partner.optedIn }
        : partner
    ));
  };

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gradient">Account</h1>
        <p className="text-lg text-muted-foreground">Manage your account preferences and settings</p>
      </div>

      {/* Account Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:grid-cols-6">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="account-settings">Settings</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="automated-investing">Auto Investing</TabsTrigger>
          <TabsTrigger value="data">Data</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Profile Information */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-card-foreground">Profile Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={liamAvatar} alt="Liam" />
                    <AvatarFallback className="text-xl">L</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-card-foreground">Liam Canning</h3>
                    <p className="text-muted-foreground">Premium Investor</p>
                    <Badge variant="warning" className="w-fit">
                      <Star className="w-3 h-3 mr-1" />
                      Keeps Diamond Tier
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-card-foreground">London, United Kingdom</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>Member since: July 2024</p>
                    <p>Total Investments: £250,000</p>
                    <p>Portfolio Return: +20.9%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Favourite Assets */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-card-foreground">Favourite Assets</CardTitle>
                <p className="text-sm text-muted-foreground">Assets you follow and invest in</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {favoriteTeams.map((team) => (
                    <div key={team.id} className="p-3 bg-accent/20 rounded-lg border border-accent/30">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{team.emoji}</span>
                        <div>
                          <p className="font-medium text-sm text-card-foreground">{team.name}</p>
                          <p className="text-xs text-muted-foreground">{team.sport}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Investment Summary */}
            <Card className="card-professional lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-card-foreground">Investment Portfolio Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-success/10 rounded-lg border border-success/20">
                    <p className="text-2xl font-bold text-success">£302K</p>
                    <p className="text-sm text-muted-foreground">Current Value</p>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-2xl font-bold text-primary">4</p>
                    <p className="text-sm text-muted-foreground">Assets Owned</p>
                  </div>
                  <div className="text-center p-4 bg-warning/10 rounded-lg border border-warning/20">
                    <p className="text-2xl font-bold text-warning">+£52K</p>
                    <p className="text-sm text-muted-foreground">Total Return</p>
                  </div>
                  <div className="text-center p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <p className="text-2xl font-bold text-foreground">20.9%</p>
                    <p className="text-sm text-muted-foreground">Return %</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="card-professional lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground">
                  <Settings className="w-5 h-5" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start" onClick={() => window.location.href = '/benefits'}>
                  <Building2 className="w-4 h-4 mr-2" />
                  View Benefits
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => window.location.href = '/portfolio-performance'}>
                  <CreditCard className="w-4 h-4 mr-2" />
                  Portfolio Performance
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => window.location.href = '/investment-history'}>
                  <FileText className="w-4 h-4 mr-2" />
                  Investment History
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => window.location.href = '/community-profile'}>
                  <Smartphone className="w-4 h-4 mr-2" />
                  Community Profile
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="account-settings" className="mt-6">
          <Card className="card-professional lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-card-foreground">
                <Settings className="w-5 h-5" />
                Account Settings
              </CardTitle>
            </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start" onClick={() => window.location.href = '/personal-information'}>
                  <Building2 className="w-4 h-4 mr-2" />
                  Personal Information
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => window.location.href = '/payment-methods'}>
                  <CreditCard className="w-4 h-4 mr-2" />
                  Payment Methods
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => window.location.href = '/documents-verification'}>
                  <FileText className="w-4 h-4 mr-2" />
                  Documents & Verification
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => window.location.href = '/connected-devices'}>
                  <Smartphone className="w-4 h-4 mr-2" />
                  Connected Devices
                </Button>
              </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6">
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-card-foreground">
                <Bell className="w-5 h-5" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-card-foreground">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive investment updates via email</p>
                </div>
                <Switch 
                  checked={notifications.email}
                  onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-card-foreground">Push Notifications</p>
                  <p className="text-sm text-muted-foreground">Get real-time alerts on your device</p>
                </div>
                <Switch 
                  checked={notifications.push}
                  onCheckedChange={(checked) => setNotifications({...notifications, push: checked})}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-card-foreground">SMS Notifications</p>
                  <p className="text-sm text-muted-foreground">Important updates via text message</p>
                </div>
                <Switch 
                  checked={notifications.sms}
                  onCheckedChange={(checked) => setNotifications({...notifications, sms: checked})}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-card-foreground">Marketing Communications</p>
                  <p className="text-sm text-muted-foreground">News, promotions, and special offers</p>
                </div>
                <Switch 
                  checked={notifications.marketing}
                  onCheckedChange={(checked) => setNotifications({...notifications, marketing: checked})}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="mt-6">
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-card-foreground">
                <Shield className="w-5 h-5" />
                Security & Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-success" />
                  <p className="font-medium text-card-foreground">Account Security Score</p>
                </div>
                <Progress value={85} className="mb-2" />
                <p className="text-sm text-muted-foreground">Your account security is strong. Consider enabling two-factor authentication for even better protection.</p>
              </div>
              
              <Button variant="outline" className="w-full justify-start">
                Change Password
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Enable Two-Factor Authentication
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Download Account Data
              </Button>
              <Button variant="destructive" className="w-full justify-start">
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="automated-investing" className="mt-6">
          <div className="space-y-6">
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-card-foreground">Automated Investing</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Set up recurring investments to automatically invest in your favorite sports assets
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Active Auto-Investments */}
                <div>
                  <h3 className="font-semibold mb-4 text-card-foreground">Active Auto-Investments</h3>
                  <div className="space-y-4">
                    <Card className="bg-accent/10 border border-accent/30">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-border/20 flex items-center justify-center">
                              <img 
                                src="/lovable-uploads/c0f719b9-a198-429d-b736-b4081a14de86.png"
                                alt="Liverpool FC"
                                className="w-8 h-8 object-contain"
                              />
                            </div>
                            <div>
                              <p className="font-medium text-card-foreground">Liverpool FC</p>
                              <p className="text-sm text-muted-foreground">£500 monthly • Next: 15th Jan</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="success">Active</Badge>
                            <Switch checked={true} />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-accent/10 border border-accent/30">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-border/20 flex items-center justify-center">
                              <img 
                                src="/lovable-uploads/10864fdf-2d7a-4243-a715-724e5ddfb866.png"
                                alt="McLaren F1"
                                className="w-8 h-8 object-contain"
                              />
                            </div>
                            <div>
                              <p className="font-medium text-card-foreground">McLaren Racing</p>
                              <p className="text-sm text-muted-foreground">£1,000 monthly • Next: 1st Feb</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="success">Active</Badge>
                            <Switch checked={true} />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Setup New Auto-Investment */}
                <div>
                  <h3 className="font-semibold mb-4 text-card-foreground">Set Up New Auto-Investment</h3>
                  <Card className="border-dashed border-2 border-muted-foreground/30">
                    <CardContent className="p-6">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                          <Calendar className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-card-foreground">Create Recurring Investment</h4>
                          <p className="text-sm text-muted-foreground">
                            Automatically invest in your favorite teams with dollar-cost averaging
                          </p>
                        </div>
                        <Button className="btn-invest">
                          Set Up Auto-Investment
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Auto-Investment Settings */}
                <div>
                  <h3 className="font-semibold mb-4 text-card-foreground">Auto-Investment Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-card-foreground">Email Notifications</p>
                        <p className="text-sm text-muted-foreground">Get notified before each auto-investment</p>
                      </div>
                      <Switch checked={true} />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-card-foreground">Pause on Low Balance</p>
                        <p className="text-sm text-muted-foreground">Automatically pause if insufficient funds</p>
                      </div>
                      <Switch checked={true} />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-card-foreground">Smart Portfolio Rebalancing</p>
                        <p className="text-sm text-muted-foreground">Adjust allocations based on performance</p>
                      </div>
                      <Switch checked={false} />
                    </div>
                  </div>
                </div>

                {/* Investment Statistics */}
                <div>
                  <h3 className="font-semibold mb-4 text-card-foreground">Auto-Investment Performance</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="p-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">£18,500</p>
                        <p className="text-sm text-muted-foreground">Total Auto-Invested</p>
                      </div>
                    </Card>
                    
                    <Card className="p-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-success">+£3,240</p>
                        <p className="text-sm text-muted-foreground">Auto-Investment Returns</p>
                      </div>
                    </Card>
                    
                    <Card className="p-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-warning">+17.5%</p>
                        <p className="text-sm text-muted-foreground">Average Performance</p>
                      </div>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="data" className="mt-6">
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="text-card-foreground">Data Sharing Partners</CardTitle>
              <p className="text-sm text-muted-foreground">
                You have full control over your data sharing preferences. By opting in, you'll gain access to 
                exclusive brand-specific discounts, premium activations, and unique experiences through the Keeps platform.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {partners.map((partner) => (
                <div key={partner.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                     <LogoImage 
                      src={partner.logo}
                      alt={partner.name}
                      size="lg"
                      className="border border-border"
                    />
                    <div>
                      <p className="font-medium text-card-foreground">{partner.name}</p>
                      <p className="text-sm text-muted-foreground">{partner.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={partner.optedIn ? "success" : "secondary"}>
                      {partner.optedIn ? "Opted In" : "Opted Out"}
                    </Badge>
                    <Switch 
                      checked={partner.optedIn}
                      onCheckedChange={() => togglePartner(partner.id)}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}