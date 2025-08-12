import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MessageCircle, ThumbsUp, Send, Heart, Share2, Flag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { forumTopics, forumReplies } from "@/data/forumData";

export default function CommunityTopicDetail() {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const [newReply, setNewReply] = useState("");
  const [likedPosts, setLikedPosts] = useState(new Set());

  const topic = forumTopics.find(t => t.id === topicId);
  const replies = forumReplies.filter(r => r.topicId === topicId);

  if (!topic) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-xl font-semibold">Topic not found</h1>
        <Button onClick={() => navigate("/community-forum")} className="mt-4">
          Back to Forum
        </Button>
      </div>
    );
  }

  const handleLike = (postId: string) => {
    const newLiked = new Set(likedPosts);
    if (likedPosts.has(postId)) {
      newLiked.delete(postId);
    } else {
      newLiked.add(postId);
    }
    setLikedPosts(newLiked);
  };

  const handleReplySubmit = () => {
    if (newReply.trim()) {
      // Here would normally submit to backend
      setNewReply("");
    }
  };

  return (
    <div className="space-y-6 p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/community-forum")}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Forum
        </Button>
        <Badge variant="outline">{topic.category}</Badge>
      </div>

      {/* Main Topic */}
      <Card className="card-professional">
        <CardHeader>
          <div className="flex items-start gap-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src={topic.author.avatar} alt={topic.author.name} />
              <AvatarFallback>{topic.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-xl font-bold text-card-foreground">{topic.title}</h1>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="font-medium">{topic.author.name}</span>
                <span>•</span>
                <span>{topic.timestamp}</span>
                <span>•</span>
                <span>{topic.views} views</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-card-foreground leading-relaxed">{topic.content}</p>
          
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="outline" className="text-xs">
              #{topic.category}
            </Badge>
          </div>

          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleLike(`topic-${topic.id}`)}
                className={`flex items-center gap-2 ${likedPosts.has(`topic-${topic.id}`) ? 'text-red-500' : ''}`}
              >
                <Heart className={`w-4 h-4 ${likedPosts.has(`topic-${topic.id}`) ? 'fill-current' : ''}`} />
                {topic.likes + (likedPosts.has(`topic-${topic.id}`) ? 1 : 0)}
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                {replies.length} replies
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>
            <Button variant="ghost" size="sm" className="flex items-center gap-2 text-muted-foreground">
              <Flag className="w-4 h-4" />
              Report
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Replies */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Replies ({replies.length})</h2>
        
        {replies.map((reply) => (
          <Card key={reply.id} className="card-professional">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={reply.author.avatar} alt={reply.author.name} />
                  <AvatarFallback>{reply.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-card-foreground">{reply.author.name}</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{reply.timestamp}</span>
                  </div>
                  <p className="text-card-foreground leading-relaxed mb-3">{reply.content}</p>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLike(`reply-${reply.id}`)}
                      className={`flex items-center gap-2 ${likedPosts.has(`reply-${reply.id}`) ? 'text-red-500' : ''}`}
                    >
                      <Heart className={`w-4 h-4 ${likedPosts.has(`reply-${reply.id}`) ? 'fill-current' : ''}`} />
                      {reply.likes + (likedPosts.has(`reply-${reply.id}`) ? 1 : 0)}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground">
                      Reply
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Reply Form */}
      <Card className="card-professional">
        <CardHeader>
          <CardTitle className="text-lg">Add a Reply</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Share your thoughts on this topic..."
            value={newReply}
            onChange={(e) => setNewReply(e.target.value)}
            className="min-h-[100px]"
          />
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              Be respectful and constructive in your responses
            </p>
            <Button 
              onClick={handleReplySubmit}
              disabled={!newReply.trim()}
              className="btn-invest flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Post Reply
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}