import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Lock, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function OrganisationLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async () => {
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      if (email === "admin@mclaren.com" && password === "mclaren2024") {
        localStorage.setItem("mclaren-admin-logged-in", "true");
        toast({
          title: "Login Successful",
          description: "Welcome to your McLaren F1 dashboard.",
        });
        navigate("/organisation-dashboard");
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid credentials. Try admin@mclaren.com / mclaren2024",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <User className="w-4 h-4" />
          Organisation Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <OptimizedImage
                src="/lovable-uploads/10864fdf-2d7a-4243-a715-724e5ddfb866.png"
                alt="McLaren Racing logo"
                className="w-8 h-8 object-contain"
              />
            </div>
            McLaren Employee Access
          </DialogTitle>
          <DialogDescription>
            Access your organization dashboard and analytics
          </DialogDescription>
        </DialogHeader>
        <Card className="border-0 shadow-none">
          <CardContent className="space-y-4 p-0">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@mclaren.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-xs text-muted-foreground bg-muted/50 p-3 rounded-lg">
              <p className="font-medium mb-1">Demo Credentials:</p>
              <p>Email: admin@mclaren.com</p>
              <p>Password: mclaren2024</p>
            </div>
            <Button 
              className="w-full" 
              onClick={handleLogin}
              disabled={isLoading || !email || !password}
            >
              {isLoading ? "Signing In..." : "Sign In"}
              <Lock className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}