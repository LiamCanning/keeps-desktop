import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calculator, Shield, Trophy, Crown, Diamond as DiamondIcon, Star } from "lucide-react";
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
    processingFee: 0.10,
  },
  "mclaren-racing": {
    id: "mclaren-racing",
    name: "McLaren F1",
    type: "Income Share Agreement",
    pricePerShare: 1000,
    logo: mclarenLogo,
    currency: "GBP",
    description: "Formula 1 team revenue sharing with performance-based returns",
    minInvestment: 1000,
    maxShares: 500,
    processingFee: 0.10,
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
    processingFee: 0.10,
  },
};

const benefitTiers = [
  { id: "bronze", name: "Bronze", minAmount: 500, color: "text-amber-600", icon: Shield },
  { id: "silver", name: "Silver", minAmount: 2500, color: "text-slate-500", icon: Star },
  { id: "gold", name: "Gold", minAmount: 10000, color: "text-yellow-500", icon: Crown },
  { id: "platinum", name: "Platinum", minAmount: 50000, color: "text-slate-300", icon: Trophy },
  { id: "diamond", name: "Diamond", minAmount: 250000, color: "text-blue-400", icon: DiamondIcon },
];

export default function PrimaryOffering() {
  const { assetId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const asset = assetId ? assets[assetId] : null;

  // SEO: title, meta description, canonical, basic JSON-LD
  useEffect(() => {
    const name = asset?.name || "Primary Offering";
    const title = `${name} Primary Offering | Invest`;
    document.title = title.length > 60 ? `${name} Offering | Invest` : title;

    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };
    setMeta("description", `Invest in the ${name} primary offering. Secure, transparent, and mobile-friendly experience.`);

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = window.location.origin + window.location.pathname;

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Offer',
      name: `${name} Primary Offering`,
      priceCurrency: asset?.currency || 'GBP',
      price: asset?.pricePerShare ?? undefined,
      availability: 'https://schema.org/InStock',
      url: window.location.href,
    };
    const scriptId = 'jsonld-primary-offer';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = scriptId;
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(jsonLd);
  }, [asset]);

  const [quantity, setQuantity] = useState("1");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [currentTier, setCurrentTier] = useState("bronze");

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
          <h1 className="text-xl font-semibold text-card-foreground mb-2">Asset Not Found</h1>
          <p className="text-muted-foreground">The primary offering you're looking for doesn't exist.</p>
        </Card>
      </div>
    );
  }

  const quantityNum = parseInt(quantity) || 0;
  const pricePerShare = asset.pricePerShare;
  const subtotal = quantityNum * pricePerShare;
  const processingFee = subtotal * (asset.processingFee || 0.1);
  const total = subtotal + processingFee;

  useEffect(() => {
    const tier = benefitTiers.slice().reverse().find((t) => total >= t.minAmount);
    setCurrentTier(tier?.id || "bronze");
  }, [total]);

  const handleInvest = () => {
    if (quantityNum < 1) {
      toast({
        title: "Invalid Quantity",
        description: "Please enter a valid quantity to purchase",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Order Placed Successfully!",
      description: `Your order for ${quantityNum} ${asset.id === 'ryder-cup' ? 'debentures' : 'shares'} of ${asset.name} has been submitted.`,
    });

    setTimeout(() => {
      navigate('/order-confirmation', {
        state: {
          type: 'primary',
          assetId: asset.id,
          assetName: asset.name,
          quantity: quantityNum,
          unitPrice: pricePerShare,
          subtotal,
          processingFee,
          total,
          seller: null,
        }
      });
    }, 800);
  };

  const currentTierData = benefitTiers.find((t) => t.id === currentTier);
  const TierIcon = (currentTierData?.icon as any) || Shield;

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      <header className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Asset
        </Button>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 space-y-6">
          <article className="card-professional">
            <Card>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <LogoImage src={asset.logo} alt={`${asset.name} logo`} size="xl" />
                  <div className="flex-1">
                    <h1 className="text-2xl font-bold text-gradient">{asset.name}</h1>
                    <p className="text-muted-foreground text-lg">{asset.type}</p>
                    <p className="text-primary font-bold text-xl">£{pricePerShare} per {asset.id === 'ryder-cup' ? 'debenture' : 'share'}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge variant="success" className="text-lg px-4 py-2">Primary Offering</Badge>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </article>

          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Investment Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="quantity" className="text-lg font-semibold">
                  Quantity ({asset.id === 'ryder-cup' ? 'debentures' : 'shares'})
                </Label>
                <Input
                  id="quantity"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  min="1"
                  max={asset.maxShares}
                  placeholder={`Enter number of ${asset.id === 'ryder-cup' ? 'debentures' : 'shares'}`}
                  className="text-lg py-3 h-14"
                />
                <p className="text-sm text-muted-foreground">
                  Minimum: 1 {asset.id === 'ryder-cup' ? 'debenture' : 'share'} • Maximum: {asset.maxShares.toLocaleString()} {asset.id === 'ryder-cup' ? 'debentures' : 'shares'}
                </p>
              </div>

              <Separator />

              <div className="space-y-4">
                <Label className="text-lg font-semibold">Payment Method</Label>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg bg-accent/20 border-accent/30">
                    <RadioGroupItem value="card" id="card" />
                    <div className="flex-1">
                      <label htmlFor="card" className="font-medium cursor-pointer">Visa **** 4829</label>
                      <p className="text-sm text-muted-foreground">Expires 09/27 • Primary payment method</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                    <RadioGroupItem value="bank" id="bank" />
                    <div className="flex-1">
                      <label htmlFor="bank" className="font-medium cursor-pointer">Add New Payment Method</label>
                      <p className="text-sm text-muted-foreground">Credit card, debit card, or bank transfer</p>
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
        </section>

        <aside className="space-y-6">
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
                  <span className="font-medium">£{pricePerShare}</span>
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

              <div className="space-y-3">
                <h4 className="font-semibold">Payment Method</h4>
                <div className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg border">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-sm">VISA</div>
                  <div className="flex-1">
                    <p className="font-medium">**** **** **** 4532</p>
                    <p className="text-sm text-muted-foreground">Expires 12/26</p>
                  </div>
                  <Button variant="outline" size="sm">Change</Button>
                </div>
              </div>

              <Button onClick={handleInvest} className="w-full btn-invest text-lg py-4 h-14">
                Complete Purchase
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                All investments carry risk. Ensure you understand the risks before investing.
              </p>
            </CardContent>
          </Card>

          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Security Notice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Your investment is protected by advanced encryption and secure payment processing. We work with regulated partners to ensure compliance and investor protection.
              </p>
            </CardContent>
          </Card>
        </aside>
      </main>
    </div>
  );
}
