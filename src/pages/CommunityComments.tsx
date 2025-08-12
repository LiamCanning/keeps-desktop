import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, MessageCircle, Share2, Send } from "lucide-react";

// Import avatar images
import sarahAvatar from "@/assets/avatars/sarah-avatar.png";
import alexAvatar from "@/assets/avatars/alex-avatar.png";
import mariaAvatar from "@/assets/avatars/maria-avatar.png";
import jamesAvatar from "@/assets/avatars/james-avatar.png";
import liamAvatar from "@/assets/liam-avatar.png";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface Comment {
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
}

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

const originalPost: CommunityPost = {
  id: "1",
  user: {
    name: "Sarah Mitchell",
    username: "@sarahm_investor",
    avatar: sarahAvatar,
    verified: true
  },
  content: "Just invested in Liverpool FC through @keeps! The 4-8% annual dividends plus being part of the club's journey is incredible. This is the future of sports investment! ⚽🔥",
  timestamp: "2h",
  likes: 127,
  replies: 15,
  dealMention: "Liverpool FC"
};

const mockComments: Comment[] = [
  {
    id: "c1",
    user: {
      name: "Alex Johnson",
      username: "@alexj_sports",
      avatar: alexAvatar,
      verified: false
    },
    content: "Amazing! How was the verification process? Thinking of getting in myself.",
    timestamp: "1h",
    likes: 12
  },
  {
    id: "c2",
    user: {
      name: "Maria Santos",
      username: "@maria_investor",
      avatar: mariaAvatar,
      verified: true
    },
    content: "The returns on Liverpool have been incredible this season. Already seeing great performance on my investment!",
    timestamp: "45m",
    likes: 23
  },
  {
    id: "c3",
    user: {
      name: "James Wilson",
      username: "@jwilson_lfc",
      avatar: jamesAvatar,
      verified: false
    },
    content: "Welcome to the Liverpool investor community! The benefits are amazing - can't wait for you to experience your first VIP match day.",
    timestamp: "30m",
    likes: 8
  }
];

export default function CommunityComments() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [comments, setComments] = useState(mockComments);
  const [newComment, setNewComment] = useState("");
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(originalPost.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleSubmitComment = () => {
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      user: {
        name: "Liam Canning",
        username: "@liam_investor",
        avatar: liamAvatar,
        verified: true
      },
      content: newComment,
      timestamp: "now",
      likes: 0
    };

    setComments([comment, ...comments]);
    setNewComment("");
    toast.success("Comment posted successfully!");
  };

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => navigate('/community')}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Community
        </Button>
      </div>

      {/* Original Post */}
      <Card className="card-professional">
        <CardHeader className="pb-3">
          <div className="flex items-start gap-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src={originalPost.user.avatar} alt={originalPost.user.name} />
              <AvatarFallback>{originalPost.user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-card-foreground">{originalPost.user.name}</h3>
                {originalPost.user.verified && (
                  <Badge variant="success" className="w-4 h-4 p-0 rounded-full">✓</Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{originalPost.user.username} · {originalPost.timestamp}</p>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <p className="text-card-foreground leading-relaxed">{originalPost.content}</p>
          
          {originalPost.dealMention && (
            <Badge variant="outline" className="text-xs">
              {originalPost.dealMention}
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
            
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
              <MessageCircle className="w-4 h-4" />
              {comments.length}
            </Button>
            
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Add Comment */}
      <Card className="card-professional">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src={liamAvatar} alt="Liam" />
              <AvatarFallback>LC</AvatarFallback>
            </Avatar>
            <h3 className="font-semibold text-card-foreground">Add a comment</h3>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Share your thoughts..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="min-h-[80px] resize-none"
          />
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              {280 - newComment.length} characters remaining
            </p>
            <Button 
              onClick={handleSubmitComment}
              disabled={!newComment.trim() || newComment.length > 280}
              className="gap-2"
            >
              <Send className="w-4 h-4" />
              Comment
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Comments */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Comments ({comments.length})</h2>
        
        <div className="space-y-4">
          {comments.map((comment) => (
            <Card key={comment.id} className="card-professional">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={comment.user.avatar} alt={comment.user.name} />
                    <AvatarFallback>{comment.user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-card-foreground text-sm">{comment.user.name}</h4>
                      {comment.user.verified && (
                        <Badge variant="success" className="w-3 h-3 p-0 rounded-full">✓</Badge>
                      )}
                      <span className="text-xs text-muted-foreground">· {comment.timestamp}</span>
                    </div>
                    <p className="text-sm text-card-foreground">{comment.content}</p>
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground h-8 px-2">
                        <Heart className="w-3 h-3" />
                        {comment.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground h-8 px-2">
                        <MessageCircle className="w-3 h-3" />
                        Reply
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}