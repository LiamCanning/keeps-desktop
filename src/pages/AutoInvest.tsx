import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import liverpoolLogo from "@/assets/logos/Liverpool FC Logo.png";
import mclarenLogo from "@/assets/logos/mclaren-racing-logo.png";
import ryderLogo from "@/assets/logos/ryder-cup-logo.png";

export default function AutoInvest() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [asset, setAsset] = useState("Liverpool FC");
  const [amount, setAmount] = useState("250");
  const [frequency, setFrequency] = useState("monthly");
  const [day, setDay] = useState("15");
  const [paymentMethod, setPaymentMethod] = useState("Visa **** 4242");

  useEffect(() => {
    document.title = "Set Up Auto-Investment | Keeps";
  }, []);

  const logoMap: Record<string, string> = {
    "Liverpool FC": liverpoolLogo,
    "McLaren Racing": mclarenLogo,
    "Ryder Cup": ryderLogo,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const plan = {
      id: Date.now().toString(),
      asset,
      assetLogo: logoMap[asset],
      amount: Number(amount),
      frequency,
      day: Number(day),
      paymentMethod,
      active: true,
      createdAt: new Date().toISOString(),
    };
    try {
      const raw = localStorage.getItem("autoInvestPlans");
      const arr = raw ? JSON.parse(raw) : [];
      arr.push(plan);
      localStorage.setItem("autoInvestPlans", JSON.stringify(arr));
      toast({ title: "Auto-invest plan created", description: `${asset}: £${amount} ${frequency}` });
      navigate("/my-account");
    } catch (err) {
      console.error(err);
      toast({ title: "Could not save plan", description: "Please try again", variant: "destructive" });
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-gradient">Set Up Auto-Investment</h1>
        <p className="text-muted-foreground">Create a recurring investment with dollar-cost averaging</p>
      </header>

      <Card className="card-professional">
        <CardHeader>
          <CardTitle className="text-card-foreground">Plan details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm">Asset</Label>
                <Select value={asset} onValueChange={setAsset}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select asset" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Liverpool FC">Liverpool FC</SelectItem>
                    <SelectItem value="McLaren Racing">McLaren Racing</SelectItem>
                    <SelectItem value="Ryder Cup">Ryder Cup</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm">Amount (GBP)</Label>
                <Input type="number" min="10" step="10" value={amount} onChange={(e) => setAmount(e.target.value)} />
              </div>

              <div className="space-y-2">
                <Label className="text-sm">Frequency</Label>
                <Select value={frequency} onValueChange={setFrequency}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm">Day of month</Label>
                <Input type="number" min="1" max="28" value={day} onChange={(e) => setDay(e.target.value)} />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label className="text-sm">Payment method</Label>
                <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Visa **** 4242">Visa **** 4242</SelectItem>
                    <SelectItem value="Mastercard **** 1881">Mastercard **** 1881</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Button type="button" variant="outline" onClick={() => navigate(-1)}>Cancel</Button>
              <Button type="submit" className="btn-invest">Create Plan</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
