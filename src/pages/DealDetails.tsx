import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Users, TrendingUp, Trophy, Crown, Diamond as DiamondIcon, Star, Shield, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BenefitsTiers } from "@/components/BenefitsTiers";

const deals = {
  "liverpool-fc": {
    id: "1",
    name: "Liverpool FC",
    logo: "/lovable-uploads/1fb754c3-b31b-4c0f-a408-bd31310d7927.png",
    title: "Fund Anfield stadium capacity to 75,000",
    type: "Equity Investment",
    amount: "£40,000,000",
    raised: "£30,000,000",
    progress: 75,
    investors: "10,250",
    timeline: "5 days",
    minimumEntry: "£500",
    equityPercentage: "1%",
    valuation: "£4,000,000,000",
    dividends: "Annual dividends based on profits",
    exclusiveBenefits: true,
    benefitsTier: "gold",
    status: "live" as const
  },
  "mclaren-f1": {
    id: "2",
    name: "McLaren F1",
    logo: "/placeholder.svg",
    title: "McLaren Racing Technology Development",
    type: "ISA Investment",
    amount: "£50,000,000",
    raised: "£35,000,000",
    progress: 70,
    investors: "8,750",
    timeline: "2 weeks",
    minimumEntry: "£1,000",
    equityPercentage: "0.8%",
    valuation: "£6,250,000,000",
    dividends: "6-12% annually from racing revenues",
    exclusiveBenefits: true,
    benefitsTier: "diamond",
    status: "live" as const
  },
  "ryder-cup": {
    id: "3",
    name: "Ryder Cup",
    logo: "/placeholder.svg",
    title: "Ryder Cup 2025 Debenture Programme",
    type: "Debenture Programme",
    amount: "£42,500,000",
    raised: "£38,250,000",
    progress: 90,
    investors: "2,340",
    timeline: "48 hours",
    minimumEntry: "£2,500",
    equityPercentage: "N/A",
    valuation: "N/A",
    dividends: "5% + Principal return",
    exclusiveBenefits: true,
    benefitsTier: "platinum",
    status: "live" as const
  }
};

export default function DealDetails() {
  const { dealId } = useParams();
  const navigate = useNavigate();
  
  const deal = dealId ? deals[dealId as keyof typeof deals] : null;
  
  if (!deal) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Deal not found</h2>
        <Button onClick={() => navigate("/")} variant="outline">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>

      {/* Asset Header */}
      <Card className="card-professional">
        <CardHeader className="text-center pb-4">
          <div className="flex items-center justify-center gap-6 mb-6">
            <img 
              src={deal.logo}
              alt={deal.name}
              className="w-24 h-24 rounded-xl object-cover border-2 border-primary/20"
            />
            <div>
              <h1 className="text-4xl font-bold text-gradient mb-2">{deal.name}</h1>
              <p className="text-xl text-muted-foreground mb-1">{deal.title}</p>
              <div className="flex items-center justify-center gap-3">
                <Badge variant="success" className="text-lg px-4 py-2">Live</Badge>
                <Badge variant="outline" className="text-lg px-4 py-2">{deal.type}</Badge>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{deal.investors.toLocaleString()}</div>
              <div className="text-muted-foreground">Total Investors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">£{(deal.progress * 0.1).toFixed(1)}M</div>
              <div className="text-muted-foreground">Total Raised</div>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Main Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Key Metrics */}
          <Card className="card-professional">
            <CardHeader>
              <CardTitle>Investment Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{deal.minimumEntry}</div>
                  <div className="text-sm text-muted-foreground">Minimum Entry</div>
                </div>
                <div className="bg-gradient-to-br from-success/10 to-success/5 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-success mb-1">{deal.timeline}</div>
                  <div className="text-sm text-muted-foreground">Timeline</div>
                </div>
                <div className="bg-gradient-to-br from-warning/10 to-warning/5 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-warning mb-1">{deal.valuation}</div>
                  <div className="text-sm text-muted-foreground">Valuation</div>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">Funding Progress</h4>
                  <Badge variant="outline">{deal.progress}% Complete</Badge>
                </div>
                <Progress value={deal.progress} className="h-3" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>£{(deal.progress * 0.1).toFixed(1)}M raised</span>
                  <span>£10M target</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Investment Details */}
          <Card className="card-professional">
            <CardHeader>
              <CardTitle>Investment Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Equity Percentage:</span>
                    <span className="font-semibold">{deal.equityPercentage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dividends:</span>
                    <span className="font-semibold">{deal.dividends}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Exclusive Benefits:</span>
                    <span className="font-semibold">Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Processing Fee:</span>
                    <span className="font-semibold">2.5%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Investor Leaderboard Preview */}
          <Card className="card-professional">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Top Investors
              </CardTitle>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => navigate(`/investors/${dealId}`)}
              >
                <Eye className="w-4 h-4 mr-2" />
                View Full Leaderboard
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-destructive/5 to-destructive/10 rounded-lg">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <div className="flex-1">
                    <div className="font-semibold">Nike</div>
                    <div className="text-sm text-muted-foreground">Corporate Sponsor</div>
                  </div>
                  <div className="font-bold text-destructive">£5.0M</div>
                </div>
                <div className="flex items-center gap-3 p-3 hover:bg-accent/50 rounded-lg">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <Crown className="w-4 h-4 text-yellow-500" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">James Wilson</div>
                    <div className="text-sm text-muted-foreground">Individual Investor</div>
                  </div>
                  <div className="font-bold text-primary">£3.0M</div>
                </div>
                <div className="flex items-center gap-3 p-3 hover:bg-accent/50 rounded-lg">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <Star className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">Rachel Garcia</div>
                    <div className="text-sm text-muted-foreground">Individual Investor</div>
                  </div>
                  <div className="font-bold text-primary">£2.8M</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Benefits & Actions */}
        <div className="space-y-6">
          {/* Action Buttons */}
          <Card className="card-professional">
            <CardContent className="p-6 space-y-4">
              <Button 
                className="btn-invest w-full text-lg py-4 h-14"
                onClick={() => {
                  const assetId = deal.name.toLowerCase().replace(/\s+/g, '-').replace('racing', 'f1');
                  navigate(`/trade/${assetId}`);
                }}
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Invest Now
              </Button>
              <Button 
                variant="outline" 
                className="w-full text-lg py-4 h-14"
                onClick={() => navigate('/sell-asset')}
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Sell Now
              </Button>
              <Button 
                variant="secondary" 
                className="w-full text-lg py-4 h-14"
                onClick={() => navigate('/benefits')}
              >
                <Trophy className="w-5 h-5 mr-2" />
                View All Benefits
              </Button>
            </CardContent>
          </Card>


          {/* Security Notice */}
          <Card className="card-professional">
            <CardContent className="p-4">
              <div className="status-live p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Secure Investment</h4>
                    <p className="text-sm opacity-90">
                      All investments are protected by FCA regulation and industry-leading security measures.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}