import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calculator, TrendingUp, Shield, Trophy, Crown, Diamond as DiamondIcon, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

interface Asset {
  id: string;
  name: string;
  type: string;
  pricePerShare: number;
  logo: string;
  currency: string;
  description: string;
  minInvestment: number;
  maxShares: number;
  processingFee: number;
}

const assets: { [key: string]: Asset } = {
  "liverpool-fc": {
    id: "liverpool-fc",
    name: "Liverpool FC",
    type: "Equity Investment",
    pricePerShare: 500,
    logo: "/lovable-uploads/001420e5-847e-4145-addb-8bec6a73c63e.png",
    currency: "GBP",
    description: "Premier League football club equity shares with dividend potential",
    minInvestment: 500,
    maxShares: 1000,
    processingFee: 0.10
  },
  "mclaren-f1": {
    id: "mclaren-f1", 
    name: "McLaren F1",
    type: "Income Share Agreement",
    pricePerShare: 1000,
    logo: "/lovable-uploads/e0b86990-9fbb-421a-b689-b9e7ac420908.png",
    currency: "GBP",
    description: "Formula 1 team revenue sharing with performance-based returns",
    minInvestment: 1000,
    maxShares: 500,
    processingFee: 0.10
  },
  "ryder-cup": {
    id: "ryder-cup",
    name: "Ryder Cup",
    type: "Tournament Investment",
    pricePerShare: 750,
    logo: "/lovable-uploads/3c841089-35f1-4a8e-bb45-856c04bcd5fe.png",
    currency: "GBP", 
    description: "Golf tournament revenue sharing and hospitality access",
    minInvestment: 750,
    maxShares: 200,
    processingFee: 0.10
  }
};

const benefitTiers = [
  { id: "bronze", name: "Bronze", minAmount: 500, color: "text-amber-600", icon: Shield },
  { id: "silver", name: "Silver", minAmount: 2500, color: "text-slate-500", icon: Star },
  { id: "gold", name: "Gold", minAmount: 10000, color: "text-yellow-500", icon: Crown },
  { id: "platinum", name: "Platinum", minAmount: 50000, color: "text-slate-300", icon: Trophy },
  { id: "diamond", name: "Diamond", minAmount: 250000, color: "text-blue-400", icon: DiamondIcon }
];

export default function TradingInterface() {
  const { assetId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [quantity, setQuantity] = useState("1");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [currentTier, setCurrentTier] = useState("bronze");
  
  const asset = assetId ? assets[assetId] : null;
  
  if (!asset) {
    return (
      <div className="p-6 space-y-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>
        <Card className="card-professional p-8 text-center">
          <h2 className="text-xl font-semibold text-card-foreground mb-2">Asset Not Found</h2>
          <p className="text-muted-foreground">The trading asset you're looking for doesn't exist.</p>
        </Card>
      </div>
    );
  }

  const quantityNum = parseInt(quantity) || 0;
  const subtotal = quantityNum * asset.pricePerShare;
  const processingFee = subtotal * asset.processingFee;
  const total = subtotal + processingFee;

  useEffect(() => {
    const tier = benefitTiers
      .slice()
      .reverse()
      .find(tier => total >= tier.minAmount);
    setCurrentTier(tier?.id || "bronze");
  }, [total]);

  const handleTrade = () => {
    if (quantityNum < 1) {
      toast({
        title: "Invalid Quantity",
        description: "Please enter a valid quantity to purchase",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Order Placed Successfully!",
      description: `Your order for ${quantityNum} shares of ${asset.name} has been submitted.`,
    });

    // Navigate to portfolio or confirmation page
    setTimeout(() => {
      navigate('/portfolio');
    }, 2000);
  };

  const currentTierData = benefitTiers.find(tier => tier.id === currentTier);
  const TierIcon = currentTierData?.icon || Shield;

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Market
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Trading Interface */}
        <div className="lg:col-span-2 space-y-6">
          {/* Asset Header */}
          <Card className="card-professional">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                <img 
                  src={asset.logo}
                  alt={asset.name}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <CardTitle className="text-2xl font-bold text-gradient">{asset.name}</CardTitle>
                  <p className="text-muted-foreground text-lg">{asset.type}</p>
                  <p className="text-primary font-bold text-xl">£{asset.pricePerShare} per share</p>
                </div>
                <Badge variant="success" className="text-lg px-4 py-2">
                  Available
                </Badge>
              </div>
            </CardHeader>
          </Card>

          {/* Trading Form */}
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Investment Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Quantity Input */}
              <div className="space-y-3">
                <Label htmlFor="quantity" className="text-lg font-semibold">
                  Quantity (shares)
                </Label>
                <Input
                  id="quantity"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  min="1"
                  max={asset.maxShares}
                  placeholder="Enter number of shares"
                  className="text-lg py-3 h-14"
                />
                <p className="text-sm text-muted-foreground">
                  Minimum: 1 share • Maximum: {asset.maxShares.toLocaleString()} shares
                </p>
              </div>

              <Separator />

              {/* Payment Method */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold">Payment Method</Label>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                    <RadioGroupItem value="card" id="card" />
                    <div className="flex-1">
                      <label htmlFor="card" className="font-medium cursor-pointer">
                        Credit/Debit Card
                      </label>
                      <p className="text-sm text-muted-foreground">
                        Instant processing with secure payment
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                    <RadioGroupItem value="bank" id="bank" />
                    <div className="flex-1">
                      <label htmlFor="bank" className="font-medium cursor-pointer">
                        Bank Transfer
                      </label>
                      <p className="text-sm text-muted-foreground">
                        Direct bank transfer (1-3 business days)
                      </p>
                    </div>
                  </div>
                </RadioGroup>
                <p className="text-xs text-muted-foreground bg-accent/20 p-3 rounded-lg">
                  Card and bank methods are saved in your account for quick payments.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary & Benefits */}
        <div className="space-y-6">
          {/* Order Summary */}
          <Card className="card-professional">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Quantity:</span>
                  <span className="font-medium">{quantityNum} shares</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Unit Price:</span>
                  <span className="font-medium">£{asset.pricePerShare}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal:</span>
                  <span className="font-medium">£{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Processing Fee ({(asset.processingFee * 100).toFixed(0)}%):</span>
                  <span className="font-medium">£{processingFee.toFixed(0)}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-primary">£{total.toLocaleString()}</span>
                </div>
              </div>

              {/* Investment Tier */}
              {currentTierData && (
                <div className="p-4 bg-gradient-to-br from-accent/30 to-accent/10 rounded-lg border">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg bg-background/50 ${currentTierData.color}`}>
                      <TierIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{currentTierData.name} Tier</h4>
                      <p className="text-sm text-muted-foreground">Investment tier benefits</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Investment Round Info */}
              <div className="status-coming-soon p-4 rounded-lg">
                <h4 className="font-semibold mb-1">Investment Round Percentage</h4>
                <p className="text-sm">
                  £{total.toLocaleString()} = {((total / 10000000) * 100).toFixed(4)}% of the investment round
                </p>
              </div>

              <Button 
                onClick={handleTrade}
                className="w-full btn-invest text-lg py-4 h-14"
                disabled={quantityNum < 1}
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Complete Purchase
              </Button>
            </CardContent>
          </Card>

          {/* Asset Info */}
          <Card className="card-professional">
            <CardHeader>
              <CardTitle>Asset Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {asset.description}
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Minimum Investment:</span>
                  <span className="font-medium">£{asset.minInvestment}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Currency:</span>
                  <span className="font-medium">{asset.currency}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Max Shares:</span>
                  <span className="font-medium">{asset.maxShares.toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Notice */}
          <Card className="card-professional">
            <CardContent className="p-4">
              <div className="status-live p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Secure Trading</h4>
                    <p className="text-sm opacity-90">
                      All transactions are encrypted and protected by industry-leading security measures.
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