import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Trophy, Medal, Award, TrendingUp, Users, Star, Crown, ArrowLeft, Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

interface Investor {
  id: string;
  name: string;
  avatar: string;
  totalInvested: string;
  portfolioValue: string;
  returns: string;
  returnPercent: number;
  rank: number;
  tier: string;
  assetsOwned: number;
  joinDate: string;
  location: string;
  isCompany?: boolean;
}

const topInvestors: Investor[] = [
  {
    id: "1",
    name: "Alexander Thompson",
    avatar: "/src/assets/avatars/alex-avatar.png",
    totalInvested: "£2,450,000",
    portfolioValue: "£3,127,500",
    returns: "+£677,500",
    returnPercent: 27.7,
    rank: 1,
    tier: "Diamond",
    assetsOwned: 12,
    joinDate: "Jan 2024",
    location: "London, UK"
  },
  {
    id: "2", 
    name: "Emma Rodriguez",
    avatar: "/src/assets/avatars/emma-avatar.png",
    totalInvested: "£1,890,000",
    portfolioValue: "£2,361,300",
    returns: "+£471,300",
    returnPercent: 24.9,
    rank: 2,
    tier: "Diamond",
    assetsOwned: 8,
    joinDate: "Mar 2024",
    location: "New York, US"
  },
  {
    id: "3",
    name: "James Wilson",
    avatar: "/src/assets/avatars/james-avatar.png",
    totalInvested: "£1,650,000",
    portfolioValue: "£2,014,500",
    returns: "+£364,500",
    returnPercent: 22.1,
    rank: 3,
    tier: "Diamond",
    assetsOwned: 6,
    joinDate: "Feb 2024",
    location: "Sydney, AU"
  },
  {
    id: "4",
    name: "Sarah Kim",
    avatar: "/src/assets/avatars/sarah-avatar.png",
    totalInvested: "£1,200,000",
    portfolioValue: "£1,452,000",
    returns: "+£252,000",
    returnPercent: 21.0,
    rank: 4,
    tier: "Platinum",
    assetsOwned: 9,
    joinDate: "Apr 2024",
    location: "Singapore"
  },
  {
    id: "5",
    name: "Maria Garcia",
    avatar: "/src/assets/avatars/maria-avatar.png",
    totalInvested: "£980,000",
    portfolioValue: "£1,176,000",
    returns: "+£196,000",
    returnPercent: 20.0,
    rank: 5,
    tier: "Platinum",
    assetsOwned: 7,
    joinDate: "May 2024",
    location: "Barcelona, ES"
  },
  {
    id: "6",
    name: "Mike Johnson",
    avatar: "/src/assets/avatars/mike-avatar.png",
    totalInvested: "£875,000",
    portfolioValue: "£1,032,500",
    returns: "+£157,500",
    returnPercent: 18.0,
    rank: 6,
    tier: "Platinum",
    assetsOwned: 5,
    joinDate: "Jun 2024",
    location: "Toronto, CA"
  },
  {
    id: "7",
    name: "Liverpool Fan",
    avatar: "/src/assets/avatars/liverpool-fan-avatar.png",
    totalInvested: "£750,000",
    portfolioValue: "£870,000",
    returns: "+£120,000",
    returnPercent: 16.0,
    rank: 7,
    tier: "Gold",
    assetsOwned: 4,
    joinDate: "Apr 2024",
    location: "Liverpool, UK"
  },
  {
    id: "8",
    name: "F1 Enthusiast",
    avatar: "/src/assets/avatars/f1-fan-avatar.png",
    totalInvested: "£625,000",
    portfolioValue: "£718,750",
    returns: "+£93,750",
    returnPercent: 15.0,
    rank: 8,
    tier: "Gold",
    assetsOwned: 3,
    joinDate: "May 2024",
    location: "Monaco"
  },
  {
    id: "9",
    name: "Golf Fan Pro",
    avatar: "/src/assets/avatars/golf-fan-avatar.png",
    totalInvested: "£500,000",
    portfolioValue: "£570,000",
    returns: "+£70,000",
    returnPercent: 14.0,
    rank: 9,
    tier: "Gold",
    assetsOwned: 2,
    joinDate: "Jun 2024",
    location: "Augusta, US"
  },
  {
    id: "10",
    name: "Liam Canning",
    avatar: "/src/assets/liam-avatar.png",
    totalInvested: "£425,000",
    portfolioValue: "£480,250",
    returns: "+£55,250",
    returnPercent: 13.0,
    rank: 10,
    tier: "Gold",
    assetsOwned: 4,
    joinDate: "Jul 2024",
    location: "Dublin, IE"
  }
];

const corporateSponsors: Investor[] = [
  {
    id: "c1",
    name: "Nike Inc.",
    avatar: "/src/assets/brands/nike-logo.png",
    totalInvested: "£15,000,000",
    portfolioValue: "£18,750,000",
    returns: "+£3,750,000",
    returnPercent: 25.0,
    rank: 1,
    tier: "Corporate",
    assetsOwned: 5,
    joinDate: "Jan 2024",
    location: "Oregon, US",
    isCompany: true
  },
  {
    id: "c2",
    name: "BMW Group",
    avatar: "/src/assets/brands/bmw-logo.png",
    totalInvested: "£12,500,000",
    portfolioValue: "£15,000,000",
    returns: "+£2,500,000",
    returnPercent: 20.0,
    rank: 2,
    tier: "Corporate",
    assetsOwned: 3,
    joinDate: "Feb 2024",
    location: "Munich, DE",
    isCompany: true
  },
  {
    id: "c3",
    name: "Rolex",
    avatar: "/src/assets/brands/rolex-logo.png",
    totalInvested: "£8,750,000",
    portfolioValue: "£10,500,000",
    returns: "+£1,750,000",
    returnPercent: 20.0,
    rank: 3,
    tier: "Corporate",
    assetsOwned: 2,
    joinDate: "Mar 2024",
    location: "Geneva, CH",
    isCompany: true
  },
  {
    id: "c4",
    name: "Santander",
    avatar: "/src/assets/brands/santander-logo.png",
    totalInvested: "£6,200,000",
    portfolioValue: "£7,440,000",
    returns: "+£1,240,000",
    returnPercent: 20.0,
    rank: 4,
    tier: "Corporate",
    assetsOwned: 4,
    joinDate: "Apr 2024",
    location: "Madrid, ES",
    isCompany: true
  }
];

export default function InvestorLeaderboard() {
  const [activeTab, setActiveTab] = useState("returns");
  const navigate = useNavigate();

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="w-6 h-6 flex items-center justify-center text-sm font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  return (
    <div className="space-y-6 p-6 max-w-7xl mx-auto">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={() => navigate('/')}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>
        <Button variant="outline" onClick={() => navigate('/assets')}>
          View Assets
        </Button>
      </div>

      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gradient">Investor Leaderboard</h1>
        <p className="text-lg text-foreground/80">Top performing investors on the Keeps platform</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Investors</p>
              <p className="font-semibold text-xl text-card-foreground">25,847</p>
            </div>
          </div>
        </Card>
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-success/20 rounded-lg">
              <Building className="w-5 h-5 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Corporate Sponsors</p>
              <p className="font-semibold text-xl text-card-foreground">28</p>
            </div>
          </div>
        </Card>
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-warning/20 rounded-lg">
              <TrendingUp className="w-5 h-5 text-warning" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Avg. Return</p>
              <p className="font-semibold text-xl text-card-foreground">18.4%</p>
            </div>
          </div>
        </Card>
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-accent/20 rounded-lg">
              <Star className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Diamond Tier</p>
              <p className="font-semibold text-xl text-card-foreground">1,247</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Corporate Sponsors Section */}
      <Card className="card-professional">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Building className="w-5 h-5" />
            Corporate Sponsors
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {corporateSponsors.map((sponsor) => (
              <Card key={sponsor.id} className="card-professional bg-gradient-to-r from-primary/5 to-accent/5">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                      {getRankIcon(sponsor.rank)}
                      <div className="w-12 h-12 bg-white rounded-lg p-2 border">
                        <img src={sponsor.avatar} alt={sponsor.name} className="w-full h-full object-contain" />
                      </div>
                    </div>
                    
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                      <div>
                        <h3 className="font-semibold text-lg text-card-foreground">{sponsor.name}</h3>
                        <p className="text-sm text-muted-foreground">{sponsor.location}</p>
                        <Badge variant="secondary" className="mt-1">
                          {sponsor.tier} Sponsor
                        </Badge>
                      </div>
                      
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Total Invested</p>
                        <p className="font-bold text-lg text-primary">{sponsor.totalInvested}</p>
                      </div>
                      
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Portfolio Value</p>
                        <p className="font-bold text-lg text-card-foreground">{sponsor.portfolioValue}</p>
                      </div>
                      
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Returns</p>
                        <p className="font-bold text-lg text-success">{sponsor.returns}</p>
                        <p className="text-xs text-success">+{sponsor.returnPercent}%</p>
                      </div>

                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Assets</p>
                        <p className="font-bold text-lg text-card-foreground">{sponsor.assetsOwned}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
          <TabsTrigger value="returns">Top 5 by Returns</TabsTrigger>
          <TabsTrigger value="invested">Top 5 by Investment</TabsTrigger>
          <TabsTrigger value="tier">By Tier</TabsTrigger>
        </TabsList>

        <TabsContent value="returns" className="mt-6">
          <Card className="card-professional">
            <CardHeader>
              <CardTitle>Top 5 Investors by Returns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topInvestors.slice(0, 5).map((investor) => (
                  <Card key={investor.id} className="card-professional">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                          {getRankIcon(investor.rank)}
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={investor.avatar} alt={investor.name} />
                            <AvatarFallback>{investor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                        </div>
                        
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                          <div className="md:col-span-2">
                            <h3 className="font-semibold text-lg text-card-foreground">{investor.name}</h3>
                            <p className="text-sm text-muted-foreground">{investor.location}</p>
                            <Badge variant="secondary" className="mt-1">
                              {investor.tier} Tier
                            </Badge>
                          </div>
                          
                          <div className="text-center">
                            <p className="text-sm text-muted-foreground">Portfolio Value</p>
                            <p className="font-bold text-lg text-card-foreground">{investor.portfolioValue}</p>
                          </div>
                          
                          <div className="text-center">
                            <p className="text-sm text-muted-foreground">Returns</p>
                            <p className="font-bold text-lg text-success">{investor.returns}</p>
                            <p className="text-xs text-success">+{investor.returnPercent}%</p>
                          </div>

                          <div className="text-center">
                            <p className="text-sm text-muted-foreground">Assets</p>
                            <p className="font-bold text-lg text-card-foreground">{investor.assetsOwned}</p>
                          </div>

                          <div className="text-center">
                            <p className="text-sm text-muted-foreground">Since</p>
                            <p className="font-bold text-lg text-card-foreground">{investor.joinDate}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="invested" className="mt-6">
          <Card className="card-professional">
            <CardHeader>
              <CardTitle>Top 5 Investors by Total Investment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topInvestors.slice(0, 5).map((investor) => (
                  <Card key={investor.id} className="card-professional">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                          {getRankIcon(investor.rank)}
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={investor.avatar} alt={investor.name} />
                            <AvatarFallback>{investor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                        </div>
                        
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                          <div className="md:col-span-2">
                            <h3 className="font-semibold text-lg text-card-foreground">{investor.name}</h3>
                            <p className="text-sm text-muted-foreground">{investor.location}</p>
                            <Badge variant="secondary" className="mt-1">
                              {investor.tier} Tier
                            </Badge>
                          </div>
                          
                          <div className="text-center">
                            <p className="text-sm text-muted-foreground">Total Invested</p>
                            <p className="font-bold text-lg text-primary">{investor.totalInvested}</p>
                          </div>
                          
                          <div className="text-center">
                            <p className="text-sm text-muted-foreground">Portfolio Value</p>
                            <p className="font-bold text-lg text-card-foreground">{investor.portfolioValue}</p>
                          </div>

                          <div className="text-center">
                            <p className="text-sm text-muted-foreground">Assets</p>
                            <p className="font-bold text-lg text-card-foreground">{investor.assetsOwned}</p>
                          </div>

                          <div className="text-center">
                            <p className="text-sm text-muted-foreground">Since</p>
                            <p className="font-bold text-lg text-card-foreground">{investor.joinDate}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tier" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crown className="w-5 h-5 text-yellow-500" />
                  Diamond Tier
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topInvestors.filter(i => i.tier === "Diamond").map((investor) => (
                    <div key={investor.id} className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-500/10 to-yellow-600/5 rounded-lg">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={investor.avatar} alt={investor.name} />
                        <AvatarFallback>{investor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">{investor.name}</p>
                        <p className="text-xs text-muted-foreground">{investor.portfolioValue}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-purple-500" />
                  Platinum Tier
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topInvestors.filter(i => i.tier === "Platinum").map((investor) => (
                    <div key={investor.id} className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-500/10 to-purple-600/5 rounded-lg">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={investor.avatar} alt={investor.name} />
                        <AvatarFallback>{investor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">{investor.name}</p>
                        <p className="text-xs text-muted-foreground">{investor.portfolioValue}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Medal className="w-5 h-5 text-yellow-600" />
                  Gold Tier
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topInvestors.filter(i => i.tier === "Gold").map((investor) => (
                    <div key={investor.id} className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-600/10 to-yellow-700/5 rounded-lg">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={investor.avatar} alt={investor.name} />
                        <AvatarFallback>{investor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">{investor.name}</p>
                        <p className="text-xs text-muted-foreground">{investor.portfolioValue}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}