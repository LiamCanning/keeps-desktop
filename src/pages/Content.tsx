import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Clock, FileText, ExternalLink, Heart, MessageCircle, Share2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  source: string;
  date: string;
  image: string;
  category: "news" | "community" | "reels";
  readTime?: string;
  likes?: number;
  comments?: number;
}

const newsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "Liverpool FC Announces New Investment Structure for Fans",
    summary: "Liverpool FC has unveiled a new investment program allowing fans to purchase equity shares in the club for the first time.",
    source: "Sports Business Journal",
    date: "2025-07-10",
    image: "/lovable-uploads/001420e5-847e-4145-addb-8bec6a73c63e.png",
    category: "news",
    readTime: "3 min read"
  },
  {
    id: "2", 
    title: "McLaren Racing's £50,000,000 Raise Nearly Sold Out in 24 Hours!",
    summary: "Formula 1 team McLaren Racing has successfully raised £50,000,000 through a unique income sharing agreement with fans and investors.",
    source: "Financial Times",
    date: "2025-07-05",
    image: "/lovable-uploads/e0b86990-9fbb-421a-b689-b9e7ac420908.png",
    category: "news",
    readTime: "5 min read"
  },
  {
    id: "3",
    title: "Ryder Cup Debenture Programme Offers Exclusive Investment Returns",
    summary: "The exclusive Ryder Cup debenture programme provides investors with premium access and attractive financial returns through innovative sports investment.",
    source: "Golf Digest",
    date: "2025-06-28",
    image: "/lovable-uploads/1075da4a-349e-420a-b050-72aad7295b63.png",
    category: "news",
    readTime: "4 min read"
  },
  {
    id: "4",
    title: "Ohio State Prepares for Upcoming Stadium Investment Launch",
    summary: "Ohio State University announces plans to launch a £80,000,000 stadium renovation investment opportunity through Keeps Sport in Q4 2025.",
    source: "ESPN",
    date: "2025-06-22",
    image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&h=600&fit=crop",
    category: "news",
    readTime: "2 min read"
  },
  {
    id: "5",
    title: "Cardiff City Announces Upcoming Fan Investment Opportunity",
    summary: "Championship side Cardiff City reveals plans for a £4,000,000 equity fundraising round through Keeps Sport, launching early 2026.",
    source: "BBC Sport",
    date: "2025-06-15",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop",
    category: "news",
    readTime: "3 min read"
  },
  {
    id: "6",
    title: "Keeps Sports Investment Platform Sees Record User Growth",
    summary: "Digital platforms facilitating fan investment in sports properties report unprecedented user acquisition in 2025.",
    source: "TechCrunch",
    date: "2025-05-20",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
    category: "community",
    readTime: "6 min read",
    likes: 1247,
    comments: 89
  },
  {
    id: "7",
    title: "Hexagon Fan Team Prepares for Revolutionary Fan Investment Model",
    summary: "Digital sports entertainment collective Hexagon Fan Team announces plans for innovative fan ownership structure launching in 2026.",
    source: "Sports Tech Weekly",
    date: "2025-05-15",
    image: "/lovable-uploads/3c841089-35f1-4a8e-bb45-856c04bcd5fe.png",
    category: "reels",
    readTime: "4 min read",
    likes: 892,
    comments: 156
  }
];

interface CommunityPost {
  id: string;
  user: {
    name: string;
    username: string;
    avatar: string;
    verified: boolean;
  };
  content: string;
  timestamp: string;
  likes: number;
  retweets: number;
  replies: number;
  dealMention?: string;
}

const communityPosts: CommunityPost[] = [
  {
    id: "1",
    user: {
      name: "Sarah Mitchell",
      username: "sarahm_investor",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612400d?w=64&h=64&fit=crop&crop=face",
      verified: true
    },
    content: "Just invested in Liverpool FC through @keeps! The 4-8% annual dividends plus being part of the club's journey is incredible. This is the future of sports investment! ⚽️🔥",
    timestamp: "2h",
    likes: 127,
    retweets: 34,
    replies: 15,
    dealMention: "Liverpool FC"
  },
  {
    id: "2", 
    user: {
      name: "Mike Rodriguez",
      username: "f1mike",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
      verified: false
    },
    content: "McLaren's technology centre tour was INSANE! Meeting Lando Norris was a dream come true. The Keeps platform benefits are next level 🏎️ #McLarenRacing",
    timestamp: "4h",
    likes: 89,
    retweets: 22,
    replies: 8,
    dealMention: "McLaren F1"
  },
  {
    id: "3",
    user: {
      name: "Emma Thompson",
      username: "golf_emma",
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=64&h=64&fit=crop&crop=face", 
      verified: true
    },
    content: "Ryder Cup debentures are 90% funded already! The exclusive access to tournaments and pro-am events is worth every penny. Golf investment at its finest ⛳️",
    timestamp: "6h",
    likes: 156,
    retweets: 45,
    replies: 23,
    dealMention: "Ryder Cup"
  },
  {
    id: "4",
    user: {
      name: "Alex Chen",
      username: "alexc_sports",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
      verified: false
    },
    content: "The AI portfolio analysis on Keeps is spot on! Recommended diversifying away from my heavy McLaren position. 18.4% returns beating the market by 2.1% 📈",
    timestamp: "8h", 
    likes: 92,
    retweets: 18,
    replies: 12
  },
  {
    id: "5",
    user: {
      name: "James Wilson",
      username: "jwilson_reds",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&h=64&fit=crop&crop=face",
      verified: true
    },
    content: "Season ticket priority through Liverpool FC investment is a game changer! Finally got seats in the Kop. You'll Never Walk Alone! 🔴 #YNWA #LiverpoolFC",
    timestamp: "12h",
    likes: 234,
    retweets: 67,
    replies: 34,
    dealMention: "Liverpool FC"
  }
];

function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <Card className="card-professional group hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden rounded-t-xl">
        <img 
          src={article.image}
          alt={article.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge 
          variant={article.category === "news" ? "default" : article.category === "community" ? "success" : "warning"}
          className="absolute top-4 left-4 capitalize"
        >
          {article.category}
        </Badge>
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
            {article.title}
          </CardTitle>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
          {article.summary}
        </p>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-4">
            <span className="font-medium">{article.source}</span>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(article.date).toLocaleDateString('en-GB', { 
                day: 'numeric', 
                month: 'short', 
                year: 'numeric' 
              })}</span>
            </div>
            {article.readTime && (
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
            )}
          </div>
        </div>
        
        {(article.likes || article.comments) && (
          <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
            {article.likes && (
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                <span>{article.likes.toLocaleString()}</span>
              </div>
            )}
            {article.comments && (
              <div className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                <span>{article.comments}</span>
              </div>
            )}
          </div>
        )}
        
        <div className="flex items-center gap-2">
          <Button 
            className="btn-invest flex-1"
            onClick={() => window.open(`/article/${article.id}`, '_blank')}
          >
            Read Article
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
          <Button variant="outline" size="icon">
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function CommunityTimeline() {
  const navigate = useNavigate();
  
  return (
    <div className="space-y-4">
      {communityPosts.map((post) => (
        <Card key={post.id} className="card-professional p-4">
          <div className="flex gap-3">
            <button
              onClick={() => navigate(`/user/${post.user.username}`)}
              className="hover:scale-105 transition-transform"
            >
              <img 
                src={post.user.avatar}
                alt={post.user.name}
                className="w-12 h-12 rounded-full object-cover"
              />
            </button>
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigate(`/user/${post.user.username}`)}
                  className="font-semibold text-card-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {post.user.name}
                </button>
                {post.user.verified && (
                  <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                <button
                  onClick={() => navigate(`/user/${post.user.username}`)}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors cursor-pointer"
                >
                  @{post.user.username}
                </button>
                <span className="text-muted-foreground text-sm">·</span>
                <span className="text-muted-foreground text-sm">{post.timestamp}</span>
              </div>
              
              <p className="text-card-foreground leading-relaxed">{post.content}</p>
              
              {post.dealMention && (
                <Badge variant="secondary" className="text-xs">
                  {post.dealMention}
                </Badge>
              )}
              
              <div className="flex items-center gap-6 pt-2 text-muted-foreground">
                <button className="flex items-center gap-1 hover:text-primary transition-colors text-sm">
                  <MessageCircle className="w-4 h-4" />
                  {post.replies}
                </button>
                <button className="flex items-center gap-1 hover:text-success transition-colors text-sm">
                  <Share2 className="w-4 h-4" />
                  {post.retweets}
                </button>
                <button className="flex items-center gap-1 hover:text-destructive transition-colors text-sm">
                  <Heart className="w-4 h-4" />
                  {post.likes}
                </button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default function Content() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("news");

  const filteredArticles = newsArticles.filter(article => {
    if (activeTab === "all") return true;
    return article.category === activeTab;
  });

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gradient">Content</h1>
        <p className="text-lg text-foreground/80">News, insights and investor stories</p>
      </div>

      {/* Content Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Articles</p>
              <p className="font-semibold text-xl text-card-foreground">{newsArticles.length}</p>
            </div>
          </div>
        </Card>
        
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-success/20 rounded-lg">
              <Calendar className="w-5 h-5 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">This Week</p>
              <p className="font-semibold text-xl text-card-foreground">3</p>
            </div>
          </div>
        </Card>
        
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-warning/20 rounded-lg">
              <Heart className="w-5 h-5 text-warning" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Likes</p>
              <p className="font-semibold text-xl text-card-foreground">2.1k</p>
            </div>
          </div>
        </Card>
        
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <MessageCircle className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Comments</p>
              <p className="font-semibold text-xl text-card-foreground">245</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
          <TabsTrigger value="news">Latest News</TabsTrigger>
          <TabsTrigger value="reels">Reels</TabsTrigger>
          <TabsTrigger value="analysis">Keeps Analysis</TabsTrigger>
          <TabsTrigger value="all">All Content</TabsTrigger>
        </TabsList>


        <TabsContent value="news" className="mt-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-foreground">Latest News</h2>
              <Badge variant="secondary">
                {filteredArticles.length} Articles
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="reels" className="mt-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-foreground">Fans enjoy behind the scenes look at Hexagon Cup</h2>
              <Badge variant="warning">
                {filteredArticles.length} Videos
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <div key={article.id} className="relative">
                  <NewsCard article={article} />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 rounded-full p-4 cursor-pointer hover:bg-black/70 transition-colors">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="analysis" className="mt-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-foreground">Keeps Analysis</h2>
              <Badge variant="secondary">
                Investment Team Insights
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              <Card className="card-professional group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop"
                    alt="Sports Market Analysis"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge variant="success" className="absolute top-4 left-4">
                    Market Analysis
                  </Badge>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    Sports Industry Market Outlook Q4 2025
                  </CardTitle>
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
                    Comprehensive analysis of the global sports investment market, featuring emerging opportunities and sector performance trends for the coming quarter.
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span className="font-medium">Keeps Investment Team</span>
                    <span>5 min read</span>
                  </div>
                  <Button className="btn-invest w-full">
                    Read Analysis
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-professional group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
                    alt="McLaren F1 Car"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge variant="warning" className="absolute top-4 left-4">
                    Asset Spotlight
                  </Badge>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    McLaren F1: Performance Analysis & Investment Thesis
                  </CardTitle>
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
                    Deep dive into McLaren's competitive position, revenue streams, and investment potential following their strong 2025 season performance.
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span className="font-medium">Keeps Investment Team</span>
                    <span>8 min read</span>
                  </div>
                  <Button className="btn-invest w-full">
                    Read Analysis
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-professional group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop"
                    alt="Sports Arena"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge variant="default" className="absolute top-4 left-4">
                    Market Trends
                  </Badge>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    Assets to Watch: Emerging Opportunities in 2026
                  </CardTitle>
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
                    Investment team identifies the most promising upcoming sports assets and market trends that could deliver exceptional returns for early investors.
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span className="font-medium">Keeps Investment Team</span>
                    <span>6 min read</span>
                  </div>
                  <Button className="btn-invest w-full">
                    Read Analysis
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="all" className="mt-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-foreground">All Content</h2>
              <Badge variant="secondary">
                {filteredArticles.length} Items
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}