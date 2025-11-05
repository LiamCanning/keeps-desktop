import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Building2 } from "lucide-react";

export default function OrganisationDashboardRyderCup() {
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
