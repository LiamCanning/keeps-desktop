import { useState } from "react";
import { Gift, Star, Trophy, Calendar, MapPin, Ticket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    logo: "/lovable-uploads/e0b86990-9fbb-421a-b689-b9e7ac420908.png",
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
    logo: "/lovable-uploads/18dc1b24-b06f-48f9-a2b9-1f6133e2eed7.png",
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
    logo: "/lovable-uploads/1075da4a-349e-420a-b050-72aad7295b63.png",
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
  return (
    <Card className="investment-card">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={benefit.logo}
              alt={benefit.team}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <CardTitle className="text-lg">{benefit.team}</CardTitle>
              <Badge variant={benefit.status} className="mt-1">
                {benefit.status === "live" ? "Live" : 
                 benefit.status === "coming-soon" ? "Coming Soon" : "Completed"}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {benefit.benefits.map((item, index) => (
            <div 
              key={index}
              className={`p-4 rounded-lg border transition-all duration-200 ${
                item.available 
                  ? 'bg-success/10 border-success/30 hover:bg-success/20' 
                  : 'bg-muted/20 border-border opacity-60'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${
                  item.available ? 'bg-success/20 text-success' : 'bg-muted text-muted-foreground'
                }`}>
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm">{item.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                </div>
                {item.available && (
                  <Badge variant="success" className="text-xs">
                    Available
                  </Badge>
                )}
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
      <div className="space-y-2">
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
              <p className="font-semibold text-xl">15</p>
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
              <p className="font-semibold text-xl">15</p>
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
              <p className="font-semibold text-xl">10</p>
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
          <TabsTrigger value="live" className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            Live Assets
          </TabsTrigger>
          <TabsTrigger value="coming-soon">Coming Soon Assets</TabsTrigger>
          <TabsTrigger value="completed">Completed Assets</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">
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
                <BenefitCard key={benefit.id} benefit={benefit} />
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}