import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Tag, Calculator, CheckCircle, AlertCircle, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { LogoImage } from "@/components/ui/logo-image";
import bannerImage from "@/assets/list-asset-banner.png";
import mclarenLogo from "@/assets/logos/mclaren-racing-logo.png";
import ryderLogo from "@/assets/logos/ryder-cup-logo.png";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface PortfolioAsset {
  id: string;
  name: string;
  logo: string;
  totalShares: number;
  purchasePrice: number;
  currentPrice: number;
  type: string;
}

const portfolioAssets: PortfolioAsset[] = [
  {
    id: "liverpool-fc",
    name: "Liverpool FC",
    logo: "/lovable-uploads/c0f719b9-a198-429d-b736-b4081a14de86.png",
    totalShares: 50,
    purchasePrice: 500,
    currentPrice: 575,
    type: "Equity"
  },
  {
    id: "mclaren-racing",
    name: "McLaren Racing",
    logo: mclarenLogo,
    totalShares: 200,
    purchasePrice: 1000,
    currentPrice: 1220,
    type: "ISA"
  },
  {
    id: "ryder-cup",
    name: "Ryder Cup",
    logo: ryderLogo,
    totalShares: 1,
    purchasePrice: 50000,
    currentPrice: 59350,
    type: "Debenture"
  },
  {
    id: "southern-brave",
    name: "Southern Brave",
    logo: "/lovable-uploads/3c190904-fab4-4a2c-896f-f8e2878d832a.png",
    totalShares: 33,
    purchasePrice: 1400,
    currentPrice: 1750,
    type: "Equity"
  }
];

export default function ListAsset() {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Get pre-selected asset from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const preselectedAsset = urlParams.get('preselected') || "";
  
  const [selectedAsset, setSelectedAsset] = useState<string>(preselectedAsset);
  const [quantity, setQuantity] = useState<string>("");
  const [pricePerShare, setPricePerShare] = useState<string>("");
  const [saleType, setSaleType] = useState<string>("fixed");
  
  const asset = portfolioAssets.find(a => a.id === selectedAsset);
  const quantityNum = parseInt(quantity) || 0;
  const priceNum = parseFloat(pricePerShare) || 0;
  const subtotal = quantityNum * priceNum;
  const saleeFee = subtotal * 0.025;
  const netAmount = subtotal - saleeFee;
  
  const suggestedPrice = asset ? asset.currentPrice * 1.05 : 0; // 5% above current market

  const handleSubmit = () => {
    if (!selectedAsset || !quantity || !pricePerShare) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Navigate to confirmation page with sale details
    navigate('/sale-confirmation', {
      state: {
        assetName: asset?.name,
        quantity: quantityNum,
        pricePerShare: priceNum,
        totalValue: subtotal,
        profit: netAmount - (asset?.purchasePrice || 0) * quantityNum,
        type: asset?.type
      }
    });
  };

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>

      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 p-8 border border-primary/20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${bannerImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
        <div className="relative z-10 text-center space-y-4">
          <h1 className="text-4xl font-bold text-gradient">List Asset for Sale</h1>
          <p className="text-xl text-foreground/90 font-medium">Sell your sports investments on the secondary market</p>
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Listing Form */}
        <div className="lg:col-span-3 space-y-6">
          {/* Asset Selection */}
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Tag className="w-5 h-5" />
                Select Your Asset
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Label className="text-base font-semibold">Choose from your portfolio</Label>
                <Select value={selectedAsset} onValueChange={setSelectedAsset}>
                  <SelectTrigger className="h-16">
                    <SelectValue placeholder="Select an asset to sell" />
                  </SelectTrigger>
                  <SelectContent>
                    {portfolioAssets.map((asset) => (
                      <SelectItem key={asset.id} value={asset.id} className="h-16">
                        <div className="flex items-center gap-3 py-2">
                          <LogoImage 
                            src={asset.logo}
                            alt={asset.name}
                            size="sm"
                          />
                          <div>
                            <p className="font-medium text-foreground md:text-foreground">{asset.name}</p>
                            <p className="text-sm text-white md:text-muted-foreground">
                              {asset.totalShares} {asset.name === "Ryder Cup" ? "debentures" : "shares"} owned • Current: £{asset.currentPrice.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </p>
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {asset && (
                <div className="p-4 bg-accent/20 rounded-lg border border-accent/30">
                  <div className="flex items-center gap-3 mb-3">
                    <LogoImage 
                      src={asset.logo}
                      alt={asset.name}
                      size="lg"
                    />
                    <div>
                      <h3 className="font-semibold">{asset.name}</h3>
                      <Badge variant="outline">{asset.type}</Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                      <p className="text-muted-foreground">{asset.name === "Ryder Cup" ? "Debentures Owned" : "Shares Owned"}</p>
                      <p className="font-semibold">{asset.totalShares}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Current Price</p>
                      <p className="font-semibold">£{asset.currentPrice.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Purchase Price</p>
                      <p className="font-semibold">£{asset.purchasePrice.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Profit per {asset.name === "Ryder Cup" ? "Debenture" : "Share"}</p>
                      <p className="font-semibold text-success">+£{(asset.currentPrice - asset.purchasePrice).toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quantity and Pricing */}
          {asset && (
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Listing Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Quantity */}
                <div className="space-y-3">
                  <Label htmlFor="quantity" className="text-base font-semibold">
                    Quantity to Sell
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="quantity"
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      min="1"
                      max={asset.totalShares}
                      placeholder={`Enter number of ${asset.name === "Ryder Cup" ? "debentures" : "shares"}`}
                      className="text-lg py-3 h-12"
                    />
                    <Button 
                      variant="outline" 
                      onClick={() => setQuantity(asset.totalShares.toString())}
                      className="px-6 bg-success/10 border-success text-success hover:bg-success hover:text-white"
                    >
                      Max
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Maximum: {asset.totalShares} {asset.name === "Ryder Cup" ? "debentures" : "shares"} available
                  </p>
                </div>

                {/* Price per Share */}
                <div className="space-y-3">
                   <Label htmlFor="price" className="text-base font-semibold">
                    Price per {asset.name === 'Ryder Cup' ? 'Debenture' : 'Share'}
                  </Label>
                  <div className="flex gap-2">
                      <Input
                        id="price"
                        type="number"
                        value={pricePerShare}
                        onChange={(e) => setPricePerShare(e.target.value)}
                        placeholder={`Enter price per ${asset.name === "Ryder Cup" ? "debenture" : "share"}`}
                        className="text-lg py-3 h-12"
                        step="0.01"
                      />
                    <Button 
                      variant="outline" 
                      onClick={() => setPricePerShare(suggestedPrice.toString())}
                      className="px-6 bg-success/10 border-success text-success hover:bg-success hover:text-white"
                    >
                      Use Suggested: £{suggestedPrice.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Suggested price: £{suggestedPrice.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} (5% above current market price)
                  </p>
                </div>

                <Separator />

                {/* Sale Type */}
                <div className="space-y-4">
                  <Label className="text-base font-semibold flex items-center gap-2">Sale Type
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-primary/40 text-primary cursor-help">i</span>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p className="text-sm"><strong>Fixed Sale:</strong> Set a price per share and your listing can be purchased instantly at that price.</p>
                        <p className="text-sm mt-2"><strong>Auction Sale:</strong> Set a starting bid and duration; investors place bids and the highest bid at close wins.</p>
                      </TooltipContent>
                    </Tooltip>
                  </Label>
                  <RadioGroup value={saleType} onValueChange={setSaleType}>
                    <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                      <RadioGroupItem value="fixed" id="fixed" />
                      <div className="flex-1">
                        <label htmlFor="fixed" className="font-medium cursor-pointer flex items-center gap-2">
                          Fixed Sale
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="w-4 h-4 text-muted-foreground cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>
                              Sell immediately at your set price.
                            </TooltipContent>
                          </Tooltip>
                        </label>
                        <p className="text-sm text-muted-foreground">
                          Sell immediately at your set price
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                      <RadioGroupItem value="auction" id="auction" />
                      <div className="flex-1">
                        <label htmlFor="auction" className="font-medium cursor-pointer flex items-center gap-2">
                          Auction Sale
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="w-4 h-4 text-muted-foreground cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>
                              Let investors bid on your shares.
                            </TooltipContent>
                          </Tooltip>
                        </label>
                        <p className="text-sm text-muted-foreground">
                          Let investors bid on your shares
                        </p>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Listing Summary */}
        <div className="space-y-6 lg:col-span-2">
          {asset && quantityNum > 0 && priceNum > 0 && (
            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Listing Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Asset:</span>
                    <span className="font-medium">{asset.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Quantity:</span>
                     <span className="font-medium">{quantityNum} {asset.name === "Ryder Cup" ? "debentures" : "shares"}</span>
                  </div>
                   <div className="flex justify-between">
                    <span className="text-muted-foreground">Price per {asset.name === "Ryder Cup" ? "Debenture" : "Share"}:</span>
                    <span className="font-medium">£{priceNum.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal:</span>
                    <span className="font-medium">£{subtotal.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sale Fee (2.5%):</span>
                    <span className="font-medium">£{saleeFee.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-xl font-bold">
                    <span>You'll Receive:</span>
                    <span className="text-success">£{netAmount.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-br from-success/10 to-success/5 rounded-lg border border-success/20">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="font-semibold text-success">Profit Analysis</span>
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Original Cost:</span>
                      <span>£{(asset.purchasePrice * quantityNum).toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <span>Total Profit:</span>
                      <span className="text-success">+£{(netAmount - (asset.purchasePrice * quantityNum)).toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handleSubmit}
                  className="w-full btn-invest text-lg py-6"
                  disabled={!selectedAsset || !quantity || !pricePerShare}
                >
                  List Asset for Sale
                </Button>
              </CardContent>
            </Card>
          )}

          {/* What Happens Next */}
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                What Happens Next?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm">
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">1</span>
                  </div>
                  <div>
                    <p className="font-medium">Listing Review</p>
                    <p className="text-muted-foreground">Your listing will be reviewed and made live within 2 hours</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">2</span>
                  </div>
                  <div>
                    <p className="font-medium">Market Exposure</p>
                    <p className="text-muted-foreground">Your asset appears on the secondary market for all investors</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">3</span>
                  </div>
                  <div>
                    <p className="font-medium">Settlement</p>
                    <p className="text-muted-foreground">Funds transferred to your account within 2-3 business days of sale</p>
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