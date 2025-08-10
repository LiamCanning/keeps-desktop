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
  badges?: string[];
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
    totalInvested: "£2,100,000",
    portfolioValue: "£2,520,000",
    returns: "+£420,000",
    returnPercent: 20.0,
    rank: 2,
    tier: "Gold",
    assetsOwned: 8,
    joinDate: "Feb 2024",
    location: "London, UK"
  },
  {
    id: "3",
    name: "Sarah Wilson",
    avatar: "/src/assets/avatars/sarah-avatar.png",
    totalInvested: "£1,890,000",
    portfolioValue: "£2,268,000",
    returns: "+£378,000",
    returnPercent: 20.0,
    rank: 3,
    tier: "Gold",
    assetsOwned: 7,
    joinDate: "Mar 2024",
    location: "Manchester, UK"
  },
  {
    id: "4",
    name: "Michael Chen",
    avatar: "/src/assets/avatars/mike-avatar.png",
    totalInvested: "£1,750,000",
    portfolioValue: "£2,065,000",
    returns: "+£315,000",
    returnPercent: 18.0,
    rank: 4,
    tier: "Silver",
    assetsOwned: 6,
    joinDate: "Apr 2024",
    location: "Birmingham, UK"
  },
  {
    id: "5",
    name: "Rachel Martinez",
    avatar: "/src/assets/avatars/rachel-avatar.png",
    totalInvested: "£1,600,000",
    portfolioValue: "£1,872,000",
    returns: "+£272,000",
    returnPercent: 17.0,
    rank: 5,
    tier: "Silver",
    assetsOwned: 5,
    joinDate: "May 2024",
    location: "Edinburgh, UK"
  },
  {
    id: "6",
    name: "James Parker",
    avatar: "/src/assets/avatars/james-avatar.png",
    totalInvested: "£1,450,000",
    portfolioValue: "£1,682,500",
    returns: "+£232,500",
    returnPercent: 16.0,
    rank: 6,
    tier: "Silver",
    assetsOwned: 4,
    joinDate: "Jun 2024",
    location: "Cardiff, UK"
  },
  {
    id: "7",
    name: "Lisa Zhang",
    avatar: "/src/assets/avatars/lisa-avatar.png",
    totalInvested: "£1,200,000",
    portfolioValue: "£1,380,000",
    returns: "+£180,000",
    returnPercent: 15.0,
    rank: 7,
    tier: "Bronze",
    assetsOwned: 3,
    joinDate: "Jul 2024",
    location: "Bristol, UK"
  },
  {
    id: "8",
    name: "Paul Kumar",
    avatar: "/src/assets/avatars/paul-avatar.png",
    totalInvested: "£1,100,000",
    portfolioValue: "£1,254,000",
    returns: "+£154,000",
    returnPercent: 14.0,
    rank: 8,
    tier: "Bronze",
    assetsOwned: 2,
    joinDate: "Aug 2024",
    location: "Newcastle, UK"
  },
  {
    id: "9",
    name: "Sophie Martinez",
    avatar: "/src/assets/avatars/maria-avatar.png",
    totalInvested: "£980,000",
    portfolioValue: "£1,107,600",
    returns: "+£127,600",
    returnPercent: 13.0,
    rank: 9,
    tier: "Bronze",
    assetsOwned: 1,
    joinDate: "Sep 2024",
    location: "Glasgow, UK"
  },
  {
    id: "10",
    name: "Chris Thompson",
    avatar: "/src/assets/avatars/chris-avatar.png",
    totalInvested: "£850,000",
    portfolioValue: "£952,000",
    returns: "+£102,000",
    returnPercent: 12.0,
    rank: 10,
    tier: "Bronze",
    assetsOwned: 1,
    joinDate: "Oct 2024",
    location: "Leeds, UK"
  }
];

const monthlyTopPerformers: Investor[] = [
  {
    id: "11",
    name: "Alexander Thompson",
    avatar: "/src/assets/avatars/alex-avatar.png",
    totalInvested: "£2,450,000",
    portfolioValue: "£3,127,500",
    returns: "+£677,500",
    returnPercent: 27.7,
    rank: 1,
    tier: "Diamond",
    assetsOwned: 10,
    joinDate: "Jan 2024",
    location: "London, UK"
  },
  {
    id: "12", 
    name: "Sophie Martinez",
    avatar: "/src/assets/avatars/maria-avatar.png",
    totalInvested: "£980,000",
    portfolioValue: "£1,107,600",
    returns: "+£127,600",
    returnPercent: 13.0,
    rank: 2,
    tier: "Bronze",
    assetsOwned: 3,
    joinDate: "Feb 2024",
    location: "Liverpool, UK"
  },
  {
    id: "13",
    name: "David Kumar",
    avatar: "/src/assets/avatars/david-avatar.png",
    totalInvested: "£1,100,000",
    portfolioValue: "£1,254,000",
    returns: "+£154,000",
    returnPercent: 14.0,
    rank: 3,
    tier: "Bronze",
    assetsOwned: 4,
    joinDate: "Mar 2024",
    location: "Manchester, UK"
  },
  {
    id: "14",
    name: "Adidas AG",
    avatar: "/src/assets/brands/adidas-logo.png",
    totalInvested: "£6,200,000",
    portfolioValue: "£7,440,000",
    returns: "+£1,240,000",
    returnPercent: 20.0,
    rank: 4,
    tier: "Corporate",
    assetsOwned: 4,
    joinDate: "Apr 2024",
    location: "Herzogenaurach, DE",
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
            {monthlyTopPerformers.filter(i => i.isCompany).map((sponsor) => (
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