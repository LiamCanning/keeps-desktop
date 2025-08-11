import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Lock, CreditCard, Calendar, User, Shield, CheckCircle, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { assetTiers } from "@/components/BenefitsTiers";

interface PrimaryDeal {
  id: string;
  name: string;
  logo: string;
  title: string;
  pricePerShare: number;
  minimumInvestment: number;
  availableShares: number;
  fundingGoal: number;
  currentRaised: number;
  investorsCount: number;
  dividendYield: string;
  terms: string;
  type: string;
  tiers?: number[];
}

const primaryDeals: { [key: string]: PrimaryDeal } = {
  "liverpool-fc": {
    id: "liverpool-fc",
    name: "Liverpool FC",
    logo: "/lovable-uploads/c0f719b9-a198-429d-b736-b4081a14de86.png",
    title: "Primary Equity Investment Opportunity",
    pricePerShare: 550,
    minimumInvestment: 500,
    availableShares: 10000,
    fundingGoal: 50000000,
    currentRaised: 35750000,
    investorsCount: 2847,
    dividendYield: "4-8%",
    terms: "5-year term with optional renewal",
    type: "shares"
  },
  "mclaren-f1": {
    id: "mclaren-f1",
    name: "McLaren Racing",
    logo: "/lovable-uploads/c0f719b9-a198-429d-b736-b4081a14de86.png",
    title: "Primary Income Sharing Agreement",
    pricePerShare: 1200,
    minimumInvestment: 1000,
    availableShares: 5000,
    fundingGoal: 50000000,
    currentRaised: 49250000,
    investorsCount: 1523,
    dividendYield: "15-25%",
    terms: "3-year income sharing agreement",
    type: "shares"
  },
  "ryder-cup": {
    id: "ryder-cup",
    name: "Ryder Cup",
    logo: "/lovable-uploads/c0f719b9-a198-429d-b736-b4081a14de86.png",
    title: "Primary Debenture Investment Programme",
    pricePerShare: 1000,
    minimumInvestment: 1000,
    availableShares: 500,
    fundingGoal: 10000000,
    currentRaised: 8850000,
    investorsCount: 456,
    dividendYield: "12-18%",
    terms: "10-year debenture with premium access",
    type: "debentures",
    tiers: [1000, 15000, 25000, 35000, 50000]
  }
};

type Step = "amount" | "payment" | "verification" | "confirmation" | "success";

export default function PrimaryPurchase() {
  const { dealId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [currentStep, setCurrentStep] = useState<Step>("amount");
  const [investmentData, setInvestmentData] = useState({
    amount: "",
    shares: 0,
    shareInput: "",
    debentures: 1,
    paymentMethod: "card",
    cardDetails: {
      number: "",
      expiry: "",
      cvv: "",
      name: ""
    },
    bankDetails: {
      accountNumber: "",
      sortCode: ""
    },
    verificationCompleted: false,
    termsAccepted: false,
    riskAccepted: false
  });

  // Map asset IDs to deal IDs
  const getDealId = (assetId: string) => {
    if (assetId === "mclaren-racing") return "mclaren-f1";
    return assetId;
  };

  const deal = dealId ? primaryDeals[getDealId(dealId) as keyof typeof primaryDeals] : null;

  if (!deal) {
    return (
      <div className="p-6 space-y-6 max-w-4xl mx-auto">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>
        <Card className="card-professional p-8 text-center">
          <h2 className="text-xl font-semibold text-card-foreground mb-2">Primary Investment Opportunity Not Found</h2>
          <p className="text-muted-foreground">The primary investment opportunity you're looking for doesn't exist.</p>
        </Card>
      </div>
    );
  }

  const steps = [
    { id: "amount", title: "Investment Amount", completed: currentStep !== "amount" && (currentStep === "payment" || currentStep === "verification" || currentStep === "confirmation" || currentStep === "success") },
    { id: "payment", title: "Payment Method", completed: currentStep !== "amount" && currentStep !== "payment" && (currentStep === "verification" || currentStep === "confirmation" || currentStep === "success") },
    { id: "verification", title: "Verification", completed: currentStep !== "amount" && currentStep !== "payment" && currentStep !== "verification" && (currentStep === "confirmation" || currentStep === "success") },
    { id: "confirmation", title: "Confirmation", completed: currentStep === "success" },
    { id: "success", title: "Complete", completed: false }
  ];

  const currentStepIndex = steps.findIndex(step => step.id === currentStep);

  const handleAmountChange = (amount: string) => {
    const numAmount = parseFloat(amount) || 0;
    
    // For Ryder Cup, enforce tier-based amounts with debenture multiplier
    if (deal.id === 'ryder-cup' && deal.tiers) {
      const exactTier = deal.tiers.find((tier: number) => numAmount === tier);
      if (exactTier) {
        const totalAmount = exactTier * investmentData.debentures;
        const shares = totalAmount / deal.pricePerShare;
        setInvestmentData(prev => ({
          ...prev,
          amount: totalAmount.toString(),
          shares,
          shareInput: ""
        }));
      } else {
        setInvestmentData(prev => ({
          ...prev,
          amount,
          shares: 0,
          shareInput: ""
        }));
      }
    } else {
      // For other assets, calculate shares normally
      const shares = Math.floor(numAmount / deal.pricePerShare);
      setInvestmentData(prev => ({
        ...prev,
        amount,
        shares,
        shareInput: shares.toString()
      }));
    }
  };

  const handleSharesChange = (shares: string) => {
    const numShares = parseInt(shares) || 0;
    const amount = numShares * deal.pricePerShare;
    setInvestmentData(prev => ({
      ...prev,
      shareInput: shares,
      shares: numShares,
      amount: amount.toString()
    }));
  };

  const handleDebenturesChange = (debentures: number) => {
    if (deal.id === 'ryder-cup' && deal.tiers) {
      const selectedTier = parseFloat(investmentData.amount) / investmentData.debentures;
      const totalAmount = selectedTier * debentures;
      const shares = totalAmount / deal.pricePerShare;
      setInvestmentData(prev => ({
        ...prev,
        debentures,
        amount: totalAmount.toString(),
        shares
      }));
    }
  };

  const handleTierSelect = (tier: number) => {
    const totalAmount = tier * investmentData.debentures;
    const shares = totalAmount / deal.pricePerShare;
    setInvestmentData(prev => ({
      ...prev,
      amount: totalAmount.toString(),
      shares
    }));
  };

  const handleNextStep = () => {
    const stepOrder: Step[] = ["amount", "payment", "verification", "confirmation", "success"];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex < stepOrder.length - 1) {
      setCurrentStep(stepOrder[currentIndex + 1]);
    }
  };

  const handlePreviousStep = () => {
    const stepOrder: Step[] = ["amount", "payment", "verification", "confirmation", "success"];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(stepOrder[currentIndex - 1]);
    }
  };

  const canProceedFromAmount = () => {
    const amount = parseFloat(investmentData.amount) || 0;
    if (deal.id === 'ryder-cup' && deal.tiers) {
      const tierAmount = amount / investmentData.debentures;
      return deal.tiers.includes(tierAmount) && investmentData.shares > 0 && investmentData.debentures >= 1;
    }
    return amount >= deal.minimumInvestment && investmentData.shares > 0;
  };

  const canProceedFromPayment = () => {
    if (investmentData.paymentMethod === "card") {
      return investmentData.cardDetails.number && 
             investmentData.cardDetails.expiry && 
             investmentData.cardDetails.cvv && 
             investmentData.cardDetails.name;
    }
    return investmentData.bankDetails.accountNumber && investmentData.bankDetails.sortCode;
  };

  const canProceedFromVerification = () => {
    return investmentData.verificationCompleted;
  };

  const canConfirm = () => {
    return investmentData.termsAccepted && investmentData.riskAccepted;
  };

  const handleInvestment = () => {
    // Navigate to order confirmation with investment data
    navigate('/order-confirmation', {
      state: {
        assetName: deal.name,
        quantity: investmentData.shares,
        unitPrice: deal.pricePerShare,
        total: parseFloat(investmentData.amount),
        type: "primary",
        paymentMethod: investmentData.paymentMethod
      }
    });
  };

  const unitText = deal.type === 'debentures' ? 'debenture' : 'share';
  const unitsText = deal.type === 'debentures' ? 'debentures' : 'shares';
  const displayUnits = investmentData.shares === 1 ? unitText : unitsText;

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to {deal.name}
        </Button>
        <Badge variant="default" className="bg-success text-success-foreground">
          Primary Investment
        </Badge>
      </div>

      {/* Progress */}
      <Card className="card-professional p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            {steps.map((step, index) => (
              <div key={step.id} className={`flex items-center gap-2 ${index <= currentStepIndex ? 'text-primary' : 'text-muted-foreground'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                steps[index].completed ? 'bg-primary text-primary-foreground' :
                index === currentStepIndex ? 'bg-primary/20 text-primary border-2 border-primary' :
                'bg-muted text-muted-foreground'
              }`}>
                {steps[index].completed ? <CheckCircle className="w-4 h-4" /> : index + 1}
              </div>
                <span className="hidden md:block">{step.title}</span>
              </div>
            ))}
          </div>
          <Progress value={(currentStepIndex + 1) / steps.length * 100} className="h-2" />
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {currentStep === "amount" && (
            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Primary Investment Amount</CardTitle>
                <p className="text-muted-foreground">Invest directly into {deal.name} through their primary offering</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="amount">Investment Amount (£)</Label>
                   {deal.id === 'ryder-cup' && deal.tiers ? (
                     <div className="space-y-3">
                       <div className="grid grid-cols-2 gap-2">
                         {deal.tiers.map((tier: number) => (
                           <Button
                             key={tier}
                             variant={parseFloat(investmentData.amount) / investmentData.debentures === tier ? "default" : "outline"}
                             onClick={() => handleTierSelect(tier)}
                             className="text-sm"
                           >
                             £{tier.toLocaleString()}
                           </Button>
                         ))}
                       </div>
                       <div className="space-y-2">
                         <Label htmlFor="debentures">Amount of Debentures (1-10)</Label>
                         <Input
                           id="debentures"
                           type="number"
                           placeholder="1"
                           value={investmentData.debentures}
                           onChange={(e) => handleDebenturesChange(parseInt(e.target.value) || 1)}
                           min={1}
                           max={10}
                           className="w-24"
                         />
                       </div>
                       <p className="text-sm text-muted-foreground">
                         Select a debenture tier above, then choose quantity (1-10 debentures)
                       </p>
                     </div>
                   ) : (
                     <div className="space-y-4">
                       <div className="space-y-2">
                         <Input
                           id="amount"
                           type="number"
                           placeholder={`Minimum £${deal.minimumInvestment}`}
                           value={investmentData.amount}
                           onChange={(e) => handleAmountChange(e.target.value)}
                           min={deal.minimumInvestment}
                         />
                         <p className="text-sm text-muted-foreground">
                           Minimum investment: £{deal.minimumInvestment.toLocaleString()}
                         </p>
                       </div>
                       <div className="relative">
                         <div className="absolute inset-0 flex items-center">
                           <span className="w-full border-t" />
                         </div>
                         <div className="relative flex justify-center text-xs uppercase">
                           <span className="bg-background px-2 text-muted-foreground">or</span>
                         </div>
                       </div>
                       <div className="space-y-2">
                         <Label htmlFor="shares">Number of Shares</Label>
                         <Input
                           id="shares"
                           type="number"
                           placeholder="Number of shares"
                           value={investmentData.shareInput}
                           onChange={(e) => handleSharesChange(e.target.value)}
                           min={1}
                         />
                         <p className="text-sm text-muted-foreground">
                           Price per share: £{deal.pricePerShare}
                         </p>
                       </div>
                     </div>
                   )}
                </div>

                {investmentData.shares > 0 && (
                  <div className="p-4 bg-muted/50 rounded-lg space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Price per {unitText}:</span>
                      <span className="font-medium">£{deal.pricePerShare}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Number of {displayUnits}:</span>
                      <span className="font-medium">{investmentData.shares}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total investment:</span>
                      <span>£{(investmentData.shares * deal.pricePerShare).toLocaleString()}</span>
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  <Button 
                    className="btn-invest flex-1" 
                    onClick={handleNextStep}
                    disabled={!canProceedFromAmount()}
                  >
                    Continue to Payment
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === "payment" && (
            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
                <p className="text-muted-foreground">Choose your preferred payment method</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <RadioGroup 
                  value={investmentData.paymentMethod} 
                  onValueChange={(value) => setInvestmentData(prev => ({ ...prev, paymentMethod: value }))}
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center gap-2 flex-1 cursor-pointer">
                        <CreditCard className="w-4 h-4" />
                        Debit/Credit Card
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="bank" id="bank" />
                      <Label htmlFor="bank" className="flex items-center gap-2 flex-1 cursor-pointer">
                        <Lock className="w-4 h-4" />
                        Bank Transfer
                      </Label>
                    </div>
                  </div>
                </RadioGroup>

                {investmentData.paymentMethod === "card" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardName">Cardholder Name</Label>
                        <Input
                          id="cardName"
                          placeholder="John Smith"
                          value={investmentData.cardDetails.name}
                          onChange={(e) => setInvestmentData(prev => ({
                            ...prev,
                            cardDetails: { ...prev.cardDetails, name: e.target.value }
                          }))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={investmentData.cardDetails.number}
                          onChange={(e) => setInvestmentData(prev => ({
                            ...prev,
                            cardDetails: { ...prev.cardDetails, number: e.target.value }
                          }))}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input
                            id="expiry"
                            placeholder="MM/YY"
                            value={investmentData.cardDetails.expiry}
                            onChange={(e) => setInvestmentData(prev => ({
                              ...prev,
                              cardDetails: { ...prev.cardDetails, expiry: e.target.value }
                            }))}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            value={investmentData.cardDetails.cvv}
                            onChange={(e) => setInvestmentData(prev => ({
                              ...prev,
                              cardDetails: { ...prev.cardDetails, cvv: e.target.value }
                            }))}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {investmentData.paymentMethod === "bank" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="sortCode">Sort Code</Label>
                        <Input
                          id="sortCode"
                          placeholder="12-34-56"
                          value={investmentData.bankDetails.sortCode}
                          onChange={(e) => setInvestmentData(prev => ({
                            ...prev,
                            bankDetails: { ...prev.bankDetails, sortCode: e.target.value }
                          }))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="accountNumber">Account Number</Label>
                        <Input
                          id="accountNumber"
                          placeholder="12345678"
                          value={investmentData.bankDetails.accountNumber}
                          onChange={(e) => setInvestmentData(prev => ({
                            ...prev,
                            bankDetails: { ...prev.bankDetails, accountNumber: e.target.value }
                          }))}
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  <Button variant="outline" onClick={handlePreviousStep}>
                    Back
                  </Button>
                  <Button 
                    className="btn-invest flex-1" 
                    onClick={handleNextStep}
                    disabled={!canProceedFromPayment()}
                  >
                    Continue to Verification
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === "verification" && (
            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Verification</CardTitle>
                <p className="text-muted-foreground">Verify your identity to proceed</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <Checkbox 
                      id="verification" 
                      checked={investmentData.verificationCompleted}
                      onCheckedChange={(checked) => setInvestmentData(prev => ({ ...prev, verificationCompleted: checked === true }))}
                    />
                    <Label htmlFor="verification" className="flex items-center gap-2 flex-1 cursor-pointer">
                      <User className="w-4 h-4" />
                      Verify Identity (required)
                    </Label>
                  </div>
                  {!investmentData.verificationCompleted && (
                    <div className="p-4 bg-warning/10 rounded-lg border border-warning/20 text-sm text-warning flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      Please verify your identity to proceed with the investment.
                    </div>
                  )}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" onClick={handlePreviousStep}>
                    Back
                  </Button>
                  <Button 
                    className="btn-invest flex-1" 
                    onClick={handleNextStep}
                    disabled={!canProceedFromVerification()}
                  >
                    Continue to Confirmation
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === "confirmation" && (
            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Confirmation</CardTitle>
                <p className="text-muted-foreground">Confirm your investment details</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <Checkbox 
                      id="terms" 
                      checked={investmentData.termsAccepted}
                      onCheckedChange={(checked) => setInvestmentData(prev => ({ ...prev, termsAccepted: checked === true }))}
                    />
                    <Label htmlFor="terms" className="flex items-center gap-2 flex-1 cursor-pointer">
                      I agree to the <a href="#" className="text-primary underline underline-offset-2">Terms and Conditions</a> (required)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <Checkbox 
                      id="risk"
                      checked={investmentData.riskAccepted}
                      onCheckedChange={(checked) => setInvestmentData(prev => ({ ...prev, riskAccepted: checked === true }))}
                    />
                    <Label htmlFor="risk" className="flex items-center gap-2 flex-1 cursor-pointer">
                      I acknowledge the <a href="#" className="text-primary underline underline-offset-2">Risk Disclosure</a> (required)
                    </Label>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" onClick={handlePreviousStep}>
                    Back
                  </Button>
                  <Button 
                    className="btn-invest flex-1" 
                    onClick={handleInvestment}
                    disabled={!canConfirm()}
                  >
                    Confirm Investment
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
          {currentStep === "success" && (
            <Card className="card-professional p-8 text-center">
              <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-card-foreground mb-2">Investment Successful!</h2>
              <p className="text-muted-foreground mb-6">
                Your primary investment of £{investmentData.amount} in {deal.name} has been processed successfully.
              </p>
              <div className="flex gap-3 justify-center">
                <Button onClick={() => navigate('/portfolio')} className="btn-invest">
                  View Portfolio
                </Button>
                <Button variant="outline" onClick={() => navigate('/assets')}>
                  Continue Browsing
                </Button>
              </div>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Deal Summary */}
          <Card className="card-professional">
            <CardHeader>
              <CardTitle>Primary Investment Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <img src={deal.logo} alt={deal.name} className="w-12 h-12 object-contain" />
                <div>
                  <h3 className="font-semibold">{deal.name}</h3>
                  <p className="text-sm text-muted-foreground">{deal.title}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Price per {unitText}:</span>
                  <span className="font-medium">£{deal.pricePerShare}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dividend Yield:</span>
                  <span className="font-medium text-success">{deal.dividendYield}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Investment Terms:</span>
                  <span className="font-medium">{deal.terms}</span>
                </div>
              </div>

              <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                <h4 className="font-semibold text-success mb-2">Funding Progress</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Raised:</span>
                    <span>£{(deal.currentRaised / 1000000).toFixed(1)}M</span>
                  </div>
                  <Progress value={(deal.currentRaised / deal.fundingGoal) * 100} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span>Goal:</span>
                    <span>£{(deal.fundingGoal / 1000000).toFixed(1)}M</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Notice */}
          <Card className="card-professional border-warning/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-warning">
                <Shield className="w-5 h-5" />
                Important Notice
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p>
                This is a primary investment opportunity directly from {deal.name}. Your investment helps fund the organization's growth and operations.
              </p>
              <p>
                All investments carry risk. Please read our risk disclosure and terms carefully before proceeding.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
