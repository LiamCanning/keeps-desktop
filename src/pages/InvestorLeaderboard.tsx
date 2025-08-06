import { useState } from "react";
import { Trophy, Medal, Award, TrendingUp, Users, Star, Crown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

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
  }
];

export default function InvestorLeaderboard() {
  const [activeTab, setActiveTab] = useState("returns");

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
              <p className="font-semibold text-xl text-card-foreground">3,847</p>
            </div>
          </div>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
          <TabsTrigger value="returns">By Returns</TabsTrigger>
          <TabsTrigger value="invested">By Investment</TabsTrigger>
          <TabsTrigger value="tier">By Tier</TabsTrigger>
        </TabsList>

        <TabsContent value="returns" className="mt-6">
          <div className="space-y-4">
            {topInvestors.map((investor) => (
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
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}