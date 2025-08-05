import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Trophy, Crown, Medal, Building2, Users, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock data for different assets
const leaderboardData: { [key: string]: any } = {
  "liverpool-fc": {
    name: "Liverpool FC",
    logo: "/lovable-uploads/001420e5-847e-4145-addb-8bec6a73c63e.png",
    totalInvestors: 10250,
    totalInvestment: 75000000,
    sponsors: [
      {
        id: 1,
        name: "Nike",
        type: "Corporate Sponsor",
        amount: 5000000,
        logo: "https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png",
        badge: "SPONSOR"
      },
      {
        id: 2,
        name: "AXA",
        type: "Corporate Sponsor", 
        amount: 1500000,
        logo: "https://logos-world.net/wp-content/uploads/2020/05/AXA-Logo.png",
        badge: "SPONSOR"
      }
    ],
    topInvestors: [
      {
        id: 1,
        name: "James Wilson",
        type: "Individual Investor",
        amount: 3000000,
        avatar: "/lovable-uploads/liam-avatar.png",
        flag: "🇬🇧",
        badge: "TOP"
      },
      {
        id: 2,
        name: "Rachel Garcia",
        type: "Individual Investor",
        amount: 2750000,
        avatar: "/lovable-uploads/liam-avatar.png",
        flag: "🇪🇸",
        badge: "2ND"
      },
      {
        id: 3,
        name: "David Thompson",
        type: "Individual Investor",
        amount: 2500000,
        avatar: "/lovable-uploads/liam-avatar.png",
        flag: "🇬🇧",
        badge: "3RD"
      },
      {
        id: 4,
        name: "Emma Johnson",
        type: "Individual Investor",
        amount: 2200000,
        avatar: "/lovable-uploads/liam-avatar.png",
        flag: "🇨🇦"
      },
      {
        id: 5,
        name: "Michael Chen",
        type: "Individual Investor",
        amount: 1900000,
        avatar: "/lovable-uploads/liam-avatar.png",
        flag: "🇺🇸"
      },
      {
        id: 6,
        name: "Sophie Martin",
        type: "Individual Investor",
        amount: 1750000,
        avatar: "/lovable-uploads/liam-avatar.png",
        flag: "🇫🇷"
      },
      {
        id: 7,
        name: "Antonio Silva",
        type: "Individual Investor",
        amount: 1600000,
        avatar: "/lovable-uploads/liam-avatar.png",
        flag: "🇧🇷"
      },
      {
        id: 8,
        name: "Lars Andersson",
        type: "Individual Investor",
        amount: 1450000,
        avatar: "/lovable-uploads/liam-avatar.png",
        flag: "🇸🇪"
      },
      {
        id: 9,
        name: "Priya Patel",
        type: "Individual Investor",
        amount: 1300000,
        avatar: "/lovable-uploads/liam-avatar.png",
        flag: "🇮🇳"
      },
      {
        id: 10,
        name: "Hans Mueller",
        type: "Individual Investor",
        amount: 1150000,
        avatar: "/lovable-uploads/liam-avatar.png",
        flag: "🇩🇪"
      }
    ]
  },
  "mclaren-f1": {
    name: "McLaren F1",
    logo: "/lovable-uploads/e0b86990-9fbb-421a-b689-b9e7ac420908.png",
    totalInvestors: 8500,
    totalInvestment: 95000000,
    sponsors: [
      {
        id: 1,
        name: "Red Bull",
        type: "Corporate Sponsor",
        amount: 8000000,
        logo: "https://logos-world.net/wp-content/uploads/2020/11/Red-Bull-Logo.png",
        badge: "SPONSOR"
      },
      {
        id: 2,
        name: "Shell",
        type: "Corporate Sponsor",
        amount: 3200000,
        logo: "https://logos-world.net/wp-content/uploads/2020/04/Shell-Logo.png",
        badge: "SPONSOR"
      }
    ],
    topInvestors: [
      {
        id: 1,
        name: "Marcus Hamilton",
        type: "Individual Investor", 
        amount: 4500000,
        avatar: "/lovable-uploads/liam-avatar.png",
        flag: "🇬🇧",
        badge: "TOP"
      },
      {
        id: 2,
        name: "Isabella Rodriguez",
        type: "Individual Investor",
        amount: 3800000,
        avatar: "/lovable-uploads/liam-avatar.png",
        flag: "🇪🇸",
        badge: "2ND"
      },
      {
        id: 3,
        name: "Oliver Schmidt",
        type: "Individual Investor",
        amount: 3200000,
        avatar: "/lovable-uploads/liam-avatar.png",
        flag: "🇩🇪",
        badge: "3RD"
      },
      {
        id: 4,
        name: "Charlotte Dubois",
        type: "Individual Investor",
        amount: 2900000,
        avatar: "/lovable-uploads/liam-avatar.png",
        flag: "🇫🇷"
      },
      {
        id: 5,
        name: "Alexander Petrov",
        type: "Individual Investor",
        amount: 2600000,
        avatar: "/lovable-uploads/liam-avatar.png",
        flag: "🇷🇺"
      },
      {
        id: 6,
        name: "Victoria Clarke",
        type: "Individual Investor",
        amount: 2300000,
        avatar: "/lovable-uploads/liam-avatar.png",
        flag: "🇺🇸"
      },
      {
        id: 7,
        name: "Leonardo Rossi",
        type: "Individual Investor",
        amount: 2000000,
        avatar: "/lovable-uploads/liam-avatar.png",
        flag: "🇮🇹"
      },
      {
        id: 8,
        name: "Yuki Tanaka",
        type: "Individual Investor",
        amount: 1850000,
        avatar: "/lovable-uploads/liam-avatar.png",
        flag: "🇯🇵"
      },
      {
        id: 9,
        name: "Nicolas Johansson",
        type: "Individual Investor",
        amount: 1700000,
        avatar: "/lovable-uploads/liam-avatar.png",
        flag: "🇳🇴"
      },
      {
        id: 10,
        name: "Amelia Thompson",
        type: "Individual Investor",
        amount: 1550000,
        avatar: "/lovable-uploads/liam-avatar.png",
        flag: "🇦🇺"
      }
    ]
  },
  "ryder-cup": {
    name: "Ryder Cup",
    logo: "/lovable-uploads/3c841089-35f1-4a8e-bb45-856c04bcd5fe.png",
    totalInvestors: 3200,
    totalInvestment: 35000000,
    sponsors: [
      {
        id: 1,
        name: "Rolex",
        type: "Corporate Sponsor",
        amount: 2500000,
        logo: "https://logos-world.net/wp-content/uploads/2020/06/Rolex-Logo.png",
        badge: "SPONSOR"
      },
      {
        id: 2,
        name: "BMW",
        type: "Corporate Sponsor",
        amount: 1800000,
        logo: "https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png",
        badge: "SPONSOR"
      }
    ],
    topInvestors: [
      {
        id: 1,
        name: "Robert Sterling",
        type: "Individual Investor",
        amount: 1800000,
        avatar: "/lovable-uploads/liam-avatar.png",
        flag: "🇺🇸",
        badge: "TOP"
      },
      {
        id: 2,
        name: "Catherine Mills",
        type: "Individual Investor",
        amount: 1600000,
        avatar: "/lovable-uploads/liam-avatar.png",
        flag: "🇬🇧",
        badge: "2ND"
      },
      {
        id: 3,
        name: "Henrik Larsen",
        type: "Individual Investor",
        amount: 1400000,
        avatar: "/lovable-uploads/liam-avatar.png",
        flag: "🇩🇰",
        badge: "3RD"
      },
      {
        id: 4,
        name: "Maria Gonzalez",
        type: "Individual Investor",
        amount: 1200000,
        avatar: "/lovable-uploads/liam-avatar.png",
        flag: "🇪🇸"
      },
      {
        id: 5,
        name: "Jonathan Pierce",
        type: "Individual Investor",
        amount: 1000000,
        avatar: "/lovable-uploads/liam-avatar.png",
        flag: "🇺🇸"
      },
      {
        id: 6,
        name: "Francoise Laurent",
        type: "Individual Investor",
        amount: 900000,
        avatar: "/lovable-uploads/liam-avatar.png",
        flag: "🇫🇷"
      },
      {
        id: 7,
        name: "Klaus Weber",
        type: "Individual Investor",
        amount: 800000,
        avatar: "/lovable-uploads/liam-avatar.png",
        flag: "🇩🇪"
      },
      {
        id: 8,
        name: "Sarah Mitchell",
        type: "Individual Investor",
        amount: 750000,
        avatar: "/lovable-uploads/liam-avatar.png",
        flag: "🇨🇦"
      },
      {
        id: 9,
        name: "Andrea Conti",
        type: "Individual Investor",
        amount: 700000,
        avatar: "/lovable-uploads/liam-avatar.png",
        flag: "🇮🇹"
      },
      {
        id: 10,
        name: "Peter Walsh",
        type: "Individual Investor",
        amount: 650000,
        avatar: "/lovable-uploads/liam-avatar.png",
        flag: "🇮🇪"
      }
    ]
  }
};

export default function InvestorLeaderboard() {
  const { assetId } = useParams();
  const navigate = useNavigate();
  
  const data = assetId ? leaderboardData[assetId] : null;
  
  if (!data) {
    return (
      <div className="p-6 space-y-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>
        <Card className="card-professional p-8 text-center">
          <h2 className="text-xl font-semibold text-card-foreground mb-2">Asset Not Found</h2>
          <p className="text-muted-foreground">The investor leaderboard you're looking for doesn't exist.</p>
        </Card>
      </div>
    );
  }

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-5 h-5 text-yellow-500" />;
      case 2:
        return <Medal className="w-5 h-5 text-slate-400" />;
      case 3:
        return <Medal className="w-5 h-5 text-amber-600" />;
      default:
        return null;
    }
  };

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case "TOP":
        return "default";
      case "2ND":
        return "secondary";
      case "3RD":
        return "outline";
      case "SPONSOR":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => navigate(`/deal/${assetId}`)}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Asset Details
        </Button>
      </div>

      {/* Asset Header */}
      <Card className="card-professional">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img 
              src={data.logo}
              alt={data.name}
              className="w-20 h-20 rounded-xl object-cover"
            />
            <div>
              <CardTitle className="text-3xl font-bold text-gradient">{data.name}</CardTitle>
              <p className="text-muted-foreground text-lg">Investor Leaderboard</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{data.totalInvestors.toLocaleString()}</div>
              <div className="text-muted-foreground">Total Investors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">£{(data.totalInvestment / 1000000).toFixed(0)}M</div>
              <div className="text-muted-foreground">Total Investment</div>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sponsor Investors */}
        <Card className="card-professional">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              Sponsor Investors
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {data.sponsors.map((sponsor: any, index: number) => (
              <div key={sponsor.id} className="flex items-center gap-4 p-4 bg-gradient-to-r from-destructive/5 to-destructive/10 rounded-lg border border-destructive/20">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-destructive/20 text-destructive font-bold">
                  {index + 1}
                </div>
                <div className="w-12 h-12 rounded-lg bg-background p-2 flex items-center justify-center">
                  <img src={sponsor.logo} alt={sponsor.name} className="w-8 h-8 object-contain" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-card-foreground">{sponsor.name}</h3>
                    <Badge variant={getBadgeVariant(sponsor.badge)} className="text-xs">
                      {sponsor.badge}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{sponsor.type}</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg text-destructive">
                    £{(sponsor.amount / 1000000).toFixed(1)}M
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Top 10 Individual Investors */}
        <Card className="card-professional">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Top 10 Individual Investors
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {data.topInvestors.map((investor: any, index: number) => (
              <div key={investor.id} className="flex items-center gap-4 p-3 hover:bg-accent/50 rounded-lg transition-colors">
                <div className="flex items-center justify-center w-8 h-8">
                  {index < 3 ? (
                    getRankIcon(index + 1)
                  ) : (
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-muted text-muted-foreground text-sm font-semibold">
                      {index + 1}
                    </div>
                  )}
                </div>
                <Avatar className="w-10 h-10">
                  <AvatarImage src={investor.avatar} alt={investor.name} />
                  <AvatarFallback>{investor.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-card-foreground">{investor.name}</h3>
                    <span className="text-lg">{investor.flag}</span>
                    {investor.badge && (
                      <Badge variant={getBadgeVariant(investor.badge)} className="text-xs">
                        {investor.badge}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{investor.type}</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-primary">
                    £{(investor.amount / 1000000).toFixed(1)}M
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Investment Statistics */}
      <Card className="card-professional">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Investment Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-primary/5 rounded-lg">
              <div className="text-2xl font-bold text-primary">
                £{((data.sponsors.reduce((sum: number, sponsor: any) => sum + sponsor.amount, 0)) / 1000000).toFixed(1)}M
              </div>
              <div className="text-sm text-muted-foreground">Corporate Investment</div>
            </div>
            <div className="text-center p-4 bg-success/5 rounded-lg">
              <div className="text-2xl font-bold text-success">
                £{((data.topInvestors.reduce((sum: number, investor: any) => sum + investor.amount, 0)) / 1000000).toFixed(1)}M
              </div>
              <div className="text-sm text-muted-foreground">Top 10 Individual</div>
            </div>
            <div className="text-center p-4 bg-warning/5 rounded-lg">
              <div className="text-2xl font-bold text-warning">
                £{((data.totalInvestment - data.sponsors.reduce((sum: number, sponsor: any) => sum + sponsor.amount, 0) - data.topInvestors.reduce((sum: number, investor: any) => sum + investor.amount, 0)) / 1000000).toFixed(1)}M
              </div>
              <div className="text-sm text-muted-foreground">Other Investors</div>
            </div>
            <div className="text-center p-4 bg-info/5 rounded-lg">
              <div className="text-2xl font-bold text-info">
                £{(data.topInvestors[0].amount / 1000).toFixed(0)}K
              </div>
              <div className="text-sm text-muted-foreground">Average Top 10</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}