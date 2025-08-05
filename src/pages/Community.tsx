import { useState } from "react";
import { MessageCircle, Users, Heart, Send, Plus, Edit3, Calendar, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612400d?w=64&h=64&fit=crop&crop=face",
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
      name: "Mike Rodriguez",
      username: "f1mike",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
      verified: false
    },
    content: "McLaren's technology centre tour was INSANE! Meeting the engineers and seeing the cars up close through my Platinum tier benefits. The income sharing returns are outperforming expectations too! 🏎️ #McLarenRacing",
    timestamp: "4h",
    likes: 89,
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
    content: "Ryder Cup debentures are 90% funded already! The exclusive access to tournaments and pro-am events through the Gold tier is worth every penny. Plus the annual strategic briefings give real insight into golf's future ⛳️",
    timestamp: "6h",
    likes: 156,
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
    content: "The Bronze tier community forum is already so valuable - connecting with other investors and getting monthly newsletters with exclusive insights. Amazing how even the entry level benefits deliver real value! 📈",
    timestamp: "8h", 
    likes: 92,
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
    content: "Silver tier perks are incredible! Quarterly video updates from Liverpool management and early access to new opportunities. The branded merchandise package was a nice touch too! You'll Never Walk Alone! 🔴 #YNWA #LiverpoolFC",
    timestamp: "12h",
    likes: 234,
    replies: 34,
    dealMention: "Liverpool FC"
  }
];

function CommunityPost({ post }: { post: CommunityPost }) {
  return (
    <Card className="card-professional">
      <CardContent className="p-6">
        <div className="flex gap-4">
          <img 
            src={post.user.avatar}
            alt={post.user.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-card-foreground">{post.user.name}</span>
              {post.user.verified && (
                <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
              <span className="text-muted-foreground text-sm">@{post.user.username}</span>
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
              <button className="flex items-center gap-1 hover:text-destructive transition-colors text-sm">
                <Heart className="w-4 h-4" />
                {post.likes}
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Community() {
  const [activeTab, setActiveTab] = useState("timeline");
  const [newPost, setNewPost] = useState("");
  const [posts, setPosts] = useState(communityPosts);
  const { toast } = useToast();

  const handlePostSubmit = () => {
    if (!newPost.trim()) return;

    const post: CommunityPost = {
      id: String(Date.now()),
      user: {
        name: "Liam Canning",
        username: "liamcanning",
        avatar: "/src/assets/liam-avatar.png",
        verified: true
      },
      content: newPost,
      timestamp: "now",
      likes: 0,
      replies: 0
    };

    setPosts([post, ...posts]);
    setNewPost("");
    
    toast({
      title: "Post published!",
      description: "Your post has been shared with the community.",
    });
  };

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Community</h1>
        <p className="text-lg text-foreground/80">Connect with fellow sports investors</p>
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
              <p className="font-semibold text-xl text-card-foreground">12,847</p>
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
              <p className="font-semibold text-xl text-card-foreground">247</p>
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
              <p className="font-semibold text-xl text-card-foreground">8.9k</p>
            </div>
          </div>
        </Card>
        
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Star className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Now</p>
              <p className="font-semibold text-xl text-card-foreground">1,247</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Community Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="timeline" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Community Timeline
          </TabsTrigger>
          <TabsTrigger value="post" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Create Post
          </TabsTrigger>
          <TabsTrigger value="peoples-posts" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            People's Posts
          </TabsTrigger>
        </TabsList>

        <TabsContent value="timeline" className="mt-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-foreground">Community Timeline</h2>
              <Badge variant="success">Live Updates</Badge>
            </div>
            
            <div className="space-y-4">
              {posts.map((post) => (
                <CommunityPost key={post.id} post={post} />
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="post" className="mt-6">
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Edit3 className="w-5 h-5" />
                Create a New Post
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <img 
                  src="/src/assets/liam-avatar.png"
                  alt="Your avatar"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1 space-y-4">
                  <Textarea
                    placeholder="Share your thoughts about sports investments, benefits you've received, or ask questions to the community..."
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    className="min-h-[120px] resize-none"
                  />
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {newPost.length}/280 characters
                    </span>
                    <Button 
                      onClick={handlePostSubmit}
                      disabled={!newPost.trim()}
                      className="btn-invest"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Post
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="peoples-posts" className="mt-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-foreground">All Community Posts</h2>
              <Badge variant="secondary">{posts.length} Posts</Badge>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {posts.map((post) => (
                <Card key={post.id} className="card-professional p-4">
                  <div className="flex items-start gap-3">
                    <img 
                      src={post.user.avatar}
                      alt={post.user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-sm text-card-foreground">{post.user.name}</span>
                        {post.user.verified && (
                          <div className="w-3 h-3 bg-primary rounded-full flex items-center justify-center">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                        <span className="text-xs text-muted-foreground">{post.timestamp}</span>
                      </div>
                      <p className="text-sm text-card-foreground leading-relaxed">{post.content}</p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          {post.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          {post.replies}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}