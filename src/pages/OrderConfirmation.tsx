import { useLocation, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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

  return (
    <div className="p-6 space-y-6 max-w-3xl mx-auto">
      <Card className="card-professional">
        <CardHeader>
          <CardTitle>Order Confirmation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">{assetName}</h2>
              <Badge variant="success" className="mt-2">
                {type === 'secondary' ? 'Secondary Market' : 'Primary Offering'}
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Quantity</p>
              <p className="font-semibold">{quantity} shares</p>
            </div>
            <div>
              <p className="text-muted-foreground">Unit Price</p>
              <p className="font-semibold">£{unitPrice}</p>
            </div>
            {seller && (
              <div>
                <p className="text-muted-foreground">Seller</p>
                <p className="font-semibold">{seller}</p>
              </div>
            )}
            <div>
              <p className="text-muted-foreground">Subtotal</p>
              <p className="font-semibold">£{subtotal.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Processing Fee</p>
              <p className="font-semibold">£{processingFee.toFixed(0)}</p>
            </div>
            <div className="col-span-2 border-t pt-2">
              <div className="flex justify-between text-lg font-bold">
                <span>Total Paid</span>
                <span className="text-primary">£{total.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-muted/30 rounded-lg">
            <h3 className="font-semibold mb-1">What happens next?</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Your order is being processed and will appear in your portfolio shortly.</li>
              <li>You can view your order details and documents in your portfolio.</li>
              <li>We will email you a confirmation and receipt.</li>
            </ul>
          </div>

          <div className="flex gap-3">
            <Button asChild className="btn-invest flex-1">
              <Link to="/portfolio">Go to Portfolio</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/market">Back to Market</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
