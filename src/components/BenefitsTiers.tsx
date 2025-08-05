import { Shield, Star, Crown, Diamond, Zap, Clock, Users, Gift, Ticket, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface BenefitsTier {
  id: string;
  name: string;
  color: string;
  icon: React.ComponentType<any>;
  benefits: string[];
  minInvestment: string;
  exclusive?: boolean;
}

export const benefitsTiers: BenefitsTier[] = [
  {
    id: "bronze",
    name: "Bronze",
    color: "text-amber-600",
    icon: Shield,
    minInvestment: "£500",
    benefits: [
      "Monthly investor newsletter",
      "Community forum access",
      "Basic performance updates",
      "Annual report access"
    ]
  },
  {
    id: "silver", 
    name: "Silver",
    color: "text-slate-500",
    icon: Star,
    minInvestment: "£2,500",
    benefits: [
      "All Bronze benefits",
      "Quarterly video updates from management",
      "Exclusive content and interviews",
      "Priority customer support",
      "Early access to new opportunities"
    ]
  },
  {
    id: "gold",
    name: "Gold", 
    color: "text-yellow-500",
    icon: Crown,
    minInvestment: "£10,000",
    benefits: [
      "All Silver benefits",
      "Stadium/facility tours (when available)",
      "Meet & greet opportunities",
      "Branded merchandise package",
      "Discounted tickets and hospitality"
    ]
  },
  {
    id: "platinum",
    name: "Platinum",
    color: "text-slate-300", 
    icon: Trophy,
    minInvestment: "£50,000",
    benefits: [
      "All Gold benefits",
      "VIP hospitality experiences",
      "Behind-the-scenes access",
      "Executive meet & greets",
      "Premium seating allocations",
      "Exclusive investor events"
    ]
  },
  {
    id: "diamond",
    name: "Diamond",
    color: "text-blue-400",
    icon: Diamond,
    minInvestment: "£250,000",
    exclusive: true,
    benefits: [
      "All Platinum benefits",
      "Player/driver experience days",
      "Luxury hospitality packages",
      "Training ground access",
      "Awards ceremony invitations",
      "Personalized concierge service",
      "Annual strategic briefings"
    ]
  }
];

interface BenefitsTiersProps {
  selectedTier?: string;
  compact?: boolean;
}

export function BenefitsTiers({ selectedTier, compact = false }: BenefitsTiersProps) {
  if (compact && selectedTier) {
    const tier = benefitsTiers.find(t => t.id === selectedTier);
    if (!tier) return null;

    const IconComponent = tier.icon;
    
    return (
      <Card className="border-0 bg-gradient-to-br from-card to-card/90">
        <CardContent className="p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className={`${tier.color} p-2 rounded-lg bg-muted/30`}>
              <IconComponent className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-card-foreground">{tier.name} Tier</h4>
              <p className="text-sm text-muted-foreground">From {tier.minInvestment}</p>
            </div>
            {tier.exclusive && (
              <Badge variant="secondary" className="text-xs">Exclusive</Badge>
            )}
          </div>
          <div className="space-y-1">
            {tier.benefits.slice(0, 3).map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-card-foreground">
                <div className="w-1 h-1 bg-primary rounded-full" />
                {benefit}
              </div>
            ))}
            {tier.benefits.length > 3 && (
              <p className="text-xs text-muted-foreground">+{tier.benefits.length - 3} more benefits</p>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold text-foreground">Investor Benefits Tiers</h3>
        <p className="text-muted-foreground">Unlock exclusive experiences based on your investment level</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {benefitsTiers.map((tier) => {
          const IconComponent = tier.icon;
          const isSelected = selectedTier === tier.id;
          
          return (
            <Card 
              key={tier.id} 
              className={`relative border-0 transition-all duration-300 hover:scale-105 ${
                isSelected 
                  ? 'ring-2 ring-primary shadow-elegant' 
                  : 'shadow-card hover:shadow-elegant'
              }`}
            >
              {tier.exclusive && (
                <Badge 
                  variant="secondary" 
                  className="absolute -top-2 -right-2 z-10 text-xs font-medium"
                >
                  Exclusive
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto p-3 rounded-xl bg-muted/30 w-fit ${tier.color}`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <CardTitle className="text-lg font-bold text-card-foreground">
                  {tier.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground font-medium">
                  From {tier.minInvestment}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-card-foreground leading-tight">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}