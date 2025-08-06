import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MessageCircle, Users, Star, Calendar, MapPin, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Import avatar images
import sarahAvatar from "@/assets/avatars/sarah-avatar.png";
import mikeAvatar from "@/assets/avatars/mike-avatar.png";
import emmaAvatar from "@/assets/avatars/emma-avatar.png";
import alexAvatar from "@/assets/avatars/alex-avatar.png";
import jamesAvatar from "@/assets/avatars/james-avatar.png";
import mariaAvatar from "@/assets/avatars/maria-avatar.png";

interface UserProfile {
  id: string;
  name: string;
  username: string;
  avatar: string;
  verified: boolean;
  bio: string;
  joinDate: string;
  location: string;
  posts: number;
  followers: number;
  following: number;
  investments: string[];
  tier: string;
}

const userProfiles: { [key: string]: UserProfile } = {
  "sarahm_investor": {
    id: "1",
    name: "Sarah Mitchell",
    username: "sarahm_investor",
    avatar: mariaAvatar,
    verified: true,
    bio: "Diamond tier investor passionate about football and sports innovation. Former financial analyst with 10+ years experience in sports investing.",
    joinDate: "March 2024",
    location: "London, UK",
    posts: 127,
    followers: 2847,
    following: 156,
    investments: ["Liverpool FC", "Ryder Cup", "McLaren F1"],
    tier: "Diamond"
  },
  "f1mike": {
    id: "2",
    name: "Mike Rodriguez",
    username: "f1mike",
    avatar: mikeAvatar,
    verified: false,
    bio: "F1 enthusiast and motorsport investor. Love the technology and innovation behind racing. Based in Barcelona.",
    joinDate: "April 2024",
    location: "Barcelona, Spain",
    posts: 89,
    followers: 1234,
    following: 234,
    investments: ["McLaren F1"],
    tier: "Platinum"
  },
  "golf_emma": {
    id: "3",
    name: "Emma Thompson",
    username: "golf_emma",
    avatar: emmaAvatar,
    verified: true,
    bio: "Golf professional turned investor. Passionate about growing the sport globally through smart investments.",
    joinDate: "February 2024",
    location: "Edinburgh, UK",
    posts: 156,
    followers: 3421,
    following: 89,
    investments: ["Ryder Cup"],
    tier: "Gold"
  },
  "alexc_sports": {
    id: "4",
    name: "Alex Chen",
    username: "alexc_sports",
    avatar: alexAvatar,
    verified: false,
    bio: "New to sports investing but excited about the opportunities. Learning from the community!",
    joinDate: "July 2024",
    location: "Singapore",
    posts: 23,
    followers: 89,
    following: 345,
    investments: ["Liverpool FC"],
    tier: "Bronze"
  },
  "jwilson_reds": {
    id: "5",
    name: "James Wilson",
    username: "jwilson_reds",
    avatar: jamesAvatar,
    verified: true,
    bio: "Lifelong Liverpool supporter and investor. You'll Never Walk Alone! Excited about the future of fan ownership.",
    joinDate: "January 2024",
    location: "Liverpool, UK",
    posts: 234,
    followers: 5623,
    following: 123,
    investments: ["Liverpool FC", "British Cycling"],
    tier: "Silver"
  }
};

export default function CommunityProfile() {
  const { username } = useParams();
  const navigate = useNavigate();
  
  const user = username ? userProfiles[username] : null;

  if (!user) {
    return (
      <div className="p-6 space-y-6 max-w-4xl mx-auto">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>
        <Card className="card-professional p-8 text-center">
          <h2 className="text-xl font-semibold text-card-foreground mb-2">User Not Found</h2>
          <p className="text-muted-foreground">The user profile you're looking for doesn't exist.</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Community
        </Button>
      </div>

      {/* Profile Header */}
      <Card className="card-professional">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col items-center md:items-start">
              <Avatar className="w-32 h-32 mb-4">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="text-2xl">{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <Button className="btn-invest w-full md:w-auto">
                <MessageCircle className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </div>
            
            <div className="flex-1 space-y-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold text-card-foreground">{user.name}</h1>
                  {user.verified && (
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                  <Badge variant={user.tier.toLowerCase() as any} className="ml-2">
                    {user.tier} Tier
                  </Badge>
                </div>
                <p className="text-lg text-muted-foreground">@{user.username}</p>
              </div>
              
              <p className="text-card-foreground leading-relaxed">{user.bio}</p>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {user.location}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Joined {user.joinDate}
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-card-foreground">{user.posts}</p>
                  <p className="text-sm text-muted-foreground">Posts</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-card-foreground">{user.followers.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Followers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-card-foreground">{user.following}</p>
                  <p className="text-sm text-muted-foreground">Following</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Investments */}
      <Card className="card-professional">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5" />
            Investment Portfolio
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3 flex-wrap">
            {user.investments.map((investment, index) => (
              <Badge key={index} variant="outline" className="px-3 py-1">
                {investment}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="card-professional">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-muted/20 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-card-foreground">Shared thoughts about {user.investments[0]} benefits</p>
                  <p className="text-sm text-muted-foreground">2 hours ago • 127 likes • 15 replies</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-muted/20 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-card-foreground">Joined the community discussion about market trends</p>
                  <p className="text-sm text-muted-foreground">1 day ago • 89 likes • 8 replies</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-muted/20 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-warning rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-card-foreground">Posted about investor tier benefits experience</p>
                  <p className="text-sm text-muted-foreground">3 days ago • 156 likes • 23 replies</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}