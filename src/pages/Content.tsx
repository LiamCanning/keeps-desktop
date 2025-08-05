import { useState } from "react";
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
          <Button className="btn-invest flex-1">
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

export default function Content() {
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
          <TabsTrigger value="community">Community</TabsTrigger>
          <TabsTrigger value="reels">Reels</TabsTrigger>
          <TabsTrigger value="all">All Content</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-card-foreground">
                {activeTab === "news" ? "Latest News" :
                 activeTab === "community" ? "Community Stories" :
                 activeTab === "reels" ? "Reels & Videos" :
                 "All Content"}
              </h2>
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
      </Tabs>
    </div>
  );
}