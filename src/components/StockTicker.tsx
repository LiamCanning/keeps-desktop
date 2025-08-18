import React from "react";
import { TrendingUp, TrendingDown, Flame, Star, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface TickerItem {
  name: string;
  symbol: string;
  price: string;
  change: string;
  trend: "up" | "down";
  volume?: string;
  badge?: string;
  logo?: string;
}

const tickerData: TickerItem[] = [
  {
    name: "Liverpool FC",
    symbol: "LFC",
    price: "£78M",
    change: "+15.2%",
    trend: "up",
    volume: "97% Funded",
    badge: "HOT",
    logo: "/lovable-uploads/c0f719b9-a198-429d-b736-b4081a14de86.png"
  },
  {
    name: "McLaren F1",
    symbol: "MCL",
    price: "£92M",
    change: "+22.1%",
    trend: "up",
    volume: "92% Funded",
    badge: "TRENDING",
    logo: "/lovable-uploads/10864fdf-2d7a-4243-a715-724e5ddfb866.png"
  },
  {
    name: "Ryder Cup",
    symbol: "RYD",
    price: "£45M",
    change: "+12.8%",
    trend: "up",
    volume: "90% Funded",
    badge: "LIVE",
    logo: "/lovable-uploads/89e0f872-2b6e-443e-a0d7-bcb3dead15dd.png"
  },
  {
    name: "Football Sector",
    symbol: "FB",
    price: "£125M",
    change: "+15.2%",
    trend: "up",
    volume: "12 Deals",
    badge: "SECTOR"
  },
  {
    name: "F1 Racing",
    symbol: "F1",
    price: "£67M",
    change: "+22.1%",
    trend: "up",
    volume: "5 Deals",
    badge: "LEADER"
  },
  {
    name: "Golf Events",
    symbol: "GLF",
    price: "£89M",
    change: "+12.8%",
    trend: "up",
    volume: "8 Deals",
    badge: "RISING"
  },
  {
    name: "Ohio State",
    symbol: "OSU",
    price: "£80M",
    change: "Coming Soon",
    trend: "up",
    volume: "Opening",
    badge: "NEW"
  },
  {
    name: "Cardiff City",
    symbol: "CFC",
    price: "£4M",
    change: "Coming Soon",
    trend: "up",
    volume: "Opening",
    badge: "NEW"
  }
];

const getBadgeVariant = (badge: string) => {
  switch (badge) {
    case "HOT":
      return "success";
    case "TRENDING":
      return "warning";
    case "LIVE":
      return "success";
    case "NEW":
      return "secondary";
    default:
      return "outline";
  }
};

const getBadgeIcon = (badge: string) => {
  switch (badge) {
    case "HOT":
      return <Flame className="w-3 h-3" />;
    case "TRENDING":
      return <TrendingUp className="w-3 h-3" />;
    case "LIVE":
      return <Zap className="w-3 h-3" />;
    case "NEW":
      return <Star className="w-3 h-3" />;
    default:
      return null;
  }
};

export const StockTicker: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-muted/40 via-muted/30 to-muted/40 border-y border-border/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
      
      {/* Ticker content */}
      <div className="py-4 relative z-10">
        <div className="flex items-center animate-scroll-left">
          {/* Duplicate items for seamless loop */}
          {[...tickerData, ...tickerData].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-6 whitespace-nowrap min-w-max border-r border-border/30 last:border-r-0"
            >
              {/* Logo if available */}
              {item.logo && (
                <div className="w-8 h-8 rounded-full bg-card/80 p-1.5 flex items-center justify-center border border-border/50">
                  <img 
                    src={item.logo} 
                    alt={item.name}
                    className="w-5 h-5 object-contain"
                  />
                </div>
              )}
              
              {/* Asset info */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-foreground font-semibold text-sm">
                    {item.symbol}
                  </span>
                  <span className="text-muted-foreground text-xs">
                    {item.name}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-foreground font-bold text-sm">
                    {item.price}
                  </span>
                  
                  <div className={`flex items-center gap-1 text-xs font-medium ${
                    item.trend === "up" ? "text-success" : "text-destructive"
                  }`}>
                    {item.trend === "up" ? (
                      <TrendingUp className="w-3 h-3" />
                    ) : (
                      <TrendingDown className="w-3 h-3" />
                    )}
                    {item.change}
                  </div>
                </div>
                
                {item.volume && (
                  <span className="text-muted-foreground text-xs">
                    {item.volume}
                  </span>
                )}
                
                {item.badge && (
                  <Badge 
                    variant={getBadgeVariant(item.badge)} 
                    className="text-xs px-2 py-0.5 h-auto flex items-center gap-1"
                  >
                    {getBadgeIcon(item.badge)}
                    {item.badge}
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StockTicker;