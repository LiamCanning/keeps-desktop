import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Building2 } from "lucide-react";
import { OrganisationLogin } from "@/components/OrganisationLogin";

export default function OrganisationDashboardRyderCup() {
  const [showLogin, setShowLogin] = useState(() => {
    return !localStorage.getItem("rydercup-admin-logged-in");
  });

  if (showLogin) {
    return (
      <div className="relative min-h-screen bg-background flex items-center justify-center p-0 overflow-hidden -mx-4 sm:-mx-6 -mt-4 sm:-mt-6 -mb-4 sm:-mb-6">
        <div className="hidden md:block absolute inset-0 z-0 pointer-events-none">
          <img
            src="/lovable-uploads/3a5ef8d1-50bb-498a-85ff-ce1f67205e5c.png"
            alt="Ryder Cup background"
            className="w-full h-full object-cover opacity-60"
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-background/50" />
        </div>
        <Card className="w-full max-w-md relative z-20 bg-gradient-to-br from-background/95 to-background/90 backdrop-blur-lg border border-primary/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl w-fit shadow-lg backdrop-blur-sm">
              <OptimizedImage
                src="/lovable-uploads/6954178a-41c6-4084-8e3f-900689bb1803.png"
                alt="Ryder Cup logo"
                className="w-16 h-16 object-contain"
              />
            </div>
            <CardTitle className="text-2xl">Ryder Cup Employee Portal</CardTitle>
            <p className="text-muted-foreground">Access your organisation dashboard and investor analytics</p>
          </CardHeader>
          <CardContent>
            <OrganisationLogin onLoginSuccess={() => setShowLogin(false)} />
            <Button 
              variant="ghost" 
              className="w-full mt-4"
              onClick={() => {
                localStorage.setItem("rydercup-admin-logged-in", "true");
                setShowLogin(false);
              }}
            >
              Continue as Demo User
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 xl:p-8 space-y-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="p-4 bg-white rounded-2xl shadow-lg border">
            <OptimizedImage
              src="/lovable-uploads/6954178a-41c6-4084-8e3f-900689bb1803.png"
              alt="Ryder Cup logo"
              className="w-16 h-16 object-contain"
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gradient">Ryder Cup Dashboard</h1>
            <p className="text-lg text-muted-foreground">Organisation insights and investor metrics</p>
          </div>
        </div>
        <Button 
          variant="outline" 
          onClick={() => {
            localStorage.removeItem("rydercup-admin-logged-in");
            setShowLogin(true);
          }}
        >
          Logout
        </Button>
      </div>

      <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 border border-primary/20">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Building2 className="w-5 h-5" />
            Dashboard Coming Soon
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            The Ryder Cup organisation dashboard is currently being configured. 
            Check back soon for comprehensive analytics and investor insights.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
