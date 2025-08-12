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
      "Investors in the Ryder Cup debenture programme receive access to premier seating, hospitality, and once-in-a-lifetime experiences across tournament days.",
      "Debentures are structured to provide a fixed annual coupon with full principal repayment at term, creating a secure yield profile backed by event revenues.",
      "Revenue drivers include global broadcasting rights, corporate hospitality packages, merchandise sales, and premium access experiences.",
      "The 2023 Ryder Cup generated record-breaking economic impact and attendance, demonstrating sustained global demand for the tournament.",
      "Bethpage Black 2025 is expected to command premium pricing, with U.S. market exposure increasing overall revenue and investor returns.",
      "Investors benefit from guaranteed access combined with financial upside and secondary market liquidity for debenture holders.",
      "The programme offers tiered access privileges including practice day access, captains’ receptions, and curated on-course experiences.",
      "Historical repayment performance and consistent demand provide strong downside protection with meaningful experiential value."
    ],
    source: "Keeps Team",
    author: "Sophie Turner",
    date: "2025-06-28",
    image: "/src/assets/ryder-cup-golf.jpg",
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
      "Ohio State's upcoming investment initiative will modernize stadium infrastructure while opening new revenue pathways for the athletics programme.",
      "The proposal includes premium seating expansion, enhanced concessions, and flexible hospitality zones designed to increase per-game revenue.",
      "Investors will participate in a structured income share backed by stadium operations including tickets, naming rights, and special events.",
      "With 105,000-seat capacity and consistent sell-outs, Ohio Stadium represents one of the strongest live-sport cash generators in the U.S.",
      "Projected yields of 8–12% are supported by diversified revenue and Big Ten media distributions, providing robust cash flow visibility.",
      "The initiative is aligned with long-term campus development strategy and will be executed with leading construction and finance partners.",
      "Investor protections include audited reporting, segregated accounts for distributions, and downside scenarios stress-tested to conservative assumptions.",
      "Launch timing in Q4 2025 positions the programme to benefit from renewed media contracts and expanded playoff format exposure."
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
      "Cardiff City is preparing an equity round that will enable supporters to become long-term stakeholders in the club's growth plans.",
      "The raise targets performance enhancement through player development, academy investment, and matchday experience upgrades.",
      "Valuation analysis indicates upside potential tied to promotion scenarios, media distributions, and commercial partnerships.",
      "Investor tiers will include matchday hospitality, training ground visits, and community engagement experiences.",
      "Governance frameworks include transparent reporting and investor communications aligned to best practice standards.",
      "Pre-registration demand from fans has exceeded expectations, with strong regional and international interest.",
      "Secondary market functionality via Keeps enables future liquidity for investors subject to club policies.",
      "The fundraising will be conducted in compliance with FA and EFL regulations and overseen by independent advisors."
    ],
    source: "BBC Sport",
    author: "Laura Jenkins",
    date: "2025-06-15",
    image: "/lovable-uploads/010eb98a-7e8c-4f58-8fc6-342c07f81981.png",
    category: "news",
    readTime: "5 min read",
    likes: 312,
    comments: 27
  },
  "6": {
    id: "6",
    title: "Keeps Sports Investment Platform Sees Record User Growth",
    summary: "Digital platforms facilitating fan investment in sports properties report unprecedented user acquisition in 2025.",
    content: [
      "Keeps has recorded record-breaking user signups as fans seek more direct participation in their favourite teams and events.",
      "Onboarding improvements, transparent product design, and a growing inventory of blue-chip sports assets are driving scale.",
      "Network effects are emerging as investor communities form around specific teams, sharing insights and elevating engagement.",
      "Financial education modules and risk disclosures embedded in the journey have increased conversion whilst improving outcomes.",
      "Partnerships with clubs, leagues, and rights holders are expanding the pipeline of primary and secondary market offerings.",
      "Mobile-first UX enhancements and localized currency support have enabled international growth across key markets.",
      "Keeps' secondary market has seen rising liquidity with tighter spreads and improved settlement times.",
      "The product roadmap includes enhanced portfolio analytics, recurring investment plans, and richer benefit programs."
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
    title: "Hexagon Fan Team Prepares for Revolutionary Fan Investment Model",
    summary: "Digital sports collective Hexagon Fan Team outlines a 2026 launch for a novel fan ownership structure with revenue sharing.",
    content: [
      "Hexagon Fan Team is advancing an ambitious fan investment model that blends community ownership with real revenue participation.",
      "The upcoming round proposes 75% equity available to investors, aligning governance rights with long-term platform growth.",
      "Revenue will be generated from tournament integrations, premium memberships, brand partnerships, and digital collectibles.",
      "A tiered benefits programme will provide experiential rewards including athlete meet-and-greets and event access.",
      "The platform roadmap prioritises compliance, transparent reporting, and investor dashboards with real-time metrics.",
      "Market analysis indicates strong demand among Gen Z and millennial fan segments for participatory sports experiences.",
      "Liquidity pathways will be supported via the Keeps secondary market subject to regulatory requirements.",
      "Early community pilots have demonstrated high engagement and retention across multiple geographies.",
      "Product development will focus on mobile-first design, identity, and secure wallet integrations ahead of full launch.",
      "Founding investors will receive lifetime platform status and enhanced governance participation rights."
    ],
    source: "Sports Tech Weekly",
    author: "Amelia Grant",
    date: "2025-05-15",
    image: "/lovable-uploads/aaeb603c-8140-467c-9571-cc97db7c5f56.png",
    category: "news",
    readTime: "6 min read",
    likes: 908,
    comments: 77
  }
};

export default function Article() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const article = id ? articles[id] : null;

  if (!article) {
    return (
      <div className="p-6 space-y-6 max-w-4xl mx-auto">
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
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
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