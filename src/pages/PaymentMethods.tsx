import { useState } from "react";
import { ArrowLeft, CreditCard, Plus, Trash2, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface PaymentMethod {
  id: string;
  type: "card" | "bank";
  name: string;
  details: string;
  isDefault: boolean;
  expiryDate?: string;
}

export default function PaymentMethods() {
  const navigate = useNavigate();
  const [paymentMethods] = useState<PaymentMethod[]>([
    {
      id: "1",
      type: "card",
      name: "Visa ending in 4532",
      details: "**** **** **** 4532",
      isDefault: true,
      expiryDate: "12/26"
    },
    {
      id: "2",
      type: "bank",
      name: "Santander UK",
      details: "****3045",
      isDefault: false
    },
    {
      id: "3",
      type: "card",
      name: "Mastercard ending in 8901",
      details: "**** **** **** 8901",
      isDefault: false,
      expiryDate: "08/27"
    }
  ]);

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      <Button 
        variant="ghost" 
        onClick={() => navigate("/my-account")}
        className="flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Account
      </Button>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gradient">Payment Methods</h1>
        <p className="text-lg text-muted-foreground">Manage your payment methods for investments</p>
      </div>

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Saved Payment Methods</h2>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Payment Method
        </Button>
      </div>

      <div className="grid gap-4">
        {paymentMethods.map((method) => (
          <Card key={method.id} className="card-professional">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${method.type === 'card' ? 'bg-primary/10' : 'bg-success/10'}`}>
                    <CreditCard className={`w-6 h-6 ${method.type === 'card' ? 'text-primary' : 'text-success'}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{method.name}</h3>
                    <p className="text-sm text-muted-foreground">{method.details}</p>
                    {method.expiryDate && (
                      <p className="text-xs text-muted-foreground">Expires {method.expiryDate}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {method.isDefault && (
                    <Badge variant="success" className="gap-1">
                      <Check className="w-3 h-3" />
                      Default
                    </Badge>
                  )}
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="text-destructive hover:bg-destructive hover:text-destructive-foreground">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="card-professional">
        <CardHeader>
          <CardTitle>Payment Security</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3 p-4 bg-success/10 rounded-lg border border-success/20">
            <Check className="w-5 h-5 text-success" />
            <div>
              <p className="font-medium">SSL Encryption</p>
              <p className="text-sm text-muted-foreground">All payment data is encrypted and secure</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-success/10 rounded-lg border border-success/20">
            <Check className="w-5 h-5 text-success" />
            <div>
              <p className="font-medium">PCI Compliant</p>
              <p className="text-sm text-muted-foreground">Meets industry security standards</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-success/10 rounded-lg border border-success/20">
            <Check className="w-5 h-5 text-success" />
            <div>
              <p className="font-medium">Bank-Grade Security</p>
              <p className="text-sm text-muted-foreground">Protected by advanced fraud detection</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}