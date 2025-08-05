import { useState } from "react";
import { TrendingUp, TrendingDown, Search, Filter, Clock, Users, DollarSign, ArrowUpDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface MarketListing {
  id: string;
  asset: string;
  logo: string;
  seller: string;
  quantity: number;
  pricePerUnit: string;
  totalPrice: string;
  processingFee: string;
  finalPrice: string;
  priceChange: number;
  expires: string;
  type: "buy" | "sell";
}

const marketListings: MarketListing[] = [
  {
    id: "1",
    asset: "Liverpool FC",
    logo: "/lovable-uploads/001420e5-847e-4145-addb-8bec6a73c63e.png",
    seller: "JohnD",
    quantity: 5,
    pricePerUnit: "£550",
    totalPrice: "£2,750",
    processingFee: "£68.75",
    finalPrice: "£2,818.75",
    priceChange: 10.0,
    expires: "2025-08-01",
    type: "buy"
  },
  {
    id: "2",
    asset: "Liverpool FC", 
    logo: "/lovable-uploads/001420e5-847e-4145-addb-8bec6a73c63e.png",
    seller: "SarahM",
    quantity: 10,
    pricePerUnit: "£525",
    totalPrice: "£5,250",
    processingFee: "£131.25",
    finalPrice: "£5,381.25",
    priceChange: 5.0,
    expires: "2025-08-05",
    type: "buy"
  },
  {
    id: "3",
    asset: "McLaren Racing",
    logo: "/lovable-uploads/e0b86990-9fbb-421a-b689-b9e7ac420908.png",
    seller: "RacingFan22",
    quantity: 20,
    pricePerUnit: "£1,200",
    totalPrice: "£24,000",
    processingFee: "£600",
    finalPrice: "£24,600",
    priceChange: 20.0,
    expires: "2025-08-10",
    type: "buy"
  },
  {
    id: "4",
    asset: "McLaren Racing",
    logo: "/lovable-uploads/e0b86990-9fbb-421a-b689-b9e7ac420908.png",
    seller: "F1Investor", 
    quantity: 15,
    pricePerUnit: "£1,180",
    totalPrice: "£17,700",
    processingFee: "£442.50",
    finalPrice: "£18,142.50",
    priceChange: 18.0,
    expires: "2025-08-12",
    type: "buy"
  },
  {
    id: "5",
    asset: "Ryder Cup",
    logo: "/lovable-uploads/1075da4a-349e-420a-b050-72aad7295b63.png",
    seller: "GolfPro",
    quantity: 1,
    pricePerUnit: "£5,935",
    totalPrice: "£5,935",
    processingFee: "£148.38",
    finalPrice: "£6,083.38",
    priceChange: 18.7,
    expires: "2025-08-12",
    type: "buy"
  },
  {
    id: "6",
    asset: "Ryder Cup",
    logo: "/lovable-uploads/1075da4a-349e-420a-b050-72aad7295b63.png",
    seller: "GolfFan88",
    quantity: 2,
    pricePerUnit: "£5,850",
    totalPrice: "£11,700",
    processingFee: "£292.50",
    finalPrice: "£11,992.50",
    priceChange: 17.0,
    expires: "2025-08-15",
    type: "buy"
  }
];

function MarketCard({ listing }: { listing: MarketListing }) {
  const isPositive = listing.priceChange >= 0;

  return (
    <Card className="card-professional">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={listing.logo}
              alt={listing.asset}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <CardTitle className="text-lg text-card-foreground">{listing.asset}</CardTitle>
              <p className="text-sm text-muted-foreground">Seller: {listing.seller}</p>
            </div>
          </div>
          <Badge variant={isPositive ? "success" : "destructive"} className="flex items-center gap-1">
            {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {isPositive ? "+" : ""}{listing.priceChange}%
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Quantity</p>
            <p className="font-semibold text-card-foreground">{listing.quantity}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Price per unit</p>
            <p className="font-semibold text-card-foreground">{listing.pricePerUnit}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Subtotal</p>
            <p className="font-semibold text-card-foreground">{listing.totalPrice}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Processing Fee (2.5%)</p>
            <p className="font-semibold text-card-foreground">{listing.processingFee}</p>
          </div>
        </div>
        
        <div className="border-t pt-3">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-card-foreground">Total price:</span>
            <span className="font-bold text-lg text-primary">{listing.finalPrice}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Expires: {new Date(listing.expires).toLocaleDateString('en-GB')}</span>
          </div>
        </div>
        
        <Button className="w-full btn-invest">
          Buy Now
        </Button>
      </CardContent>
    </Card>
  );
}

export default function Market() {
  const [activeTab, setActiveTab] = useState("market");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("price-low");

  const filteredListings = marketListings.filter(listing =>
    listing.asset.toLowerCase().includes(searchTerm.toLowerCase()) ||
    listing.seller.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Secondary Market</h1>
        <p className="text-lg text-foreground/80">Buy and sell sports assets</p>
      </div>

      {/* Market Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Market Volume</p>
              <p className="font-semibold text-xl text-card-foreground">£1.2M</p>
            </div>
          </div>
        </Card>
        
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-success/20 rounded-lg">
              <Users className="w-5 h-5 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Listings</p>
              <p className="font-semibold text-xl text-card-foreground">{marketListings.length}</p>
            </div>
          </div>
        </Card>
        
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-warning/20 rounded-lg">
              <DollarSign className="w-5 h-5 text-warning" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Avg Price Change</p>
              <p className="font-semibold text-xl text-card-foreground">+14.8%</p>
            </div>
          </div>
        </Card>
        
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Avg Settlement</p>
              <p className="font-semibold text-xl text-card-foreground">2.5 days</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="card-professional p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search assets or sellers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <ArrowUpDown className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="change-high">Best Performance</SelectItem>
              <SelectItem value="expires-soon">Expires Soon</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Market Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4 bg-card">
          <TabsTrigger value="market" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Market</TabsTrigger>
          <TabsTrigger value="list-asset" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">List Asset</TabsTrigger>
          <TabsTrigger value="analysis" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Analysis</TabsTrigger>
          <TabsTrigger value="watchlist" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Watchlist</TabsTrigger>
        </TabsList>

        <TabsContent value="market" className="mt-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-foreground">All Available Assets</h2>
              <Badge variant="secondary">
                {filteredListings.length} Listings
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredListings.map((listing) => (
                <MarketCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="list-asset" className="mt-6">
          <Card className="card-professional p-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-card-foreground">List Your Assets</h3>
                <p className="text-muted-foreground">Sell your sports investments to other investors on the secondary market.</p>
              </div>
              <Button className="btn-invest">List Asset for Sale</Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="analysis" className="mt-6">
          <Card className="card-professional p-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8 text-success" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-card-foreground">Market Analysis</h3>
                <p className="text-muted-foreground">Deep dive into market trends, price movements, and investment insights.</p>
              </div>
              <Button variant="outline">View Analysis</Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="watchlist" className="mt-6">
          <Card className="card-professional p-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-warning/20 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-warning" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-card-foreground">Your Watchlist</h3>
                <p className="text-muted-foreground">Track assets you're interested in and get notified of price changes.</p>
              </div>
              <Button variant="outline">Manage Watchlist</Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}