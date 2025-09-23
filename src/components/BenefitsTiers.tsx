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
      benefits: ["Quarterly video updates from management", "Early access to new opportunities", "Official Liverpool FC merchandise package", "✓ Includes all benefits from previous tiers"]
    },
    gold: {
      name: "Gold",
      investment: 10000,
      available: 750,
      benefits: ["VIP Anfield matchday experiences", "Behind-the-scenes training ground content", "Annual strategic briefings with club executives", "Exclusive access to Liverpool legends events", "✓ Includes all benefits from previous tiers"]
    },
    platinum: {
      name: "Platinum",
      investment: 25000,
      available: 250,
      benefits: ["Private stadium & training ground tours", "Player meet & greet opportunities", "Premium hospitality for Liverpool vs top 6 matches", "Priority access to Champions League fixtures", "✓ Includes all benefits from previous tiers"]
    },
    diamond: {
      name: "Diamond",
      investment: 50000,
      available: 100,
      benefits: ["Exclusive dinner with Arne Slot or club legends", "Priority season ticket access", "Personalised relationship manager", "Access to Liverpool's player tunnel on matchdays", "✓ Includes all benefits from previous tiers"]
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
      benefits: ["Quarterly video updates from team", "Early access to new opportunities", "Official McLaren merchandise package", "✓ Includes all benefits from previous tiers"]
    },
    gold: {
      name: "Gold", 
      investment: 15000,
      available: 500,
      benefits: ["VIP British Grand Prix experiences", "Behind-the-scenes McLaren Technology Centre access", "Annual strategic briefings with team management", "Exclusive access to McLaren's F1 simulator", "✓ Includes all benefits from previous tiers"]
    },
    platinum: {
      name: "Platinum",
      investment: 35000,
      available: 150,
      benefits: ["Private factory tours including simulator access", "Driver meet & greet opportunities", "Paddock Club access at Silverstone", "Exclusive McLaren road car driving experiences", "✓ Includes all benefits from previous tiers"]
    },
    diamond: {
      name: "Diamond",
      investment: 75000,
      available: 50,
      benefits: ["Private dinner with Lando Norris", "Exclusive garage access during race weekends", "Personalised relationship manager", "Opportunity to ride in McLaren 2-seater F1 car", "✓ Includes all benefits from previous tiers"]
    }
  },
  rydercup: {
    platinum: {
      name: "Platinum",
      investment: 25000,
      available: 1500,
      benefits: ["Premium hospitality for all tournament days", "Access to exclusive Platinum Lounge", "Priority seating for all rounds", "Official Ryder Cup merchandise package", "Meet and greet opportunities with golf professionals"]
    },
    diamond: {
      name: "Diamond",
      investment: 50000,
      available: 750,
      benefits: ["Captain's Dinner access with Ryder Cup team members", "VIP behind-the-scenes tournament access", "Private hospitality suite access", "Exclusive photo opportunities with the Ryder Cup trophy", "Personalised relationship manager", "✓ Includes all benefits from previous tiers"]
    }
  },
  cardiff: {
    bronze: {
      name: "Bronze",
      investment: 750,
      available: 5000,
      benefits: ["Community access", "Monthly insights", "Cardiff City digital magazine"]
    },
    silver: {
      name: "Silver",
      investment: 3000,
      available: 2000,
      benefits: ["Quarterly updates", "Early access", "Official Cardiff City merchandise", "✓ Includes all benefits from previous tiers"]
    },
    gold: {
      name: "Gold",
      investment: 12000,
      available: 750,
      benefits: ["VIP matchday experiences at Cardiff City Stadium", "Behind-the-scenes training ground access", "Annual strategic briefings", "Exclusive Welsh heritage tours", "✓ Includes all benefits from previous tiers"]
    },
    platinum: {
      name: "Platinum",
      investment: 30000,
      available: 250,
      benefits: ["Private stadium & training ground tours", "Player meet & greet opportunities", "Premium hospitality for South Wales derbies", "Access to Cardiff City boardroom experiences", "✓ Includes all benefits from previous tiers"]
    },
    diamond: {
      name: "Diamond",
      investment: 60000,
      available: 100,
      benefits: ["Exclusive dinner with Cardiff City manager and club legends", "Priority season ticket access", "Personalised relationship manager", "Private Welsh heritage experiences including Cardiff Castle tours", "✓ Includes all benefits from previous tiers"]
    }
  },
  hexagon: {
    bronze: {
      name: "Bronze",
      investment: 750,
      available: 5000,
      benefits: ["Community access", "Monthly tournament newsletters", "Digital Hexagon Cup content"]
    },
    silver: {
      name: "Silver",
      investment: 3500,
      available: 2000,
      benefits: ["Quarterly updates from tournament directors", "Early access", "Official Hexagon Cup merchandise", "✓ Includes all benefits from previous tiers"]
    },
    gold: {
      name: "Gold",
      investment: 15000,
      available: 750,
      benefits: ["VIP tournament experiences in Spain", "Behind-the-scenes court and facility access", "Annual strategic briefings with tournament leadership", "Exclusive padel coaching sessions with professionals", "✓ Includes all benefits from previous tiers"]
    },
    platinum: {
      name: "Platinum",
      investment: 35000,
      available: 250,
      benefits: ["Private venue & facility tours", "Professional player meet & greets", "Premium hospitality for championship finals", "Access to exclusive padel courts in Spain", "✓ Includes all benefits from previous tiers"]
    },
    diamond: {
      name: "Diamond",
      investment: 70000,
      available: 100,
      benefits: ["Exclusive dinner with world-ranked padel champions", "VIP access to all Hexagon Cup events", "Personalised relationship manager", "Opportunity to play exhibition matches with professional players", "Luxury Spanish accommodation during tournaments", "✓ Includes all benefits from previous tiers"]
    }
  },
  ohio: {
    bronze: {
      name: "Bronze",
      investment: 1000,
      available: 5000,
      benefits: ["Community access", "Monthly athletics insights", "Ohio State digital content"]
    },
    silver: {
      name: "Silver",
      investment: 4000,
      available: 2000,
      benefits: ["Quarterly athletics updates", "Early access", "Official Ohio State merchandise", "✓ Includes all benefits from previous tiers"]
    },
    gold: {
      name: "Gold",
      investment: 18000,
      available: 750,
      benefits: ["VIP game day experiences at Ohio Stadium", "Behind-the-scenes athletics facilities access", "Annual strategic briefings with athletics leadership", "Exclusive access to Ohio State Hall of Fame", "✓ Includes all benefits from previous tiers"]
    },
    platinum: {
      name: "Platinum",
      investment: 40000,
      available: 250,
      benefits: ["Private campus & athletics facility tours", "Student-athlete meet & greet opportunities", "Premium hospitality for Michigan rivalry games", "Access to athletics department boardroom", "✓ Includes all benefits from previous tiers"]
    },
    diamond: {
      name: "Diamond",
      investment: 80000,
      available: 100,
      benefits: ["Exclusive dinner with Ohio State athletics director and coaching staff", "VIP access to all sporting events including basketball and American football", "Personalised relationship manager", "Opportunity to participate in Ohio State traditions like dotting the 'i' in Script Ohio", "✓ Includes all benefits from previous tiers"]
    }
  },
  southernbrave: {
    bronze: {
      name: "Bronze",
      investment: 1500,
      available: 2000,
      benefits: ["The Hundred digital magazine", "Monthly cricket insights", "Basic customer support"]
    },
    silver: {
      name: "Silver",
      investment: 7500,
      available: 1000,
      benefits: ["Quarterly Southern Brave updates", "Early access to new cricket opportunities", "Official Southern Brave merchandise", "✓ Includes all benefits from previous tiers"]
    },
    gold: {
      name: "Gold",
      investment: 20000,
      available: 400,
      benefits: ["VIP match day experiences at The Rose Bowl", "Behind-the-scenes training ground access", "Annual strategic briefings with cricket management", "Exclusive access to Southern Brave player interactions", "✓ Includes all benefits from previous tiers"]
    },
    platinum: {
      name: "Platinum",
      investment: 50000,
      available: 150,
      benefits: ["Private Rose Bowl stadium tours including player facilities", "Cricket player meet & greet opportunities", "Premium hospitality for The Hundred finals", "Exclusive access to Southern Brave coaching clinics", "✓ Includes all benefits from previous tiers"]
    },
    diamond: {
      name: "Diamond",
      investment: 100000,
      available: 50,
      benefits: ["Exclusive dinner with Southern Brave captain and coaching staff", "VIP access to all The Hundred matches", "Personalised relationship manager", "Opportunity to participate in Southern Brave team talks and strategy sessions", "Luxury hospitality experiences during cricket season", "✓ Includes all benefits from previous tiers"]
    }
  }
};

interface BenefitsTiersProps {
  selectedTier?: string;
  compact?: boolean;
  asset?: 'liverpool' | 'mclaren' | 'rydercup' | 'cardiff' | 'hexagon' | 'ohio' | 'southernbrave';
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