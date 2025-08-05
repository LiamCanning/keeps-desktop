import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, TrendingUp, Users, MessageCircle, Heart, Share2, MapPin, Link as LinkIcon, Calendar as CalendarIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserProfile {
  id: string;
  name: string;
  username: string;
  avatar: string;
  verified: boolean;
  bio: string;
  location: string;
  website: string;
  joinDate: string;
  followers: number;
  following: number;
  totalInvestments: number;
  portfolioValue: string;
  returns: number;
  publicHoldings: Array<{
    asset: string;
    logo: string;
    quantity: number;
    currentValue: string;
    returns: number;
  }>;
  recentActivity: Array<{
    id: string;
    type: "investment" | "sale" | "post";
    content: string;
    timestamp: string;
    asset?: string;
    amount?: string;
  }>;
}

const userProfiles: Record<string, UserProfile> = {
  "sarahm_investor": {
    id: "1",
    name: "Sarah Mitchell",
    username: "sarahm_investor",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612400d?w=64&h=64&fit=crop&crop=face",
    verified: true,
    bio: "Sports investment enthusiast | Liverpool FC fan | Building wealth through sports equity 🏆⚽️",
    location: "London, UK",
    website: "sarah-mitchell.com",
    joinDate: "2024-03-15",
    followers: 2847,
    following: 156,
    totalInvestments: 8,
    portfolioValue: "£23,750",
    returns: 18.4,
    publicHoldings: [
      {
        asset: "Liverpool FC",
        logo: "/lovable-uploads/001420e5-847e-4145-addb-8bec6a73c63e.png",
        quantity: 15,
        currentValue: "£8,250",
        returns: 10.0
      },
      {
        asset: "McLaren Racing",
        logo: "/lovable-uploads/e0b86990-9fbb-421a-b689-b9e7ac420908.png",
        quantity: 8,
        currentValue: "£9,600",
        returns: 20.0
      },
      {
        asset: "Ryder Cup",
        logo: "/lovable-uploads/1075da4a-349e-420a-b050-72aad7295b63.png",
        quantity: 1,
        currentValue: "£5,900",
        returns: 18.7
      }
    ],
    recentActivity: [
      {
        id: "1",
        type: "investment",
        content: "Invested £2,500 in Liverpool FC equity",
        timestamp: "2h",
        asset: "Liverpool FC",
        amount: "£2,500"
      },
      {
        id: "2",
        type: "post",
        content: "Just invested in Liverpool FC through @keeps! The 4-8% annual dividends plus being part of the club's journey is incredible. This is the future of sports investment! ⚽️🔥",
        timestamp: "2h"
      },
      {
        id: "3",
        type: "sale",
        content: "Sold 3 shares of McLaren Racing at £1,200 per share",
        timestamp: "1d",
        asset: "McLaren Racing",
        amount: "£3,600"
      }
    ]
  },
  "f1mike": {
    id: "2",
    name: "Mike Rodriguez",
    username: "f1mike",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
    verified: false,
    bio: "F1 fanatic since 1995 | McLaren investor | Technology enthusiast | Racing weekends = the best weekends 🏎️",
    location: "Barcelona, Spain",
    website: "",
    joinDate: "2024-01-20",
    followers: 1243,
    following: 89,
    totalInvestments: 12,
    portfolioValue: "£31,200",
    returns: 22.1,
    publicHoldings: [
      {
        asset: "McLaren Racing",
        logo: "/lovable-uploads/e0b86990-9fbb-421a-b689-b9e7ac420908.png",
        quantity: 25,
        currentValue: "£30,000",
        returns: 20.0
      }
    ],
    recentActivity: [
      {
        id: "1",
        type: "post",
        content: "McLaren's technology centre tour was INSANE! Meeting Lando Norris was a dream come true. The Keeps platform benefits are next level 🏎️ #McLarenRacing",
        timestamp: "4h"
      },
      {
        id: "2",
        type: "investment",
        content: "Increased McLaren Racing position by £5,000",
        timestamp: "2d",
        asset: "McLaren Racing",
        amount: "£5,000"
      }
    ]
  }
};

export default function UserProfile() {
  const { username } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [isFollowing, setIsFollowing] = useState(false);

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
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>

      {/* Profile Header */}
      <Card className="card-professional">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl font-bold text-card-foreground">{user.name}</h1>
                  {user.verified && (
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                
                <p className="text-muted-foreground">@{user.username}</p>
                
                <p className="text-card-foreground leading-relaxed max-w-md">{user.bio}</p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  {user.location && (
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{user.location}</span>
                    </div>
                  )}
                  {user.website && (
                    <div className="flex items-center gap-1">
                      <LinkIcon className="w-4 h-4" />
                      <a href={`https://${user.website}`} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                        {user.website}
                      </a>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="w-4 h-4" />
                    <span>Joined {new Date(user.joinDate).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 text-sm">
                  <div>
                    <span className="font-bold text-card-foreground">{user.following.toLocaleString()}</span>
                    <span className="text-muted-foreground ml-1">Following</span>
                  </div>
                  <div>
                    <span className="font-bold text-card-foreground">{user.followers.toLocaleString()}</span>
                    <span className="text-muted-foreground ml-1">Followers</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button
                variant={isFollowing ? "outline" : "default"}
                onClick={() => setIsFollowing(!isFollowing)}
                className={isFollowing ? "" : "btn-invest"}
              >
                {isFollowing ? "Following" : "Follow"}
              </Button>
              <Button variant="outline" size="icon">
                <MessageCircle className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Portfolio Value</p>
              <p className="font-semibold text-xl text-card-foreground">{user.portfolioValue}</p>
            </div>
          </div>
        </Card>
        
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-success/20 rounded-lg">
              <TrendingUp className="w-5 h-5 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Returns</p>
              <p className="font-semibold text-xl text-card-foreground">+{user.returns}%</p>
            </div>
          </div>
        </Card>
        
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-warning/20 rounded-lg">
              <Users className="w-5 h-5 text-warning" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Investments</p>
              <p className="font-semibold text-xl text-card-foreground">{user.totalInvestments}</p>
            </div>
          </div>
        </Card>
        
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Member Since</p>
              <p className="font-semibold text-xl text-card-foreground">{new Date(user.joinDate).getFullYear()}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Profile Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="holdings">Public Holdings</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Public Holdings Preview */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Public Holdings
                  <Badge variant="secondary">{user.publicHoldings.length} assets</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {user.publicHoldings.slice(0, 3).map((holding, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <img src={holding.logo} alt={holding.asset} className="w-8 h-8 rounded-lg object-cover" />
                      <div>
                        <p className="font-medium text-card-foreground">{holding.asset}</p>
                        <p className="text-sm text-muted-foreground">{holding.quantity} shares</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-card-foreground">{holding.currentValue}</p>
                      <Badge variant={holding.returns >= 0 ? "success" : "destructive"} className="text-xs">
                        {holding.returns >= 0 ? "+" : ""}{holding.returns}%
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Activity Preview */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {user.recentActivity.slice(0, 3).map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <div className={`p-2 rounded-lg ${
                      activity.type === "investment" ? "bg-primary/20" :
                      activity.type === "sale" ? "bg-success/20" : "bg-warning/20"
                    }`}>
                      {activity.type === "investment" && <TrendingUp className="w-4 h-4 text-primary" />}
                      {activity.type === "sale" && <TrendingUp className="w-4 h-4 text-success" />}
                      {activity.type === "post" && <MessageCircle className="w-4 h-4 text-warning" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-card-foreground">{activity.content}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.timestamp}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="holdings" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {user.publicHoldings.map((holding, index) => (
              <Card key={index} className="card-professional">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={holding.logo} alt={holding.asset} className="w-12 h-12 rounded-lg object-cover" />
                      <div>
                        <CardTitle className="text-lg">{holding.asset}</CardTitle>
                        <p className="text-sm text-muted-foreground">{holding.quantity} shares</p>
                      </div>
                    </div>
                    <Badge variant={holding.returns >= 0 ? "success" : "destructive"}>
                      {holding.returns >= 0 ? "+" : ""}{holding.returns}%
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Current Value</span>
                      <span className="font-semibold text-card-foreground">{holding.currentValue}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="activity" className="mt-6">
          <div className="space-y-4">
            {user.recentActivity.map((activity) => (
              <Card key={activity.id} className="card-professional p-4">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${
                    activity.type === "investment" ? "bg-primary/20" :
                    activity.type === "sale" ? "bg-success/20" : "bg-warning/20"
                  }`}>
                    {activity.type === "investment" && <TrendingUp className="w-5 h-5 text-primary" />}
                    {activity.type === "sale" && <TrendingUp className="w-5 h-5 text-success" />}
                    {activity.type === "post" && <MessageCircle className="w-5 h-5 text-warning" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-card-foreground leading-relaxed">{activity.content}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span>{activity.timestamp}</span>
                      {activity.asset && (
                        <Badge variant="secondary" className="text-xs">
                          {activity.asset}
                        </Badge>
                      )}
                      {activity.amount && (
                        <span className="font-medium">{activity.amount}</span>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}