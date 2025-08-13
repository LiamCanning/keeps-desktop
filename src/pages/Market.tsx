import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TrendingUp, TrendingDown, Search, Filter, Clock, Users, DollarSign, ArrowUpDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LogoImage } from "@/components/ui/logo-image";
import mclarenLogo from "@/assets/logos/mclaren-racing-logo.png";
import ryderLogo from "@/assets/logos/ryder-cup-logo.png";
import PageHeader from "@/components/PageHeader";

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
    logo: "/lovable-uploads/c0f719b9-a198-429d-b736-b4081a14de86.png",
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
    logo: "/lovable-uploads/c0f719b9-a198-429d-b736-b4081a14de86.png",
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
    logo: mclarenLogo,
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
    logo: mclarenLogo,
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
    logo: ryderLogo,
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
    logo: ryderLogo,
    seller: "GolfFan88",
    quantity: 2,
    pricePerUnit: "£5,850",
    totalPrice: "£11,700",
    processingFee: "£292.50",
    finalPrice: "£11,992.50",
    priceChange: 17.0,
    expires: "2025-08-15",
    type: "buy"
  },
  {
    id: "7",
    asset: "Southern Brave",
    logo: "/lovable-uploads/3c190904-fab4-4a2c-896f-f8e2878d832a.png",
    seller: "CricketFan92",
    quantity: 3,
    pricePerUnit: "£1,750",
    totalPrice: "£5,250",
    processingFee: "£131.25",
    finalPrice: "£5,381.25",
    priceChange: 16.7,
    expires: "2025-08-18",
    type: "buy"
  },
  {
    id: "8",
    asset: "Southern Brave",
    logo: "/lovable-uploads/3c190904-fab4-4a2c-896f-f8e2878d832a.png",
    seller: "HundredFan",
    quantity: 5,
    pricePerUnit: "£1,680",
    totalPrice: "£8,400",
    processingFee: "£210.00",
    finalPrice: "£8,610.00",
    priceChange: 12.0,
    expires: "2025-08-20",
    type: "buy"
  },
  {
    id: "9",
    asset: "Southern Brave",
    logo: "/lovable-uploads/3c190904-fab4-4a2c-896f-f8e2878d832a.png",
    seller: "CricketInvestor",
    quantity: 1,
    pricePerUnit: "£1,800",
    totalPrice: "£1,800",
    processingFee: "£45.00",
    finalPrice: "£1,845.00",
    priceChange: 20.0,
    expires: "2025-08-22",
    type: "buy"
  }
];

function MarketCard({ listing }: { listing: MarketListing }) {
  const navigate = useNavigate();
  const isPositive = listing.priceChange >= 0;

  return (
    <Card className="card-professional">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <LogoImage 
              src={listing.logo}
              alt={listing.asset}
              size="md"
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
            <span className="font-bold text-lg text-green-700">{listing.finalPrice}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Expires: {new Date(listing.expires).toLocaleDateString('en-GB')}</span>
          </div>
        </div>
        
        <Button 
          className="w-full btn-invest min-h-[44px]"
          onClick={() => {
            const assetId = listing.asset.toLowerCase().replace(/\s+/g, '-');
            navigate(`/trade/${assetId}`, { state: { listing } });
          }}
        >
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

  const filteredListings = marketListings
    .filter(listing =>
      listing.asset.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.seller.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-high":
          return parseFloat(b.finalPrice.replace(/[£,]/g, '')) - parseFloat(a.finalPrice.replace(/[£,]/g, ''));
        case "price-low":
          return parseFloat(a.finalPrice.replace(/[£,]/g, '')) - parseFloat(b.finalPrice.replace(/[£,]/g, ''));
        case "change-high":
          return b.priceChange - a.priceChange;
        case "expires-soon":
          return new Date(a.expires).getTime() - new Date(b.expires).getTime();
        default:
          return 0;
      }
    });

  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <PageHeader
          title="Secondary Market"
          subtitle="Buy and sell sports assets"
        />
        <Button 
          className="btn-invest text-base sm:text-lg px-4 sm:px-6 py-3 h-auto min-h-[44px] w-full sm:w-auto"
          onClick={() => window.location.href = '/list-asset'}
        >
          List Asset
        </Button>
      </div>

      {/* Market Analytics Banner */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-teal-50 to-blue-50 p-6 border border-teal-200">
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-teal-600 mb-2">Market Analytics</h2>
            <p className="text-gray-600">Real-time trading insights</p>
          </div>
          <div className="flex items-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800">£1.2M</div>
              <div className="text-sm text-gray-600">Market Volume</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">6</div>
              <div className="text-sm text-gray-600">Active Listings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">+14.8%</div>
              <div className="text-sm text-gray-600">Avg Price Change</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">2.5 days</div>
              <div className="text-sm text-gray-600">Avg Settlement</div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 right-6 flex gap-2">
          <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="card-professional p-4">
        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search assets or sellers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-11 text-base"
            />
          </div>
          <div className="flex gap-3">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-48 h-11">
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
            <Select value="" onValueChange={() => {}}>
              <SelectTrigger className="w-full sm:w-48 h-11">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by Sport" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="football">Football</SelectItem>
                <SelectItem value="formula-one">Formula One</SelectItem>
                <SelectItem value="golf">Golf</SelectItem>
                <SelectItem value="cricket">Cricket</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Market Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        {/* Mobile tab selector */}
        <div className="md:hidden mb-3">
          <Select value={activeTab} onValueChange={setActiveTab}>
            <SelectTrigger aria-label="Select market section">
              <SelectValue placeholder="Select section" />
            </SelectTrigger>
            <SelectContent className="z-50">
              <SelectItem value="market">Market</SelectItem>
              <SelectItem value="analysis">Analysis</SelectItem>
              <SelectItem value="watchlist">Watchlist</SelectItem>
              <SelectItem value="funded">Funded</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <TabsList className="hidden md:grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 shadow-[var(--shadow-elegant)] rounded-md">
          <TabsTrigger value="market" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Market</TabsTrigger>
          <TabsTrigger value="analysis" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Analysis</TabsTrigger>
          <TabsTrigger value="watchlist" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Watchlist</TabsTrigger>
          <TabsTrigger value="funded" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Funded</TabsTrigger>
        </TabsList>

        <TabsContent value="market" className="mt-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-foreground text-left">All Available Assets</h2>
              <Badge variant="secondary">
                {filteredListings.length} Listings
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 items-start">
              {filteredListings.map((listing) => (
                <MarketCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="analysis" className="mt-6">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">Secondary Market Analysis</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="card-professional p-6">
                <h3 className="font-semibold mb-4 text-card-foreground">Market Trends</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Liverpool FC</span>
                    <Badge variant="success">+12% this month</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">McLaren Racing</span>
                    <Badge variant="success">+18% this month</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Ryder Cup</span>
                    <Badge variant="success">+15% this month</Badge>
                  </div>
                </div>
              </Card>
              
              <Card className="card-professional p-6">
                <h3 className="font-semibold mb-4 text-card-foreground">Liquidity Insights</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Average Settlement Time</p>
                    <p className="text-lg font-semibold text-card-foreground">2.5 days</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Market Depth</p>
                    <p className="text-lg font-semibold text-card-foreground">£1.2M</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Success Rate</p>
                    <p className="text-lg font-semibold text-success">94%</p>
                  </div>
                </div>
              </Card>
              
              <Card className="card-professional p-6">
                <h3 className="font-semibold mb-4 text-card-foreground">Price Analysis</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Best Performing Asset</p>
                    <p className="text-lg font-semibold text-card-foreground">McLaren Racing</p>
                    <Badge variant="success">+20% premium</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Market Volatility</p>
                    <p className="text-lg font-semibold text-warning">Medium</p>
                  </div>
                </div>
              </Card>
            </div>
            
            <Card className="card-professional p-6">
              <h3 className="font-semibold mb-4 text-card-foreground">AI Market Intelligence</h3>
              <div className="p-4 bg-muted/20 rounded-lg">
                <p className="text-sm text-card-foreground leading-relaxed">
                  Current market conditions show strong demand for premium sports assets. McLaren Racing continues to outperform 
                  with 20% premium over initial offering price, driven by strong F1 performance and exclusive benefits. Liverpool FC 
                  maintains steady growth at 12% premium, whilst Ryder Cup debentures are showing increased interest ahead of the 
                  2025 tournament. Secondary market liquidity is excellent with 94% settlement success rate.
                </p>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="watchlist" className="mt-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-foreground">Your Watchlist</h2>
              <Badge variant="secondary">3 Assets</Badge>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              <Card className="card-professional">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <LogoImage 
                      src="/lovable-uploads/fcb5a91d-487c-486c-a923-d4255d9db988.png"
                      alt="Ohio State Buckeyes"
                      size="md"
                    />
                    <div>
                      <CardTitle className="text-lg text-card-foreground">Ohio State Buckeyes</CardTitle>
                      <p className="text-sm text-muted-foreground">US College Football</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Launching</span>
                      <span className="font-bold text-lg">Q4 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Expected Returns</span>
                      <span className="font-bold text-lg text-success">12-18%</span>
                    </div>
                    <Button className="w-full btn-invest mt-4">
                      Add to Watchlist
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-professional">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <LogoImage 
                      src="/lovable-uploads/32e5079c-7a6a-4a36-9545-a4faa7411f89.png"
                      alt="Cardiff City FC"
                      size="md"
                    />
                    <div>
                      <CardTitle className="text-lg text-card-foreground">Cardiff City FC</CardTitle>
                      <p className="text-sm text-muted-foreground">EFL Championship</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Launching</span>
                      <span className="font-bold text-lg">Early 2026</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Expected Returns</span>
                      <span className="font-bold text-lg text-success">8-14%</span>
                    </div>
                    <Button className="w-full btn-invest mt-4">
                      Add to Watchlist
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-professional">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <LogoImage 
                      src="/lovable-uploads/6e897916-7050-40ca-a142-0d028232a4b7.png"
                      alt="Hexagon Fan Team"
                      size="md"
                    />
                     <div>
                       <CardTitle className="text-lg text-card-foreground">Hexagon Fan Team</CardTitle>
                       <p className="text-sm text-muted-foreground">Padel Tournament</p>
                     </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Launching</span>
                      <span className="font-bold text-lg">Mid 2026</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Expected Returns</span>
                      <span className="font-bold text-lg text-success">10-16%</span>
                    </div>
                    <Button className="w-full btn-invest mt-4">
                      Add to Watchlist
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="funded" className="mt-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-foreground">Funded Assets</h2>
              <Badge variant="secondary">1 Asset</Badge>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              <Card className="card-professional">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <LogoImage 
                      src="/lovable-uploads/3c190904-fab4-4a2c-896f-f8e2878d832a.png"
                      alt="Southern Brave"
                      size="md"
                    />
                    <div>
                      <CardTitle className="text-lg text-card-foreground">Southern Brave</CardTitle>
                      <p className="text-sm text-muted-foreground">The Hundred Cricket</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status</span>
                      <Badge variant="secondary">100% Funded</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Funding</span>
                      <span className="font-bold text-lg">£5M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Expected Returns</span>
                      <span className="font-bold text-lg text-success">3-5% dividends</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Available via</span>
                      <span className="font-bold text-lg">Secondary Market</span>
                    </div>
                    <Button 
                      className="w-full btn-invest mt-4"
                      onClick={() => window.location.href = '/market'}
                    >
                      View Secondary Market
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

      </Tabs>
      </div>
    );
}