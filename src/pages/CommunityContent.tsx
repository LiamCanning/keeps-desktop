import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, MessageCircle, Share2, TrendingUp, Users, Calendar, Plus, Send } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

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
  isLiked?: boolean;
}

const communityPosts: CommunityPost[] = [
  {
    id: "1",
    user: {
      name: "Sarah Mitchell",
      username: "@sarahm_investor",
      avatar: "/src/assets/liam-avatar.png",
      verified: true
    },
    content: "Just invested in Liverpool FC through @keeps! The 4-8% annual dividends plus being part of the club's journey is incredible. This is the future of sports investment! ⚽🔥",
    timestamp: "2h",
    likes: 127,
    replies: 15,
    dealMention: "Liverpool FC"
  },
  {
    id: "2",
    user: {
      name: "Mike Rodriguez",
      username: "@f1mike",
      avatar: "/src/assets/liam-avatar.png",
      verified: false
    },
    content: "McLaren's technology centre tour was INSANE! Meeting Lando Norris was a dream come true. The Keeps platform benefits are next level 🏎️ #McLarenRacing",
    timestamp: "4h",
    likes: 89,
    replies: 8,
    dealMention: "McLaren F1"
  },
  {
    id: "3",
    user: {
      name: "Emma Thompson",
      username: "@golf_emma",
      avatar: "/src/assets/liam-avatar.png",
      verified: true
    },
    content: "Ryder Cup debentures are 90% funded already! The exclusive access to tournaments and pro-am events is worth every penny. Golf investment at its finest ⛳",
    timestamp: "6h",
    likes: 156,
    replies: 23,
    dealMention: "Ryder Cup"
  },
  {
    id: "4",
    user: {
      name: "Alex Chen",
      username: "@alexc_sports",
      avatar: "/src/assets/liam-avatar.png",
      verified: false
    },
    content: "The AI portfolio analysis on Keeps is spot on! Recommended diversifying away from my heavy McLaren position. 18.4% returns beating the market by 2.1% 📊",
    timestamp: "8h",
    likes: 92,
    replies: 12
  }
];

function CommunityPost({ post }: { post: CommunityPost }) {
  const [liked, setLiked] = useState(post.isLiked || false);
  const [likeCount, setLikeCount] = useState(post.likes);
  const navigate = useNavigate();

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleCommentClick = () => {
    navigate(`/article/${post.id}`);
  };

  return (
    <Card className="card-professional">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12">
            <AvatarImage src={post.user.avatar} alt={post.user.name} />
            <AvatarFallback>{post.user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-card-foreground">{post.user.name}</h3>
              {post.user.verified && (
                <Badge variant="success" className="w-4 h-4 p-0 rounded-full">✓</Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{post.user.username} · {post.timestamp}</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-card-foreground leading-relaxed">{post.content}</p>
        
        {post.dealMention && (
          <Badge variant="outline" className="text-xs">
            {post.dealMention}
          </Badge>
        )}
        
        <div className="flex items-center justify-between pt-2 border-t">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleLike}
            className={`gap-2 ${liked ? 'text-red-500' : 'text-muted-foreground'}`}
          >
            <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
            {likeCount}
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleCommentClick}
            className="gap-2 text-muted-foreground"
          >
            <MessageCircle className="w-4 h-4" />
            {post.replies}
          </Button>
          
          <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
            <Share2 className="w-4 h-4" />
            Share
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function CommunityContent() {
  const [posts, setPosts] = useState(communityPosts);
  const [newPost, setNewPost] = useState("");

  const handleSubmitPost = () => {
    if (!newPost.trim()) return;

    const post: CommunityPost = {
      id: Date.now().toString(),
      user: {
        name: "Liam Canning",
        username: "@liam_investor",
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
    toast.success("Post shared successfully!");
  };

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      {/* Header */}
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
              <Calendar className="w-5 h-5 text-success" />
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
              <p className="font-semibold text-xl text-card-foreground">8,932</p>
            </div>
          </div>
        </Card>
        
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Now</p>
              <p className="font-semibold text-xl text-card-foreground">1,204</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Create Post */}
      <Card className="card-professional">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/src/assets/liam-avatar.png" alt="Liam" />
              <AvatarFallback>LC</AvatarFallback>
            </Avatar>
            <h3 className="font-semibold text-card-foreground">Share with the community</h3>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="What's happening in your sports investment journey?"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            className="min-h-[100px] resize-none"
          />
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              {280 - newPost.length} characters remaining
            </p>
            <Button 
              onClick={handleSubmitPost}
              disabled={!newPost.trim() || newPost.length > 280}
              className="gap-2"
            >
              <Send className="w-4 h-4" />
              Post
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Community Timeline */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Community Timeline</h2>
        
        <div className="space-y-4">
          {posts.map((post) => (
            <CommunityPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}