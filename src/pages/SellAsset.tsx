import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, TrendingUp, Calendar, DollarSign, CheckCircle, AlertTriangle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

// Mock user portfolio holdings
const userHoldings = [
  {
    id: "liverpool-fc",
    asset: "Liverpool FC",
    logo: "/lovable-uploads/b30a6bed-fd89-4147-8f94-67de21d47c97.png",
    quantity: 15,
    avgPurchasePrice: 500,
    currentPrice: 550,
    totalValue: 8250,
    returns: 10.0
  },
  {
    id: "mclaren-f1",
    asset: "McLaren Racing",
    logo: "/lovable-uploads/6ce10e58-9e3e-4723-a481-326f200edc4e.png",
    quantity: 8,
    avgPurchasePrice: 1000,
    currentPrice: 1200,
    totalValue: 9600,
    returns: 20.0
  },
  {
    id: "ryder-cup",
    asset: "Ryder Cup",
    logo: "/lovable-uploads/c23214c5-7f7c-4f20-9656-38c43a09385e.png",
    quantity: 1,
    avgPurchasePrice: 5000,
    currentPrice: 5900,
    totalValue: 5900,
    returns: 18.0
  }
];

type Step = "select" | "details" | "pricing" | "confirmation" | "success";

export default function SellAsset() {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [currentStep, setCurrentStep] = useState<Step>("select");
  const [listingData, setListingData] = useState({
    selectedAsset: "",
    quantityToSell: "",
    pricePerShare: "",
    listingType: "fixed", // "fixed" or "auction"
    expiryDays: "30",
    description: "",
    termsAccepted: false,
    feesAccepted: false
  });

  const selectedHolding = userHoldings.find(h => h.id === listingData.selectedAsset);
  const quantityToSell = parseInt(listingData.quantityToSell) || 0;
  const pricePerShare = parseFloat(listingData.pricePerShare) || 0;
  const totalSaleValue = quantityToSell * pricePerShare;
  const platformFee = totalSaleValue * 0.025; // 2.5% fee
  const netProceeds = totalSaleValue - platformFee;

  const handleNextStep = () => {
    const stepOrder: Step[] = ["select", "details", "pricing", "confirmation", "success"];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex < stepOrder.length - 1) {
      setCurrentStep(stepOrder[currentIndex + 1]);
    }
  };

  const handlePreviousStep = () => {
    const stepOrder: Step[] = ["select", "details", "pricing", "confirmation", "success"];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(stepOrder[currentIndex - 1]);
    }
  };

  const canProceedFromSelect = () => {
    return listingData.selectedAsset !== "";
  };

  const canProceedFromDetails = () => {
    return quantityToSell > 0 && quantityToSell <= (selectedHolding?.quantity || 0);
  };

  const canProceedFromPricing = () => {
    return pricePerShare > 0 && listingData.expiryDays !== "";
  };

  const canConfirm = () => {
    return listingData.termsAccepted && listingData.feesAccepted;
  };

  const handleListing = () => {
    toast({
      title: "Asset Listed Successfully!",
      description: `Your ${selectedHolding?.asset} shares have been listed on the secondary market.`,
    });
    setCurrentStep("success");
  };

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Market
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {currentStep === "select" && (
            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Select Asset to Sell</CardTitle>
                <p className="text-muted-foreground">Choose which asset you'd like to list on the secondary market</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {userHoldings.map((holding) => (
                    <div
                      key={holding.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        listingData.selectedAsset === holding.id 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setListingData(prev => ({ ...prev, selectedAsset: holding.id }))}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <img 
                            src={holding.logo} 
                            alt={holding.asset} 
                            className="w-12 h-12 rounded-lg object-cover" 
                          />
                          <div>
                            <h3 className="font-semibold text-card-foreground">{holding.asset}</h3>
                            <p className="text-sm text-muted-foreground">{holding.quantity} shares owned</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-card-foreground">£{holding.totalValue.toLocaleString()}</p>
                          <Badge variant={holding.returns >= 0 ? "success" : "destructive"} className="text-xs">
                            {holding.returns >= 0 ? "+" : ""}{holding.returns}%
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="mt-3 grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Avg Purchase Price</p>
                          <p className="font-medium">£{holding.avgPurchasePrice}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Current Price</p>
                          <p className="font-medium">£{holding.currentPrice}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Total Return</p>
                          <p className="font-medium text-success">+£{(holding.totalValue - (holding.avgPurchasePrice * holding.quantity)).toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button 
                  className="btn-invest w-full" 
                  onClick={handleNextStep}
                  disabled={!canProceedFromSelect()}
                >
                  Continue with {selectedHolding?.asset || "Selected Asset"}
                </Button>
              </CardContent>
            </Card>
          )}

          {currentStep === "details" && selectedHolding && (
            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Listing Details</CardTitle>
                <p className="text-muted-foreground">Specify how many shares you want to sell</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <img src={selectedHolding.logo} alt={selectedHolding.asset} className="w-10 h-10 rounded-lg object-cover" />
                    <div>
                      <h3 className="font-semibold text-card-foreground">{selectedHolding.asset}</h3>
                      <p className="text-sm text-muted-foreground">You own {selectedHolding.quantity} shares</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Number of Shares to Sell</Label>
                    <Input
                      id="quantity"
                      type="number"
                      placeholder="Enter quantity"
                      value={listingData.quantityToSell}
                      onChange={(e) => setListingData(prev => ({ ...prev, quantityToSell: e.target.value }))}
                      max={selectedHolding.quantity}
                      min={1}
                    />
                    <div className="p-3 bg-muted/20 rounded-lg border">
                      <p className="text-sm text-muted-foreground mb-1">Suggested Price</p>
                      <p className="text-lg font-semibold text-card-foreground">£{selectedHolding.currentPrice} per share</p>
                      <p className="text-xs text-muted-foreground">Based on current market conditions and recent transactions</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Maximum: {selectedHolding.quantity} shares (£{(selectedHolding.quantity * selectedHolding.currentPrice).toLocaleString()} total value)
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description (Optional)</Label>
                    <Textarea
                      id="description"
                      placeholder="Add any additional information about your listing..."
                      value={listingData.description}
                      onChange={(e) => setListingData(prev => ({ ...prev, description: e.target.value }))}
                      rows={3}
                    />
                  </div>

                  {quantityToSell > 0 && (
                    <div className="p-4 bg-primary/10 rounded-lg space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Shares to sell:</span>
                        <span className="font-medium">{quantityToSell}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Current price per share:</span>
                        <span className="font-medium">£{selectedHolding.currentPrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Estimated total value:</span>
                        <span className="font-medium">£{(quantityToSell * selectedHolding.currentPrice).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Remaining shares:</span>
                        <span className="font-medium">{selectedHolding.quantity - quantityToSell}</span>
                      </div>
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
                    disabled={!canProceedFromDetails()}
                  >
                    Continue to Pricing
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === "pricing" && selectedHolding && (
            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Set Your Price</CardTitle>
                <p className="text-muted-foreground">Choose your pricing strategy and listing duration</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-3">
                    <Label>Listing Type</Label>
                    <RadioGroup 
                      value={listingData.listingType} 
                      onValueChange={(value) => setListingData(prev => ({ ...prev, listingType: value }))}
                    >
                      <div className="flex items-center space-x-2 p-3 border rounded-lg">
                        <RadioGroupItem value="fixed" id="fixed" />
                        <Label htmlFor="fixed" className="flex-1 cursor-pointer">
                          <div>
                            <p className="font-medium">Fixed Price</p>
                            <p className="text-sm text-muted-foreground">Set a fixed price per share</p>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg">
                        <RadioGroupItem value="auction" id="auction" />
                        <Label htmlFor="auction" className="flex-1 cursor-pointer">
                          <div>
                            <p className="font-medium">Auction Style</p>
                            <p className="text-sm text-muted-foreground">Let buyers bid on your shares</p>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="price">
                      {listingData.listingType === "fixed" ? "Price per Share (£)" : "Starting Bid per Share (£)"}
                    </Label>
                    <Input
                      id="price"
                      type="number"
                      placeholder={`Current market price: £${selectedHolding.currentPrice}`}
                      value={listingData.pricePerShare}
                      onChange={(e) => setListingData(prev => ({ ...prev, pricePerShare: e.target.value }))}
                      step="0.01"
                      min="0"
                    />
                    <p className="text-sm text-muted-foreground">
                      Current market price: £{selectedHolding.currentPrice} per share
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="expiry">Listing Duration</Label>
                    <Select value={listingData.expiryDays} onValueChange={(value) => setListingData(prev => ({ ...prev, expiryDays: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7">7 days</SelectItem>
                        <SelectItem value="14">14 days</SelectItem>
                        <SelectItem value="30">30 days</SelectItem>
                        <SelectItem value="60">60 days</SelectItem>
                        <SelectItem value="90">90 days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {pricePerShare > 0 && quantityToSell > 0 && (
                    <div className="p-4 bg-muted/50 rounded-lg space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total sale value:</span>
                        <span className="font-medium">£{totalSaleValue.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Platform fee (2.5%):</span>
                        <span className="font-medium">-£{platformFee.toFixed(2)}</span>
                      </div>
                      <div className="border-t pt-2">
                        <div className="flex justify-between font-semibold text-lg">
                          <span>Net proceeds:</span>
                          <span>£{netProceeds.toFixed(2)}</span>
                        </div>
                      </div>
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
                    disabled={!canProceedFromPricing()}
                  >
                    Review Listing
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === "confirmation" && selectedHolding && (
            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Confirm Your Listing</CardTitle>
                <p className="text-muted-foreground">Review all details before listing your asset</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 bg-muted/50 rounded-lg space-y-3">
                  <div className="flex items-center gap-3">
                    <img src={selectedHolding.logo} alt={selectedHolding.asset} className="w-10 h-10 rounded-lg object-cover" />
                    <div>
                      <h3 className="font-semibold text-card-foreground">{selectedHolding.asset}</h3>
                      <p className="text-sm text-muted-foreground">{listingData.listingType === "fixed" ? "Fixed Price" : "Auction"} Listing</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Quantity</p>
                      <p className="font-medium">{quantityToSell} shares</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">
                        {listingData.listingType === "fixed" ? "Price per share" : "Starting bid"}
                      </p>
                      <p className="font-medium">£{pricePerShare}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Listing duration</p>
                      <p className="font-medium">{listingData.expiryDays} days</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Expires</p>
                      <p className="font-medium">
                        {new Date(Date.now() + parseInt(listingData.expiryDays) * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-t pt-3 space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Total sale value:</span>
                      <span className="font-medium">£{totalSaleValue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Platform fee (2.5%):</span>
                      <span className="font-medium">-£{platformFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <span>Net proceeds:</span>
                      <span className="text-success">£{netProceeds.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="terms" 
                      checked={listingData.termsAccepted}
                      onCheckedChange={(checked) => setListingData(prev => ({ ...prev, termsAccepted: !!checked }))}
                    />
                    <Label htmlFor="terms" className="text-sm leading-relaxed">
                      I agree to the <a href="#" className="text-primary hover:underline">Secondary Market Terms</a> and understand that my listing will be visible to all platform users.
                    </Label>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="fees" 
                      checked={listingData.feesAccepted}
                      onCheckedChange={(checked) => setListingData(prev => ({ ...prev, feesAccepted: !!checked }))}
                    />
                    <Label htmlFor="fees" className="text-sm leading-relaxed">
                      I understand and accept the 2.5% platform fee that will be deducted from the sale proceeds.
                    </Label>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" onClick={handlePreviousStep}>
                    Back
                  </Button>
                  <Button 
                    className="btn-invest flex-1" 
                    onClick={handleListing}
                    disabled={!canConfirm()}
                  >
                    List Asset for Sale
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === "success" && selectedHolding && (
            <Card className="card-professional">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10 text-success" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-card-foreground mb-2">Asset Listed Successfully!</h2>
                  <p className="text-muted-foreground">
                    Your {selectedHolding.asset} shares are now available on the secondary market.
                  </p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Asset:</span>
                    <span className="font-medium">{selectedHolding.asset}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Quantity Listed:</span>
                    <span className="font-medium">{quantityToSell} shares</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      {listingData.listingType === "fixed" ? "Listed Price:" : "Starting Bid:"}
                    </span>
                    <span className="font-medium">£{pricePerShare} per share</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Potential Net Proceeds:</span>
                    <span className="font-medium text-success">£{netProceeds.toFixed(2)}</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button 
                    className="btn-invest flex-1"
                    onClick={() => navigate("/market")}
                  >
                    View in Market
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => navigate("/portfolio")}
                  >
                    Back to Portfolio
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Platform Stats */}
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="text-lg">Secondary Market</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Active Listings</span>
                  <span className="font-medium">847</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Avg Settlement Time</span>
                  <span className="font-medium">2.3 days</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Success Rate</span>
                  <span className="font-medium">94%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Fee Structure */}
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="text-lg">Fee Structure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Listing Fee</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Success Fee</span>
                <span className="font-medium">2.5%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Payment Processing</span>
                <span className="font-medium">Included</span>
              </div>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card className="card-professional">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-primary mt-1" />
                <div className="space-y-1">
                  <h4 className="font-medium text-card-foreground">Listing Tips</h4>
                  <p className="text-sm text-muted-foreground">
                    Price competitively and add a detailed description to increase your chances of a quick sale.
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