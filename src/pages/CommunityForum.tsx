import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle, Users, ThumbsUp, ThumbsDown, Pin, Clock, TrendingUp, Search, Plus, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Import avatar images
import sarahAvatar from "@/assets/avatars/sarah-avatar.png";
import mikeAvatar from "@/assets/avatars/mike-avatar.png";
import emmaAvatar from "@/assets/avatars/emma-avatar.png";
import alexAvatar from "@/assets/avatars/alex-avatar.png";
import jamesAvatar from "@/assets/avatars/james-avatar.png";
import mariaAvatar from "@/assets/avatars/maria-avatar.png";
import f1FanAvatar from "@/assets/avatars/f1-fan-avatar.png";
import liamAvatar from "@/assets/liam-avatar.png";

interface ForumTopic {
  id: string;
  title: string;
  description: string;
  author: {
    name: string;
    username: string;
    avatar: string;
    verified: boolean;
  };
  category: string;
  replies: number;
  views: number;
  lastActivity: string;
  isPinned: boolean;
  upvotes: number;
  tags: string[];
}

const forumTopics: ForumTopic[] = [
  {
    id: "1",
    title: "Liverpool FC vs McLaren F1: Which offers better long-term returns?",
    description: "Comparing the investment potential of traditional football clubs versus F1 racing teams. Looking at revenue streams, global reach, and growth potential.",
    author: {
      name: "Sarah Mitchell",
      username: "sarahm_investor",
      avatar: mariaAvatar,
      verified: true
    },
    category: "Investment Strategy",
    replies: 47,
    views: 1240,
    lastActivity: "2h ago",
    isPinned: true,
    upvotes: 34,
    tags: ["Liverpool FC", "McLaren F1", "Comparison"]
  },
  {
    id: "2", 
    title: "Ryder Cup Debentures: Understanding the 2025 Structure",
    description: "Deep dive into how Ryder Cup debentures work, including revenue sharing, hospitality benefits, and the unique aspects of golf tournament investments.",
    author: {
      name: "James Wilson",
      username: "golf_expert_james",
      avatar: jamesAvatar,
      verified: true
    },
    category: "Asset Analysis",
    replies: 23,
    views: 890,
    lastActivity: "4h ago",
    isPinned: false,
    upvotes: 28,
    tags: ["Ryder Cup", "Debentures", "Golf"]
  },
  {
    id: "3",
    title: "Portfolio Diversification: How many sports should you invest in?",
    description: "Discussing optimal portfolio allocation across different sports. Risk management and correlation analysis between various sporting assets.",
    author: {
      name: "Emma Thompson",
      username: "emma_portfolio",
      avatar: emmaAvatar,
      verified: true
    },
    category: "Portfolio Strategy",
    replies: 31,
    views: 567,
    lastActivity: "6h ago",
    isPinned: false,
    upvotes: 19,
    tags: ["Diversification", "Risk Management", "Portfolio"]
  },
  {
    id: "4",
    title: "McLaren's 2024 Performance Impact on Share Values",
    description: "Analysis of how McLaren's recent F1 performance has affected their investment value and what it means for future projections.",
    author: {
      name: "Mike Rodriguez",
      username: "f1_mike_investing",
      avatar: mikeAvatar,
      verified: false
    },
    category: "Market Analysis",
    replies: 15,
    views: 432,
    lastActivity: "8h ago",
    isPinned: false,
    upvotes: 12,
    tags: ["McLaren F1", "Performance", "Valuation"]
  },
  {
    id: "5",
    title: "New to sports investing: Where should I start?",
    description: "Complete beginner looking for advice on getting started with sports investments. What should I consider as my first purchase?",
    author: {
      name: "Alex Chen",
      username: "newbie_alex",
      avatar: alexAvatar,
      verified: false
    },
    category: "Beginner Questions",
    replies: 52,
    views: 1100,
    lastActivity: "1h ago",
    isPinned: false,
    upvotes: 25,
    tags: ["Beginner", "Getting Started", "Advice"]
  },
  {
    id: "6",
    title: "Tax implications of sports investments in the UK",
    description: "Understanding capital gains, ISA allowances, and tax-efficient strategies for sports asset investments in the UK market.",
    author: {
      name: "Maria Garcia",
      username: "tax_expert_maria",
      avatar: f1FanAvatar,
      verified: true
    },
    category: "Tax & Legal",
    replies: 38,
    views: 789,
    lastActivity: "12h ago",
    isPinned: false,
    upvotes: 41,
    tags: ["Tax", "UK", "Legal", "ISA"]
  }
];

function ForumTopicCard({ topic, onClick }: { topic: ForumTopic; onClick: () => void }) {
  return (
    <Card className="card-professional cursor-pointer hover:bg-accent/30 transition-colors" onClick={onClick}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <img 
            src={topic.author.avatar} 
            alt={topic.author.name}
            className="w-12 h-12 rounded-full"
          />
          <div className="flex-1 space-y-3">
            <div className="flex items-start justify-between">
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2">
                  {topic.isPinned && <Pin className="w-4 h-4 text-primary" />}
                  <h3 className="font-semibold text-card-foreground hover:text-primary transition-colors">
                    {topic.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{topic.description}</p>
                <div className="flex items-center gap-2 flex-wrap">
                  {topic.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <Badge variant="outline" className="ml-4">
                {topic.category}
              </Badge>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <span className="font-medium">{topic.author.name}</span>
                  {topic.author.verified && <Badge variant="success" className="text-xs">✓</Badge>}
                </div>
                <span>•</span>
                <span>{topic.lastActivity}</span>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <ThumbsUp className="w-4 h-4" />
                  {topic.upvotes}
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  {topic.replies}
                </div>
                <div className="flex items-center gap-1">
                  <span>{topic.views.toLocaleString()} views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function CommunityForum() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("recent");

  const categories = ["All Topics", "Investment Strategy", "Asset Analysis", "Portfolio Strategy", "Market Analysis", "Beginner Questions", "Tax & Legal"];

  const filteredTopics = forumTopics
    .filter(topic => {
      const matchesSearch = topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          topic.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          topic.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = activeTab === "all" || topic.category.toLowerCase() === activeTab.toLowerCase().replace("all topics", "all").replace(" ", "-");
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "popular") return b.upvotes - a.upvotes;
      if (sortBy === "replies") return b.replies - a.replies;
      if (sortBy === "views") return b.views - a.views;
      return 0; // recent is default order
    });

  return (
    <div className="space-y-6 p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-gradient">Community Forum</h1>
        <p className="text-lg text-foreground/80">Discuss sports investments with fellow investors</p>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center gap-4 p-4 bg-card rounded-lg border">
        <div className="flex-1 relative">
          <Input 
            placeholder="Search topics, discussions, or tags..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        </div>
        
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">Most Recent</SelectItem>
            <SelectItem value="popular">Most Popular</SelectItem>
            <SelectItem value="replies">Most Replies</SelectItem>
            <SelectItem value="views">Most Views</SelectItem>
          </SelectContent>
        </Select>
        
        <Button className="btn-invest flex items-center gap-2">
          <Plus className="w-4 h-4" />
          New Topic
        </Button>
      </div>

      {/* Forum Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <MessageCircle className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Topics</p>
              <p className="font-semibold text-xl text-card-foreground">847</p>
            </div>
          </div>
        </Card>
        
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-success/20 rounded-lg">
              <Users className="w-5 h-5 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Members</p>
              <p className="font-semibold text-xl text-card-foreground">2,341</p>
            </div>
          </div>
        </Card>
        
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-warning/20 rounded-lg">
              <TrendingUp className="w-5 h-5 text-warning" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Today's Posts</p>
              <p className="font-semibold text-xl text-card-foreground">156</p>
            </div>
          </div>
        </Card>
        
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-accent/20 rounded-lg">
              <Clock className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Online Now</p>
              <p className="font-semibold text-xl text-card-foreground">234</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Category Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        {/* Mobile tab selector */}
        <div className="md:hidden mb-3">
          <Select value={activeTab} onValueChange={setActiveTab}>
            <SelectTrigger aria-label="Select forum category">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent className="z-50">
              {categories.map((category) => {
                const value = category.toLowerCase().replace(" ", "-").replace("all topics", "all");
                return (
                  <SelectItem key={category} value={value}>
                    {category}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        <TabsList className="hidden md:grid w-full grid-cols-4 lg:grid-cols-7 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 shadow-[var(--shadow-elegant)] rounded-md">
          {categories.map((category) => (
            <TabsTrigger 
              key={category} 
              value={category.toLowerCase().replace(" ", "-").replace("all-topics", "all")}
              className="text-xs lg:text-sm"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-card-foreground">
                {activeTab === "all" ? "All Topics" : categories.find(c => c.toLowerCase().replace(" ", "-") === activeTab)}
              </h2>
              <Badge variant="outline">
                {filteredTopics.length} {filteredTopics.length === 1 ? 'Topic' : 'Topics'}
              </Badge>
            </div>
            
            <div className="space-y-4">
              {filteredTopics.map((topic) => (
                <ForumTopicCard 
                  key={topic.id} 
                  topic={topic}
                  onClick={() => navigate(`/community-forum/${topic.id}`)}
                />
              ))}
            </div>

            {filteredTopics.length === 0 && (
              <div className="text-center py-12">
                <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-card-foreground mb-2">No topics found</h3>
                <p className="text-muted-foreground mb-4">
                  {searchTerm ? "Try adjusting your search terms" : "Be the first to start a discussion in this category!"}
                </p>
                <Button className="btn-invest">
                  <Plus className="w-4 h-4 mr-2" />
                  Create New Topic
                </Button>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}