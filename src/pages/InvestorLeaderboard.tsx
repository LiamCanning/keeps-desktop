import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Trophy, Medal, Award, TrendingUp, Users, Star, Crown, ArrowLeft, Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";

// Import avatar images
import alexAvatar from "@/assets/avatars/alex-avatar.png";
import emmaAvatar from "@/assets/avatars/emma-avatar.png";
import sarahAvatar from "@/assets/avatars/sarah-avatar.png";
import mikeAvatar from "@/assets/avatars/mike-avatar.png";
import rachelAvatar from "@/assets/avatars/rachel-avatar.png";
import jamesAvatar from "@/assets/avatars/james-avatar.png";
import lisaAvatar from "@/assets/avatars/lisa-avatar.png";
import paulAvatar from "@/assets/avatars/paul-avatar.png";
import mariaAvatar from "@/assets/avatars/maria-avatar.png";
import chrisAvatar from "@/assets/avatars/chris-avatar.png";
import davidAvatar from "@/assets/avatars/david-avatar.png";
import tomAvatar from "@/assets/avatars/tom-avatar.png";
import marcusAvatar from "@/assets/avatars/marcus-avatar.png";
import jenniferAvatar from "@/assets/avatars/jennifer-avatar.png";

// Import brand logos
import santanderLogo from "@/assets/brands/santander-logo.png";
import rolexLogo from "@/assets/brands/rolex-logo.png";
import cadburyLogo from "@/assets/brands/cadbury-logo.png";

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

// Asset-specific investor data
const getAssetInvestors = (assetId: string): {
  investors: Investor[];
  corporateSponsor: Investor;
  totalInvestors: number;
} => {
  switch (assetId) {
    case "liverpool-fc":
      return {
        totalInvestors: 10250,
        corporateSponsor: {
          id: "cadbury",
          name: "Cadbury",
          avatar: cadburyLogo,
          totalInvested: "£10,000,000",
          portfolioValue: "£11,500,000",
          returns: "+£1,500,000",
          returnPercent: 15.0,
          rank: 1,
          tier: "Corporate",
          assetsOwned: 1,
          joinDate: "Jan 2024",
          location: "Birmingham, UK",
          isCompany: true
        },
        investors: [
          {
            id: "1",
            name: "Sarah Mitchell",
            avatar: sarahAvatar,
            totalInvested: "£125,000",
            portfolioValue: "£137,500",
            returns: "+£12,500",
            returnPercent: 10.0,
            rank: 1,
            tier: "Gold",
            assetsOwned: 1,
            joinDate: "Jan 2024",
            location: "Liverpool, UK"
          },
          {
            id: "2",
            name: "James Wilson",
            avatar: jamesAvatar,
            totalInvested: "£95,000",
            portfolioValue: "£104,500",
            returns: "+£9,500",
            returnPercent: 10.0,
            rank: 2,
            tier: "Silver",
            assetsOwned: 1,
            joinDate: "Feb 2024",
            location: "Manchester, UK"
          },
          {
            id: "3",
            name: "Paul Kumar",
            avatar: paulAvatar,
            totalInvested: "£75,000",
            portfolioValue: "£82,500",
            returns: "+£7,500",
            returnPercent: 10.0,
            rank: 3,
            tier: "Silver",
            assetsOwned: 1,
            joinDate: "Mar 2024",
            location: "London, UK"
          },
          {
            id: "4",
            name: "Lisa Zhang",
            avatar: lisaAvatar,
            totalInvested: "£65,000",
            portfolioValue: "£71,500",
            returns: "+£6,500",
            returnPercent: 10.0,
            rank: 4,
            tier: "Bronze",
            assetsOwned: 1,
            joinDate: "Apr 2024",
            location: "Birmingham, UK"
          },
          {
            id: "5",
            name: "Emma Rodriguez",
            avatar: emmaAvatar,
            totalInvested: "£55,000",
            portfolioValue: "£60,500",
            returns: "+£5,500",
            returnPercent: 10.0,
            rank: 5,
            tier: "Bronze",
            assetsOwned: 1,
            joinDate: "May 2024",
            location: "Bristol, UK"
          }
        ]
      };

    case "mclaren-racing":
      return {
        totalInvestors: 8750,
        corporateSponsor: {
          id: "santander",
          name: "Santander Bank",
          avatar: santanderLogo,
          totalInvested: "£12,000,000",
          portfolioValue: "£15,600,000",
          returns: "+£3,600,000",
          returnPercent: 30.0,
          rank: 1,
          tier: "Corporate",
          assetsOwned: 1,
          joinDate: "Jan 2024",
          location: "Madrid, ES",
          isCompany: true
        },
        investors: [
          {
            id: "1",
            name: "Alexander Thompson",
            avatar: alexAvatar,
            totalInvested: "£250,000",
            portfolioValue: "£325,000",
            returns: "+£75,000",
            returnPercent: 30.0,
            rank: 1,
            tier: "Diamond",
            assetsOwned: 1,
            joinDate: "Jan 2024",
            location: "London, UK"
          },
          {
            id: "2",
            name: "Michael Chen",
            avatar: mikeAvatar,
            totalInvested: "£180,000",
            portfolioValue: "£234,000",
            returns: "+£54,000",
            returnPercent: 30.0,
            rank: 2,
            tier: "Gold",
            assetsOwned: 1,
            joinDate: "Feb 2024",
            location: "Surrey, UK"
          },
          {
            id: "3",
            name: "David Kumar",
            avatar: davidAvatar,
            totalInvested: "£150,000",
            portfolioValue: "£195,000",
            returns: "+£45,000",
            returnPercent: 30.0,
            rank: 3,
            tier: "Gold",
            assetsOwned: 1,
            joinDate: "Mar 2024",
            location: "Cambridge, UK"
          },
          {
            id: "4",
            name: "Rachel Martinez",
            avatar: rachelAvatar,
            totalInvested: "£120,000",
            portfolioValue: "£156,000",
            returns: "+£36,000",
            returnPercent: 30.0,
            rank: 4,
            tier: "Silver",
            assetsOwned: 1,
            joinDate: "Apr 2024",
            location: "Oxford, UK"
          },
          {
            id: "5",
            name: "Chris Thompson",
            avatar: chrisAvatar,
            totalInvested: "£100,000",
            portfolioValue: "£130,000",
            returns: "+£30,000",
            returnPercent: 30.0,
            rank: 5,
            tier: "Silver",
            assetsOwned: 1,
            joinDate: "May 2024",
            location: "Milton Keynes, UK"
          }
        ]
      };

    case "ryder-cup":
      return {
        totalInvestors: 2340,
        corporateSponsor: {
          id: "rolex",
          name: "Rolex SA",
          avatar: rolexLogo,
          totalInvested: "£5,000,000",
          portfolioValue: "£5,750,000",
          returns: "+£750,000",
          returnPercent: 15.0,
          rank: 1,
          tier: "Corporate",
          assetsOwned: 1,
          joinDate: "Feb 2024",
          location: "Geneva, CH",
          isCompany: true
        },
        investors: [
          {
            id: "1",
            name: "Emma Watson",
            avatar: emmaAvatar,
            totalInvested: "£85,000",
            portfolioValue: "£97,750",
            returns: "+£12,750",
            returnPercent: 15.0,
            rank: 1,
            tier: "Gold",
            assetsOwned: 1,
            joinDate: "Feb 2024",
            location: "St Andrews, UK"
          },
          {
            id: "2",
            name: "Sophie Martinez",
            avatar: mariaAvatar,
            totalInvested: "£65,000",
            portfolioValue: "£74,750",
            returns: "+£9,750",
            returnPercent: 15.0,
            rank: 2,
            tier: "Silver",
            assetsOwned: 1,
            joinDate: "Mar 2024",
            location: "Edinburgh, UK"
          },
          {
            id: "3",
            name: "Jennifer Lopez",
            avatar: jenniferAvatar,
            totalInvested: "£45,000",
            portfolioValue: "£51,750",
            returns: "+£6,750",
            returnPercent: 15.0,
            rank: 3,
            tier: "Silver",
            assetsOwned: 1,
            joinDate: "Apr 2024",
            location: "Surrey, UK"
          },
          {
            id: "4",
            name: "Marcus Johnson",
            avatar: marcusAvatar,
            totalInvested: "£35,000",
            portfolioValue: "£40,250",
            returns: "+£5,250",
            returnPercent: 15.0,
            rank: 4,
            tier: "Bronze",
            assetsOwned: 1,
            joinDate: "May 2024",
            location: "Kent, UK"
          },
          {
            id: "5",
            name: "Tom Wilson",
            avatar: tomAvatar,
            totalInvested: "£25,000",
            portfolioValue: "£28,750",
            returns: "+£3,750",
            returnPercent: 15.0,
            rank: 5,
            tier: "Bronze",
            assetsOwned: 1,
            joinDate: "Jun 2024",
            location: "Berkshire, UK"
          }
        ]
      };

    default:
      // Default global leaderboard for non-asset pages
      return {
        totalInvestors: 25847,
        corporateSponsor: {
          id: "platform-global",
          name: "Keeps Platform",
          avatar: "/src/assets/keeps-logo.png",
          totalInvested: "£25,200,000",
          portfolioValue: "£33,264,000",
          returns: "+£8,064,000",
          returnPercent: 32.0,
          rank: 1,
          tier: "Platform",
          assetsOwned: 15,
          joinDate: "Jan 2024",
          location: "London, UK",
          isCompany: true
        },
        investors: [
          {
            id: "1",
            name: "Alexander Thompson",
            avatar: alexAvatar,
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
            avatar: emmaAvatar,
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
            avatar: sarahAvatar,
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
            avatar: mikeAvatar,
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
            avatar: rachelAvatar,
            totalInvested: "£1,600,000",
            portfolioValue: "£1,872,000",
            returns: "+£272,000",
            returnPercent: 17.0,
            rank: 5,
            tier: "Silver",
            assetsOwned: 5,
            joinDate: "May 2024",
            location: "Edinburgh, UK"
          }
        ]
      };
  }
};

export default function InvestorLeaderboard() {
  const [activeTab, setActiveTab] = useState("returns");
  const navigate = useNavigate();
  const { assetId } = useParams();
  
  // Get asset-specific data
  const assetData = getAssetInvestors(assetId || "global");
  const { investors, corporateSponsor, totalInvestors } = assetData;

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

  const getAssetName = (assetId: string) => {
    switch (assetId) {
      case "liverpool-fc": return "Liverpool FC";
      case "mclaren-racing": return "McLaren Racing";
      case "ryder-cup": return "Ryder Cup";
      default: return "Platform";
    }
  };

  return (
    <div className="space-y-6 p-6 max-w-7xl mx-auto">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={() => navigate(assetId ? `/assets/${assetId}` : '/')}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          {assetId ? `Back to ${getAssetName(assetId)}` : 'Back to Dashboard'}
        </Button>
        <Button variant="outline" onClick={() => navigate('/assets')}>
          View Assets
        </Button>
      </div>

      <PageHeader
        title={assetId ? `${getAssetName(assetId)} Investor Leaderboard` : 'Investor Leaderboard'}
        subtitle={assetId ? `Top performing investors in ${getAssetName(assetId)}` : 'Top performing investors on the Keeps platform'}
        align="left"
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="card-hover p-6 relative overflow-hidden border-0 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/20">
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-orange-200/30 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-300/20 rounded-full blur-lg"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-orange-500/20 rounded-xl">
                <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
            <p className="text-sm text-orange-600/80 dark:text-orange-400/80 mb-1 font-medium">Total Investors</p>
            <p className="text-2xl font-bold text-orange-900 dark:text-orange-100">{totalInvestors.toLocaleString()}</p>
          </div>
        </Card>

        <Card className="card-hover p-6 relative overflow-hidden border-0 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/30 dark:to-emerald-900/20">
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-emerald-200/30 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-300/20 rounded-full blur-lg"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-emerald-500/20 rounded-xl">
                <Building className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
            <p className="text-sm text-emerald-600/80 dark:text-emerald-400/80 mb-1 font-medium">{assetId ? 'Corporate Sponsor' : 'Corporate Sponsors'}</p>
            <p className="text-2xl font-bold text-emerald-900 dark:text-emerald-100">{assetId ? '1' : '28'}</p>
          </div>
        </Card>

        <Card className="card-hover p-6 relative overflow-hidden border-0 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/30 dark:to-amber-900/20">
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-amber-200/30 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-amber-300/20 rounded-full blur-lg"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-amber-500/20 rounded-xl">
                <TrendingUp className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
            </div>
            <p className="text-sm text-amber-600/80 dark:text-amber-400/80 mb-1 font-medium">Avg. Return</p>
            <p className="text-2xl font-bold text-amber-900 dark:text-amber-100">
              {assetId === 'liverpool-fc' ? '10.0%' : assetId === 'mclaren-racing' ? '30.0%' : assetId === 'ryder-cup' ? '15.0%' : '18.4%'}
            </p>
          </div>
        </Card>

        <Card className="card-hover p-6 relative overflow-hidden border-0 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/20">
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-purple-200/30 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-300/20 rounded-full blur-lg"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-purple-500/20 rounded-xl">
                <Star className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <p className="text-sm text-purple-600/80 dark:text-purple-400/80 mb-1 font-medium">Diamond Tier</p>
            <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">
              {assetId === 'liverpool-fc' ? '0' : assetId === 'mclaren-racing' ? '1' : assetId === 'ryder-cup' ? '0' : '1,247'}
            </p>
          </div>
        </Card>
      </div>

      {/* Corporate Sponsors Section */}
      <Card className="card-professional">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Building className="w-5 h-5" />
            Corporate Sponsor{assetId ? '' : 's'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Card className="card-professional bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    {getRankIcon(corporateSponsor.rank)}
                    <div className="w-12 h-12 bg-white rounded-lg p-2 border">
                      <img src={corporateSponsor.avatar} alt={corporateSponsor.name} className="w-full h-full object-contain" />
                    </div>
                  </div>
                  
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                    <div>
                      <h3 className="font-semibold text-lg text-card-foreground">{corporateSponsor.name}</h3>
                      <p className="text-sm text-muted-foreground">{corporateSponsor.location}</p>
                      <Badge variant="secondary" className="mt-1">
                        {corporateSponsor.tier} Sponsor
                      </Badge>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Total Invested</p>
                      <p className="font-bold text-lg text-primary">{corporateSponsor.totalInvested}</p>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Portfolio Value</p>
                      <p className="font-bold text-lg text-card-foreground">{corporateSponsor.portfolioValue}</p>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Returns</p>
                      <p className="font-bold text-lg text-success">{corporateSponsor.returns}</p>
                      <p className="text-xs text-success">+{corporateSponsor.returnPercent}%</p>
                    </div>

                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Assets</p>
                      <p className="font-bold text-lg text-card-foreground">{corporateSponsor.assetsOwned}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        {/* Mobile tab selector */}
        <div className="md:hidden mb-3">
          <Select value={activeTab} onValueChange={setActiveTab}>
            <SelectTrigger aria-label="Select leaderboard section">
              <SelectValue placeholder="Select section" />
            </SelectTrigger>
            <SelectContent className="z-50">
              <SelectItem value="returns">Top 5 by Returns</SelectItem>
              <SelectItem value="invested">Top 5 by Investment</SelectItem>
              <SelectItem value="tier">By Tier</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <TabsList className="hidden md:grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 shadow-[var(--shadow-elegant)] rounded-md">
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
                {investors.slice(0, 5).map((investor) => (
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
                {investors.slice(0, 5).map((investor) => (
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
          <div className="space-y-6">
            {["Diamond", "Gold", "Silver", "Bronze"].map((tier) => {
              const tierInvestors = investors.filter(i => i.tier === tier);
              if (tierInvestors.length === 0) return null;
              
              return (
                <Card key={tier} className="card-professional">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="w-5 h-5" />
                      {tier} Tier ({tierInvestors.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {tierInvestors.map((investor) => (
                        <Card key={investor.id} className="card-professional">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-3">
                                {getRankIcon(investor.rank)}
                                <Avatar className="h-10 w-10">
                                  <AvatarImage src={investor.avatar} alt={investor.name} />
                                  <AvatarFallback>{investor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                </Avatar>
                              </div>
                              
                              <div className="flex-1 grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                                <div>
                                  <h3 className="font-semibold text-card-foreground">{investor.name}</h3>
                                  <p className="text-sm text-muted-foreground">{investor.location}</p>
                                </div>
                                
                                <div className="text-center">
                                  <p className="text-sm text-muted-foreground">Invested</p>
                                  <p className="font-bold text-primary">{investor.totalInvested}</p>
                                </div>
                                
                                <div className="text-center">
                                  <p className="text-sm text-muted-foreground">Returns</p>
                                  <p className="font-bold text-success">{investor.returns}</p>
                                </div>

                                <div className="text-center">
                                  <p className="text-sm text-muted-foreground">Assets</p>
                                  <p className="font-bold text-card-foreground">{investor.assetsOwned}</p>
                                </div>

                                <div className="text-center">
                                  <p className="text-sm text-muted-foreground">Since</p>
                                  <p className="font-bold text-card-foreground">{investor.joinDate}</p>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}