import { Gift, Star, Trophy, Calendar, MapPin, Ticket, Crown, Diamond } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface BenefitsTier {
  id: string;
  name: string;
  color: string;
  icon: React.ReactNode;
  benefits: string[];
  minInvestment: number;
  available?: number;
  exclusive?: boolean;
}

// Asset-specific tier configurations
export const assetTiers = {
  liverpool: {
    bronze: {
      name: "Bronze",
      investment: 500,
      available: 5000,
      benefits: ["Community forum access", "Monthly newsletters with club insights", "Basic customer support"]
    },
    silver: {
      name: "Silver", 
      investment: 2500,
      available: 2000,
      benefits: ["Quarterly video updates from management", "Early access to new opportunities", "Official Liverpool FC merchandise package"]
    },
    gold: {
      name: "Gold",
      investment: 10000,
      available: 750,
      benefits: ["VIP match day experiences", "Behind-the-scenes Anfield content", "Annual strategic briefings with club executives"]
    },
    platinum: {
      name: "Platinum",
      investment: 25000,
      available: 250,
      benefits: ["Exclusive stadium and training ground tours", "Player meet & greet opportunities", "Premium hospitality for select matches"]
    },
    diamond: {
      name: "Diamond",
      investment: 50000,
      available: 100,
      benefits: ["Private dinners with club leadership", "Season ticket priority access", "Personalized relationship manager"]
    }
  },
  mclaren: {
    bronze: {
      name: "Bronze",
      investment: 1000,
      available: 3000,
      benefits: ["Community forum access", "Monthly technical newsletters", "Basic customer support"]
    },
    silver: {
      name: "Silver",
      investment: 5000,
      available: 1500,
      benefits: ["Quarterly video updates from team", "Early access to new opportunities", "Official McLaren merchandise package"]
    },
    gold: {
      name: "Gold", 
      investment: 15000,
      available: 500,
      benefits: ["VIP Grand Prix experiences", "Behind-the-scenes McLaren Technology Centre content", "Annual strategic briefings with team management"]
    },
    platinum: {
      name: "Platinum",
      investment: 35000,
      available: 150,
      benefits: ["Exclusive factory and simulator tours", "Driver meet & greet opportunities", "Paddock Club access at select races"]
    },
    diamond: {
      name: "Diamond",
      investment: 75000,
      available: 50,
      benefits: ["Private dinners with team leadership", "VIP garage access during races", "Personalized relationship manager"]
    }
  },
  rydercup: {
    bronze: {
      name: "Bronze",
      investment: 1000,
      available: 1000,
      benefits: ["Commemorative Merchandise", "Limited edition Ryder Cup merchandise package and certificate"]
    },
    silver: {
      name: "Silver",
      investment: 15000, 
      available: 750,
      benefits: ["Premium Hospitality", "Access to Silver Club hospitality areas during practice rounds", "✓ Includes all benefits from previous tiers"]
    },
    gold: {
      name: "Gold",
      investment: 25000,
      available: 500,
      benefits: ["Exclusive Tournament Access", "Premium seating for all tournament days plus Gold Lounge Access", "✓ Includes all benefits from previous tiers"]
    },
    platinum: {
      name: "Platinum",
      investment: 35000,
      available: 250,
      benefits: ["Player Meet & Greet", "Exclusive meet and greet with Ryder Cup players", "✓ Includes all benefits from previous tiers"]
    },
    diamond: {
      name: "Diamond",
      investment: 50000,
      available: 100,
      benefits: ["Captain's Dinner", "Exclusive dinner with the Ryder Cup Captain and team members", "✓ Includes all benefits from previous tiers"]
    }
  },
  cardiff: {
    bronze: {
      name: "Bronze",
      investment: 750,
      available: 4000,
      benefits: ["Community forum access", "Monthly newsletters with club insights", "Cardiff City FC digital magazine subscription"]
    },
    silver: {
      name: "Silver",
      investment: 3000,
      available: 1800,
      benefits: ["Quarterly video updates from management", "Early access to new opportunities", "Official Cardiff City FC merchandise package"]
    },
    gold: {
      name: "Gold",
      investment: 12000,
      available: 600,
      benefits: ["VIP match day experiences at Cardiff City Stadium", "Behind-the-scenes content access", "Annual strategic briefings with club leadership"]
    },
    platinum: {
      name: "Platinum",
      investment: 30000,
      available: 200,
      benefits: ["Exclusive stadium and training ground tours", "Player meet & greet opportunities", "Premium hospitality for select matches"]
    },
    diamond: {
      name: "Diamond",
      investment: 60000,
      available: 75,
      benefits: ["Private dinners with club ownership", "Season ticket priority access", "Personalized relationship manager and Welsh heritage experiences"]
    }
  },
  hexagon: {
    bronze: {
      name: "Bronze",
      investment: 750,
      available: 3500,
      benefits: ["Community forum access", "Monthly tournament newsletters", "Digital access to Hexagon Cup content"]
    },
    silver: {
      name: "Silver",
      investment: 3500,
      available: 1500,
      benefits: ["Quarterly video updates from tournament directors", "Early access to new opportunities", "Official Hexagon Cup merchandise package"]
    },
    gold: {
      name: "Gold",
      investment: 15000,
      available: 400,
      benefits: ["VIP tournament experiences", "Behind-the-scenes content access", "Annual strategic briefings with tournament leadership"]
    },
    platinum: {
      name: "Platinum",
      investment: 35000,
      available: 150,
      benefits: ["Exclusive venue and facility tours", "Athlete meet & greet opportunities", "Premium hospitality for tournament events"]
    },
    diamond: {
      name: "Diamond",
      investment: 70000,
      available: 50,
      benefits: ["Private dinners with tournament leadership", "VIP access to all tournament events", "Personalized relationship manager and global sports experiences"]
    }
  },
  ohio: {
    bronze: {
      name: "Bronze",
      investment: 1000,
      available: 5000,
      benefits: ["Community forum access", "Monthly newsletters with athletics insights", "Ohio State digital content subscription"]
    },
    silver: {
      name: "Silver",
      investment: 4000,
      available: 2000,
      benefits: ["Quarterly video updates from athletics department", "Early access to new opportunities", "Official Ohio State merchandise package"]
    },
    gold: {
      name: "Gold",
      investment: 18000,
      available: 500,
      benefits: ["VIP game day experiences", "Behind-the-scenes campus and athletics content", "Annual strategic briefings with athletics leadership"]
    },
    platinum: {
      name: "Platinum",
      investment: 40000,
      available: 200,
      benefits: ["Exclusive campus and athletics facility tours", "Student-athlete meet & greet opportunities", "Premium hospitality for select games"]
    },
    diamond: {
      name: "Diamond",
      investment: 80000,
      available: 75,
      benefits: ["Private dinners with athletics leadership", "VIP access to all sporting events", "Personalized relationship manager and college sports experiences"]
    }
  }
};

interface BenefitsTiersProps {
  selectedTier?: string;
  compact?: boolean;
  asset?: 'liverpool' | 'mclaren' | 'rydercup' | 'cardiff' | 'hexagon' | 'ohio';
}

export function BenefitsTiers({ selectedTier, compact = false, asset }: BenefitsTiersProps) {
  const tiers = asset ? assetTiers[asset] : null;
  const tierColors = {
    bronze: "bg-amber-600",
    silver: "bg-slate-400", 
    gold: "bg-yellow-500",
    platinum: "bg-slate-300",
    diamond: "bg-blue-400"
  };

  const tierIcons = {
    bronze: <Gift className="w-4 h-4" />,
    silver: <Star className="w-4 h-4" />,
    gold: <Trophy className="w-4 h-4" />,
    platinum: <Crown className="w-4 h-4" />,
    diamond: <Diamond className="w-4 h-4" />
  };

  if (compact && selectedTier && tiers) {
    const tier = tiers[selectedTier as keyof typeof tiers];
    if (!tier) return null;

    return (
      <Card className="investment-card">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${tierColors[selectedTier as keyof typeof tierColors]} text-white`}>
              {tierIcons[selectedTier as keyof typeof tierIcons]}
            </div>
            <div>
              <CardTitle className="text-lg capitalize">{tier.name} Tier</CardTitle>
              <p className="text-sm text-muted-foreground">
                £{tier.investment.toLocaleString()} minimum • {tier.available} available
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {tier.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (tiers) {
    return (
      <div className="space-y-4">
        {Object.entries(tiers).map(([tierKey, tier]) => (
          <Card key={tierKey} className="investment-card">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${tierColors[tierKey as keyof typeof tierColors]} text-white`}>
                    {tierIcons[tierKey as keyof typeof tierIcons]}
                  </div>
                  <div>
                    <CardTitle className="text-lg capitalize">{tier.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Investment Required: £{tier.investment.toLocaleString()} ({tier.available} available)
                    </p>
                  </div>
                </div>
                <Badge variant="success">Available</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {tier.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  // Fallback for original interface
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold text-foreground">Investor Benefits Tiers</h3>
        <p className="text-muted-foreground">Unlock exclusive experiences based on your investment level</p>
      </div>
    </div>
  );
}