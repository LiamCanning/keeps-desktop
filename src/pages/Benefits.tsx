import { useState } from "react";
import { Gift, Star, Trophy, Calendar, MapPin, Ticket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { assetTiers } from "@/components/BenefitsTiers";
import { Crown, Diamond } from "lucide-react";

interface Benefit {
  id: string;
  team: string;
  logo: string;
  status: "live" | "coming-soon" | "completed";
  benefits: {
    title: string;
    description: string;
    icon: React.ReactNode;
    available: boolean;
  }[];
}

const benefits: Benefit[] = [
  {
    id: "1",
    team: "Liverpool FC",
    logo: "/lovable-uploads/b30a6bed-fd89-4147-8f94-67de21d47c97.png",
    status: "live",
    benefits: [
      {
        title: "Season Ticket Priority",
        description: "Priority access to season tickets and premium seating",
        icon: <Ticket className="w-5 h-5" />,
        available: true
      },
      {
        title: "Stadium Tours",
        description: "Exclusive behind-the-scenes stadium tours with player meet & greets",
        icon: <MapPin className="w-5 h-5" />,
        available: true
      },
      {
        title: "Training Ground Access",
        description: "Special access to training sessions and player interactions",
        icon: <Star className="w-5 h-5" />,
        available: true
      },
      {
        title: "Merchandise Discounts",
        description: "20% discount on all official Liverpool FC merchandise",
        icon: <Gift className="w-5 h-5" />,
        available: true
      },
      {
        title: "VIP Match Experience",
        description: "Premium hospitality suites with gourmet dining and exclusive viewing areas",
        icon: <Calendar className="w-5 h-5" />,
        available: true
      }
    ]
  },
  {
    id: "2",
    team: "McLaren F1",
    logo: "/lovable-uploads/6ce10e58-9e3e-4723-a481-326f200edc4e.png",
    status: "live",
    benefits: [
      {
        title: "Paddock Club Access",
        description: "Exclusive access to McLaren Paddock Club at select races",
        icon: <Trophy className="w-5 h-5" />,
        available: true
      },
      {
        title: "Driver Meet & Greets",
        description: "Meet Lando Norris and Oscar Piastri at special events",
        icon: <Star className="w-5 h-5" />,
        available: true
      },
      {
        title: "Factory Tours",
        description: "Private tours of the McLaren Technology Centre",
        icon: <MapPin className="w-5 h-5" />,
        available: true
      },
      {
        title: "Race Weekend Hospitality",
        description: "VIP hospitality packages for Grand Prix weekends",
        icon: <Calendar className="w-5 h-5" />,
        available: true
      },
      {
        title: "Technical Briefings",
        description: "Exclusive technical sessions with McLaren engineers and team principals",
        icon: <Gift className="w-5 h-5" />,
        available: true
      }
    ]
  },
  {
    id: "3",
    team: "Ryder Cup",
    logo: "/lovable-uploads/c23214c5-7f7c-4f20-9656-38c43a09385e.png",
    status: "live",
    benefits: [
      {
        title: "Commemorative Merchandise",
        description: "Limited edition Ryder Cup merchandise package and certificate",
        icon: <Gift className="w-5 h-5" />,
        available: true
      },
      {
        title: "Premium Hospitality",
        description: "Access to Silver Club hospitality areas during practice rounds",
        icon: <Star className="w-5 h-5" />,
        available: true
      },
      {
        title: "Exclusive Tournament Access",
        description: "Premium seating for all tournament days plus Gold Lounge Access",
        icon: <Trophy className="w-5 h-5" />,
        available: true
      },
      {
        title: "Player Meet & Greet",
        description: "Exclusive meet and greet with Ryder Cup players",
        icon: <Calendar className="w-5 h-5" />,
        available: true
      },
      {
        title: "Captain's Dinner",
        description: "Exclusive dinner with the Ryder Cup Captain and team members",
        icon: <Ticket className="w-5 h-5" />,
        available: true
      }
    ]
  }
];

function BenefitCard({ benefit }: { benefit: Benefit }) {
  const getAssetKey = (teamName: string) => {
    if (teamName.includes('Liverpool')) return 'liverpool';
    if (teamName.includes('McLaren')) return 'mclaren';
    if (teamName.includes('Ryder')) return 'rydercup';
    return 'liverpool';
  };

  const tierColors = {
    bronze: "border-amber-600 bg-amber-50",
    silver: "border-slate-400 bg-slate-50", 
    gold: "border-yellow-500 bg-yellow-50",
    platinum: "border-slate-300 bg-slate-50",
    diamond: "border-blue-400 bg-blue-50"
  };

  const tierBadgeColors = {
    bronze: "bg-amber-600",
    silver: "bg-slate-400", 
    gold: "bg-yellow-500",
    platinum: "bg-slate-300",
    diamond: "bg-blue-400"
  };

  return (
    <Card className="investment-card h-full flex flex-col">
      <CardHeader className="pb-4 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={benefit.logo}
              alt={benefit.team}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <CardTitle className="text-lg text-left">{benefit.team}</CardTitle>
              <Badge variant={benefit.status} className="mt-1">
                {benefit.status === "live" ? "Live" : 
                 benefit.status === "coming-soon" ? "Coming Soon" : "Completed"}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3 flex-1 flex flex-col">
        <div className="space-y-3 flex-1">
          {Object.entries(assetTiers[getAssetKey(benefit.team)]).map(([tierKey, tier]) => (
            <div 
              key={tierKey}
              className={`p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-md h-full flex flex-col ${
                tierColors[tierKey as keyof typeof tierColors]
              }`}
            >
              <div className="flex items-start gap-3 h-full">
                <div className={`p-2 rounded-lg flex-shrink-0 ${tierBadgeColors[tierKey as keyof typeof tierBadgeColors]} text-white`}>
                  {tierKey === 'bronze' && <Gift className="w-4 h-4" />}
                  {tierKey === 'silver' && <Star className="w-4 h-4" />}
                  {tierKey === 'gold' && <Trophy className="w-4 h-4" />}
                  {tierKey === 'platinum' && <Crown className="w-4 h-4" />}
                  {tierKey === 'diamond' && <Diamond className="w-4 h-4" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-base capitalize text-left">{tier.name}</h4>
                    <Badge variant="success" className="text-xs flex-shrink-0">
                      Available
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 text-left">
                    Investment Required: £{tier.investment.toLocaleString()} ({tier.available} available)
                  </p>
                  <div className="space-y-2">
                    {tier.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm text-left">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-5 flex-1">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function Benefits() {
  const [activeTab, setActiveTab] = useState("live");

  const filteredBenefits = benefits.filter(benefit => {
    if (activeTab === "all") return true;
    return benefit.status === activeTab;
  });

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="space-y-2 text-left">
        <h1 className="text-3xl font-bold text-gradient">All Benefits</h1>
        <p className="text-lg text-muted-foreground">Exclusive perks across all assets</p>
      </div>

      {/* Benefits Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Gift className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Benefits</p>
              <p className="font-semibold text-xl">25</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-success/20 rounded-lg">
              <Star className="w-5 h-5 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Available Now</p>
              <p className="font-semibold text-xl">25</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-warning/20 rounded-lg">
              <Trophy className="w-5 h-5 text-warning" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Premium Access</p>
              <p className="font-semibold text-xl">15</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Upcoming Events</p>
              <p className="font-semibold text-xl">3</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Benefits Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
          <TabsTrigger value="all">All Assets</TabsTrigger>
          <TabsTrigger value="live" className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            Live Assets
          </TabsTrigger>
          <TabsTrigger value="coming-soon">Coming Soon Assets</TabsTrigger>
          <TabsTrigger value="completed">Completed Assets</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-left">
                {activeTab === "all" ? "All Benefits" :
                 activeTab === "live" ? "Live Asset Benefits" :
                 activeTab === "coming-soon" ? "Coming Soon Benefits" :
                 "Completed Asset Benefits"}
              </h2>
              <Badge variant={activeTab === "live" ? "live" : activeTab === "coming-soon" ? "coming-soon" : "default"}>
                {filteredBenefits.length} Available
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredBenefits.map((benefit) => (
                <div key={benefit.id} className="h-full">
                  <BenefitCard benefit={benefit} />
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}