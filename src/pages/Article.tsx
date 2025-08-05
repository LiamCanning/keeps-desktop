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
    source: "Sports Business Journal",
    author: "Michael Thompson",
    date: "2025-07-10",
    image: "/lovable-uploads/001420e5-847e-4145-addb-8bec6a73c63e.png",
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
    source: "Financial Times",
    author: "Emma Rodriguez",
    date: "2025-07-05",
    image: "/lovable-uploads/e0b86990-9fbb-421a-b689-b9e7ac420908.png",
    category: "news",
    readTime: "6 min read",
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