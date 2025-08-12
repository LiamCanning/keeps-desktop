import { useState } from "react";
import { Gift, Star, Trophy, Calendar, Crown, Diamond } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LogoImage } from "@/components/ui/logo-image";
import { TierExplorerModal } from "@/components/TierExplorerModal";
import mclarenLogo from "@/assets/logos/mclaren-racing-logo.png";
import ryderLogo from "@/assets/logos/ryder-cup-logo.png";
interface Benefit {
  id: string;
  team: string;
  logo: string;
  status: "live" | "coming-soon" | "completed";
  description: string;
}

const benefits: Benefit[] = [
  {
    id: "1",
    team: "Liverpool FC",
    logo: "/lovable-uploads/c0f719b9-a198-429d-b736-b4081a14de86.png",
    status: "live",
    description: "Exclusive access to Anfield experiences, player meet & greets, and premium hospitality packages for one of the world's most successful football clubs."
  },
  {
    id: "2",
    team: "McLaren F1",
    logo: mclarenLogo,
    status: "live",
    description: "Behind-the-scenes access to McLaren Technology Centre, paddock club experiences, and exclusive meetings with drivers and team management."
  },
  {
    id: "3",
    team: "Ryder Cup",
    logo: ryderLogo,
    status: "live",
    description: "Premium tournament access, commemorative merchandise, and exclusive dining experiences with golf's most prestigious team tournament."
  },
  {
    id: "4",
    team: "Cardiff City FC",
    logo: "/lovable-uploads/32e5079c-7a6a-4a36-9545-a4faa7411f89.png",
    status: "coming-soon",
    description: "Welsh football club with passionate fanbase offering premium match experiences, player meet & greets, and exclusive Cardiff City Stadium access."
  },
  {
    id: "5",
    team: "Hexagon Cup",
    logo: "/lovable-uploads/30da111e-70d8-4fee-a60c-9bd1f09834ce.png",
    status: "coming-soon",
    description: "Prestigious multi-sport tournament featuring exclusive access to international competitions, VIP hospitality, and athlete interactions."
  },
  {
    id: "6",
    team: "Ohio State",
    logo: "/lovable-uploads/fcb5a91d-487c-486c-a923-d4255d9db988.png",
    status: "coming-soon",
    description: "Elite American university athletics programme offering premium game experiences, campus access, and exclusive Buckeyes community benefits."
  }
];

function BenefitCard({ benefit }: { benefit: Benefit }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const getAssetKey = (teamName: string) => {
    if (teamName.includes('Liverpool')) return 'liverpool';
    if (teamName.includes('McLaren')) return 'mclaren';
    if (teamName.includes('Ryder')) return 'rydercup';
    if (teamName.includes('Cardiff')) return 'cardiff';
    if (teamName.includes('Hexagon')) return 'hexagon';
    if (teamName.includes('Ohio')) return 'ohio';
    return 'liverpool';
  };


  return (
    <Card className="card-professional overflow-hidden h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-border/20 flex items-center justify-center p-2">
              <LogoImage 
                src={benefit.logo}
                alt={`${benefit.team} logo`}
                size="md"
              />
            </div>
            <div>
              <CardTitle className="text-xl text-left">{benefit.team}</CardTitle>
              <Badge variant={benefit.status === "live" ? "success" : benefit.status === "coming-soon" ? "warning" : "secondary"} className="mt-1">
                {benefit.status === "live" ? "Live" : 
                 benefit.status === "coming-soon" ? "Coming Soon" : "Completed"}
              </Badge>
            </div>
          </div>
        </div>
        <p className="text-muted-foreground text-left mt-3">
          {benefit.description}
        </p>
      </CardHeader>
      
      <CardContent className="pt-0 mt-auto">
        <Button 
          onClick={() => setIsModalOpen(true)}
          variant="outline" 
          className="w-full flex items-center justify-center gap-3 py-4 px-6 h-auto hover-scale rounded-xl bg-gradient-to-r from-purple-500/15 to-purple-600/25 text-foreground border border-purple-500/30 shadow-[var(--shadow-elegant)] hover:from-purple-500/25 hover:to-purple-600/35 focus-visible:ring-purple-500/40 transition-all duration-300"
        >
          <span className="font-medium text-base">Explore Investment Tiers & Benefits</span>
          <Star className="w-5 h-5" />
        </Button>
        
        <TierExplorerModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          teamName={benefit.team}
          assetKey={getAssetKey(benefit.team)}
        />
      </CardContent>
    </Card>
  );
}

export default function Benefits() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredBenefits = benefits.filter(benefit => {
    if (activeTab === "all") return true;
    return benefit.status === activeTab;
  });

  const totalBenefits = benefits.length;
  const liveBenefits = benefits.filter(b => b.status === "live").length;
  const comingSoonBenefits = benefits.filter(b => b.status === "coming-soon").length;

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="space-y-4 text-left">
        <h1 className="text-4xl font-bold text-gradient">Investor Benefits</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Unlock exclusive experiences and perks with our tiered investment programme. 
          From Bronze to Diamond, each tier offers progressively more exclusive access and benefits.
        </p>
      </div>

      {/* Benefits Overview Banner */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 p-6 border border-purple-200">
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-purple-600 mb-2">Benefits Overview</h2>
            <p className="text-gray-600">Unlock exclusive sports experiences</p>
          </div>
          <div className="flex items-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800">3</div>
              <div className="text-sm text-gray-600">Total Assets</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">5</div>
              <div className="text-sm text-gray-600">Benefit Tiers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">£500</div>
              <div className="text-sm text-gray-600">Min Investment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">Premium</div>
              <div className="text-sm text-gray-600">Exclusive Access</div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 right-6 flex gap-2">
          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
          <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
        </div>
      </div>

      {/* Benefits Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        {/* Mobile tab selector */}
        <div className="md:hidden mb-3">
          <Select value={activeTab} onValueChange={setActiveTab}>
            <SelectTrigger aria-label="Select benefits section">
              <SelectValue placeholder="Select section" />
            </SelectTrigger>
            <SelectContent className="z-50">
              <SelectItem value="all">All Assets</SelectItem>
              <SelectItem value="live">Live</SelectItem>
              <SelectItem value="coming-soon">Coming Soon</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <TabsList className="hidden md:grid w-full grid-cols-3 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 shadow-[var(--shadow-elegant)] h-auto rounded-md p-1.5">
          <TabsTrigger value="all" className="flex items-center justify-center gap-2 text-sm font-medium p-3">
            <span>All Assets ({totalBenefits})</span>
          </TabsTrigger>
          <TabsTrigger value="live" className="flex items-center justify-center gap-2 text-sm font-medium p-3">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            <span>Live Assets ({liveBenefits})</span>
          </TabsTrigger>
          <TabsTrigger value="coming-soon" className="flex items-center justify-center gap-2 text-sm font-medium p-3">
            <div className="w-2 h-2 bg-warning rounded-full"></div>
            <span>Coming Soon ({comingSoonBenefits})</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-left">
                {activeTab === "all" ? "All Asset Benefits" :
                 activeTab === "live" ? "Live Asset Benefits" :
                 activeTab === "coming-soon" ? "Coming Soon Benefits" :
                 "Completed Asset Benefits"}
              </h2>
              <Badge variant={activeTab === "live" ? "success" : activeTab === "coming-soon" ? "warning" : "secondary"}>
                {filteredBenefits.length} Available
              </Badge>
            </div>
            
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-4 border border-primary/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
                {filteredBenefits.map((benefit) => (
                  <BenefitCard key={benefit.id} benefit={benefit} />
                ))}
              </div>
            </div>
            
            {filteredBenefits.length === 0 && (
              <Card className="card-professional p-8 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center mx-auto">
                    <Gift className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">No Benefits Available</h3>
                    <p className="text-muted-foreground">
                      There are currently no benefits available for this category.
                    </p>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}