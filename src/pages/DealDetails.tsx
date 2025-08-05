import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Users, Clock, TrendingUp, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BenefitsTiers } from "@/components/BenefitsTiers";

const deals = {
  "liverpool-fc": {
    id: "1",
    name: "Liverpool FC",
    logo: "/lovable-uploads/001420e5-847e-4145-addb-8bec6a73c63e.png",
    title: "Fund Anfield stadium capacity to 75,000",
    type: "Equity Investment",
    amount: "£40,000,000",
    raised: "£30,000,000",
    progress: 75,
    investors: "10,250",
    timeRemaining: "5 days",
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
    logo: "/lovable-uploads/e0b86990-9fbb-421a-b689-b9e7ac420908.png",
    title: "McLaren Racing Technology Development",
    type: "ISA Investment",
    amount: "£50,000,000",
    raised: "£35,000,000",
    progress: 70,
    investors: "8,750",
    timeRemaining: "2 weeks",
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
    logo: "/lovable-uploads/1075da4a-349e-420a-b050-72aad7295b63.png",
    title: "Ryder Cup 2025 Debenture Programme",
    type: "Debenture Programme",
    amount: "£42,500,000",
    raised: "£38,250,000",
    progress: 90,
    investors: "2,340",
    timeRemaining: "48 hours",
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
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>

      {/* Main Deal Card */}
      <Card className="bg-card border-0 shadow-xl overflow-hidden">
        <div className="relative">
          {/* Status Badge */}
          <div className="absolute top-6 right-6 z-10">
            <Badge variant="success" className="text-xs font-medium px-3 py-1">
              LIVE NOW
            </Badge>
          </div>

          {/* Header Section */}
          <div className="bg-gradient-to-br from-card to-card/80 p-8 text-center border-b">
            <img 
              src={deal.logo} 
              alt={deal.name}
              className="w-20 h-20 mx-auto mb-4 object-contain rounded-lg shadow-md"
            />
            <h1 className="text-3xl font-bold text-card-foreground mb-2">
              {deal.name}
            </h1>
            <p className="text-lg text-primary font-semibold mb-1">
              {deal.title}
            </p>
            <p className="text-muted-foreground">
              {deal.type}
            </p>
          </div>

          <CardContent className="p-8">
            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <Card className="text-center p-6 bg-muted/30 border-0">
                <div className="text-yellow-600 mb-3">
                  <Shield className="w-8 h-8 mx-auto" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">Minimum Entry</p>
                <p className="text-2xl font-bold text-card-foreground">{deal.minimumEntry}</p>
              </Card>

              <Card className="text-center p-6 bg-muted/30 border-0">
                <div className="text-primary mb-3">
                  <Users className="w-8 h-8 mx-auto" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">Who's Invested?</p>
                <p className="text-2xl font-bold text-card-foreground">{deal.investors}</p>
              </Card>

              <Card className="text-center p-6 bg-muted/30 border-0">
                <div className="text-destructive mb-3">
                  <Clock className="w-8 h-8 mx-auto" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                <p className="text-2xl font-bold text-card-foreground">{deal.timeRemaining}</p>
              </Card>
            </div>

            {/* Progress Section */}
            <div className="mb-8 p-6 bg-success/5 rounded-lg border border-success/20">
              <div className="flex justify-between items-center mb-4">
                <p className="text-lg font-semibold text-card-foreground">
                  {deal.raised} raised of {deal.amount} goal
                </p>
                <p className="text-sm text-muted-foreground">
                  <Users className="w-4 h-4 inline mr-1" />
                  {deal.investors} investors joined
                </p>
              </div>
              <Progress value={deal.progress} className="h-3 mb-2" />
              <p className="text-sm text-muted-foreground text-center">
                {deal.progress}% Complete
              </p>
            </div>

            {/* Investment Details */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-primary mb-4">Investment Details</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Equity Percentage:</span>
                    <span className="font-medium text-card-foreground">{deal.equityPercentage}</span>
                  </div>
                  {deal.valuation !== "N/A" && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Valuation:</span>
                      <span className="font-medium text-card-foreground">{deal.valuation}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Timeline:</span>
                    <span className="font-medium text-destructive flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {deal.timeRemaining}
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dividends:</span>
                    <span className="font-medium text-card-foreground">{deal.dividends}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Exclusive Benefits:</span>
                    <span className="font-medium text-success flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Included
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Tier Section */}
            {deal.benefitsTier && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-primary mb-4">Your Benefits Tier</h3>
                <BenefitsTiers selectedTier={deal.benefitsTier} compact={true} />
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button 
                className="w-full bg-gradient-to-r from-success to-success/90 hover:from-success/90 hover:to-success text-white text-lg py-4 rounded-lg"
                onClick={() => {
                  const assetId = deal.name.toLowerCase().replace(/\s+/g, '-').replace('racing', 'f1');
                  navigate(`/trade/${assetId}`);
                }}
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Invest Now
              </Button>
              
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  variant="destructive" 
                  className="text-base py-3"
                  onClick={() => navigate('/sell-asset', { state: { dealId: deal.id, dealName: deal.name } })}
                >
                  Sell Now
                </Button>
                <Button 
                  variant="outline" 
                  className="text-base py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => navigate('/benefits')}
                >
                  View All Benefits
                </Button>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}