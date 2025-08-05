import { TrendingUp, TrendingDown, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const sectorData = [
  {
    sector: "Football Clubs",
    performance: "+15.2%",
    trend: "up" as const,
    volume: "£125M",
    deals: 12,
    topAsset: "Liverpool FC",
    growth: "Strong institutional interest"
  },
  {
    sector: "Stadium Development", 
    performance: "+8.7%",
    trend: "up" as const,
    volume: "£89M",
    deals: 8,
    topAsset: "Anfield Expansion",
    growth: "Infrastructure modernization"
  },
  {
    sector: "Formula 1",
    performance: "+22.1%",
    trend: "up" as const,
    volume: "£67M", 
    deals: 5,
    topAsset: "McLaren Racing",
    growth: "Technology transfer value"
  },
  {
    sector: "Golf Courses",
    performance: "-2.3%",
    trend: "down" as const,
    volume: "£34M",
    deals: 7,
    topAsset: "Ryder Cup Rights",
    growth: "Seasonal volatility"
  }
];

export default function SectorPerformance() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-foreground">Sector Performance</h1>
        <p className="text-lg text-muted-foreground">Last 30 Days Market Analysis</p>
      </div>

      <Card className="bg-card border-0 shadow-elegant">
        <CardHeader className="pb-6">
          <CardTitle className="text-2xl font-bold text-card-foreground flex items-center gap-3">
            <BarChart3 className="w-7 h-7 text-primary" />
            Sports Investment Sectors
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sectorData.map((sector, index) => (
              <div key={index} className="p-6 bg-gradient-to-r from-muted/30 to-muted/10 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-6">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                        {sector.sector}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Leading asset: <span className="font-medium">{sector.topAsset}</span>
                      </p>
                    </div>
                    <Badge 
                      variant="outline"
                      className={`flex items-center gap-2 px-4 py-2 font-bold text-base ${
                        sector.trend === "up" 
                          ? "bg-success/10 text-success border-success/30 hover:bg-success/20" 
                          : "bg-destructive/10 text-destructive border-destructive/30 hover:bg-destructive/20"
                      }`}
                    >
                      {sector.trend === "up" ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
                      {sector.performance}
                    </Badge>
                  </div>
                  
                  <div className="text-right space-y-1">
                    <p className="text-2xl font-bold text-card-foreground">{sector.volume}</p>
                    <p className="text-sm text-muted-foreground font-medium">{sector.deals} active deals</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border/30">
                  <p className="text-sm text-muted-foreground">{sector.growth}</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-xs text-muted-foreground">Live data</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-card border-0 shadow-card">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-success mb-2">+11.8%</div>
            <p className="text-sm text-muted-foreground">Average Sector Growth</p>
          </CardContent>
        </Card>
        
        <Card className="bg-card border-0 shadow-card">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">£315M</div>
            <p className="text-sm text-muted-foreground">Total Market Volume</p>
          </CardContent>
        </Card>
        
        <Card className="bg-card border-0 shadow-card">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-card-foreground mb-2">32</div>
            <p className="text-sm text-muted-foreground">Active Opportunities</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}