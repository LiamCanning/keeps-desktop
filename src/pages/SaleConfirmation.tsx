import { useLocation, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, FileText, Clock } from "lucide-react";

export default function SaleConfirmation() {
  const location = useLocation();
  const saleDetails = location.state || {};
  
  const {
    assetName = "Asset",
    quantity = 0,
    pricePerShare = 0,
    totalValue = 0,
    profit = 0,
    type = "Share"
  } = saleDetails;

  const processingFee = totalValue * 0.025;
  const netAmount = totalValue - processingFee;
  const reference = `KPS-SALE-${Date.now().toString().slice(-6)}`;

  return (
    <div className="p-6 space-y-6 max-w-3xl mx-auto">
      <Card className="card-professional">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-success" />
            </div>
          </div>
          <CardTitle className="text-2xl text-success">Sale Order Confirmed!</CardTitle>
          <p className="text-muted-foreground">Your asset has been successfully listed for sale</p>
          <Badge variant="outline" className="mt-2">Reference: {reference}</Badge>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Sale Summary */}
          <div className="p-4 bg-muted/30 rounded-lg">
            <h3 className="font-semibold mb-4">Sale Summary</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Asset</p>
                <p className="font-semibold">{assetName}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Type</p>
                <p className="font-semibold">{type} Sale</p>
              </div>
              <div>
                <p className="text-muted-foreground">Quantity</p>
                <p className="font-semibold">{quantity} {type.toLowerCase()}s</p>
              </div>
              <div>
                <p className="text-muted-foreground">Price per {type}</p>
                <p className="font-semibold">£{pricePerShare.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Gross Value</p>
                <p className="font-semibold">£{totalValue.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Processing Fee (2.5%)</p>
                <p className="font-semibold">£{processingFee.toFixed(0)}</p>
              </div>
              <div className="col-span-2 border-t pt-2 flex justify-between text-lg font-bold">
                <span>Net Proceeds</span>
                <span className="text-success">£{netAmount.toLocaleString()}</span>
              </div>
              {profit > 0 && (
                <div className="col-span-2 flex justify-between text-success">
                  <span>Profit</span>
                  <span className="font-semibold">+£{profit.toLocaleString()}</span>
                </div>
              )}
            </div>
          </div>

          {/* What Happens Next */}
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              What happens next?
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">1</span>
                </div>
                <div>
                  <p className="font-medium">Listing Review (2 hours)</p>
                  <p className="text-muted-foreground">Your sale listing will be reviewed and made live on the secondary market</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">2</span>
                </div>
                <div>
                  <p className="font-medium">Market Exposure</p>
                  <p className="text-muted-foreground">Other investors will be able to view and purchase your listed {type.toLowerCase()}s</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">3</span>
                </div>
                <div>
                  <p className="font-medium">Settlement (2-3 business days)</p>
                  <p className="text-muted-foreground">Funds will be transferred to your account once a buyer is found</p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Information */}
          <div className="p-4 bg-warning/5 rounded-lg border border-warning/20">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <FileText className="w-5 h-5 text-warning" />
              Important Information
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>You can cancel your listing anytime before a buyer commits</li>
              <li>All sale confirmations and documents are available in My Account &gt; Documents</li>
              <li>Capital gains tax may apply to profitable sales - consult your tax advisor</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button asChild variant="outline" className="flex-1">
              <Link to="/portfolio">
                Back to Portfolio
              </Link>
            </Button>
            <Button asChild className="btn-invest flex-1">
              <Link to="/market" className="flex items-center gap-2">
                View Market
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}