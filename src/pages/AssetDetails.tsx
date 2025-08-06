import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, TrendingUp, Calendar, Shield, Target, DollarSign, BarChart3, Calculator, Users, Building, Award } from "lucide-react";
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
  
  // Mock asset data based on assetId
  const getAssetData = (id: string) => {
    switch (id) {
      case "liverpool-fc":
        return {
          name: "Liverpool FC",
          description: "Own a stake in one of the world's most successful football clubs with global reach and consistent performance.",
          minInvestment: "£500",
          expectedReturn: "8-12%",
          fundingProgress: 85,
          totalFunding: "£50M",
          category: "Football",
          launchDate: "July 2025",
          logo: "/src/assets/brands/liverpool-fc-logo.png"
        };
      case "mclaren-racing":
        return {
          name: "McLaren Racing",
          description: "Invest in Formula 1 excellence with McLaren's racing team, technology innovation, and global partnerships.",
          minInvestment: "£1,000",
          expectedReturn: "10-15%",
          fundingProgress: 92,
          totalFunding: "£100M",
          category: "Motorsport",
          launchDate: "July 2025",
          logo: "/src/assets/brands/mclaren-logo.png"
        };
      case "ryder-cup":
        return {
          name: "Ryder Cup",
          description: "Debenture investment in golf's most prestigious team tournament with guaranteed returns and exclusive access.",
          minInvestment: "£5,000",
          expectedReturn: "5% + Principal",
          fundingProgress: 78,
          totalFunding: "£25M",
          category: "Golf",
          launchDate: "July 2025",
          logo: "/public/lovable-uploads/c23214c5-7f7c-4f20-9656-38c43a09385e.png"
        };
      default:
        return {
          name: "Asset Not Found",
          description: "The requested asset could not be found.",
          minInvestment: "N/A",
          expectedReturn: "N/A",
          fundingProgress: 0,
          totalFunding: "N/A",
          category: "Unknown",
          launchDate: "N/A",
          logo: ""
        };
    }
  };

  const asset = getAssetData(assetId || "");

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
      
      {/* Hero Section */}
      <Card className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
        <div className="flex items-center gap-6">
          {asset.logo && (
            <img 
              src={asset.logo}
              alt={`${asset.name} logo`}
              className="w-20 h-20 object-contain rounded-lg bg-white/50 p-2"
            />
          )}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold text-gradient">{asset.name}</h1>
              <Badge variant="success" className="text-sm">Live</Badge>
            </div>
            <p className="text-lg text-muted-foreground mb-4">{asset.description}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Building className="w-4 h-4" />
                <span>{asset.category}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Launch: {asset.launchDate}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Investment Terms */}
      <Card className="card-professional">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-3 text-xl">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Calculator className="w-5 h-5 text-primary" />
            </div>
            Investment Terms
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p className="text-sm font-medium text-muted-foreground">Minimum Investment</p>
              </div>
              <p className="text-2xl font-bold text-foreground">{asset.minInvestment}</p>
              <p className="text-xs text-muted-foreground mt-1">Entry threshold for participation</p>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-success/5 to-success/10 rounded-lg border border-success/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <p className="text-sm font-medium text-muted-foreground">Expected Return</p>
              </div>
              <p className="text-2xl font-bold text-success">{asset.expectedReturn}</p>
              <p className="text-xs text-muted-foreground mt-1">Projected annual returns</p>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-warning/5 to-warning/10 rounded-lg border border-warning/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-warning rounded-full"></div>
                <p className="text-sm font-medium text-muted-foreground">Total Funding</p>
              </div>
              <p className="text-2xl font-bold text-foreground">{asset.totalFunding}</p>
              <p className="text-xs text-muted-foreground mt-1">Target fundraising amount</p>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-accent/5 to-accent/10 rounded-lg border border-accent/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <p className="text-sm font-medium text-muted-foreground">Launch Date</p>
              </div>
              <p className="text-2xl font-bold text-foreground">{asset.launchDate}</p>
              <p className="text-xs text-muted-foreground mt-1">Investment opportunity opens</p>
            </div>
          </div>

          {/* Funding Progress */}
          <div className="p-4 bg-gradient-to-r from-muted/20 to-muted/10 rounded-lg border">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-foreground">Funding Progress</h4>
              <Badge variant="outline" className="font-bold">
                {asset.fundingProgress}% Complete
              </Badge>
            </div>
            <div className="space-y-2">
              <div className="progress-bar h-4 bg-muted/30 rounded-full overflow-hidden">
                <div 
                  className="progress-fill h-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-1000 ease-out" 
                  style={{ width: `${asset.fundingProgress}%` }}
                />
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>£0</span>
                <span className="font-medium">
                  £{(parseFloat(asset.totalFunding.replace(/[£M]/g, '')) * (asset.fundingProgress / 100)).toFixed(1)}M raised
                </span>
                <span>{asset.totalFunding}</span>
              </div>
            </div>
          </div>

          {/* Investment Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
            <div className="text-center p-3 bg-muted/10 rounded-lg border">
              <div className="text-lg font-bold text-foreground">{Math.floor(asset.fundingProgress * 50)}</div>
              <div className="text-xs text-muted-foreground">Investors</div>
            </div>
            <div className="text-center p-3 bg-muted/10 rounded-lg border">
              <div className="text-lg font-bold text-foreground">{asset.category}</div>
              <div className="text-xs text-muted-foreground">Sector</div>
            </div>
            <div className="text-center p-3 bg-muted/10 rounded-lg border">
              <div className="text-lg font-bold text-success">Live</div>
              <div className="text-xs text-muted-foreground">Status</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Information Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4 bg-card">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="thesis">Investment Thesis</TabsTrigger>
          <TabsTrigger value="analysis">Analysis</TabsTrigger>
          <TabsTrigger value="risks">Risks & Rewards</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <Card className="card-professional">
            <CardHeader>
              <CardTitle>Investment Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {asset.name} represents a unique opportunity to invest in one of the world's premier sports organisations. 
                With a proven track record of success and global recognition, this investment offers both financial returns 
                and exclusive access to premium experiences.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-accent/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Key Highlights</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Global brand recognition</li>
                    <li>• Proven revenue streams</li>
                    <li>• Strong fan engagement</li>
                    <li>• Premium market position</li>
                  </ul>
                </div>
                <div className="p-4 bg-accent/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Investment Structure</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Equity participation</li>
                    <li>• Dividend potential</li>
                    <li>• Capital appreciation</li>
                    <li>• Exclusive benefits access</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="thesis" className="mt-6">
          <Card className="card-professional">
            <CardHeader>
              <CardTitle>Investment Thesis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Our investment thesis is built on the fundamental belief that premium sports organisations 
                represent undervalued assets with significant growth potential driven by globalisation, 
                digital transformation, and evolving fan engagement models.
              </p>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    Market Leadership
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Established market position with global brand recognition and loyal fanbase providing 
                    stable revenue foundation.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-success" />
                    Growth Potential
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Expanding global markets, digital monetisation opportunities, and strategic partnerships 
                    driving long-term value creation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis" className="mt-6">
          <Card className="card-professional">
            <CardHeader>
              <CardTitle>Financial Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Our comprehensive analysis considers historical performance, market trends, and future projections 
                to provide transparent investment insights.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-success/5 rounded-lg border border-success/20">
                  <h4 className="font-semibold text-success mb-2">Performance Metrics</h4>
                  <ul className="space-y-1 text-sm">
                    <li>Revenue Growth: +15% YoY</li>
                    <li>EBITDA Margin: 22%</li>
                    <li>Global Reach: 150+ countries</li>
                    <li>Fan Engagement: High</li>
                  </ul>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Market Position</h4>
                  <ul className="space-y-1 text-sm">
                    <li>Industry Ranking: Top 5</li>
                    <li>Brand Value: £2.1B+</li>
                    <li>Market Share: Leading</li>
                    <li>Competitive Advantage: Strong</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="risks" className="mt-6">
          <Card className="card-professional">
            <CardHeader>
              <CardTitle>Risk Assessment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                All investments carry inherent risks. We provide transparent risk assessment to help you make 
                informed investment decisions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-warning/5 rounded-lg border border-warning/20">
                  <h4 className="font-semibold text-warning mb-2">Key Risks</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Performance volatility</li>
                    <li>• Regulatory changes</li>
                    <li>• Market competition</li>
                    <li>• Economic downturns</li>
                  </ul>
                </div>
                <div className="p-4 bg-success/5 rounded-lg border border-success/20">
                  <h4 className="font-semibold text-success mb-2">Risk Mitigation</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Diversified revenue streams</li>
                    <li>• Professional management</li>
                    <li>• Strong governance</li>
                    <li>• Regular monitoring</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Action Section */}
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
            <Button 
              className="btn-invest"
              onClick={() => navigate(`/trade/${assetId}`)}
            >
              Invest Now
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}