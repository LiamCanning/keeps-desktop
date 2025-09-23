import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import keepsLogo from "@/assets/keeps-logo.png";

interface Txn {
  id: string;
  asset: string;
  type: string;
  date: string;
  amount: number;
  shares: number;
  pricePerShare: number;
}

const transactions: Record<string, Txn> = {
  "1": { id: "1", asset: "Liverpool FC", type: "Primary Purchase", date: "2025-07-15", amount: 25000, shares: 50, pricePerShare: 500 },
  "2": { id: "2", asset: "McLaren Racing", type: "Primary Purchase", date: "2025-07-10", amount: 200000, shares: 200, pricePerShare: 1000 },
  "3": { id: "3", asset: "Ryder Cup", type: "Debenture Purchase", date: "2025-07-05", amount: 50000, shares: 1, pricePerShare: 50000 },
};

export default function TransactionDetails() {
  const { id } = useParams();
  const txn = (id && transactions[id]) || null;

  if (!txn) {
    return (
      <div className="p-6 max-w-3xl mx-auto">
        <Card className="card-professional p-8 text-center">
          <CardTitle>Transaction Not Found</CardTitle>
          <p className="text-muted-foreground mt-2">We couldn't find this transaction.</p>
          <Button asChild className="mt-4"><Link to="/investment-history">Back to History</Link></Button>
        </Card>
      </div>
    );
  }

  const reference = `KPS-${txn.id.padStart(6, '0')}`;

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="p-6 space-y-6 max-w-3xl mx-auto print:max-w-none print:p-0">
      <Card className="card-professional">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/lovable-uploads/3c5b79e2-f293-41c2-8781-84b778710c31.png" alt="Keeps logo" className="w-12 h-12 object-contain" />
            <div>
              <CardTitle>Order Confirmation</CardTitle>
              <p className="text-sm text-muted-foreground">Reference: {reference}</p>
            </div>
          </div>
          <Badge variant="success">Completed</Badge>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Asset</p>
              <p className="font-semibold">{txn.asset}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Type</p>
              <p className="font-semibold">{txn.type}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Date</p>
              <p className="font-semibold">{new Date(txn.date).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Price per Share</p>
              <p className="font-semibold">£{txn.pricePerShare.toLocaleString()}</p>
            </div>
          </div>

          <div className="p-4 bg-muted/30 rounded-lg">
            <h3 className="font-semibold mb-2">Order Summary</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Quantity</p>
                <p className="font-semibold">{txn.shares} shares</p>
              </div>
              <div>
                <p className="text-muted-foreground">Subtotal</p>
                <p className="font-semibold">£{txn.amount.toLocaleString()}</p>
              </div>
              <div className="col-span-2 border-t pt-2 flex justify-between text-lg font-bold">
                <span>Total Paid</span>
                <span className="text-primary">£{txn.amount.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-muted/20 rounded-lg">
            <h3 className="font-semibold mb-1">What happens next?</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Your order is recorded and visible in your Portfolio and Investment History.</li>
              <li>You'll receive an email confirmation with this summary attached.</li>
              <li>All documents are available in My Account &gt; Documents.</li>
            </ul>
          </div>

          <div className="flex gap-3">
            <Button onClick={handleDownload} variant="outline">Download Confirmation</Button>
            <Button asChild className="btn-invest"><Link to="/portfolio">Go to Portfolio</Link></Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
