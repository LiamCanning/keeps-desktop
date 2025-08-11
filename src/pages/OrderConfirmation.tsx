import { useLocation, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, FileText, Clock, Shield } from "lucide-react";

export default function OrderConfirmation() {
  const { state } = useLocation() as { state: any };
  const {
    type = 'primary',
    assetName = 'Asset',
    quantity = 0,
    unitPrice = 0,
    subtotal = 0,
    processingFee = 0,
    total = 0,
    seller = null,
  } = state || {};

  const reference = `KPS-BUY-${Date.now().toString().slice(-6)}`;

  return (
    <div className="p-6 space-y-6 max-w-3xl mx-auto">
      <Card className="card-professional">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-success" />
            </div>
          </div>
          <CardTitle className="text-2xl text-success">Order Confirmed!</CardTitle>
          <p className="text-muted-foreground">Your investment order has been successfully placed</p>
          <Badge variant="outline" className="mt-2">Reference: {reference}</Badge>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Order Summary */}
          <div className="p-4 bg-muted/30 rounded-lg">
            <h3 className="font-semibold mb-4">Order Summary</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Asset</p>
                <p className="font-semibold">{assetName}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Order Type</p>
                <p className="font-semibold">{type === 'secondary' ? 'Secondary Market' : 'Primary Offering'}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Quantity</p>
                <p className="font-semibold">{quantity} {state?.assetId === 'ryder-cup' ? 'debentures' : 'shares'}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Unit Price</p>
                <p className="font-semibold">£{unitPrice}</p>
              </div>
              {seller && (
                <>
                  <div>
                    <p className="text-muted-foreground">Seller</p>
                    <p className="font-semibold">{seller}</p>
                  </div>
                  <div></div>
                </>
              )}
              <div>
                <p className="text-muted-foreground">Subtotal</p>
                <p className="font-semibold">£{subtotal.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Processing Fee</p>
                <p className="font-semibold">£{processingFee.toFixed(0)}</p>
              </div>
              <div className="col-span-2 border-t pt-2 flex justify-between text-lg font-bold">
                <span>Total Paid</span>
                <span className="text-success">£{total.toLocaleString()}</span>
              </div>
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
                  <p className="font-medium">Order Processing (2-4 hours)</p>
                  <p className="text-muted-foreground">Your order is being verified and processed by our trading team</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">2</span>
                </div>
                <div>
                  <p className="font-medium">Share Allocation</p>
                  <p className="text-muted-foreground">Your shares will be allocated and appear in your portfolio</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">3</span>
                </div>
                <div>
                  <p className="font-medium">Settlement (1-2 business days)</p>
                  <p className="text-muted-foreground">Final settlement and all documentation will be completed</p>
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
              <li>Order confirmation and legal documents are available in My Account &gt; Documents</li>
              <li>You can track your order status in your portfolio dashboard</li>
              <li>We will email you updates at each stage of the process</li>
              <li>Customer support is available 24/7 for any questions about your order</li>
            </ul>
          </div>

          {/* Security Notice */}
          <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              Security & Protection
            </h3>
            <p className="text-sm text-muted-foreground">
              Your investment is protected by our institutional-grade security measures and regulatory compliance. 
              All transactions are monitored and insured up to £85,000 per investor under the FSCS scheme.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button asChild variant="outline" className="flex-1">
              <Link to="/portfolio">
                View Portfolio
              </Link>
            </Button>
            <Button asChild className="btn-invest flex-1">
              <Link to="/market" className="flex items-center gap-2">
                Back to Market
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
