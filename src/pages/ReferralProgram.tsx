import { useState } from "react";
import { Users, Gift, Star, Copy, ArrowRight, Trophy, Crown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import PageHeader from "@/components/PageHeader";

interface ReferralReward {
  tier: string;
  amount: string;
  requirement: string;
  description: string;
  icon: any;
}

const referralRewards: ReferralReward[] = [
  {
    tier: "Bronze",
    amount: "£50",
    requirement: "1-2 referrals",
    description: "Get £50 credit for each successful referral",
    icon: Gift
  },
  {
    tier: "Silver", 
    amount: "£100",
    requirement: "3-5 referrals",
    description: "Upgraded to £100 per referral + bonus rewards",
    icon: Star
  },
  {
    tier: "Gold",
    amount: "£200",
    requirement: "6-9 referrals", 
    description: "Premium tier with £200 per referral + exclusive benefits",
    icon: Trophy
  },
  {
    tier: "Diamond",
    amount: "£500",
    requirement: "10+ referrals",
    description: "Elite tier with maximum rewards + VIP status",
    icon: Crown
  }
];

export default function ReferralProgram() {
  const { toast } = useToast();
  const [referralCode] = useState("LIAM-KEEPS-2024");
  const [totalReferrals] = useState(7);
  const [totalEarned] = useState(850);
  const [currentTier] = useState("Gold");

  const copyReferralCode = () => {
    navigator.clipboard.writeText(`https://keeps.sport/ref/${referralCode}`);
    toast({
      title: "Referral link copied!",
      description: "Share this link with friends to earn rewards",
    });
  };

  const shareOnSocial = (platform: string) => {
    const link = `https://keeps.sport/ref/${referralCode}`;
    const text = "Join me on Keeps - the premium sports investment platform! Get exclusive access to invest in top teams.";
    
    let shareUrl = "";
    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(link)}`;
        break;
      case "linkedin":
        shareUrl = `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(link)}`;
        break;
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodeURIComponent(`${text} ${link}`)}`;
        break;
    }
    window.open(shareUrl, '_blank');
  };

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      <PageHeader
        title="Referral Program"
        subtitle="Earn rewards by inviting friends to join Keeps sports investment platform"
      />

      {/* Current Status - Modern Bubble Design */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="card-hover p-6 relative overflow-hidden border-0 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/20">
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-orange-200/30 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-300/20 rounded-full blur-lg"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-orange-500/20 rounded-xl">
                <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
            <p className="text-sm text-orange-600/80 dark:text-orange-400/80 mb-1 font-medium">Total Referrals</p>
            <p className="text-2xl font-bold text-orange-900 dark:text-orange-100">{totalReferrals}</p>
          </div>
        </Card>
        
        <Card className="card-hover p-6 relative overflow-hidden border-0 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/30 dark:to-emerald-900/20">
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-emerald-200/30 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-300/20 rounded-full blur-lg"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-emerald-500/20 rounded-xl">
                <Gift className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
            <p className="text-sm text-emerald-600/80 dark:text-emerald-400/80 mb-1 font-medium">Total Earned</p>
            <p className="text-2xl font-bold text-emerald-900 dark:text-emerald-100">£{totalEarned}</p>
          </div>
        </Card>
        
        <Card className="card-hover p-6 relative overflow-hidden border-0 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/30 dark:to-amber-900/20">
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-amber-200/30 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-amber-300/20 rounded-full blur-lg"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-amber-500/20 rounded-xl">
                <Trophy className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
            </div>
            <p className="text-sm text-amber-600/80 dark:text-amber-400/80 mb-1 font-medium">Current Tier</p>
            <div className="bg-amber-500 text-amber-50 px-3 py-1 rounded-full text-sm font-semibold inline-block">{currentTier}</div>
          </div>
        </Card>
      </div>

      {/* Referral Link */}
      <Card className="card-professional">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowRight className="w-5 h-5" />
            Your Referral Link
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              value={`https://keeps.sport/ref/${referralCode}`}
              readOnly
              className="font-mono"
            />
            <Button onClick={copyReferralCode} variant="outline">
              <Copy className="w-4 h-4 mr-2" />
              Copy
            </Button>
          </div>
          
          <div className="flex gap-2">
            <Button
              onClick={() => shareOnSocial("twitter")}
              variant="outline"
              className="flex-1"
            >
              Share on Twitter
            </Button>
            <Button
              onClick={() => shareOnSocial("linkedin")}
              variant="outline"
              className="flex-1"
            >
              Share on LinkedIn
            </Button>
            <Button
              onClick={() => shareOnSocial("whatsapp")}
              variant="outline"
              className="flex-1"
            >
              Share on WhatsApp
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Referral Tiers - Modern Tier Cards */}
      <div>
        <h2 className="text-2xl font-bold text-card-foreground mb-6">Referral Tiers & Rewards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {referralRewards.map((reward, index) => {
            const IconComponent = reward.icon;
            const isCurrentTier = reward.tier === currentTier;
            const isUnlocked = index <= referralRewards.findIndex(r => r.tier === currentTier);
            
            return (
              <Card 
                key={reward.tier} 
                className={`card-hover p-6 relative overflow-hidden border-0 ${
                  isCurrentTier 
                    ? 'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/20 ring-2 ring-orange-500'
                    : isUnlocked
                    ? 'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950/30 dark:to-gray-900/20' 
                    : 'bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950/30 dark:to-slate-900/20 opacity-60'
                }`}
              >
                {isCurrentTier && (
                  <>
                    <div className="absolute -top-6 -right-6 w-20 h-20 bg-orange-200/30 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-300/20 rounded-full blur-lg"></div>
                    <div className="absolute top-3 right-3">
                      <div className="bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium">Current</div>
                    </div>
                  </>
                )}
                
                <div className="relative z-10 text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                    isCurrentTier 
                      ? 'bg-orange-500/20' 
                      : isUnlocked 
                      ? 'bg-gray-500/20' 
                      : 'bg-slate-400/20'
                  }`}>
                    <IconComponent className={`w-8 h-8 ${
                      isCurrentTier 
                        ? 'text-orange-600 dark:text-orange-400' 
                        : isUnlocked 
                        ? 'text-gray-600 dark:text-gray-400' 
                        : 'text-slate-400'
                    }`} />
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-2 ${
                    isCurrentTier 
                      ? 'text-orange-900 dark:text-orange-100' 
                      : isUnlocked 
                      ? 'text-gray-900 dark:text-gray-100' 
                      : 'text-slate-600 dark:text-slate-400'
                  }`}>{reward.tier}</h3>
                  
                  <p className={`text-2xl font-bold mb-2 ${
                    isCurrentTier || isUnlocked ? 'text-emerald-600' : 'text-slate-500'
                  }`}>{reward.amount}</p>
                  
                  <p className={`text-sm mb-4 ${
                    isCurrentTier 
                      ? 'text-orange-600/80 dark:text-orange-400/80' 
                      : isUnlocked 
                      ? 'text-gray-600/80 dark:text-gray-400/80' 
                      : 'text-slate-500/80'
                  }`}>{reward.requirement}</p>
                  
                  <p className={`text-sm ${
                    isCurrentTier 
                      ? 'text-orange-700/80 dark:text-orange-300/80' 
                      : isUnlocked 
                      ? 'text-gray-700/80 dark:text-gray-300/80' 
                      : 'text-slate-600/80'
                  }`}>
                    {reward.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* How It Works */}
      <Card className="card-professional">
        <CardHeader>
          <CardTitle>How It Works</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-lg font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold">Share Your Link</h3>
              <p className="text-sm text-muted-foreground">
                Send your unique referral link to friends interested in sports investments
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-lg font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold">Friend Invests</h3>
              <p className="text-sm text-muted-foreground">
                Your friend signs up and makes their first investment of £500 or more
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-lg font-bold text-success">3</span>
              </div>
              <h3 className="font-semibold">Earn Rewards</h3>
              <p className="text-sm text-muted-foreground">
                You both receive account credits and unlock higher reward tiers
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Terms */}
      <Card className="card-professional">
        <CardHeader>
          <CardTitle>Terms & Conditions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>• Referred users must be new to Keeps and make a minimum investment of £500</p>
          <p>• Referral rewards are credited to your account within 7 days of the qualifying investment</p>
          <p>• Self-referrals and fraudulent activity will result in forfeiture of rewards</p>
          <p>• Keeps reserves the right to modify or terminate the referral program at any time</p>
          <p>• Referral rewards cannot be withdrawn as cash and must be used for investments</p>
        </CardContent>
      </Card>
    </div>
  );
}