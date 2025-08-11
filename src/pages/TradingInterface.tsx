import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Calculator, TrendingUp, Shield, Trophy, Crown, Diamond as DiamondIcon, Star, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { LogoImage } from "@/components/ui/logo-image";
import mclarenLogo from "@/assets/logos/mclaren-racing-logo.png";
import ryderLogo from "@/assets/logos/ryder-cup-logo.png";
import { formatGBP } from "@/lib/utils";
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
    logo: "/lovable-uploads/c0f719b9-a198-429d-b736-b4081a14de86.png",
    currency: "GBP",
    description: "Premier League football club equity shares with dividend potential",
    minInvestment: 500,
    maxShares: 1000,
    processingFee: 0.10
  },
  "mclaren-racing": {
    id: "mclaren-racing", 
    name: "McLaren Racing",
    type: "Income Share Agreement",
    pricePerShare: 1000,
    logo: mclarenLogo,
    currency: "GBP",
    description: "Formula 1 team revenue sharing with performance-based returns",
    minInvestment: 1000,
    maxShares: 500,
    processingFee: 0.10
  },
  "ryder-cup": {
    id: "ryder-cup",
    name: "Ryder Cup",
    type: "Debenture Programme",
    pricePerShare: 1000,
    logo: ryderLogo,
    currency: "GBP", 
    description: "Golf tournament debenture investment with hospitality access",
    minInvestment: 1000,
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

const tierBenefits: Record<string, string[]> = {
  bronze: [
    "Priority access to select offerings",
    "Investor newsletter and market updates",
    "Community forum access",
  ],
  silver: [
    "All Bronze benefits",
    "Early access windows to new deals",
    "Exclusive webinars with asset managers",
  ],
  gold: [
    "All Silver benefits",
    "Quarterly portfolio review",
    "VIP community channels",
  ],
  platinum: [
    "All Gold benefits",
    "Invite-only events and tours",
    "Direct account manager support",
  ],
  diamond: [
    "All Platinum benefits",
    "Private briefings and allocations",
    "Bespoke experiences",
  ],
};

export default function TradingInterface() {
  const { assetId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  const [quantity, setQuantity] = useState("1");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [currentTier, setCurrentTier] = useState("bronze");
  const [showBenefits, setShowBenefits] = useState(false);
  
  // Get secondary market listing data from URL state
  const listing = location.state?.listing;
  const asset = assetId ? assets[assetId] : null;
  
  // If this is a secondary market purchase, use listing data
  const isSecondaryMarket = !!listing;
  const pricePerShare = isSecondaryMarket ? parseFloat(listing.pricePerUnit.replace(/[£,]/g, '')) : asset?.pricePerShare || 0;
  const originalPrice = asset?.pricePerShare || 0;
  const maxQuantity = isSecondaryMarket ? listing.quantity : asset?.maxShares || 0;
  
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

  const quantityNum = isSecondaryMarket ? listing.quantity : parseInt(quantity) || 0;
  const subtotal = quantityNum * pricePerShare;
  const processingFee = subtotal * (isSecondaryMarket ? 0.025 : (asset?.processingFee || 0.10));
  const total = subtotal + processingFee;
  const priceDifference = isSecondaryMarket ? ((pricePerShare - originalPrice) / originalPrice) * 100 : 0;

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
      navigate('/order-confirmation', {
        state: {
          type: isSecondaryMarket ? 'secondary' : 'primary',
          assetId: asset.id,
          assetName: asset.name,
          quantity: quantityNum,
          unitPrice: pricePerShare,
          subtotal,
          processingFee,
          total,
          seller: listing?.seller || null,
        }
      });
    }, 800);
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
                <LogoImage 
                  src={asset.logo}
                  alt={asset.name}
                  size="xl"
                />
                <div className="flex-1">
                  <CardTitle className="text-2xl font-bold text-gradient">{asset.name}</CardTitle>
                   <p className="text-muted-foreground text-lg">{asset.type}</p>
                   <p className="text-primary font-bold text-xl">{formatGBP(pricePerShare, { group: false })} per {asset.id === 'ryder-cup' ? 'debenture' : 'share'}</p>
                   {isSecondaryMarket && (
                     <div className="flex items-center gap-2 mt-1">
                       <Badge variant={priceDifference >= 0 ? "success" : "destructive"} className="text-xs">
                         {priceDifference >= 0 ? "+" : ""}{priceDifference.toFixed(1)}% vs original
                       </Badge>
                       <span className="text-xs text-muted-foreground">Original: {formatGBP(originalPrice, { group: false })}</span>
                     </div>
                   )}
                </div>
                 <div className="flex flex-col gap-2">
                   <Badge variant="success" className="text-lg px-4 py-2">
                     {isSecondaryMarket ? "Secondary Market" : "Primary Offering"}
                   </Badge>
                   {isSecondaryMarket && (
                     <Badge variant="outline" className="text-sm">
                       Seller: {listing.seller}
                     </Badge>
                   )}
                 </div>
              </div>
            </CardHeader>
          </Card>

          {/* Trading Form */}
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                {isSecondaryMarket ? "Secondary Market Purchase" : "Investment Calculator"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Quantity Input */}
              <div className="space-y-3">
                <Label htmlFor="quantity" className="text-lg font-semibold">
                  {isSecondaryMarket ? `Quantity Available from ${listing.seller}` : `Quantity (${asset.id === 'ryder-cup' ? 'debentures' : 'shares'})`}
                </Label>
                {isSecondaryMarket ? (
                  <div className="p-4 bg-accent/20 rounded-lg border border-accent/30">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold">Fixed Quantity:</span>
                      <span className="text-2xl font-bold text-primary">{listing.quantity} {listing.quantity === 1 && asset.id === 'ryder-cup' ? 'debenture' : asset.id === 'ryder-cup' ? 'debentures' : listing.quantity === 1 ? 'share' : 'shares'}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      You are purchasing the exact quantity listed by {listing.seller}
                    </p>
                  </div>
                ) : (
                  <>
                    <Input
                      id="quantity"
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      min="1"
                      max={maxQuantity}
                      placeholder="Enter number of shares"
                      className="text-lg py-3 h-14"
                    />
                    <p className="text-sm text-muted-foreground">
                      Minimum: 1 {asset.id === 'ryder-cup' ? 'debenture' : 'share'} • Maximum: {maxQuantity.toLocaleString()} {maxQuantity === 1 && asset.id === 'ryder-cup' ? 'debenture' : asset.id === 'ryder-cup' ? 'debentures' : maxQuantity === 1 ? 'share' : 'shares'}
                    </p>
                  </>
                )}
              </div>

              <Separator />

              {/* Payment Method */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold">Payment Method</Label>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg bg-accent/20 border-accent/30">
                    <RadioGroupItem value="card" id="card" />
                    <img src="/assets/visa.svg" alt="Visa" className="h-5 w-auto" />
                    <div className="flex-1">
                      <label htmlFor="card" className="font-medium cursor-pointer">
                        Visa **** 4829
                      </label>
                      <p className="text-sm text-muted-foreground">
                        Expires 09/27 • Primary payment method
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                    <RadioGroupItem value="bank" id="bank" />
                    <div className="flex-1">
                      <label htmlFor="bank" className="font-medium cursor-pointer">
                        Add New Payment Method
                      </label>
                      <p className="text-sm text-muted-foreground">
                        Credit card, debit card, or bank transfer
                      </p>
                    </div>
                  </div>
                </RadioGroup>
                {paymentMethod === "bank" && (
                  <div className="mt-4 space-y-3 p-4 rounded-lg border bg-background/60">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <Input placeholder="Cardholder Name" />
                      <Input placeholder="Card Number (1234 5678 9012 3456)" />
                      <Input placeholder="MM/YY" />
                      <Input placeholder="CVV" />
                    </div>
                    <Button variant="outline" className="w-full">Save Payment Method</Button>
                  </div>
                )}
                <p className="text-xs text-muted-foreground bg-accent/20 p-3 rounded-lg">
                  Your payment methods are securely saved and encrypted.
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
                    <span className="font-medium">{quantityNum} {quantityNum === 1 && asset.id === 'ryder-cup' ? 'debenture' : asset.id === 'ryder-cup' ? 'debentures' : quantityNum === 1 ? 'share' : 'shares'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Unit Price:</span>
                    <span className="font-medium">{formatGBP(pricePerShare, { group: false })}</span>
                  </div>
                  {isSecondaryMarket && (
                    <div className="p-3 bg-accent/20 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="w-4 h-4 text-warning" />
                        <span className="text-sm font-medium">Secondary Market Purchase</span>
                      </div>
                      <div className="space-y-1 text-xs text-muted-foreground">
                        <div className="flex justify-between">
                           <span>Original Price:</span>
                           <span>{formatGBP(originalPrice, { group: false })}</span>
                        </div>
                        <div className="flex justify-between">
                           <span>Current Price:</span>
                           <span>{formatGBP(pricePerShare, { group: false })}</span>
                        </div>
                        <div className="flex justify-between font-medium">
                          <span>Price Difference:</span>
                          <span className={priceDifference >= 0 ? "text-success" : "text-destructive"}>
                            {priceDifference >= 0 ? "+" : ""}{priceDifference.toFixed(1)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                 <div className="flex justify-between">
                   <span className="text-muted-foreground">Subtotal:</span>
                   <span className="font-medium">{formatGBP(subtotal)}</span>
                 </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Processing Fee ({isSecondaryMarket ? '2.5' : (asset.processingFee * 100).toFixed(0)}%):</span>
                    <span className="font-medium">{formatGBP(processingFee)}</span>
                  </div>
                 <Separator />
                 <div className="flex justify-between text-xl font-bold">
                   <span>Total:</span>
                   <span className="text-primary">{formatGBP(total)}</span>
                 </div>
               </div>
               {/* Investment Tier */}
               {currentTierData && (
                 <div className="p-4 bg-gradient-to-br from-accent/30 to-accent/10 rounded-lg border cursor-pointer" onClick={() => setShowBenefits(!showBenefits)}>
                   <div className="flex items-center gap-3 mb-2">
                     <div className={`p-2 rounded-lg bg-background/50 ${currentTierData.color}`}>
                       <TierIcon className="w-5 h-5" />
                     </div>
                     <div>
                       <h4 className="font-semibold">{currentTierData.name} Tier</h4>
                       <p className="text-sm text-muted-foreground">Tap to view benefits</p>
                     </div>
                   </div>
                   {showBenefits && (
                     <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                       {tierBenefits[currentTier]?.map((b, i) => (
                         <li key={i}>{b}</li>
                       ))}
                     </ul>
                   )}
                 </div>
               )}



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