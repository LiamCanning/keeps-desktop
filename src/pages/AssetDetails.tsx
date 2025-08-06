import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, TrendingUp, Calendar, Shield, Target, DollarSign, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { OptimizedImage } from "@/components/ui/optimized-image";

export default function AssetDetails() {
  const { assetId } = useParams<{ assetId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  
  // Mock asset data
  const asset = {
    name: "Liverpool FC",
    description: "Own a stake in one of the world's most successful football clubs",
    minInvestment: "£500",
    expectedReturn: "8-12%",
    fundingProgress: 85,
    totalFunding: "£50M"
  };

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <Button 
        variant="ghost" 
        onClick={() => navigate("/assets")}
        className="flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Assets
      </Button>
      
      <div className="space-y-2 text-left">
        <h1 className="text-3xl font-bold text-gradient">{asset.name}</h1>
        <p className="text-lg text-muted-foreground">{asset.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <DollarSign className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Min Investment</p>
              <p className="font-semibold text-xl">{asset.minInvestment}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-success/20 rounded-lg">
              <TrendingUp className="w-5 h-5 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Expected Return</p>
              <p className="font-semibold text-xl text-success">{asset.expectedReturn}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-warning/20 rounded-lg">
              <Target className="w-5 h-5 text-warning" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Funding</p>
              <p className="font-semibold text-xl">{asset.totalFunding}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <BarChart3 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Progress</p>
              <p className="font-semibold text-xl">{asset.fundingProgress}%</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">Ready to Invest?</h3>
            <p className="text-muted-foreground">Join thousands of investors backing {asset.name}</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => navigate("/benefits")}>
              View Benefits
            </Button>
            <Button className="btn-invest">
              Invest Now
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}