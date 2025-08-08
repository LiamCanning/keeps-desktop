import { useState } from "react";
import { Gift, Star, Trophy, Calendar, Crown, Diamond, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { assetTiers } from "@/components/BenefitsTiers";
import { LogoImage } from "@/components/ui/logo-image";
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
  const [isOpen, setIsOpen] = useState(false);
  
  const getAssetKey = (teamName: string) => {
    if (teamName.includes('Liverpool')) return 'liverpool';
    if (teamName.includes('McLaren')) return 'mclaren';
    if (teamName.includes('Ryder')) return 'rydercup';
    if (teamName.includes('Cardiff')) return 'cardiff';
    if (teamName.includes('Hexagon')) return 'hexagon';
    if (teamName.includes('Ohio')) return 'ohio';
    return 'liverpool';
  };

  const tierColors = {
    bronze: "bg-gradient-to-r from-amber-50 to-amber-100 border-amber-200",
    silver: "bg-gradient-to-r from-slate-50 to-slate-100 border-slate-200", 
    gold: "bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200",
    platinum: "bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200",
    diamond: "bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200"
  };

  const tierIconColors = {
    bronze: "bg-amber-600 text-white",
    silver: "bg-slate-400 text-white", 
    gold: "bg-yellow-500 text-white",
    platinum: "bg-purple-600 text-white",
    diamond: "bg-blue-600 text-white"
  };

  const tierOrder = ['bronze', 'silver', 'gold', 'platinum', 'diamond'];

  return (
    <Card className="card-professional overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <LogoImage 
              src={benefit.logo}
              alt={`${benefit.team} logo`}
              size="lg"
            />
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
      
      <CardContent className="pt-0">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-between p-4 h-auto"
            >
              <span className="font-medium">View Investment Tiers & Benefits</span>
              {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="mt-4">
            <div className="space-y-3">
              {tierOrder.map((tierKey, index) => {
                const tier = assetTiers[getAssetKey(benefit.team)][tierKey];
                if (!tier) return null;
                
                return (
                  <div 
                    key={tierKey}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-lg ${
                      tierColors[tierKey as keyof typeof tierColors]
                    } relative overflow-hidden`}
                    style={{
                      transform: `scale(${1 + index * 0.01})`,
                      zIndex: tierOrder.length - index
                    }}
                  >
                    
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg shadow-md ${tierIconColors[tierKey as keyof typeof tierIconColors]}`}>
                        {tierKey === 'bronze' && <Gift className="w-5 h-5" />}
                        {tierKey === 'silver' && <Star className="w-5 h-5" />}
                        {tierKey === 'gold' && <Trophy className="w-5 h-5" />}
                        {tierKey === 'platinum' && <Crown className="w-5 h-5" />}
                        {tierKey === 'diamond' && <Diamond className="w-5 h-5" />}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-bold text-lg capitalize text-left">{tier.name} Tier</h4>
                          <div className="flex items-center gap-2">
                            <Badge variant="success" className="text-xs">
                              {tier.available} Available
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="mb-4 p-3 bg-white/50 rounded-lg border">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-muted-foreground">Investment Required</span>
                            <span className="text-lg font-bold text-foreground">£{tier.investment.toLocaleString()}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <h5 className="font-semibold text-sm text-left mb-2">Exclusive Benefits:</h5>
                          {tier.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3 text-sm text-left">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="leading-relaxed">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Progressive enhancement visual cue */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-6 p-4 bg-accent/10 rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-4 h-4 text-primary" />
                <span className="font-medium text-sm">Benefits Progression</span>
              </div>
              <p className="text-xs text-muted-foreground text-left">
                Higher tiers include all benefits from previous tiers plus exclusive additional perks. 
                Diamond tier offers the most exclusive experiences with personalised access and premium benefits.
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>
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
      <div className="space-y-4 text-left">
        <h1 className="text-4xl font-bold text-gradient">Investor Benefits</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Unlock exclusive experiences and perks with our tiered investment programme. 
          From Bronze to Diamond, each tier offers progressively more exclusive access and benefits.
        </p>
      </div>

      {/* Benefits Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 card-professional">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Gift className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Assets</p>
              <p className="font-semibold text-xl">3</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 card-professional">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-success/20 rounded-lg">
              <Star className="w-5 h-5 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Benefit Tiers</p>
              <p className="font-semibold text-xl">5</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 card-professional">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-warning/20 rounded-lg">
              <Trophy className="w-5 h-5 text-warning" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Min Investment</p>
              <p className="font-semibold text-xl">£500</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 card-professional">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Diamond className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Exclusive Access</p>
              <p className="font-semibold text-xl">Premium</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Benefits Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4 bg-card">
          <TabsTrigger value="all">All Assets</TabsTrigger>
          <TabsTrigger value="live" className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            Live Assets
          </TabsTrigger>
          <TabsTrigger value="coming-soon">Coming Soon</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
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
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 items-start">
              {filteredBenefits.map((benefit) => (
                <BenefitCard key={benefit.id} benefit={benefit} />
              ))}
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