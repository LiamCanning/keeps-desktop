import { useState } from "react";
import { Book, TrendingUp, FileText, PieChart, Banknote, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface DealType {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  risks: string[];
  examples: string[];
  minInvestment: string;
  expectedReturns: string;
  timeframe: string;
}

const dealTypes: DealType[] = [
  {
    id: "equity",
    title: "Equity Investments",
    subtitle: "Direct ownership stakes in sports organisations",
    icon: <TrendingUp className="w-6 h-6" />,
    description: "Equity investments provide direct ownership stakes in sports organisations, giving investors voting rights and potential dividend distributions based on the organisation's performance and profitability.",
    features: [
      "Direct ownership and voting rights",
      "Potential dividend distributions",
      "Capital appreciation opportunities",
      "Access to exclusive benefits and experiences",
      "Long-term wealth building potential"
    ],
    risks: [
      "Market volatility and price fluctuations",
      "Performance-dependent returns",
      "Limited liquidity in secondary markets",
      "Regulatory changes affecting sports investments"
    ],
    examples: [
      "Liverpool FC equity shares",
      "Manchester United ownership stakes",
      "Premier League club investments"
    ],
    minInvestment: "£500",
    expectedReturns: "8-15% annually",
    timeframe: "3-10 years"
  },
  {
    id: "isa",
    title: "Income Sharing Agreements",
    subtitle: "Revenue-based returns from sports organisations",
    icon: <PieChart className="w-6 h-6" />,
    description: "Income Sharing Agreements (ISAs) allow investors to receive a percentage of an organisation's revenue streams, providing returns based on performance, sponsorship deals, and commercial success.",
    features: [
      "Revenue-based returns",
      "Performance-linked payments",
      "Diversified income streams",
      "Transparent reporting mechanisms",
      "Regular distribution payments"
    ],
    risks: [
      "Revenue volatility based on performance",
      "Seasonal fluctuations in sports income",
      "Dependency on sponsorship renewals",
      "Economic downturns affecting commercial deals"
    ],
    examples: [
      "McLaren F1 racing revenue sharing",
      "Formula 1 constructor performance payments",
      "Motorsport commercial partnerships"
    ],
    minInvestment: "£1,000",
    expectedReturns: "10-20% annually",
    timeframe: "2-5 years"
  },
  {
    id: "debenture",
    title: "Debenture Programmes",
    subtitle: "Fixed-term secured investments with guaranteed returns",
    icon: <FileText className="w-6 h-6" />,
    description: "Debenture programmes offer secured, fixed-term investments that provide guaranteed returns plus exclusive access to events and facilities. These are typically backed by the organisation's assets and future revenue streams.",
    features: [
      "Guaranteed fixed returns",
      "Asset-backed security",
      "Exclusive access rights",
      "Priority booking privileges",
      "Transferable ownership rights"
    ],
    risks: [
      "Fixed returns may lag inflation",
      "Limited upside potential",
      "Organisation default risk",
      "Interest rate sensitivity"
    ],
    examples: [
      "Ryder Cup tournament debentures",
      "Wimbledon Centre Court debentures",
      "Golf tournament hospitality rights"
    ],
    minInvestment: "£5,000",
    expectedReturns: "5-8% plus principal",
    timeframe: "5-25 years"
  },
  {
    id: "asset-backed",
    title: "Asset-Backed Deals",
    subtitle: "Investments secured by tangible sports assets",
    icon: <Banknote className="w-6 h-6" />,
    description: "Asset-backed deals are secured by tangible assets such as stadiums, training facilities, or valuable sports memorabilia. These investments offer security through physical asset backing while providing exposure to sports market growth.",
    features: [
      "Tangible asset security",
      "Lower risk profile",
      "Stable income generation",
      "Asset appreciation potential",
      "Professional asset management"
    ],
    risks: [
      "Property market fluctuations",
      "Maintenance and operational costs",
      "Regulatory and planning restrictions",
      "Illiquidity of physical assets"
    ],
    examples: [
      "Stadium naming rights investments",
      "Training facility developments",
      "Sports infrastructure projects"
    ],
    minInvestment: "£2,500",
    expectedReturns: "6-12% annually",
    timeframe: "5-15 years"
  }
];

export default function KnowledgeBase() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredDeals = dealTypes.filter(deal => {
    const matchesSearch = deal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         deal.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === "all" || deal.id === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="space-y-2 text-left">
        <h1 className="text-3xl font-bold text-gradient">Knowledge Base</h1>
        <p className="text-lg text-muted-foreground">Understanding different types of sports investment deals</p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Book className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Deal Types</p>
              <p className="font-semibold text-xl">4</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-success/20 rounded-lg">
              <TrendingUp className="w-5 h-5 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Min Investment</p>
              <p className="font-semibold text-xl">£500</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-warning/20 rounded-lg">
              <PieChart className="w-5 h-5 text-warning" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Expected Returns</p>
              <p className="font-semibold text-xl">5-20%</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Time Horizons</p>
              <p className="font-semibold text-xl">2-25 years</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Search */}
      <Card className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search deal types, features, or examples..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </Card>

      {/* Deal Types Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:grid-cols-5">
          <TabsTrigger value="all">All Types</TabsTrigger>
          <TabsTrigger value="equity">Equity</TabsTrigger>
          <TabsTrigger value="isa">ISAs</TabsTrigger>
          <TabsTrigger value="debenture">Debentures</TabsTrigger>
          <TabsTrigger value="asset-backed">Asset-Backed</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-left">
                {activeTab === "all" ? "All Deal Types" : dealTypes.find(d => d.id === activeTab)?.title || "Deal Types"}
              </h2>
              <Badge variant="secondary">
                {filteredDeals.length} Available
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredDeals.map((deal) => (
                <Card key={deal.id} className="card-professional">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/20 rounded-lg">
                        {deal.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-left">{deal.title}</CardTitle>
                        <p className="text-muted-foreground text-left mt-1">{deal.subtitle}</p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-sm text-muted-foreground leading-relaxed text-left">
                      {deal.description}
                    </p>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-4 p-4 bg-accent/20 rounded-lg">
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">Min Investment</p>
                        <p className="font-semibold text-sm">{deal.minInvestment}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">Expected Returns</p>
                        <p className="font-semibold text-sm text-success">{deal.expectedReturns}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">Timeframe</p>
                        <p className="font-semibold text-sm">{deal.timeframe}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-3 text-left">Key Features</h4>
                      <div className="space-y-2">
                        {deal.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-2 text-sm text-left">
                            <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Risks */}
                    <div>
                      <h4 className="font-semibold mb-3 text-left">Key Risks</h4>
                      <div className="space-y-2">
                        {deal.risks.map((risk, index) => (
                          <div key={index} className="flex items-start gap-2 text-sm text-left">
                            <div className="w-1.5 h-1.5 bg-warning rounded-full mt-2 flex-shrink-0"></div>
                            <span>{risk}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Examples */}
                    <div>
                      <h4 className="font-semibold mb-3 text-left">Examples</h4>
                      <div className="flex flex-wrap gap-2">
                        {deal.examples.map((example, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {example}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}