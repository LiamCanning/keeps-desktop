import { useState } from "react";
import { ArrowLeft, TrendingDown, Calculator, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface Holding {
  id: string;
  name: string;
  logo: string;
  shares: number;
  currentPrice: number;
  purchasePrice: number;
  type: string;
}

const holdings: Holding[] = [
  {
    id: "1",
    name: "Liverpool FC",
    logo: "/placeholder.svg",
    shares: 50,
    currentPrice: 575,
    purchasePrice: 500,
    type: "Equity"
  },
  {
    id: "2",
    name: "McLaren Racing",
    logo: "/placeholder.svg",
    shares: 200,
    currentPrice: 1220,
    purchasePrice: 1000,
    type: "ISA"
  },
  {
    id: "3",
    name: "Ryder Cup",
    logo: "/placeholder.svg",
    shares: 3,
    currentPrice: 5935,
    purchasePrice: 5000,
    type: "Debenture"
  }
];

export default function SellShares() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedHolding, setSelectedHolding] = useState<Holding | null>(null);
  const [sharesToSell, setSharesToSell] = useState("");
  const [reason, setReason] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSellSubmit = async () => {
    if (!selectedHolding || !sharesToSell || parseInt(sharesToSell) <= 0) {
      toast({
        title: "Invalid Selection",
        description: "Please select a holding and enter a valid number of shares to sell.",
        variant: "destructive",
      });
      return;
    }

    if (parseInt(sharesToSell) > selectedHolding.shares) {
      toast({
        title: "Insufficient Shares",
        description: `You only own ${selectedHolding.shares} ${selectedHolding.type.toLowerCase()}s.`,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      toast({
        title: "Sell Order Submitted",
        description: `Your order to sell ${sharesToSell} ${selectedHolding.name} ${selectedHolding.type.toLowerCase()}s has been submitted successfully.`,
      });
      
      // Reset form
      setSelectedHolding(null);
      setSharesToSell("");
      setReason("");
      setIsSubmitting(false);
      
      // Navigate back to portfolio after 2 seconds
      setTimeout(() => {
        navigate("/portfolio");
      }, 2000);
    }, 1500);
  };

  const calculateSaleValue = () => {
    if (!selectedHolding || !sharesToSell) return 0;
    return parseInt(sharesToSell) * selectedHolding.currentPrice;
  };

  const calculateProfit = () => {
    if (!selectedHolding || !sharesToSell) return 0;
    const shares = parseInt(sharesToSell);
    return shares * (selectedHolding.currentPrice - selectedHolding.purchasePrice);
  };

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/portfolio")}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-gradient">Sell Shares</h1>
          <p className="text-lg text-muted-foreground">Manage your investment positions</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Holdings Selection */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingDown className="w-5 h-5 text-primary" />
                Select Holdings to Sell
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {holdings.map((holding) => {
                const profit = holding.shares * (holding.currentPrice - holding.purchasePrice);
                const profitPercent = ((holding.currentPrice - holding.purchasePrice) / holding.purchasePrice) * 100;
                const isSelected = selectedHolding?.id === holding.id;
                
                return (
                  <Card 
                    key={holding.id}
                    className={`cursor-pointer transition-all duration-200 ${
                      isSelected ? 'border-primary bg-primary/5' : 'hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedHolding(holding)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img 
                            src={holding.logo}
                            alt={holding.name}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <h3 className="font-semibold">{holding.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {holding.shares} {holding.type.toLowerCase()}s owned
                            </p>
                            <Badge variant="outline" className="text-xs mt-1">
                              {holding.type}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">£{holding.currentPrice.toLocaleString()}</p>
                          <p className={`text-sm ${profit >= 0 ? 'text-success' : 'text-destructive'}`}>
                            {profit >= 0 ? '+' : ''}£{profit.toLocaleString()} ({profitPercent.toFixed(1)}%)
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </CardContent>
          </Card>

          {selectedHolding && (
            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Sell Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="shares">
                    Number of {selectedHolding.type.toLowerCase()}s to sell
                  </Label>
                  <Input
                    id="shares"
                    type="number"
                    max={selectedHolding.shares}
                    min="1"
                    placeholder={`Max: ${selectedHolding.shares}`}
                    value={sharesToSell}
                    onChange={(e) => setSharesToSell(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    You own {selectedHolding.shares} {selectedHolding.type.toLowerCase()}s
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason">Reason for selling (optional)</Label>
                  <Textarea
                    id="reason"
                    placeholder="e.g., Portfolio rebalancing, taking profits, liquidity needs..."
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sale Summary */}
        <div className="space-y-6">
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-primary" />
                Sale Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {selectedHolding && sharesToSell ? (
                <>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{selectedHolding.type}s to sell</span>
                      <span className="font-semibold">{sharesToSell}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Current price</span>
                      <span className="font-semibold">£{selectedHolding.currentPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total sale value</span>
                      <span className="font-semibold text-lg">£{calculateSaleValue().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="text-muted-foreground">Profit/Loss</span>
                      <span className={`font-semibold ${calculateProfit() >= 0 ? 'text-success' : 'text-destructive'}`}>
                        {calculateProfit() >= 0 ? '+' : ''}£{calculateProfit().toLocaleString()}
                      </span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full btn-invest"
                    onClick={handleSellSubmit}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Submit Sell Order"}
                  </Button>
                </>
              ) : (
                <p className="text-muted-foreground text-center py-8">
                  Select a holding and enter quantity to see sale summary
                </p>
              )}
            </CardContent>
          </Card>

          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-warning" />
                Important Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Sales are processed during market hours (9:00 AM - 5:00 PM GMT)</p>
                <p>• Settlement typically takes 2-3 business days</p>
                <p>• Capital gains tax may apply to profitable sales</p>
                <p>• Early exit fees may apply for holdings under 12 months</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}