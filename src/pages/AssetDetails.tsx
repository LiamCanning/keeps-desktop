import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, TrendingUp, Calendar, Shield, Target, DollarSign, BarChart3, Calculator, Users, Building, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { EarlyAccessModal } from "@/components/EarlyAccessModal";

export default function AssetDetails() {
  const { assetId } = useParams<{ assetId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [showEarlyAccess, setShowEarlyAccess] = useState(false);

  // Redirect old slug to new route
  if (assetId === "mclaren-f1") {
    navigate("/assets/mclaren-racing", { replace: true });
    return null;
  }
  
  // Mock asset data based on assetId
  const getAssetData = (id: string) => {
    switch (id) {
      case "liverpool-fc":
        return {
          name: "Liverpool FC",
          description: "Fund the expansion of Anfield stadium capacity from 54,000 to 75,000 seats, creating additional premium hospitality and enhanced fan experiences.",
          minInvestment: "£500",
          expectedReturn: "4-8%",
          fundingProgress: 75,
          totalFunding: "£40M",
          category: "Equity",
          launchDate: "July 2025",
          logo: "/lovable-uploads/c0f719b9-a198-429d-b736-b4081a14de86.png",
          investmentThesis: "Liverpool FC represents a unique opportunity to invest in Premier League excellence through direct equity participation. With their recent Premier League title victory and global fanbase of 580 million supporters, Liverpool offers unparalleled brand value. The club's £600M Adidas kit deal starting 2025-26 season demonstrates commercial strength, while consistent Champions League qualification (80% rate over past decade) ensures European revenue. The Anfield expansion project will generate additional matchday revenue of £15-20M annually through premium seating and hospitality packages. Revenue diversification through broadcasting rights (£150M+ annually), commercial partnerships, and player trading provides multiple income streams with proven 15% annual player asset appreciation.",
          detailedAnalysis: "Liverpool's 2024-25 Premier League title success drives commercial gains in a 'virtuous cycle' of performance and revenue growth. The £600M Adidas deal represents a £30M annual boost compared to their previous Nike partnership, with total revenue reaching £614M in 2024 (record high). Champions League qualification generates £50-80M annually, while the club's player trading model shows consistent profitability - key signings like Salah (£37M acquisition) now valued at £80M+. The Premier League's broadcast deal guarantees minimum £100M annually regardless of position, whilst Liverpool's global brand strength in Asian markets drives merchandise and sponsorship premiums. Stadium naming rights and commercial partnerships offer additional £20-30M growth potential."
        };
      case "mclaren-racing":
        return {
          name: "McLaren Racing",
          description: "£50,000,000 raise via Income Sharing Agreement factored against commercial revenues over 10 years. 7% annual return providing direct participation in F1's commercial success.",
          minInvestment: "£2,000",
          expectedReturn: "7%",
          fundingProgress: 70,
          totalFunding: "£50M",
          category: "Income Sharing Agreement",
          launchDate: "July 2025",
          logo: "/lovable-uploads/10864fdf-2d7a-4243-a715-724e5ddfb866.png",
          investmentThesis: "McLaren Racing offers exposure to Formula 1's unprecedented commercial success through structured income sharing agreement. Following their 2024 Constructors Championship victory (first since 1998), McLaren has reached record commercial heights with 53 active partnerships and industry-leading revenue generation. F1's global viewership of 1.5 billion fans, combined with McLaren's resurgent performance under Lando Norris and Oscar Piastri, creates compelling investment returns. The team's 'most commercial revenue in F1 history' achievement demonstrates exceptional monetisation capability. Income sharing participants receive 7% annual returns from prize money, sponsorship deals, technology licensing, and McLaren's automotive partnerships, providing exposure to F1's $3bn annual revenue pool.",
          detailedAnalysis: "McLaren's 2024 championship victory validates their commercial strategy, generating record revenue of £253M (+18% YoY). Prize money distribution reached £95M from P4 Constructors finish, whilst 2025 pre-season favourite status commands premium sponsorship rates. The team's 53 commercial partnerships include major brands like Google, Velas, and McLaren Automotive, generating £180M+ commercial revenue annually. Technology licensing to automotive sector provides stable £15M baseline. F1's cost cap regulations ensure competitive sustainability whilst McLaren's operational efficiency (95% cost cap utilisation) maximises performance per dollar. The team's Mercedes power unit partnership through 2030 guarantees competitive machinery, whilst young driver lineup (Norris/Piastri) provides long-term stability for commercial partnerships."
        };
      case "ryder-cup":
        return {
          name: "Ryder Cup",
          description: "Secured debenture investment in golf's most prestigious biennial team tournament, providing guaranteed annual returns plus exclusive tournament access and hospitality rights.",
          minInvestment: "£1,000",
          expectedReturn: "5% + Principal",
          fundingProgress: 90,
          totalFunding: "£42.5M",
          category: "Debentures",
          launchDate: "July 2025",
          logo: "/lovable-uploads/89e0f872-2b6e-443e-a0d7-bcb3dead15dd.png",
          investmentThesis: "Ryder Cup debentures offer secured investment in golf's most prestigious biennial tournament following record-breaking 2023 Rome success. The 2023 event generated record €262M economic activity (11% increase vs 2018 Paris) with 271,000 attendees from 100 countries, demonstrating sustained global demand. Debentures provide 5% annual coupon payments plus full principal repayment after 10-year term, backed by tournament's established revenue model including global broadcasting rights (€200M+ per event), corporate hospitality (€50M+ per event), and premium experiences. The secondary debenture market shows consistent 15-20% premiums to face value, whilst 2025 Bethpage Black venue commands premium US market positioning.",
          detailedAnalysis: "The 2023 Ryder Cup's record €262M economic impact validates the tournament's commercial strength, with sponsorship revenue increasing 153% during current cycle. Corporate hospitality packages command €2,000-5,000 per person whilst premium experiences sell at substantial premiums. The biennial format creates natural scarcity value, with alternating European/US venues ensuring global market participation. Golf's affluent demographic provides stable demand base - average household income of attendees exceeds €100K with high discretionary spending power. Tournament assets secure debenture investments with 100% historical repayment rate. The 2025 Bethpage Black venue represents premium US golf positioning, whilst European 2027 venue selection offers additional appreciation potential through location premium."
        };
      case "hexagon-fan-team":
        return {
          name: "Hexagon Fan Team",
          description: "£1,250,000 round for 75% equity in Hexagon Fan Team - innovative fan engagement platform with global tournament integration and revenue sharing opportunities.",
          minInvestment: "£500",
          expectedReturn: "20%+",
          fundingProgress: 0,
          totalFunding: "£1.25M",
          category: "Equity",
          launchDate: "September 2025",
          status: "coming-soon",
          logo: "/lovable-uploads/6e897916-7050-40ca-a142-0d028232a4b7.png",
          investmentThesis: "Hexagon Fan Team represents the future of sports fan engagement through blockchain-powered community ownership and revenue sharing. The platform enables fans to collectively own stakes in tournament outcomes, player partnerships, and merchandise revenues. With 75% equity available for £1.25M, early investors gain significant ownership in a revolutionary sports technology platform. The Hexagon ecosystem integrates with major tournaments worldwide, creating multiple revenue streams from fan participation, NFT trading, prediction markets, and exclusive content access.",
          detailedAnalysis: "The global sports betting market exceeds £200bn annually while fan engagement platforms show 300%+ growth rates. Hexagon Fan Team's unique model combines legal sports investment with gamified fan experiences, targeting the £50bn global sports memorabilia and fan engagement market. Revenue projections show £5M+ annual gross revenue by year 3 through transaction fees (2-5%), premium memberships (£50-200 annually), and tournament partnerships. The 75% equity stake provides significant upside potential as the platform scales across multiple sports and geographic markets."
        };
      case "cardiff-city":
        return {
          name: "Cardiff City",
          description: "£40,000,000 valuation with £4,000,000 funding round providing 10% equity stake in Welsh football club with Championship growth potential.",
          minInvestment: "£1,000",
          expectedReturn: "12%+",
          fundingProgress: 0,
          totalFunding: "£4M",
          category: "Equity",
          launchDate: "October 2025",
          status: "coming-soon",
          logo: "/lovable-uploads/32e5079c-7a6a-4a36-9545-a4faa7411f89.png",
          investmentThesis: "Cardiff City offers compelling value in the Championship with strong fundamentals and promotion potential. The club's £40M valuation reflects significant undervaluation compared to Premier League peers, with 10% equity available for £4M. Cardiff's 33,000-capacity stadium, passionate Welsh fanbase, and recent Premier League experience (2018-19) provide solid foundations for growth. Championship clubs achieving promotion typically see 300-500% valuation increases, while Cardiff's sustainable financial model and youth development program ensure long-term viability.",
          detailedAnalysis: "Cardiff City generates £25-30M annual revenue through gate receipts, broadcasting rights, and commercial partnerships. The Championship playoff system provides clear promotion pathway, with promoted clubs receiving £170M+ in Premier League revenue guarantees. Cardiff's player trading model has generated £40M+ in transfer profits over five years, demonstrating strong asset management. The club's Welsh identity creates unique marketing opportunities in growing Asian markets, while stadium naming rights and commercial partnerships offer additional revenue growth potential."
        };
      case "ohio-state":
        return {
          name: "Ohio State",
          description: "Income sharing agreement on stadium revenues - £80,000,000 raise for 10% of future stadium revenues from elite university athletics programme.",
          minInvestment: "£2,500",
          expectedReturn: "8-12%",
          fundingProgress: 0,
          totalFunding: "£80M",
          category: "Income Sharing Agreement",
          launchDate: "November 2025",
          status: "coming-soon",
          logo: "/lovable-uploads/fcb5a91d-487c-486c-a923-d4255d9db988.png",
          investmentThesis: "Ohio State University athletics represents America's most valuable college sports program with guaranteed revenue streams from stadium operations. The income sharing agreement provides 10% participation in future stadium revenues from Ohio Stadium (105,000 capacity), generating £8-12M annually for investors. Ohio State's football program consistently ranks #1-3 nationally in revenue generation (£150M+ annually), with stadium revenues representing 40-50% of total athletics income. The agreement covers all stadium-generated revenue including tickets, concessions, hospitality, naming rights, and special events.",
          detailedAnalysis: "Ohio Stadium generates £60-80M annually through seven home games, concerts, and special events. Season ticket waiting lists exceed 40,000 names while premium seating commands £2,000-5,000 per season. Ohio State's national championship aspirations ensure consistent sell-outs and premium pricing power. The university's £7bn endowment and AAA credit rating provide financial stability, while Big Ten Conference revenue sharing adds £50M+ annually. College football's expansion through playoffs and media rights creates additional revenue growth potential, with Ohio State positioned as a primary beneficiary."
        };
      case "southern-brave":
        return {
          name: "Southern Brave",
          description: "5% equity of £100m valuation. 100% funded cricket investment providing dividends from The Hundred's elite franchise.",
          minInvestment: "£1,500",
          expectedReturn: "3-5% dividends",
          fundingProgress: 100,
          totalFunding: "£5M",
          category: "Equity",
          launchDate: "March 2025",
          endDate: "May 2025",
          status: "completed",
          logo: "/lovable-uploads/3c190904-fab4-4a2c-896f-f8e2878d832a.png",
          investmentThesis: "Southern Brave represents a unique opportunity to invest in The Hundred's most successful franchise through direct equity participation. With 100% funding achieved and operations commenced, this completed investment provides stable dividend income from England's premier cricket tournament. Southern Brave's championship-winning performance in 2021 and consistent playoff appearances demonstrate on-field excellence that translates to commercial success. The Rose Bowl stadium capacity expansion and Hampshire Cricket's facilities investment create additional revenue streams. The Hundred's £125M broadcast deal with Sky Sports and BBC provides guaranteed income distribution, while Southern Brave's partnership with KP Snacks ensures premium commercial backing.",
          detailedAnalysis: "Southern Brave's 2024 season generated record revenues of £18.5M through ticket sales, merchandise, hospitality, and broadcast distributions. The Hundred format's family-friendly scheduling drives 85% capacity utilization at the Rose Bowl, while Southern Brave's 'most entertaining cricket' brand attracts premium sponsorship rates. KP Snacks' multi-year partnership provides £2.5M annually in commercial backing, with additional partnerships generating £5M+ yearly. Player wages are capped under Hundred regulations ensuring profit margins, while Southern Brave's academy system produces tradeable assets. The investment provides 3-5% annual dividends plus potential capital appreciation from franchise value growth in the expanding Hundred market.",
          fundingOutcome: "The £5M funding round has been strategically allocated across four key areas to enhance Southern Brave's competitive position and revenue generation. Stadium facilities received £2.1M for Rose Bowl hospitality suite upgrades, including 12 premium boxes with direct pitch views, enhanced catering facilities with celebrity chef partnerships, and technology upgrades featuring 4K replay screens and interactive fan zones. Player development invested £1.2M in academy expansion, specialist coaching recruitment including former England internationals, and cutting-edge performance analysis equipment. Commercial infrastructure received £900K for brand partnerships development, merchandise retail expansion including pop-up stores across Hampshire, and digital marketing campaigns targeting The Hundred's growing fanbase. The remaining £800K was allocated to operational excellence including sustainability initiatives, community outreach programs in Southampton and Winchester, and reserve funding for strategic opportunities during the competitive season."
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

  const getRiskMeta = (category: string) => {
    switch (category) {
      case "Debentures":
        return { riskLevel: "Conservative", timeHorizon: "Medium" } as const;
      case "Income Sharing Agreement":
        return { riskLevel: "Moderate", timeHorizon: "Medium" } as const;
      case "Equity":
        return { riskLevel: "Moderate", timeHorizon: "Long" } as const;
      default:
        return { riskLevel: "Moderate", timeHorizon: "Medium" } as const;
    }
  };
  const { riskLevel, timeHorizon } = getRiskMeta(asset.category);

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <Button 
        variant="ghost" 
        onClick={() => navigate('/assets')}
        className="flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Assets
      </Button>
      
      {/* Hero Section */}
      <Card className="p-4 md:p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
        <div className="space-y-4 md:space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
            {asset.logo && (
              <img 
                src={asset.logo}
                alt={`${asset.name} logo`}
                className="w-16 h-16 object-contain rounded-lg bg-white/80 p-1.5 shadow-sm"
              />
            )}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-2">
                  <h1 className="text-2xl md:text-3xl font-bold text-gradient break-words">{asset.name}</h1>
                <Badge variant={asset.status === "coming-soon" ? "warning" : asset.status === "completed" ? "default" : "success"} className={`text-sm ${asset.status === "completed" ? "bg-green-800 text-green-100 border-green-700 hover:bg-green-700" : ""}`}>
                  {asset.status === "coming-soon" ? "Pre-Sale" : asset.status === "completed" ? "Completed" : "Live"}
                </Badge>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm text-muted-foreground">
              {asset.status !== "coming-soon" && (
                <div className="flex items-center gap-1">
                  <Building className="w-4 h-4" />
                  <span>{asset.category}</span>
                </div>
              )}
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Launch: {asset.launchDate}</span>
              </div>
              </div>
            </div>
            <div className="flex items-center justify-end">
          <Button 
            size="lg"
            className="btn-invest px-4 md:px-8 py-3 text-sm md:text-lg font-semibold w-full md:w-auto"
            onClick={() => {
              if (asset.status === "coming-soon") {
                setShowEarlyAccess(true);
              } else if (asset.status === "completed") {
                navigate('/market');
              } else {
                navigate(`/assets/${assetId}/primary-offering`);
              }
            }}
          >
            {asset.status === "coming-soon" ? "Get Early Access" : 
             asset.status === "completed" ? "View Secondary Market" : "Invest Now"}
          </Button>
            </div>
          </div>
          
          {/* Investment Overview Section */}
          <div className="p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-primary/20">
            <h2 className="text-xl font-bold mb-4 text-foreground">Investment Overview</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{asset.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border">
                <div className="text-sm text-muted-foreground">Investment Type</div>
                <div className="font-bold text-lg text-primary">{asset.category}</div>
              </div>
              <div className="p-3 bg-gradient-to-br from-success/10 to-success/5 rounded-lg border">
                <div className="text-sm text-muted-foreground">Expected Returns</div>
                <div className="font-bold text-lg text-success">{asset.expectedReturn}</div>
              </div>
              <div className="p-3 bg-gradient-to-br from-warning/10 to-warning/5 rounded-lg border">
                <div className="text-sm text-muted-foreground">Min. Investment</div>
                <div className="font-bold text-lg text-warning">{asset.minInvestment}</div>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 flex-wrap">
              <Badge variant={riskLevel === "Conservative" ? "success" : "warning"}>
                {riskLevel} risk
              </Badge>
              <Badge variant="outline">Time horizon: {timeHorizon}</Badge>
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

          {/* Funding Progress - Only show for live assets */}
          {asset.status !== "coming-soon" && (
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
          )}

          {/* Investment Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
            <div className="text-center p-3 bg-muted/10 rounded-lg border cursor-pointer hover:bg-muted/20 transition-colors" onClick={() => navigate(`/investor-leaderboard/${assetId}`)}>
              <div className="text-lg font-bold text-foreground">
                {assetId === 'liverpool-fc' ? '10,250' : assetId === 'mclaren-racing' ? '8,750' : assetId === 'ryder-cup' ? '2,340' : Math.floor(asset.fundingProgress * 50)}
              </div>
              <div className="text-xs text-muted-foreground underline">Investors</div>
            </div>
            <div className="text-center p-3 bg-muted/10 rounded-lg border">
              <div className="text-lg font-bold text-foreground">{asset.category}</div>
              <div className="text-xs text-muted-foreground">Sector</div>
            </div>
            <div className="text-center p-3 bg-muted/10 rounded-lg border">
              <div className={`text-lg font-bold ${asset.status === "completed" ? "text-secondary" : "text-success"}`}>
                {asset.status === "completed" ? "Completed" : "Live"}
              </div>
              <div className="text-xs text-muted-foreground">Status</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Information Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        {/* Mobile tab selector */}
        <div className="md:hidden mb-3">
          <Select value={activeTab} onValueChange={setActiveTab}>
            <SelectTrigger aria-label="Select section">
              <SelectValue placeholder="Select section" />
            </SelectTrigger>
            <SelectContent className="z-50">
              <SelectItem value="overview">Overview</SelectItem>
              <SelectItem value="thesis">Investment Thesis</SelectItem>
              <SelectItem value="analysis">Analysis</SelectItem>
              <SelectItem value="risks">Risks & Rewards</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <TabsList className={`hidden md:grid w-full ${asset.status === "completed" ? "grid-cols-5" : "grid-cols-4"} lg:w-auto bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 shadow-[var(--shadow-elegant)] rounded-md`}>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="thesis">Investment Thesis</TabsTrigger>
          <TabsTrigger value="analysis">Analysis</TabsTrigger>
          {asset.status === "completed" && <TabsTrigger value="outcome">Outcome</TabsTrigger>}
          <TabsTrigger value="risks">Risks & Rewards</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <Card className="card-professional">
            <CardHeader>
              <CardTitle>Investment Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/20">
                <h4 className="text-xl font-bold mb-4">Investment Offering</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {asset.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/50 rounded-lg border">
                    <h5 className="font-semibold text-primary mb-2">Investment Type</h5>
                    <p className="text-lg font-bold">{asset.category}</p>
                  </div>
                  <div className="p-4 bg-white/50 rounded-lg border">
                    <h5 className="font-semibold text-success mb-2">Expected Returns</h5>
                    <p className="text-lg font-bold text-success">{asset.expectedReturn}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
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
                    <li>• {asset.category}</li>
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
                {(asset as any).investmentThesis || "Our investment thesis is built on the fundamental belief that premium sports organisations represent undervalued assets with significant growth potential driven by globalisation, digital transformation, and evolving fan engagement models."}
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
              <CardTitle>Performance Metrics & Market Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {(asset as any).detailedAnalysis || "Our comprehensive analysis covers financial performance, market position, competitive landscape, and growth prospects based on real market data."}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-success/5 rounded-lg border border-success/20">
                  <h4 className="font-semibold text-success mb-2">Financial Performance</h4>
                  <ul className="space-y-1 text-sm">
                    {assetId === 'liverpool-fc' && (
                      <>
                        <li>2024 Revenue: £614M (Record)</li>
                        <li>Matchday Revenue: +£22M YoY</li>
                        <li>Commercial Revenue: £272M</li>
                        <li>Champions League Qualification: 80%</li>
                      </>
                    )}
                    {assetId === 'mclaren-racing' && (
                      <>
                        <li>2024 Revenue: £253M (+18% YoY)</li>
                        <li>Prize Money 2024: £95M (P1 WCC)</li>
                        <li>Commercial Revenue: £180M+</li>
                        <li>Technology Licensing: £15M annually</li>
                        <li>Cost Cap Efficiency: 95%</li>
                        <li>Championship Lead: 516 points</li>
                      </>
                    )}
                     {assetId === 'ryder-cup' && (
                       <>
                         <li>Tournament Revenue: £200M+</li>
                         <li>Corporate Hospitality: £50M+</li>
                         <li>Economic Impact: £150M per event</li>
                         <li>Debenture Repayment: 100% historical</li>
                       </>
                     )}
                     {assetId === 'southern-brave' && (
                       <>
                         <li>2024 Revenue: £18.5M (Record)</li>
                         <li>KP Snacks Partnership: £2.5M annually</li>
                         <li>Capacity Utilization: 85% at Rose Bowl</li>
                         <li>Dividend Yield: 4.2%</li>
                         <li>Commercial Partnerships: £5M+ yearly</li>
                       </>
                     )}
                  </ul>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Market Position</h4>
                  <ul className="space-y-1 text-sm">
                    {assetId === 'liverpool-fc' && (
                      <>
                        <li>Premier League Titles: 19</li>
                        <li>European Cups: 6</li>
                        <li>Global Fanbase: 580M supporters</li>
                        <li>Brand Value: £4.3B (Forbes 2024)</li>
                      </>
                    )}
                    {assetId === 'mclaren-racing' && (
                      <>
                        <li>Constructors Championships: 8 total</li>
                        <li>2024 WCC Standing: P1 (Champions)</li>
                        <li>Driver Market Value: £200M+</li>
                        <li>F1 Global Market Share: 8-12%</li>
                        <li>Mercedes PU Partnership: Premium tech</li>
                        <li>Commercial Partnerships: 53 active</li>
                      </>
                    )}
                     {assetId === 'ryder-cup' && (
                       <>
                         <li>Tournament Prestige: Golf's Premier Event</li>
                         <li>Biennial Format: Scarcity value</li>
                         <li>Secondary Market Premium: 15-20%</li>
                         <li>Hospitality Packages: £2K-5K per person</li>
                       </>
                     )}
                     {assetId === 'southern-brave' && (
                       <>
                         <li>The Hundred Franchise Ranking: #2 by value</li>
                         <li>Championship Winner: 2021</li>
                         <li>Playoff Appearances: Consistent</li>
                         <li>Rose Bowl Stadium: Premium venue</li>
                         <li>Hampshire Cricket Partnership: Facilities</li>
                       </>
                     )}
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

        {asset.status === "completed" && (
          <TabsContent value="outcome" className="mt-6">
            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Funding Outcome</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-card-foreground leading-relaxed mb-6">
                  {(asset as any).fundingOutcome || "Details about how the funding has been allocated and the specific outcomes achieved."}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-success/5 rounded-lg border border-success/20">
                    <h4 className="font-semibold text-success mb-3">Stadium Facilities (£2.1M)</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• 12 premium hospitality boxes with pitch views</li>
                      <li>• Celebrity chef catering partnerships</li>
                      <li>• 4K replay screens and interactive fan zones</li>
                      <li>• Enhanced accessibility facilities</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h4 className="font-semibold text-primary mb-3">Player Development (£1.2M)</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Academy expansion with new coaching staff</li>
                      <li>• Former England internationals recruited</li>
                      <li>• Performance analysis equipment upgrade</li>
                      <li>• Youth development programs</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-warning/5 rounded-lg border border-warning/20">
                    <h4 className="font-semibold text-warning mb-3">Commercial Infrastructure (£900K)</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Brand partnership development</li>
                      <li>• Pop-up retail stores across Hampshire</li>
                      <li>• Digital marketing campaign expansion</li>
                      <li>• Fan engagement technology</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
                    <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">Operational Excellence (£800K)</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Sustainability initiative implementation</li>
                      <li>• Community outreach in Southampton & Winchester</li>
                      <li>• Strategic opportunity reserve fund</li>
                      <li>• Environmental impact reduction programs</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        )}
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
              onClick={() => {
                if (asset.status === "coming-soon") {
                  setShowEarlyAccess(true);
                } else if (asset.status === "completed") {
                  navigate('/market');
                } else {
                  navigate(`/assets/${assetId}/primary-offering`);
                }
              }}
            >
              {asset.status === "coming-soon" ? "Get Early Access" : 
               asset.status === "completed" ? "View Secondary Market" : "Invest Now"}
            </Button>
          </div>
        </div>
      </Card>

      <EarlyAccessModal 
        isOpen={showEarlyAccess} 
        onClose={() => setShowEarlyAccess(false)} 
        assetName={asset.name} 
      />
    </div>
  );
}