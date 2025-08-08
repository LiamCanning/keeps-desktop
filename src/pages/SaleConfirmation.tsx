import { useLocation, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function SaleConfirmation() {
  const { state } = useLocation() as { state: any };
  const {
    assetName = 'Asset',
    quantity = 0,
    pricePerShare = 0,
    totalSaleValue = 0,
    platformFee = 0,
    netProceeds = 0,
    listingType = 'fixed',
    expiryDays = '30',
  } = state || {};

  return (
    <div className="p-6 space-y-6 max-w-3xl mx-auto">
      <Card className="card-professional">
        <CardHeader>
          <CardTitle>Sale Confirmation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">{assetName}</h2>
              <Badge variant="secondary" className="mt-2 capitalize">{listingType} listing</Badge>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Quantity</p>
              <p className="font-semibold">{quantity} shares</p>
            </div>
            <div>
              <p className="text-muted-foreground">Price per Share</p>
              <p className="font-semibold">£{pricePerShare}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Total Sale Value</p>
              <p className="font-semibold">£{totalSaleValue.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Platform Fee (2.5%)</p>
              <p className="font-semibold">-£{platformFee.toFixed(2)}</p>
            </div>
            <div className="col-span-2 border-t pt-2">
              <div className="flex justify-between text-lg font-bold">
                <span>Estimated Net Proceeds</span>
                <span className="text-primary">£{netProceeds.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-muted/30 rounded-lg">
            <h3 className="font-semibold mb-1">What happens next?</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Your listing is now live on the secondary market for {expiryDays} days.</li>
              <li>We’ll notify you when there’s buyer interest or the listing sells.</li>
              <li>You can download the confirmation document from your portfolio.</li>
            </ul>
          </div>

          <div className="flex gap-3">
            <Button asChild className="btn-invest flex-1">
              <Link to="/portfolio">Go to Portfolio</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/market">View Market</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
