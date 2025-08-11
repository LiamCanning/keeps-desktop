import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Calculator, Shield, Trophy, Crown, Diamond as DiamondIcon, Star, Check, FileCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { LogoImage } from "@/components/ui/logo-image";
import mclarenLogo from "@/assets/logos/mclaren-racing-logo.png";
import ryderLogo from "@/assets/logos/ryder-cup-logo.png";
import { assetTiers } from "@/components/BenefitsTiers";

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

  // Stepper state and inputs
  const [currentStep, setCurrentStep] = useState(1);
  const [quantity, setQuantity] = useState("1"); // shares or debentures count
  const [amount, setAmount] = useState(""); // generic amount input (non-debenture)
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [verificationOption, setVerificationOption] = useState<'saved' | 'new' | ''>('saved');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [currentTier, setCurrentTier] = useState("bronze");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null); // Ryder Cup preset amount

  const isDebenture = asset.id === 'ryder-cup';
  const ryderPresetAmounts = [1000, 15000, 25000, 35000, 50000];

  // Sync amount <-> quantity for non-debenture assets
  const pricePerShare = asset.pricePerShare;
  const quantityNum = parseInt(quantity) || 0;
  const amountNum = parseFloat(amount) || 0;

  const handleQuantityChange = (val: string) => {
    // Clamp
    const q = Math.max(0, Math.min(parseInt(val || '0'), asset.maxShares));
    setQuantity(q.toString());
    if (!isDebenture) {
      setAmount((q * pricePerShare).toString());
    }
  };

  const handleAmountChange = (val: string) => {
    setAmount(val);
    if (!isDebenture) {
      const v = Math.max(0, parseFloat(val || '0'));
      const q = Math.floor(v / pricePerShare);
      setQuantity(Math.max(0, Math.min(q, asset.maxShares)).toString());
    }
  };

  // Calculations
  const subtotal = isDebenture
    ? (selectedAmount || 0) * Math.min(Math.max(quantityNum, 0), 4)
    : quantityNum * pricePerShare;
  const processingFee = subtotal * (asset.processingFee || 0.1);
  const total = subtotal + processingFee;

  useEffect(() => {
    const tier = benefitTiers.slice().reverse().find((t) => total >= t.minAmount);
    setCurrentTier(tier?.id || "bronze");
  }, [total]);

  const canProceedFromStep = (step: number) => {
    switch (step) {
      case 1:
        if (isDebenture) {
          const q = quantityNum;
          return !!selectedAmount && q >= 1 && q <= 4; // max 4 debentures
        }
        return quantityNum >= 1;
      case 2:
        return !!paymentMethod;
      case 3:
        return verificationOption === 'saved' || verificationOption === 'new';
      case 4:
        return acceptedTerms;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (!canProceedFromStep(currentStep)) return;
    setCurrentStep((s) => Math.min(5, s + 1));
  };
  const prevStep = () => setCurrentStep((s) => Math.max(1, s - 1));

  const handleInvest = () => {
    if (!canProceedFromStep(4)) return; // ensure T&Cs accepted

    const unitPrice = isDebenture ? (selectedAmount || 0) : pricePerShare;
    const outQuantity = isDebenture ? Math.min(Math.max(quantityNum, 1), 4) : quantityNum;

    toast({
      title: "Order Placed Successfully!",
      description: `Your order for ${isDebenture ? outQuantity + ' debenture' + (outQuantity > 1 ? 's' : '') : outQuantity + ' shares'} of ${asset.name} has been submitted.`,
    });

    setTimeout(() => {
      navigate('/order-confirmation', {
        state: {
          type: 'primary',
          assetId: asset.id,
          assetName: asset.name,
          quantity: outQuantity,
          unitPrice,
          subtotal,
          processingFee,
          total,
          seller: null,
        }
      });
    }, 600);
  };

  const currentTierData = benefitTiers.find((t) => t.id === currentTier);
  const TierIcon = (currentTierData?.icon as any) || Shield;
  const assetKeyMap: Record<string, 'liverpool' | 'mclaren' | 'rydercup'> = {
    'liverpool-fc': 'liverpool',
    'mclaren-racing': 'mclaren',
    'ryder-cup': 'rydercup',
  };
  const assetKey = assetKeyMap[asset.id];
  const selectedTierBenefits: string[] =
    (assetKey && (assetTiers as any)[assetKey]?.[currentTier]?.benefits) || [];

  const Stepper = () => {
    const steps = [
      { id: 1, label: 'Details' },
      { id: 2, label: 'Payment' },
      { id: 3, label: 'Verification' },
      { id: 4, label: 'T&Cs' },
      { id: 5, label: 'Review' },
    ];
    return (
      <div className="w-full p-4 rounded-lg border bg-muted/30">
        <div className="flex items-center gap-4">
          {steps.map((s, idx) => {
            const isCompleted = currentStep > s.id;
            const isActive = currentStep === s.id;
            return (
              <div key={s.id} className="flex items-center gap-3 flex-1 min-w-0">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold
                  ${isCompleted || isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                  {isCompleted ? <Check className="w-5 h-5" /> : s.id}
                </div>
                <span className={`text-sm truncate ${isCompleted || isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {s.label}
                </span>
                {idx < steps.length - 1 && (
                  <div className={`h-[3px] flex-1 rounded ${currentStep > s.id ? 'bg-primary' : 'bg-muted'}`} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

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
                    <p className="text-primary font-bold text-xl">£{pricePerShare} per {isDebenture ? 'debenture' : 'share'}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge variant="success" className="text-lg px-4 py-2">Primary Offering</Badge>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </article>

          <Stepper />

          {/* Step content */}
          {currentStep === 1 && (
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Investment Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {isDebenture ? (
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label className="text-lg font-semibold">Select Investment Amount</Label>
                      <RadioGroup value={selectedAmount?.toString() || ''} onValueChange={(v) => setSelectedAmount(parseInt(v))}>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {ryderPresetAmounts.map((amt) => (
                            <label key={amt} className={`p-4 rounded-lg border cursor-pointer ${selectedAmount === amt ? 'border-primary bg-primary/5' : 'hover:bg-muted/50'}`}>
                              <div className="flex items-center gap-3">
                                <RadioGroupItem id={`amt-${amt}`} value={amt.toString()} />
                                <span className="font-semibold">£{amt.toLocaleString()}</span>
                              </div>
                            </label>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="quantity" className="text-lg font-semibold">Debentures (max 4)</Label>
                      <Input id="quantity" type="number" value={quantity} onChange={(e) => handleQuantityChange(e.target.value)} min="1" max={4} className="text-lg py-3 h-14" />
                      <p className="text-sm text-muted-foreground">You can purchase up to 4 debentures per transaction.</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label htmlFor="amount" className="text-lg font-semibold">Amount to Invest (£)</Label>
                      <Input id="amount" type="number" value={amount} onChange={(e) => handleAmountChange(e.target.value)} min="0" placeholder="e.g. 2500" className="text-lg py-3 h-14" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="quantity" className="text-lg font-semibold">Quantity (shares)</Label>
                      <Input id="quantity" type="number" value={quantity} onChange={(e) => handleQuantityChange(e.target.value)} min="1" max={asset.maxShares} placeholder="Enter number of shares" className="text-lg py-3 h-14" />
                      <p className="text-sm text-muted-foreground">Minimum: 1 share • Maximum: {asset.maxShares.toLocaleString()} shares</p>
                    </div>
                  </div>
                )}

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => navigate(-1)}>Back</Button>
                  <Button onClick={nextStep} disabled={!canProceedFromStep(1)}>Continue</Button>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 2 && (
            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center gap-3 p-4 border rounded-lg bg-accent/20 border-accent/30">
                    <RadioGroupItem value="card" id="card" />
                    <img src="/assets/visa.svg" alt="Visa logo" className="w-8 h-8" loading="lazy" />
                    <div className="flex-1">
                      <label htmlFor="card" className="font-medium cursor-pointer">Visa **** 4829</label>
                      <p className="text-sm text-muted-foreground">Expires 09/27 • Primary payment method</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                    <RadioGroupItem value="new" id="new" />
                    <div className="flex-1">
                      <label htmlFor="new" className="font-medium cursor-pointer">Add New Payment Method</label>
                      <p className="text-sm text-muted-foreground">Credit card, debit card, or bank transfer</p>
                    </div>
                  </div>
                </RadioGroup>
                {paymentMethod === 'new' && (
                  <div className="mt-2 space-y-3 p-4 rounded-lg border bg-background/60">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <Input placeholder="Cardholder Name" />
                      <Input placeholder="Card Number (1234 5678 9012 3456)" />
                      <Input placeholder="MM/YY" />
                      <Input placeholder="CVV" />
                    </div>
                    <Button variant="outline" className="w-full">Save Payment Method</Button>
                  </div>
                )}
                <div className="flex justify-between">
                  <Button variant="outline" onClick={prevStep}>Back</Button>
                  <Button onClick={nextStep} disabled={!canProceedFromStep(2)}>Continue</Button>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 3 && (
            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Verification</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <RadioGroup value={verificationOption} onValueChange={(v) => setVerificationOption(v as any)}>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg bg-accent/20 border-accent/30">
                    <RadioGroupItem value="saved" id="v-saved" />
                    <div className="flex-1">
                      <label htmlFor="v-saved" className="font-medium cursor-pointer">Use saved verification profile</label>
                      <p className="text-sm text-muted-foreground">Verified 15 Jun 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                    <RadioGroupItem value="new" id="v-new" />
                    <div className="flex-1">
                      <label htmlFor="v-new" className="font-medium cursor-pointer">Start new verification</label>
                      <p className="text-sm text-muted-foreground">Takes ~5 minutes • KYC/AML compliant</p>
                    </div>
                  </div>
                </RadioGroup>
                <div className="flex justify-between">
                  <Button variant="outline" onClick={prevStep}>Back</Button>
                  <Button onClick={nextStep} disabled={!canProceedFromStep(3)}>Continue</Button>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 4 && (
            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Terms & Conditions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3 p-4 rounded-lg border bg-muted/20">
                  <Checkbox id="terms" checked={acceptedTerms} onCheckedChange={(v) => setAcceptedTerms(Boolean(v))} />
                  <label htmlFor="terms" className="text-sm leading-6">
                    I have read and agree to the{' '}
                    <Link to="/terms-and-conditions" className="underline text-primary">Terms & Conditions</Link>{', '}
                    <Link to="/risk-disclosure" className="underline text-primary">Risk Disclosure</Link>, and understand the investment risks including potential loss of capital.
                  </label>
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" onClick={prevStep}>Back</Button>
                  <Button onClick={nextStep} disabled={!canProceedFromStep(4)}>Continue</Button>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 5 && (
            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Review & Complete</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-sm text-muted-foreground">Please review your order summary on the right, then complete your purchase.</p>
                <div className="flex justify-between">
                  <Button variant="outline" onClick={prevStep}>Back</Button>
                  <Button className="btn-invest" onClick={handleInvest}>Complete Purchase</Button>
                </div>
              </CardContent>
            </Card>
          )}
          {/* Compliance & Security */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Security & Protection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Your investment is protected by advanced encryption and secure payment processing.
                  We work with regulated partners to ensure compliance and investor protection.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileCheck className="w-5 h-5" />
                  Regulatory Compliance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This offering adheres to SEC and FCA regulatory standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <aside className="space-y-6">
          <Card className="card-professional">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {isDebenture ? (
                  <>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Selected Amount:</span>
                      <span className="font-medium">£{(selectedAmount || 0).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Debentures:</span>
                      <span className="font-medium">{Math.min(Math.max(quantityNum, 0), 4)}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Quantity:</span>
                      <span className="font-medium">{quantityNum} {quantityNum === 1 ? 'share' : 'shares'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Unit Price:</span>
                      <span className="font-medium">£{pricePerShare}</span>
                    </div>
                  </>
                )}
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
                <div
                  className="p-4 bg-gradient-to-br from-accent/30 to-accent/10 rounded-lg border cursor-pointer hover:bg-accent/40 transition-colors"
                  onClick={() => navigate('/benefits')}
                  role="button"
                  aria-label="View benefits tiers"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg bg-background/50 ${currentTierData.color}`}>
                      <TierIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{currentTierData.name} Tier</h4>
                      <p className="text-sm text-muted-foreground">Tap to view all tier benefits</p>
                    </div>
                  </div>
                  {selectedTierBenefits?.length > 0 && (
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {selectedTierBenefits.slice(0, 4).map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              <p className="text-xs text-muted-foreground text-center">
                All investments carry risk. Ensure you understand the risks before investing.
              </p>
            </CardContent>
          </Card>
        </aside>
      </main>
    </div>
  );
}
