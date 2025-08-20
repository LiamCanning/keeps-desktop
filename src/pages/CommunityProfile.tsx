import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Users, TrendingUp, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Import avatar images
import sarahAvatar from "@/assets/avatars/sarah-avatar.png";
import mikeAvatar from "@/assets/avatars/mike-avatar.png";
import emmaAvatar from "@/assets/avatars/emma-avatar.png";

interface UserProfile {
  name: string;
  username: string;
  avatar: string;
  bio: string;
  joinDate: string;
  location: string;
  posts: number;
  followers: string;
  following: string;
  investments: Array<{
    name: string;
    amount: string;
    returns: string;
    status: string;
  }>;
  tier: string;
  recentActivity: Array<{
    type: string;
    content: string;
    timestamp: string;
  }>;
}

const userProfiles: { [key: string]: UserProfile } = {
  "sarahm_investor": {
    name: "Sarah Mitchell",
    username: "sarahm_investor",
    avatar: sarahAvatar,
    bio: "Sports investment enthusiast • Liverpool FC season ticket holder • Building wealth through sports",
    joinDate: "March 2024",
    location: "Liverpool, UK",
    posts: 127,
    followers: "2.4k",
    following: "891",
    investments: [
      { name: "Liverpool FC", amount: "£2,500", returns: "+15.2%", status: "Active" },
      { name: "Ryder Cup", amount: "£1,200", returns: "+12.8%", status: "Active" },
    ],
    tier: "Gold",
    recentActivity: [
      { type: "investment", content: "Invested £500 more in Liverpool FC", timestamp: "2 hours ago" },
      { type: "post", content: "Shared insights about Premier League returns", timestamp: "1 day ago" },
      { type: "comment", content: "Commented on McLaren F1 discussion", timestamp: "3 days ago" },
    ]
  },
  "mike_sports": {
    name: "Mike Johnson", 
    username: "mike_sports",
    avatar: mikeAvatar,
    bio: "F1 technology investor • McLaren shareholder • Engineering background • Racing analytics expert",
    joinDate: "January 2024",
    location: "Birmingham, UK",
    posts: 89,
    followers: "1.8k",
    following: "654",
    investments: [
      { name: "McLaren F1", amount: "£15,000", returns: "+22.1%", status: "Active" },
      { name: "Liverpool FC", amount: "£3,000", returns: "+15.2%", status: "Active" },
      { name: "Ohio State", amount: "£2,000", returns: "+8.5%", status: "Active" },
    ],
    tier: "Diamond",
    recentActivity: [
      { type: "post", content: "Posted McLaren technology centre visit experience", timestamp: "4 hours ago" },
      { type: "investment", content: "Increased McLaren position by £5,000", timestamp: "1 week ago" },
      { type: "comment", content: "Discussed F1 investment strategies and technical analysis", timestamp: "2 weeks ago" },
    ]
  },
  "emma_invests": {
    name: "Emma Watson",
    username: "emma_invests", 
    avatar: emmaAvatar,
    bio: "Sports investment strategist • Ryder Cup VIP • Building diverse portfolio • Golf content creator",
    joinDate: "February 2024",
    location: "Edinburgh, Scotland",
    posts: 156,
    followers: "3.1k",
    following: "423",
    investments: [
      { name: "Ryder Cup", amount: "£8,000", returns: "+12.8%", status: "Active" },
      { name: "Cardiff City", amount: "£2,500", returns: "+9.4%", status: "Active" },
      { name: "Hexagon Cup", amount: "£1,500", returns: "+7.2%", status: "Active" },
    ],
    tier: "Platinum",
    recentActivity: [
      { type: "post", content: "Analyzed Ryder Cup investment performance and strategy insights", timestamp: "6 hours ago" },
      { type: "investment", content: "Added £2,000 to Ryder Cup position", timestamp: "3 days ago" },
      { type: "comment", content: "Shared golf market insights and tournament predictions", timestamp: "1 week ago" },
    ]
  }
};

export default function CommunityProfile() {
  const { username } = useParams<{ username: string }>();
  const navigate = useNavigate();
  const user = username ? userProfiles[username] : null;

  if (!user) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-muted-foreground">User Not Found</h2>
        <p className="text-muted-foreground mt-2">The user profile you're looking for doesn't exist.</p>
        <Button onClick={() => navigate('/community')} className="mt-4">
          Back to Community
        </Button>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" onClick={() => navigate('/community')}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Community
        </Button>
      </div>

      {/* Profile Header */}
      <Card className="card-professional">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row gap-6">
            <Avatar className="w-32 h-32 mx-auto md:mx-0">
              <AvatarImage src={user.avatar} />
              <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                {user.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 space-y-4">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                  <h1 className="text-3xl font-bold text-gradient">{user.name}</h1>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    {user.tier}
                  </Badge>
                </div>
                <p className="text-lg text-muted-foreground">@{user.username}</p>
              </div>
              
              <p className="text-foreground leading-relaxed">{user.bio}</p>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {user.location}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Joined {user.joinDate}
                </div>
              </div>
              
              <div className="flex gap-6 text-center md:text-left">
                <div>
                  <p className="font-bold text-lg text-foreground">{user.posts}</p>
                  <p className="text-sm text-muted-foreground">Posts</p>
                </div>
                <div>
                  <p className="font-bold text-lg text-foreground">{user.followers}</p>
                  <p className="text-sm text-muted-foreground">Followers</p>
                </div>
                <div>
                  <p className="font-bold text-lg text-foreground">{user.following}</p>
                  <p className="text-sm text-muted-foreground">Following</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Investment Portfolio */}
      <Card className="card-professional">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-success" />
            Investment Portfolio
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {user.investments.map((investment, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-border/30">
              <div>
                <p className="font-semibold text-foreground">{investment.name}</p>
                <p className="text-sm text-muted-foreground">{investment.amount} invested</p>
              </div>
              <div className="text-right">
                <Badge variant="success" className="mb-1">
                  {investment.returns}
                </Badge>
                <p className="text-sm text-muted-foreground">{investment.status}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="card-professional">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-primary" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {user.recentActivity.map((activity, index) => (
            <div key={index} className="flex gap-4 p-3 hover:bg-muted/30 rounded-lg transition-colors">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                activity.type === 'investment' ? 'bg-success/20 text-success' :
                activity.type === 'post' ? 'bg-primary/20 text-primary' :
                'bg-warning/20 text-warning'
              }`}>
                {activity.type === 'investment' && <TrendingUp className="w-4 h-4" />}
                {activity.type === 'post' && <MessageCircle className="w-4 h-4" />}
                {activity.type === 'comment' && <Users className="w-4 h-4" />}
              </div>
              <div className="flex-1">
                <p className="text-foreground">{activity.content}</p>
                <p className="text-sm text-muted-foreground">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}