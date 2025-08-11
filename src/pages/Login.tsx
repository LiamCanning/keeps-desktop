import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, Chrome } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { useToast } from "@/hooks/use-toast";
import keepsLogo from "@/assets/keeps-logo.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Always redirect to home if already authenticated
    const hasLoggedIn = localStorage.getItem("keeps_user_authenticated");
    if (hasLoggedIn && window.location.pathname === '/login') {
      navigate("/");
    }
  }, [navigate]);

  const handleEmailLogin = async () => {
    if (!email || !password) {
      toast({
        title: "Missing Information",
        description: "Please enter both email and password.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      localStorage.setItem("keeps_user_authenticated", "true");
      localStorage.setItem("keeps_user_email", email);
      
      toast({
        title: "Welcome back!",
        description: "You've been successfully logged in.",
      });
      
      navigate("/");
      setIsLoading(false);
    }, 1500);
  };

  const handleSocialLogin = (provider: string) => {
    setIsLoading(true);
    
    // Simulate OAuth flow
    setTimeout(() => {
      localStorage.setItem("keeps_user_authenticated", "true");
      localStorage.setItem("keeps_user_provider", provider);
      
      toast({
        title: "Welcome!",
        description: `Successfully logged in with ${provider}.`,
      });
      
      navigate("/");
      setIsLoading(false);
    }, 2000);
  };

  const handleSSO = () => {
    setIsLoading(true);
    
    // Simulate SSO flow
    setTimeout(() => {
      localStorage.setItem("keeps_user_authenticated", "true");
      localStorage.setItem("keeps_user_sso", "true");
      
      toast({
        title: "SSO Login Successful",
        description: "You've been authenticated via Single Sign-On.",
      });
      
      navigate("/");
      setIsLoading(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md card-elevated">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <OptimizedImage
              src={keepsLogo}
              alt="Keeps"
              className="w-16 h-16"
            />
          </div>
          <CardTitle className="text-2xl font-bold text-gradient">
            Welcome to Keeps
          </CardTitle>
          <p className="text-muted-foreground">
            Access your sports investment platform
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Email/Password Login */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 transition-all duration-200 focus:scale-[1.02]"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 transition-all duration-200 focus:scale-[1.02]"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4 text-muted-foreground" />
                  ) : (
                    <Eye className="w-4 h-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
            </div>
            
            <Button 
              className="w-full btn-invest transition-all duration-300 hover:scale-[1.02]"
              onClick={handleEmailLogin}
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          
          {/* Social Login Options */}
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
              onClick={() => handleSocialLogin("Google")}
              disabled={isLoading}
            >
              <Chrome className="w-4 h-4 mr-2" />
              Continue with Google
            </Button>
            
            <Button
              variant="outline"
              className="w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
              onClick={() => handleSocialLogin("Microsoft")}
              disabled={isLoading}
            >
              <div className="w-4 h-4 mr-2 bg-primary rounded-sm" />
              Continue with Microsoft
            </Button>
            
            <Button
              variant="outline"
              className="w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md border-dashed"
              onClick={handleSSO}
              disabled={isLoading}
            >
              <Lock className="w-4 h-4 mr-2" />
              Single Sign-On (SSO)
            </Button>
          </div>
          
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Button variant="link" className="h-auto p-0 text-primary">
                Sign up for early access
              </Button>
            </p>
            <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground">
              Forgot your password?
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}