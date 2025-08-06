import { useState } from "react";
import { Settings, Bell, Shield, CreditCard, FileText, LogOut, MapPin, Star, Building2, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { LogoImage } from "@/components/ui/logo-image";

// Import brand logos
import nikeLogo from "@/assets/brands/nike-logo.png";
import rolexLogo from "@/assets/brands/rolex-logo.png";
import axaLogo from "@/assets/brands/axa-logo.png";
import santanderLogo from "@/assets/brands/santander-logo.png";
import bmwLogo from "@/assets/brands/bmw-logo.png";
import cadburyLogo from "@/assets/brands/cadbury-logo.png";

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

const dataPartners: DataPartner[] = [
  {
    id: "1",
    name: "Nike",
    logo: nikeLogo,
    description: "Sports gear discounts and exclusive athlete meet & greets",
    optedIn: true
  },
  {
    id: "2", 
    name: "Rolex",
    logo: rolexLogo,
    description: "Luxury timepiece experiences and VIP watch exhibitions",
    optedIn: true
  },
  {
    id: "3",
    name: "AXA",
    logo: axaLogo,
    description: "Premium insurance benefits and financial planning services",
    optedIn: false
  },
  {
    id: "4",
    name: "Santander",
    logo: santanderLogo,
    description: "Banking perks and investment opportunities",
    optedIn: true
  },
  {
    id: "5",
    name: "BMW",
    logo: bmwLogo,
    description: "Luxury vehicle test drives and motorsport experiences",
    optedIn: false
  },
  {
    id: "6",
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
      {/* Header Section */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">My Account</h1>
        <p className="text-lg text-foreground/80">Manage your profile and preferences</p>
      </div>

      {/* Account Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:grid-cols-5 bg-card">
          <TabsTrigger value="profile" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Profile</TabsTrigger>
          <TabsTrigger value="settings" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Settings</TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Notifications</TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Security</TabsTrigger>
          <TabsTrigger value="data" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Data</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-6">
          <div className="space-y-6">
            {/* Profile Header */}
            <Card className="card-professional">
              <CardContent className="p-6">
                <div className="flex items-center gap-6">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src="/src/assets/liam-avatar.png" />
                    <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-bold">LC</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-card-foreground">Liam Canning</h2>
                    <p className="text-muted-foreground">@liam_canning</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>🇬🇧 London, United Kingdom</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Joined March 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Investment Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="card-professional p-4">
                <div className="text-center space-y-2">
                  <p className="text-2xl font-bold text-primary">£250,000</p>
                  <p className="text-sm text-muted-foreground">Total Invested</p>
                </div>
              </Card>
              <Card className="card-professional p-4">
                <div className="text-center space-y-2">
                  <p className="text-2xl font-bold text-card-foreground">4</p>
                  <p className="text-sm text-muted-foreground">Active Assets</p>
                </div>
              </Card>
              <Card className="card-professional p-4">
                <div className="text-center space-y-2">
                  <p className="text-2xl font-bold text-success">+18.6%</p>
                  <p className="text-sm text-muted-foreground">Portfolio Growth</p>
                </div>
              </Card>
            </div>

            {/* About Section */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-card-foreground">About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground leading-relaxed">
                  Passionate sports investor and Liverpool FC supporter. Love backing innovative sports ventures 
                  and connecting with fellow investors. Always looking for the next big opportunity in sports finance.
                </p>
              </CardContent>
            </Card>

            {/* Favorite Teams */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-card-foreground">Favourite Sports Teams</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {favoriteTeams.map((team) => (
                    <div key={team.id} className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg">
                      <span className="text-2xl">{team.emoji}</span>
                      <div>
                        <p className="font-medium text-card-foreground text-sm">{team.name}</p>
                        <p className="text-xs text-muted-foreground">{team.sport}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="mt-6">
          <div className="space-y-6">
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground">
                  <Settings className="w-5 h-5" />
                  Account Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <Building2 className="w-4 h-4 mr-2" />
                  Personal Information
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Payment Methods
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Documents & Verification
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Connected Devices
                </Button>
              </CardContent>
            </Card>
          </div>
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