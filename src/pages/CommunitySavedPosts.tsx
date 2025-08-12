import { useState } from "react";
import { ArrowLeft, Heart, MessageCircle, Share2, Bookmark, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";

interface SavedPost {
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
  replies: number;
  shares: number;
  dealMention?: string;
  savedDate: string;
  category: "investment" | "community" | "analysis";
}

const savedPosts: SavedPost[] = [
  {
    id: "1",
    user: {
      name: "Sarah Mitchell",
      username: "sarahm_investor",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612400d?w=64&h=64&fit=crop&crop=face",
      verified: true
    },
    content: "Just received my quarterly dividend from Liverpool FC! The 6.2% yield is exactly as promised. This is what proper fan ownership looks like. The behind-the-scenes access and financial returns make this investment unbeatable. ⚽️💰",
    timestamp: "3d",
    likes: 247,
    replies: 34,
    shares: 12,
    dealMention: "Liverpool FC",
    savedDate: "2 days ago",
    category: "investment"
  },
  {
    id: "2",
    user: {
      name: "Alex Chen",
      username: "alexc_sports",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
      verified: false
    },
    content: "AI Portfolio Analysis: McLaren's correlation with F1 performance is stronger than expected. 22% returns this year driven by podium finishes and sponsorship deals. The revenue sharing model is brilliant for capturing upside. 🏎️📈",
    timestamp: "5d",
    likes: 189,
    replies: 28,
    shares: 45,
    dealMention: "McLaren Racing",
    savedDate: "4 days ago",
    category: "analysis"
  },
  {
    id: "3",
    user: {
      name: "Emma Thompson",
      username: "golf_emma",
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=64&h=64&fit=crop&crop=face",
      verified: true
    },
    content: "Ryder Cup debenture holders get priority access to ALL PGA events, not just Ryder Cup! Just booked my spot at The Open Championship. This investment keeps delivering beyond expectations. The networking opportunities are incredible. ⛳️🏆",
    timestamp: "1w",
    likes: 156,
    replies: 23,
    shares: 18,
    dealMention: "Ryder Cup",
    savedDate: "1 week ago",
    category: "community"
  },
  {
    id: "4",
    user: {
      name: "Mike Rodriguez",
      username: "f1mike",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
      verified: false
    },
    content: "Diversification tip: Sports assets show low correlation with traditional markets. My portfolio: 40% Liverpool FC, 30% McLaren F1, 20% Ryder Cup, 10% emerging opportunities. Perfect hedge against market volatility! 📊💪",
    timestamp: "1w",
    likes: 203,
    replies: 41,
    shares: 67,
    savedDate: "1 week ago",
    category: "investment"
  },
  {
    id: "5",
    user: {
      name: "James Wilson",
      username: "jwilson_reds",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&h=64&fit=crop&crop=face",
      verified: true
    },
    content: "Season ticket waiting list BYPASSED through Liverpool FC investment! Diamond tier perks include priority booking for all Anfield matches. 20 years on the waiting list vs instant access through investment. No brainer! 🔴 #YNWA",
    timestamp: "2w",
    likes: 312,
    replies: 56,
    shares: 89,
    dealMention: "Liverpool FC",
    savedDate: "2 weeks ago",
    category: "community"
  }
];

export default function CommunitySavedPosts() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredPosts = savedPosts.filter(post => 
    activeCategory === "all" || post.category === activeCategory
  );

  const getCategoryBadgeVariant = (category: string) => {
    switch (category) {
      case "investment": return "success";
      case "analysis": return "warning";
      case "community": return "secondary";
      default: return "outline";
    }
  };

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => navigate("/community")}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-gradient">Saved Posts</h1>
          <p className="text-lg text-foreground/80">Your bookmarked community content</p>
        </div>
      </div>

      {/* Category Filter */}
      <Card className="card-professional">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <span className="font-medium text-card-foreground">Filter by:</span>
            <div className="flex gap-2">
              {[
                { id: "all", label: "All Posts", count: savedPosts.length },
                { id: "investment", label: "Investment", count: savedPosts.filter(p => p.category === "investment").length },
                { id: "analysis", label: "Analysis", count: savedPosts.filter(p => p.category === "analysis").length },
                { id: "community", label: "Community", count: savedPosts.filter(p => p.category === "community").length }
              ].map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  {category.label}
                  <Badge variant="secondary" className="text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Bookmark className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Saved</p>
              <p className="font-semibold text-xl text-card-foreground">{savedPosts.length}</p>
            </div>
          </div>
        </Card>
        
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-success/20 rounded-lg">
              <Heart className="w-5 h-5 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Likes</p>
              <p className="font-semibold text-xl text-card-foreground">
                {savedPosts.reduce((sum, post) => sum + post.likes, 0).toLocaleString()}
              </p>
            </div>
          </div>
        </Card>
        
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-warning/20 rounded-lg">
              <Calendar className="w-5 h-5 text-warning" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">This Week</p>
              <p className="font-semibold text-xl text-card-foreground">
                {savedPosts.filter(p => p.savedDate.includes("day")).length}
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Saved Posts */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-card-foreground">
            {activeCategory === "all" ? "All Saved Posts" : `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Posts`}
          </h2>
          <Badge variant="secondary">
            {filteredPosts.length} Posts
          </Badge>
        </div>

        {filteredPosts.map((post) => (
          <Card key={post.id} className="card-professional">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={post.user.avatar} alt={post.user.name} />
                  <AvatarFallback>{post.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-card-foreground">{post.user.name}</h4>
                      {post.user.verified && (
                        <Badge variant="success" className="text-xs">✓</Badge>
                      )}
                      <span className="text-sm text-muted-foreground">@{post.user.username}</span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{post.timestamp}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={getCategoryBadgeVariant(post.category)} className="text-xs capitalize">
                        {post.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Saved {post.savedDate}
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-card-foreground leading-relaxed">{post.content}</p>
                  
                  {post.dealMention && (
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      #{post.dealMention}
                    </Badge>
                  )}
                  
                  <div className="flex items-center gap-6 pt-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">{post.replies}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Share2 className="w-4 h-4" />
                      <span className="text-sm">{post.shares}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="ml-auto text-muted-foreground hover:text-destructive">
                      <Bookmark className="w-4 h-4 fill-current" />
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}