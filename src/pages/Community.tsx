import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle, Users, Heart, Send, Plus, Edit3, Calendar, Star, Search, BarChart3, TrendingUp } from "lucide-react";

// Import avatar images
import sarahAvatar from "@/assets/avatars/sarah-avatar.png";
import mikeAvatar from "@/assets/avatars/mike-avatar.png";
import emmaAvatar from "@/assets/avatars/emma-avatar.png";
import alexAvatar from "@/assets/avatars/alex-avatar.png";
import jamesAvatar from "@/assets/avatars/james-avatar.png";
import mariaAvatar from "@/assets/avatars/maria-avatar.png";
import f1FanAvatar from "@/assets/avatars/f1-fan-avatar.png";
import golfFanAvatar from "@/assets/avatars/golf-fan-avatar.png";
import liamAvatar from "@/assets/liam-avatar.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

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
  replies: number;
  dealMention?: string;
}

const communityPosts: CommunityPost[] = [
  {
    id: "1",
    user: {
      name: "Sarah Mitchell",
      username: "sarahm_investor",
      avatar: sarahAvatar,
      verified: true
    },
    content: "Just invested in Liverpool FC through Keeps! The Diamond tier benefits are incredible - behind-the-scenes access and VIP hospitality make this feel like true ownership. This is the future of fan investment! ⚽️🔥",
    timestamp: "2h",
    likes: 127,
    replies: 15,
    dealMention: "Liverpool FC"
  },
  {
    id: "2", 
    user: {
      name: "Mike Johnson",
      username: "mike_sports",
      avatar: mikeAvatar,
      verified: false
    },
    content: "McLaren's performance this season has been outstanding! My F1 investment is already showing solid returns. The revenue sharing model is brilliant for sports fans who want to be more than just spectators 🏎️📈",
    timestamp: "4h",
    likes: 89,
    replies: 23,
    dealMention: "McLaren Racing"
  },
  {
    id: "3",
    user: {
      name: "Emma Watson",
      username: "emma_invests", 
      avatar: emmaAvatar,
      verified: true
    },
    content: "Diversification is key! I'm now invested across Liverpool FC, McLaren F1, and considering the Ryder Cup. Sports investment gives me exposure to sectors I'm passionate about while building wealth 💰⛳",
    timestamp: "6h",
    likes: 156,
    replies: 31
  }
];

function CommunityPost({ 
  post, 
  onUserClick, 
  onCommentsClick 
}: { 
  post: CommunityPost; 
  onUserClick: (username: string) => void;
  onCommentsClick: (postId: string) => void;
}) {
  return (
    <Card className="card-professional">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <img 
            src={post.user.avatar} 
            alt={post.user.name}
            className="w-12 h-12 rounded-full cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all"
            onClick={() => onUserClick(post.user.username)}
          />
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2">
              <h4 
                className="font-semibold text-card-foreground cursor-pointer hover:text-primary transition-colors"
                onClick={() => onUserClick(post.user.username)}
              >
                {post.user.name}
              </h4>
              {post.user.verified && (
                <Badge variant="success" className="text-xs">✓</Badge>
              )}
              <span className="text-sm text-muted-foreground">@{post.user.username}</span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{post.timestamp}</span>
            </div>
            
            <p className="text-card-foreground leading-relaxed">{post.content}</p>
            
            {post.dealMention && (
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                #{post.dealMention}
              </Badge>
            )}
            
            <div className="flex items-center gap-6 pt-2">
              <Button variant="ghost" size="sm" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                <Heart className="w-4 h-4" />
                {post.likes}
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                onClick={() => onCommentsClick(post.id)}
              >
                <MessageCircle className="w-4 h-4" />
                {post.replies}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Community() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("timeline");
  const [newPostContent, setNewPostContent] = useState("");
  const [posts, setPosts] = useState(communityPosts);
  const [searchTerm, setSearchTerm] = useState("");

  const handlePostSubmit = () => {
    if (!newPostContent.trim()) return;

    const newPost: CommunityPost = {
      id: Date.now().toString(),
      user: {
        name: "Liam Thompson",
        username: "liam_investor",
        avatar: liamAvatar,
        verified: true
      },
      content: newPostContent,
      timestamp: "now",
      likes: 0,
      replies: 0
    };

    setPosts([newPost, ...posts]);
    setNewPostContent("");
    toast({
      title: "Post shared!",
      description: "Your post has been shared with the community.",
    });
  };

  const filteredPosts = posts.filter(post => 
    post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-gradient">Community Hub</h1>
        <p className="text-lg text-foreground/80">Connect with fellow sports investors</p>
      </div>

      {/* Modern Community Features Bar */}
      <div className="flex items-center gap-4 p-4 bg-card rounded-lg border">
        <div className="flex-1 relative">
          <Input 
            placeholder="Search posts, users, or topics..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        </div>
        
        <Button variant="outline" className="flex items-center gap-2" onClick={() => navigate("/community-messages")}>
          <MessageCircle className="w-4 h-4" />
          Messages
        </Button>
        
        <Button variant="outline" className="flex items-center gap-2" onClick={() => navigate("/community-saved-posts")}>
          <Star className="w-4 h-4" />
          Saved Posts
        </Button>
        
        <Button variant="outline" className="flex items-center gap-2" onClick={() => navigate("/community-find-people")}>
          <Users className="w-4 h-4" />
          Find People
        </Button>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Members</p>
              <p className="font-semibold text-xl text-card-foreground">2,847</p>
            </div>
          </div>
        </Card>
        
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-success/20 rounded-lg">
              <MessageCircle className="w-5 h-5 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Posts Today</p>
              <p className="font-semibold text-xl text-card-foreground">156</p>
            </div>
          </div>
        </Card>
        
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-warning/20 rounded-lg">
              <Heart className="w-5 h-5 text-warning" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Now</p>
              <p className="font-semibold text-xl text-card-foreground">234</p>
            </div>
          </div>
        </Card>
        
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-accent/20 rounded-lg">
              <Star className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Top Discussions</p>
              <p className="font-semibold text-xl text-card-foreground">42</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Community Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        {/* Mobile tab selector */}
        <div className="md:hidden mb-3">
          <Select value={activeTab} onValueChange={setActiveTab}>
            <SelectTrigger aria-label="Select community section">
              <SelectValue placeholder="Select section" />
            </SelectTrigger>
            <SelectContent className="z-50">
              <SelectItem value="timeline">Community Timeline</SelectItem>
              <SelectItem value="forum">Forum</SelectItem>
              <SelectItem value="create">Create Post</SelectItem>
              <SelectItem value="people">People</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <TabsList className="hidden md:grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 shadow-[var(--shadow-elegant)] rounded-md">
          <TabsTrigger value="timeline">Community Timeline</TabsTrigger>
          <TabsTrigger value="forum">Forum</TabsTrigger>
          <TabsTrigger value="create">Create Post</TabsTrigger>
          <TabsTrigger value="people">People</TabsTrigger>
        </TabsList>

        <TabsContent value="timeline" className="mt-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-card-foreground">Community Timeline</h2>
              <Badge variant="success">
                {filteredPosts.length} Posts
              </Badge>
            </div>
            
            <div className="space-y-4">
              {filteredPosts.map((post) => (
                <CommunityPost 
                  key={post.id} 
                  post={post} 
                  onUserClick={(username) => navigate(`/community-profile/${username}`)}
                  onCommentsClick={(postId) => navigate(`/community-comments/${postId}`)}
                />
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="forum" className="mt-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-card-foreground">Community Forum</h2>
              <Button 
                className="btn-invest"
                onClick={() => navigate("/community-forum")}
              >
                View All Topics
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="card-professional cursor-pointer hover:bg-accent/30 transition-colors" onClick={() => navigate("/community-forum")}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-card-foreground">Investment Strategy Discussions</h3>
                      <p className="text-sm text-muted-foreground">
                        Share and discuss investment strategies, portfolio management, and market analysis with fellow investors.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>247 Topics</span>
                        <span>•</span>
                        <span>1,234 Replies</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional cursor-pointer hover:bg-accent/30 transition-colors" onClick={() => navigate("/community-forum")}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-success/20 rounded-lg">
                      <BarChart3 className="w-6 h-6 text-success" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-card-foreground">Asset Analysis & Research</h3>
                      <p className="text-sm text-muted-foreground">
                        Deep dive into individual assets, performance analysis, and research findings from the community.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>189 Topics</span>
                        <span>•</span>
                        <span>892 Replies</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional cursor-pointer hover:bg-accent/30 transition-colors" onClick={() => navigate("/community-forum")}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-warning/20 rounded-lg">
                      <Users className="w-6 h-6 text-warning" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-card-foreground">Beginner's Corner</h3>
                      <p className="text-sm text-muted-foreground">
                        New to sports investing? Get help, ask questions, and learn from experienced investors.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>156 Topics</span>
                        <span>•</span>
                        <span>678 Replies</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional cursor-pointer hover:bg-accent/30 transition-colors" onClick={() => navigate("/community-forum")}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/20 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-accent" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-card-foreground">Market News & Trends</h3>
                      <p className="text-sm text-muted-foreground">
                        Stay updated with the latest market news, trends, and developments in sports investing.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>98 Topics</span>
                        <span>•</span>
                        <span>445 Replies</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="create" className="mt-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-card-foreground">Share Your Thoughts</h2>
              <Badge variant="outline">
                New Post
              </Badge>
            </div>
            
            <Card className="card-professional">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <img 
                    src={liamAvatar} 
                    alt="Liam Thompson"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1 space-y-4">
                    <Textarea
                      placeholder="What's on your mind about sports investing? Share your insights, experiences, or questions with the community..."
                      value={newPostContent}
                      onChange={(e) => setNewPostContent(e.target.value)}
                      className="min-h-[120px] resize-none"
                    />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{newPostContent.length}/500 characters</span>
                      </div>
                      
                      <Button 
                        onClick={handlePostSubmit}
                        className="btn-invest"
                        disabled={!newPostContent.trim()}
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Share Post
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="people" className="mt-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-card-foreground">Active Community Members</h2>
              <Badge variant="success">
                2,847 Members
              </Badge>
            </div>
            
            {/* Top Investors to Follow Section */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-card-foreground">Top Investors to Follow</CardTitle>
                <p className="text-sm text-muted-foreground">Featured investors with proven performance and insights</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: "Sarah Mitchell", username: "sarahm_investor", avatar: mariaAvatar, performance: "+24.3%", assets: "Liverpool FC, McLaren F1", verified: true },
                    { name: "Emma Thompson", username: "golf_emma", avatar: emmaAvatar, performance: "+31.2%", assets: "Ryder Cup, British Cycling", verified: true },
                    { name: "James Wilson", username: "jwilson_reds", avatar: jamesAvatar, performance: "+28.9%", assets: "Liverpool FC", verified: true },
                    { name: "Mike Rodriguez", username: "f1mike", avatar: mikeAvatar, performance: "+19.7%", assets: "McLaren F1, Ryder Cup", verified: false },
                    { name: "Maria Garcia", username: "maria_portfolio", avatar: f1FanAvatar, performance: "+22.1%", assets: "McLaren F1, Ryder Cup, British Cycling", verified: false }
                  ].map((investor) => (
                    <Card key={investor.username} className="card-professional border border-primary/20 bg-primary/5">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <img src={investor.avatar} alt={investor.name} className="w-12 h-12 rounded-full object-cover" />
                            <div>
                              <div className="flex items-center gap-1">
                                <h3 className="font-semibold text-card-foreground text-sm">{investor.name}</h3>
                                {investor.verified && <Badge variant="success" className="text-xs">✓</Badge>}
                              </div>
                              <p className="text-xs text-muted-foreground">@{investor.username}</p>
                            </div>
                          </div>
                          <Badge variant="success" className="text-xs">
                            {investor.performance}
                          </Badge>
                        </div>
                        
                        <div className="space-y-2">
                          <div>
                            <p className="text-xs text-muted-foreground">Focus Assets:</p>
                            <p className="text-xs font-medium text-card-foreground">{investor.assets}</p>
                          </div>
                          
                          <Button 
                            size="sm" 
                            className="w-full text-xs h-8"
                            onClick={() => navigate(`/community-profile/${investor.username}`)}
                          >
                            Track Investor
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Sarah Mitchell", username: "sarahm_investor", avatar: mariaAvatar, followers: "1.2K", verified: true },
                { name: "Mike Johnson", username: "mike_sports", avatar: mikeAvatar, followers: "987", verified: false },
                { name: "Emma Watson", username: "emma_invests", avatar: emmaAvatar, followers: "2.1K", verified: true },
                { name: "Alex Rodriguez", username: "alex_trader", avatar: alexAvatar, followers: "843", verified: false },
                { name: "James Liu", username: "james_portfolio", avatar: jamesAvatar, followers: "1.5K", verified: true },
                { name: "Maria Garcia", username: "maria_investor", avatar: f1FanAvatar, followers: "692", verified: false }
              ].map((member) => (
                <Card key={member.username} className="card-professional cursor-pointer hover:bg-accent/50 transition-colors"
                      onClick={() => navigate(`/community-profile/${member.username}`)}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <img src={member.avatar} alt={member.name} className="w-12 h-12 rounded-full object-cover" />
                      <div className="flex-1">
                        <div className="flex items-center gap-1">
                          <h3 className="font-semibold text-card-foreground">{member.name}</h3>
                          {member.verified && <Badge variant="success" className="text-xs">✓</Badge>}
                        </div>
                        <p className="text-sm text-muted-foreground">@{member.username}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{member.followers} followers</span>
                      <Button size="sm" variant="outline">Follow</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}