import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Share2, Heart, MessageCircle, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface Article {
  id: string;
  title: string;
  content: string[];
  summary: string;
  source: string;
  author: string;
  date: string;
  image: string;
  category: "news" | "community" | "reels";
  readTime: string;
  likes: number;
  comments: number;
}

const articles: { [key: string]: Article } = {
  "1": {
    id: "1",
    title: "Liverpool FC Announces New Investment Structure for Fans",
    summary: "Liverpool FC has unveiled a new investment program allowing fans to purchase equity shares in the club for the first time.",
    content: [
      "Liverpool FC has made history by becoming the first Premier League club to offer direct equity investment opportunities to its global fanbase through the innovative Keeps platform.",
      "The groundbreaking £40 million fundraising initiative allows supporters to purchase shares starting from just £500, with five distinct benefit tiers ranging from Bronze to Diamond membership levels.",
      "Diamond tier investors, contributing £250,000 or more, will receive unprecedented access including player experience days, luxury hospitality packages, training ground access, and annual strategic briefings with club management.",
      "The club's commercial director, Sarah Williams, explained: 'This represents a fundamental shift in how football clubs can engage with their supporters. Rather than being passive spectators, our fans can now become true stakeholders in Liverpool's future success.'",
      "The investment structure offers projected annual dividends of 4-8%, derived from the club's commercial partnerships, broadcast revenues, and matchday income. Early investors will also benefit from potential capital appreciation as the club's valuation grows.",
      "Platinum tier members (£50,000+) will enjoy VIP hospitality experiences, behind-the-scenes access, executive meet and greets, and premium seating allocations at Anfield.",
      "The initiative has already attracted over 10,000 investors within the first 72 hours, with 75% of the funding target achieved. This overwhelming response demonstrates the strong appetite for fan ownership models in modern football.",
      "Gold tier investors (£10,000+) will receive stadium tours, meet and greet opportunities with players, branded merchandise packages, and discounted tickets and hospitality.",
      "Liverpool's innovation extends beyond traditional ownership models, incorporating blockchain technology to ensure transparent reporting and allowing secondary market trading of shares through the Keeps platform.",
      "The success of Liverpool's fan investment program is expected to influence other Premier League clubs to consider similar initiatives, potentially revolutionizing the relationship between football clubs and their supporters worldwide."
    ],
    source: "Keeps Team",
    author: "Michael Thompson",
    date: "2025-07-10",
    image: "/lovable-uploads/6954178a-41c6-4084-8e3f-900689bb1803.png",
    category: "news",
    readTime: "5 min read",
    likes: 1247,
    comments: 89
  },
  "2": {
    id: "2",
    title: "McLaren Racing's £50,000,000 Raise Nearly Sold Out in 24 Hours!",
    summary: "Formula 1 team McLaren Racing has successfully raised £50,000,000 through a unique income sharing agreement with fans and investors.",
    content: [
      "McLaren Racing has achieved a remarkable milestone by raising £49.25 million of their £50 million target within just 24 hours of launching their income sharing agreement on the Keeps platform.",
      "The groundbreaking fundraising model offers investors a unique opportunity to receive 15-25% annual returns derived directly from the team's Formula 1 prize money, sponsorship deals, and commercial partnerships.",
      "With 1,523 investors participating in the 3-year income sharing agreement, McLaren has demonstrated the enormous appetite for direct investment in Formula 1 teams among motorsport enthusiasts and financial investors alike.",
      "Team Principal Andrea Stella commented: 'This overwhelming response validates our belief that fans want to be more than spectators - they want to be genuine partners in our racing success. Every point we score, every podium we achieve, now directly benefits our investor community.'",
      "Diamond tier investors (£250,000+) receive exclusive access to the McLaren Technology Centre, private meetings with drivers Lando Norris and Oscar Piastri, plus VIP hospitality at all 24 Grand Prix events throughout the season.",
      "The investment structure is directly tied to McLaren's performance, with higher returns triggered by championship positions, race wins, and constructor points. This creates a unique alignment between team success and investor returns.",
      "Platinum tier members (£50,000+) enjoy behind-the-scenes paddock access, technical briefings with engineers, simulator experiences, and exclusive McLaren merchandise collections.",
      "The funds raised will be directed toward car development, aerodynamic research, and facility upgrades at the McLaren Technology Centre, directly contributing to improved on-track performance.",
      "Gold tier investors (£10,000+) receive factory tours, meet and greet sessions with the driver lineup, priority merchandise access, and discounted hospitality packages at European races.",
      "This innovative funding model positions McLaren at the forefront of sports finance evolution, potentially influencing how other Formula 1 teams approach fan engagement and capital raising in the future."
    ],
    source: "Keeps Team",
    author: "Emma Rodriguez",
    date: "2025-07-05",
    image: "/lovable-uploads/fdf2d78d-7bde-43c9-8276-e29d382a6860.png",
    category: "news",
    readTime: "6 min read",
    likes: 892,
    comments: 156
  },
  "3": {
    id: "3",
    title: "Ryder Cup Debenture Programme Offers Exclusive Investment Returns",
    summary: "The exclusive Ryder Cup debenture programme provides investors with premium access and attractive financial returns through innovative sports investment.",
    content: [
      "The prestigious Ryder Cup debenture programme represents a landmark opportunity for golf enthusiasts and savvy investors to participate in one of sport's most celebrated tournaments through a structured investment vehicle.",
      "Golf's biennial showdown between Europe and America has achieved record-breaking commercial success, with the 2023 Rome edition generating €262 million in economic activity across the host region, demonstrating the tournament's extraordinary market appeal.",
      "Debenture holders receive guaranteed premium seating for all tournament days, exclusive hospitality experiences including gourmet dining with golf legends, and VIP access to practice rounds and pro-am events featuring world-renowned professionals.",
      "The investment structure provides 5% annual coupon payments plus full principal repayment after the 10-year term, backed by the tournament's proven revenue model including global broadcasting rights worth €200M+ per event.",
      "Premium experiences include behind-the-scenes course access, meet-and-greet opportunities with Ryder Cup captains, and invitations to exclusive sponsor events throughout the tournament week.",
      "Corporate hospitality packages command €2,000-5,000 per person whilst the secondary debenture market consistently shows 15-20% premiums to face value, demonstrating strong investment appreciation potential.",
      "The 2025 Bethpage Black venue represents premium US market positioning, with New York's affluent demographic providing substantial demand for luxury golf experiences and hospitality packages.",
      "Historical data shows 100% debenture repayment rates whilst tournament assets provide secure backing for all investment commitments, making this an attractive proposition for risk-conscious investors seeking sports exposure."
    ],
    source: "Keeps Team",
    author: "Sophie Turner",
    date: "2025-06-28",
    image: "/lovable-uploads/499a2e53-4432-44cc-b37d-2a6b0e942d5b.png",
    category: "news",
    readTime: "4 min read",
    likes: 620,
    comments: 42
  },
  "4": {
    id: "4",
    title: "Ohio State Prepares for Upcoming Stadium Investment Launch",
    summary: "Ohio State University announces plans to launch a £80,000,000 stadium renovation investment opportunity through Keeps Sport in Q4 2025.",
    content: [
      "Ohio State University is preparing to launch America's most ambitious college athletics investment programme, offering fans and investors unprecedented access to stadium revenue through an innovative £80 million income sharing agreement.",
      "The pioneering initiative will provide 10% participation in future Ohio Stadium revenues, covering all income streams from the iconic 105,000-capacity venue including ticketing, premium seating, concessions, and special events.",
      "Ohio State's football programme consistently ranks among the top three nationally in revenue generation, producing over £150 million annually with stadium operations representing 40-50% of total athletics income.",
      "The income sharing agreement targets 8-12% annual returns for investors, directly tied to the Buckeyes' performance and the stadium's operational success across seven home games, concerts, and major university events.",
      "Ohio Stadium's waiting list exceeds 40,000 season ticket holders whilst premium seating commands £2,000-5,000 per season, demonstrating sustained demand that underpins the investment's revenue projections.",
      "Funds raised will support critical infrastructure upgrades including enhanced digital experiences, expanded premium hospitality areas, and state-of-the-art training facilities to maintain Ohio State's competitive advantage.",
      "The university's £7 billion endowment and AAA credit rating provide exceptional financial stability, whilst Big Ten Conference revenue sharing adds over £50 million annually to the athletics programme.",
      "College football's expanding playoff system and escalating media rights deals position Ohio State as a primary beneficiary, with the programme's national championship aspirations ensuring consistent sell-outs and premium pricing power throughout the investment term."
    ],
    source: "ESPN",
    author: "Daniel Carter",
    date: "2025-06-22",
    image: "/lovable-uploads/b404eafa-2f22-4d8b-984c-9cf6a58070de.png",
    category: "news",
    readTime: "5 min read",
    likes: 284,
    comments: 19
  },
  "5": {
    id: "5",
    title: "Cardiff City Announces Upcoming Fan Investment Opportunity",
    summary: "Championship side Cardiff City reveals plans for a £4,000,000 equity fundraising round through Keeps Sport, launching early 2026.",
    content: [
      "Cardiff City Football Club is pioneering fan ownership in Welsh football with an innovative £4 million equity fundraising round that will transform supporters into genuine stakeholders in the club's Championship campaign.",
      "The groundbreaking initiative offers 10% equity participation at a £40 million club valuation, providing exceptional value compared to Premier League peers whilst delivering direct ownership benefits to the passionate Welsh fanbase.",
      "Cardiff's 33,000-capacity Cardiff City Stadium and recent Premier League experience (2018-19 season) provide solid foundations for growth, with the club's Championship position offering significant promotion upside for equity investors.",
      "Historical data demonstrates that Championship clubs achieving Premier League promotion typically experience 300-500% valuation increases, making Cardiff's current valuation particularly attractive for long-term equity holders.",
      "The club generates £25-30 million annual revenue through gate receipts, EFL broadcasting rights, and commercial partnerships, whilst maintaining a sustainable financial model that has eliminated historic debt burdens.",
      "Cardiff's proven player trading strategy has produced over £40 million in transfer profits during the past five years, demonstrating exceptional asset management capabilities that directly benefit equity shareholders.",
      "The Welsh identity creates unique marketing opportunities in rapidly growing Asian markets, where Celtic nations enjoy premium brand positioning for merchandise and commercial partnerships.",
      "Funds raised will target squad strengthening for promotion ambitions, youth academy development, and stadium experience enhancements including digital infrastructure and hospitality upgrades to maximize matchday revenues for investor returns."
    ],
    source: "BBC Sport",
    author: "Laura Jenkins",
    date: "2025-06-15",
    image: "/lovable-uploads/010eb98a-7e8c-4f58-8fc6-342c07f81981.png",
    category: "news",
    readTime: "4 min read",
    likes: 312,
    comments: 27
  },
  "6": {
    id: "6",
    title: "Keeps Sports Investment Platform Sees Record User Growth",
    summary: "Digital platforms facilitating fan investment in sports properties report unprecedented user acquisition in 2025.",
    content: [
      "Keeps Sports has achieved extraordinary milestone growth with over 150,000 new user registrations in Q2 2025, representing a 400% increase year-over-year as sports fans embrace direct investment participation in their favourite teams and events.",
      "The revolutionary platform has facilitated over £300 million in total investment volume across Premier League football, Formula 1, golf tournaments, and college athletics, demonstrating robust demand for sports-focused financial products.",
      "User demographics reveal 67% of investors are aged 25-45 with average portfolio values of £15,000, whilst premium tier members investing £50,000+ represent the fastest-growing segment at 25% quarterly growth.",
      "Platform analytics show exceptional engagement metrics with users spending average 47 minutes per session exploring investment opportunities, reading portfolio performance updates, and participating in community discussions.",
      "The innovative blend of financial returns and experiential benefits continues driving adoption, with 89% of users citing exclusive access to teams and events as primary motivation alongside investment gains.",
      "Keeps' proprietary technology enables seamless fractional ownership, real-time portfolio tracking, and secondary market trading capabilities that traditional sports investments previously lacked, revolutionizing fan engagement models.",
      "Geographic expansion across Europe and North America has opened new markets, with particular success in Germany (42% user growth) and Canada (38% growth) where sports investment appetite exceeds initial projections.",
      "Strategic partnerships with major sports properties including additional Premier League clubs, NBA teams, and European football leagues are scheduled for H2 2025, potentially doubling platform investment opportunities for the growing user base."
    ],
    source: "TechCrunch",
    author: "Nadia Lee",
    date: "2025-05-20",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
    category: "community",
    readTime: "6 min read",
    likes: 1247,
    comments: 89
  },
  "7": {
    id: "7",
    title: "Hexagon Fan Team Revolutionizes Sports Engagement with Blockchain Investment Model",
    summary: "Digital sports entertainment collective Hexagon Fan Team announces groundbreaking fan ownership structure combining blockchain technology with traditional sports investment.",
    content: [
      "Hexagon Fan Team is transforming sports fan engagement through an innovative blockchain-powered investment platform that enables collective ownership of tournament outcomes, player partnerships, and exclusive merchandise revenues.",
      "The pioneering £1.25 million fundraising round offers 75% equity in a revolutionary sports technology platform that bridges traditional sports investment with cutting-edge fan engagement experiences.",
      "Early investors gain significant ownership stakes in a platform targeting the £50 billion global sports memorabilia and fan engagement market, with revenue projections of £5 million+ annually by year three.",
      "The Hexagon ecosystem integrates with major international tournaments, creating multiple revenue streams through transaction fees (2-5%), premium memberships (£50-200 annually), and strategic tournament partnerships.",
      "Blockchain technology ensures transparent reporting and enables secondary market trading of fan investment positions, whilst smart contracts automate revenue distribution and ownership verification processes.",
      "The platform's gamified approach combines legal sports investment with prediction markets, NFT trading, and exclusive content access, appealing to tech-savvy sports fans seeking deeper engagement beyond traditional viewing.",
      "Global sports betting markets exceeding £200 billion annually demonstrate massive commercial opportunity, whilst fan engagement platforms show consistent 300%+ growth rates across developed markets.",
      "Hexagon's unique positioning capitalizes on increasing demand for fan participation models, with the 75% equity structure providing substantial upside potential as the platform scales across multiple sports and geographic regions."
    ],
    source: "Sports Tech Weekly",
    author: "Marcus Thompson",
    date: "2025-05-10",
    image: "/src/assets/hexagon-sports.jpg",
    category: "news",
    readTime: "5 min read",
    likes: 892,
    comments: 156
  }
};

export default function Article() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const article = id ? articles[id] : null;

  if (!article) {
    return (
      <div className="p-6 space-y-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>
        <Card className="card-professional p-8 text-center">
          <h2 className="text-xl font-semibold text-card-foreground mb-2">Article Not Found</h2>
          <p className="text-muted-foreground">The article you're looking for doesn't exist.</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Content
        </Button>
      </div>

      {/* Article Content */}
      <article className="space-y-6">
        {/* Hero Image */}
        <div className="relative overflow-hidden rounded-xl">
          <img 
            src={article.image}
            alt={article.title}
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <Badge 
              variant={article.category === "news" ? "default" : article.category === "community" ? "success" : "warning"}
              className="mb-4 capitalize"
            >
              {article.category}
            </Badge>
            <h1 className="text-4xl font-bold mb-2">{article.title}</h1>
            <p className="text-lg text-white/90">{article.summary}</p>
          </div>
        </div>

        {/* Article Meta */}
        <Card className="card-professional">
          <CardContent className="p-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="font-medium text-card-foreground">{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    {new Date(article.date).toLocaleDateString('en-GB', { 
                      day: 'numeric', 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{article.readTime}</span>
                </div>
                <span className="font-medium text-primary">{article.source}</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{article.likes.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{article.comments}</span>
                  </div>
                </div>
                <Button variant="outline" size="icon">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Article Body */}
        <Card className="card-professional">
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              {article.content.map((paragraph, index) => (
                <p key={index} className="text-card-foreground leading-relaxed mb-6 text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Article Actions */}
        <Card className="card-professional">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="outline" className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Like ({article.likes.toLocaleString()})
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Comment ({article.comments})
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
              </div>
              
              <Button onClick={() => navigate('/content')} className="btn-invest">
                Read More Articles
              </Button>
            </div>
          </CardContent>
        </Card>
      </article>
    </div>
  );
}