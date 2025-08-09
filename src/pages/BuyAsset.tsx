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

const deals = {
  "liverpool-fc": {
    id: "liverpool-fc",
    name: "Liverpool FC",
    logo: "/placeholder.svg",
    title: "Equity Investment Opportunity",
    pricePerShare: 550,
    minimumInvestment: 500,
    availableShares: 10000,
    fundingGoal: 50000000,
    currentRaised: 35750000,
    investorsCount: 2847,
    dividendYield: "4-8%",
    terms: "5-year term with optional renewal"
  },
  "mclaren-f1": {
    id: "mclaren-f1",
    name: "McLaren Racing",
    logo: "/placeholder.svg",
    title: "Income Sharing Agreement",
    pricePerShare: 1200,
    minimumInvestment: 1000,
    availableShares: 5000,
    fundingGoal: 50000000,
    currentRaised: 49250000,
    investorsCount: 1523,
    dividendYield: "15-25%",
    terms: "3-year income sharing agreement"
  },
  "ryder-cup": {
    id: "ryder-cup",
    name: "Ryder Cup",
    logo: "/placeholder.svg",
    title: "Debenture Investment Programme",
    pricePerShare: 5850,
    minimumInvestment: 5850,
    availableShares: 500,
    fundingGoal: 10000000,
    currentRaised: 8850000,
    investorsCount: 456,
    dividendYield: "12-18%",
    terms: "10-year debenture with premium access"
  }
};

type Step = "amount" | "payment" | "verification" | "confirmation" | "success";

export default function BuyAsset() {
  const { dealId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [currentStep, setCurrentStep] = useState<Step>("amount");
  const [investmentData, setInvestmentData] = useState({
    amount: "",
    shares: 0,
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

  const deal = dealId ? deals[dealId as keyof typeof deals] : null;

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
          <h2 className="text-xl font-semibold text-card-foreground mb-2">Investment Opportunity Not Found</h2>
          <p className="text-muted-foreground">The investment opportunity you're looking for doesn't exist.</p>
        </Card>
      </div>
    );
  }

  const steps = [
    { id: "amount", title: "Investment Amount", completed: false },
    { id: "payment", title: "Payment Method", completed: false },
    { id: "verification", title: "Verification", completed: false },
    { id: "confirmation", title: "Confirmation", completed: false },
    { id: "success", title: "Complete", completed: false }
  ];

  const currentStepIndex = steps.findIndex(step => step.id === currentStep);

  const handleAmountChange = (amount: string) => {
    const numAmount = parseFloat(amount) || 0;
    const shares = Math.floor(numAmount / deal.pricePerShare);
    setInvestmentData(prev => ({
      ...prev,
      amount,
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
    // Simulate investment processing
    toast({
      title: "Investment Successful!",
      description: `You have successfully invested £${investmentData.amount} in ${deal.name}.`,
    });
    setCurrentStep("success");
  };

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to {deal.name}
        </Button>
      </div>

      {/* Progress */}
      <Card className="card-professional p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            {steps.map((step, index) => (
              <div key={step.id} className={`flex items-center gap-2 ${index <= currentStepIndex ? 'text-primary' : 'text-muted-foreground'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                  index < currentStepIndex ? 'bg-primary text-primary-foreground' :
                  index === currentStepIndex ? 'bg-primary/20 text-primary border-2 border-primary' :
                  'bg-muted text-muted-foreground'
                }`}>
                  {index < currentStepIndex ? <CheckCircle className="w-4 h-4" /> : index + 1}
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
                <CardTitle>Investment Amount</CardTitle>
                <p className="text-muted-foreground">Choose how much you'd like to invest in {deal.name}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="amount">Investment Amount (£)</Label>
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

                {investmentData.shares > 0 && (
                  <div className="p-4 bg-muted/50 rounded-lg space-y-2">
                    <div className="flex justify-between">
                     <span className="text-muted-foreground">Price per {deal.id === 'ryder-cup' ? 'debenture' : 'share'}:</span>
                     <span className="font-medium">£{deal.pricePerShare}</span>
                    </div>
                    <div className="flex justify-between">
                     <span className="text-muted-foreground">Number of {deal.id === 'ryder-cup' ? 'debentures' : 'shares'}:</span>
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
                <CardTitle>Identity Verification</CardTitle>
                <p className="text-muted-foreground">Complete your identity verification to proceed</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-6 border-2 border-dashed border-muted-foreground/50 rounded-lg text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground">Quick Verification Required</h3>
                    <p className="text-muted-foreground mt-2">
                      This is a simulation. In a real platform, you would upload ID documents and complete identity verification.
                    </p>
                  </div>
                  <Button 
                    className="btn-invest"
                    onClick={() => setInvestmentData(prev => ({ ...prev, verificationCompleted: true }))}
                  >
                    {investmentData.verificationCompleted ? "Verification Complete" : "Complete Verification"}
                  </Button>
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
                <CardTitle>Confirm Your Investment</CardTitle>
                <p className="text-muted-foreground">Review your investment details before completing</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 bg-muted/50 rounded-lg space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Asset:</span>
                    <span className="font-medium">{deal.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Number of shares:</span>
                    <span className="font-medium">{investmentData.shares}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Price per share:</span>
                    <span className="font-medium">£{deal.pricePerShare}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total Investment:</span>
                      <span>£{(investmentData.shares * deal.pricePerShare).toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="terms" 
                      checked={investmentData.termsAccepted}
                      onCheckedChange={(checked) => setInvestmentData(prev => ({ ...prev, termsAccepted: !!checked }))}
                    />
                    <Label htmlFor="terms" className="text-sm leading-relaxed">
                      I have read and agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Investment Agreement</a>.
                    </Label>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="risk" 
                      checked={investmentData.riskAccepted}
                      onCheckedChange={(checked) => setInvestmentData(prev => ({ ...prev, riskAccepted: !!checked }))}
                    />
                    <Label htmlFor="risk" className="text-sm leading-relaxed">
                      I understand that this investment carries risk and I may lose some or all of my investment.
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
            <Card className="card-professional">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10 text-success" />
                </div>
                 <div>
                   <h2 className="text-2xl font-bold text-card-foreground mb-2">Investment Successful!</h2>
                   <p className="text-muted-foreground mb-4">
                     Congratulations! You have successfully invested £{(investmentData.shares * deal.pricePerShare).toLocaleString()} in {deal.name}.
                   </p>
                   <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 mb-4">
                     <p className="text-sm font-medium text-primary">
                       Reference Number: KEEP-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                     </p>
                   </div>
                 </div>
                 
                 <div className="p-4 bg-muted/50 rounded-lg space-y-2">
                   <div className="flex justify-between">
                     <span className="text-muted-foreground">Investment Amount:</span>
                     <span className="font-medium">£{(investmentData.shares * deal.pricePerShare).toLocaleString()}</span>
                   </div>
                   <div className="flex justify-between">
                     <span className="text-muted-foreground">{deal.id === 'ryder-cup' ? 'Debentures' : 'Shares'} Acquired:</span>
                     <span className="font-medium">{investmentData.shares}</span>
                   </div>
                   <div className="flex justify-between">
                     <span className="text-muted-foreground">Expected Dividend Yield:</span>
                     <span className="font-medium">{deal.dividendYield} annually</span>
                   </div>
                 </div>
                 
                 <div className="p-4 bg-success/5 rounded-lg border border-success/20">
                   <h4 className="font-semibold text-success mb-2">What happens next?</h4>
                   <ul className="space-y-2 text-sm text-muted-foreground">
                     <li>• You'll receive a confirmation email within 5 minutes</li>
                     <li>• Your investment certificate will be available in your account within 24 hours</li>
                     <li>• Dividend payments will begin according to the investment schedule</li>
                     <li>• You can download your order confirmation from My Account → Investment History</li>
                   </ul>
                 </div>
                <div className="flex gap-3">
                  <Button 
                    className="btn-invest flex-1"
                    onClick={() => navigate("/portfolio")}
                  >
                    View Portfolio
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => navigate("/")}
                  >
                    Back to Dashboard
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Deal Summary */}
          <Card className="card-professional">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <img src={deal.logo} alt={deal.name} className="w-12 h-12 rounded-lg object-cover" />
                <div>
                  <CardTitle className="text-lg">{deal.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{deal.title}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Dividend Yield</span>
                  <span className="font-medium">{deal.dividendYield}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Terms</span>
                  <span className="font-medium">{deal.terms}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Investors</span>
                  <span className="font-medium">{deal.investorsCount.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Raised</span>
                  <span className="font-medium">£{(deal.currentRaised / 1000000).toFixed(1)}M</span>
                </div>
                <Progress value={(deal.currentRaised / deal.fundingGoal) * 100} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  {Math.round((deal.currentRaised / deal.fundingGoal) * 100)}% of £{(deal.fundingGoal / 1000000)}M goal
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Security Notice */}
          <Card className="card-professional">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary mt-1" />
                <div className="space-y-1">
                  <h4 className="font-medium text-card-foreground">Secure Investment</h4>
                  <p className="text-sm text-muted-foreground">
                    Your investment is protected by 256-bit SSL encryption and FCA regulation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Risk Warning */}
          <Card className="card-professional border-warning/50">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-warning mt-1" />
                <div className="space-y-1">
                  <h4 className="font-medium text-card-foreground">Investment Risk</h4>
                  <p className="text-sm text-muted-foreground">
                    Capital at risk. Past performance is not indicative of future results.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}