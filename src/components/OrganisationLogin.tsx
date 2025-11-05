import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Lock, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface OrganisationLoginProps {
  onLoginSuccess?: () => void;
  logoSrc?: string;
  logoAlt?: string;
  title?: string;
  description?: string;
  demoEmail?: string;
  demoPassword?: string;
  storageKey?: string;
}

export function OrganisationLogin({ 
  onLoginSuccess,
  logoSrc = "/lovable-uploads/10864fdf-2d7a-4243-a715-724e5ddfb866.png",
  logoAlt = "Organisation logo",
  title = "McLaren Employee Access",
  description = "Access your organization dashboard and analytics",
  demoEmail = "admin@mclaren.com",
  demoPassword = "mclaren2024",
  storageKey = "mclaren-admin-logged-in"
}: OrganisationLoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleLogin = async () => {
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      if (email === demoEmail && password === demoPassword) {
        localStorage.setItem(storageKey, "true");
        toast({
          title: "Login Successful",
          description: "Welcome to your dashboard.",
        });
        setOpen(false); // Close dialog first
        onLoginSuccess?.(); // Notify parent component
      } else {
        toast({
          title: "Login Failed",
          description: `Invalid credentials. Try ${demoEmail} / ${demoPassword}`,
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1500);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      // Reset form when dialog closes
      setEmail("");
      setPassword("");
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
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
                src={logoSrc}
                alt={logoAlt}
                className="w-8 h-8 object-contain"
              />
            </div>
            {title}
          </DialogTitle>
          <DialogDescription>
            {description}
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
              <p>Email: {demoEmail}</p>
              <p>Password: {demoPassword}</p>
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