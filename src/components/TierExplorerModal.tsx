import { useState } from "react";
import { Gift, Star, Trophy, Crown, Diamond, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { assetTiers } from "@/components/BenefitsTiers";

interface TierExplorerModalProps {
  isOpen: boolean;
  onClose: () => void;
  teamName: string;
  assetKey: string;
}

const tierOrder = ['bronze', 'silver', 'gold', 'platinum', 'diamond'];

const tierColors = {
  bronze: "from-amber-50 to-amber-100 border-amber-200",
  silver: "from-slate-50 to-slate-100 border-slate-200", 
  gold: "from-yellow-50 to-yellow-100 border-yellow-200",
  platinum: "from-purple-50 to-purple-100 border-purple-200",
  diamond: "from-blue-50 to-blue-100 border-blue-200"
};

const tierIconColors = {
  bronze: "bg-amber-600 text-white",
  silver: "bg-slate-400 text-white", 
  gold: "bg-yellow-500 text-white",
  platinum: "bg-purple-600 text-white",
  diamond: "bg-blue-600 text-white"
};

const tierIcons = {
  bronze: Gift,
  silver: Star,
  gold: Trophy,
  platinum: Crown,
  diamond: Diamond
};

export function TierExplorerModal({ isOpen, onClose, teamName, assetKey }: TierExplorerModalProps) {
  const [currentTierIndex, setCurrentTierIndex] = useState(0);
  const tiers = assetTiers[assetKey as keyof typeof assetTiers];
  
  if (!tiers) return null;

  // Get available tiers for this asset dynamically
  const availableTiers = Object.keys(tiers);
  const currentTierKey = availableTiers[currentTierIndex];
  const currentTier = tiers[currentTierKey as keyof typeof tiers];
  const TierIcon = tierIcons[currentTierKey as keyof typeof tierIcons];

  const nextTier = () => {
    if (currentTierIndex < availableTiers.length - 1) {
      setCurrentTierIndex(currentTierIndex + 1);
    }
  };

  const prevTier = () => {
    if (currentTierIndex > 0) {
      setCurrentTierIndex(currentTierIndex - 1);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-2xl font-bold">
                {teamName} Investment Tiers
              </DialogTitle>
              <DialogDescription className="text-base mt-2">
                Explore exclusive benefits for each investment tier. Higher tiers include all previous benefits plus additional perks.
              </DialogDescription>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Tier Navigation */}
          <div className="flex items-center justify-center gap-2 py-4">
            {availableTiers.map((tierKey, index) => {
              const TierNavIcon = tierIcons[tierKey as keyof typeof tierIcons];
              return (
                <button
                  key={tierKey}
                  onClick={() => setCurrentTierIndex(index)}
                  className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-all duration-300 ${
                    index === currentTierIndex 
                      ? `bg-gradient-to-br ${tierColors[tierKey as keyof typeof tierColors]} scale-110 shadow-lg` 
                      : 'bg-muted/50 hover:bg-muted/80'
                  }`}
                >
                  <div className={`p-2 rounded-full ${
                    index === currentTierIndex 
                      ? tierIconColors[tierKey as keyof typeof tierIconColors]
                      : 'bg-muted-foreground/20 text-muted-foreground'
                  }`}>
                    <TierNavIcon className="w-4 h-4" />
                  </div>
                  <span className={`text-xs font-medium capitalize ${
                    index === currentTierIndex ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {tierKey}
                  </span>
                </button>
              );
            })}
          </div>
        </DialogHeader>

        {/* Current Tier Display */}
        <div className="space-y-6">
          <Card className={`overflow-hidden border-2 bg-gradient-to-br ${tierColors[currentTierKey as keyof typeof tierColors]} transition-all duration-500 animate-fade-in`}>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-4 rounded-xl shadow-lg ${tierIconColors[currentTierKey as keyof typeof tierIconColors]}`}>
                    <TierIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl capitalize font-bold">
                      {currentTier.name} Tier
                    </CardTitle>
                    <p className="text-lg text-muted-foreground mt-1">
                      Tier {currentTierIndex + 1} of {availableTiers.length}
                    </p>
                  </div>
                </div>
                <div className="text-right space-y-2">
                  <Badge variant="success" className="text-sm">
                    {currentTier.available} Available
                  </Badge>
                  <div className="text-2xl font-bold text-foreground">
                    £{currentTier.investment.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Minimum Investment
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border">
                <h4 className="font-bold text-lg mb-4 text-left">Exclusive Benefits:</h4>
                <div className="grid gap-3">
                  {currentTier.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 text-left">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tier Progression Info */}
              {currentTierIndex < availableTiers.length - 1 && (
                <div className="bg-accent/20 rounded-lg p-4 border border-accent/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="font-medium text-sm">Next Tier Benefits</span>
                  </div>
                  <p className="text-sm text-muted-foreground text-left">
                    Upgrade to {availableTiers[currentTierIndex + 1]} tier for additional exclusive perks and enhanced experiences.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between">
            <Button 
              variant="outline" 
              onClick={prevTier} 
              disabled={currentTierIndex === 0}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous Tier
            </Button>
            
            <div className="text-center">
              <div className="text-sm text-muted-foreground">
                Showing tier {currentTierIndex + 1} of {availableTiers.length}
              </div>
            </div>
            
            <Button 
              variant="outline" 
              onClick={nextTier} 
              disabled={currentTierIndex === availableTiers.length - 1}
              className="flex items-center gap-2"
            >
              Next Tier
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}