import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle, Users, ThumbsUp, ThumbsDown, Pin, Clock, TrendingUp, Search, Plus, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { forumTopics as forumTopicsData } from "@/data/forumData";

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

const forumTopics: ForumTopic[] = forumTopicsData.map((t) => ({
  id: t.id,
  title: t.title,
  description: t.content,
  author: {
    name: t.author.name,
    username: t.author.name.toLowerCase().replace(/\s+/g, "_"),
    avatar: t.author.avatar,
    verified: true,
  },
  category: t.category,
  replies: t.replies,
  views: t.views,
  lastActivity: t.timestamp,
  isPinned: false,
  upvotes: t.likes,
  tags: [t.category],
}));

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
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7">
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