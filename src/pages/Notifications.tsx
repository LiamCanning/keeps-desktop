import { useState } from "react";
import { Bell, Heart, MessageCircle, TrendingUp, Calendar, Star, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Import avatar images
import sarahAvatar from "@/assets/avatars/sarah-avatar.png";
import mikeAvatar from "@/assets/avatars/mike-avatar.png";
import emmaAvatar from "@/assets/avatars/emma-avatar.png";
import alexAvatar from "@/assets/avatars/alex-avatar.png";
import jamesAvatar from "@/assets/avatars/james-avatar.png";
import mariaAvatar from "@/assets/avatars/maria-avatar.png";

// Import brand logos
import rolexLogo from "@/assets/brands/rolex-logo.png";
import santanderLogo from "@/assets/brands/santander-logo.png";
import mclarenLogo from "@/assets/logos/mclaren-racing-logo.png";
// Placeholder until new logos are uploaded
const liverpoolLogo = "/placeholder.svg";

interface Notification {
  id: string;
  type: "like" | "comment" | "user_message" | "brand_news" | "asset_update";
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  avatar?: string;
  brand?: string;
  brandLogo?: string;
}

const notifications: Notification[] = [
  {
    id: "1",
    type: "user_message",
    title: "Sarah Mitchell sent you a message",
    message: "Hey! I saw your post about Liverpool FC investment. Would love to chat about the benefits!",
    timestamp: "5m ago",
    read: false,
    avatar: sarahAvatar
  },
  {
    id: "2", 
    type: "like",
    title: "Mike Rodriguez liked your post",
    message: "Your post about McLaren F1 technology centre tour received a like",
    timestamp: "12m ago",
    read: false,
    avatar: mikeAvatar
  },
  {
    id: "3",
    type: "brand_news",
    title: "Rolex Partnership Update",
    message: "Exclusive Rolex benefits launched for Keeps investors – limited edition access and member offers",
    timestamp: "1h ago",
    read: false,
    brand: "Rolex",
    brandLogo: rolexLogo
  },
  {
    id: "4",
    type: "comment",
    title: "Emma Thompson commented on your post",
    message: "Great insights about the Ryder Cup benefits! The pro-am events are incredible.",
    timestamp: "2h ago",
    read: true,
    avatar: emmaAvatar
  },
  {
    id: "5",
    type: "asset_update",
    title: "Liverpool FC Performance Update",
    message: "Q3 financial results show 12% revenue growth. Your investment returns updated.",
    timestamp: "3h ago",
    read: false,
    brand: "Liverpool FC",
    brandLogo: liverpoolLogo
  },
  {
    id: "6",
    type: "brand_news", 
    title: "Santander Investment Opportunity",
    message: "New banking perks available for sports investors - exclusive mortgage rates",
    timestamp: "4h ago",
    read: true,
    brand: "Santander",
    brandLogo: santanderLogo
  },
  {
    id: "7",
    type: "user_message",
    title: "Alex Chen sent you a message",
    message: "Thanks for the recommendation on Bronze tier benefits. Just signed up!",
    timestamp: "6h ago",
    read: true,
    avatar: alexAvatar
  },
  {
    id: "8",
    type: "asset_update",
    title: "McLaren F1 Race Results",
    message: "P3 and P5 finish at Singapore GP! Performance bonuses distributed to investors.",
    timestamp: "8h ago",
    read: true,
    brand: "McLaren F1",
    brandLogo: mclarenLogo
  },
  {
    id: "9",
    type: "like",
    title: "James Wilson liked your comment",
    message: "Your comment on community post about Silver tier perks received a like",
    timestamp: "12h ago",
    read: true,
    avatar: jamesAvatar
  },
  {
    id: "10",
    type: "comment",
    title: "Maria Santos commented on your post",
    message: "Totally agree about the Liverpool returns this season! Amazing performance.",
    timestamp: "1d ago",
    read: true,
    avatar: mariaAvatar
  }
];

function NotificationCard({ notification }: { notification: Notification }) {
  const getIcon = () => {
    switch (notification.type) {
      case "like":
        return <Heart className="w-4 h-4 text-red-500" />;
      case "comment":
        return <MessageCircle className="w-4 h-4 text-blue-500" />;
      case "user_message":
        return <User className="w-4 h-4 text-green-500" />;
      case "brand_news":
        return <Star className="w-4 h-4 text-yellow-500" />;
      case "asset_update":
        return <TrendingUp className="w-4 h-4 text-purple-500" />;
      default:
        return <Bell className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getBadgeVariant = () => {
    switch (notification.type) {
      case "like":
        return "destructive";
      case "comment":
        return "default";
      case "user_message":
        return "success";
      case "brand_news":
        return "warning";
      case "asset_update":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <Card className={`card-professional transition-all duration-200 hover:shadow-md ${!notification.read ? 'border-primary/50 bg-primary/5' : ''}`}>
      <CardContent className="p-4">
        <div className="flex gap-3">
          <div className="flex-shrink-0">
            {notification.avatar ? (
              <img 
                src={notification.avatar}
                alt="User avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : notification.brandLogo ? (
              <img 
                src={notification.brandLogo}
                alt={notification.brand}
                className="w-10 h-10 rounded-lg object-cover"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                {getIcon()}
              </div>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium text-sm text-card-foreground truncate">
                    {notification.title}
                  </h4>
                  {!notification.read && (
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  )}
                </div>
                
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                  {notification.message}
                </p>
                
                <div className="flex items-center gap-2">
                  <Badge variant={getBadgeVariant()} className="text-xs">
                    {notification.type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {notification.timestamp}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Notifications() {
  const [activeTab, setActiveTab] = useState("all");
  const unreadCount = notifications.filter(n => !n.read).length;
  const userNotifications = notifications.filter(n => n.type === "like" || n.type === "comment" || n.type === "user_message");
  const brandNotifications = notifications.filter(n => n.type === "brand_news");
  const assetNotifications = notifications.filter(n => n.type === "asset_update");

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold text-foreground">Notifications</h1>
          {unreadCount > 0 && (
            <Badge className="bg-primary text-primary-foreground">
              {unreadCount} new
            </Badge>
          )}
        </div>
        <p className="text-lg text-muted-foreground">Stay updated with your investments and community</p>
      </div>

      {/* Notification Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Bell className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Notifications</p>
              <p className="font-semibold text-xl text-card-foreground">{notifications.length}</p>
            </div>
          </div>
        </Card>
        
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-success/20 rounded-lg">
              <User className="w-5 h-5 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">User Interactions</p>
              <p className="font-semibold text-xl text-card-foreground">{userNotifications.length}</p>
            </div>
          </div>
        </Card>
        
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-warning/20 rounded-lg">
              <Star className="w-5 h-5 text-warning" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Brand Updates</p>
              <p className="font-semibold text-xl text-card-foreground">{brandNotifications.length}</p>
            </div>
          </div>
        </Card>
        
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <TrendingUp className="w-5 h-5 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Asset Updates</p>
              <p className="font-semibold text-xl text-card-foreground">{assetNotifications.length}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Notification Tabs */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-4 border border-primary/20">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Mobile tab selector */}
          <div className="md:hidden mb-3">
            <Select value={activeTab} onValueChange={setActiveTab}>
              <SelectTrigger aria-label="Select notifications section">
                <SelectValue placeholder="Select section" />
              </SelectTrigger>
              <SelectContent className="z-50">
                <SelectItem value="all">All Notifications</SelectItem>
                <SelectItem value="users">User Activity</SelectItem>
                <SelectItem value="brands">Brand News</SelectItem>
                <SelectItem value="assets">Asset Updates</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <TabsList className="hidden md:grid w-full grid-cols-4 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 shadow-[var(--shadow-elegant)] rounded-md">
            <TabsTrigger value="all">All Notifications</TabsTrigger>
            <TabsTrigger value="users">User Activity</TabsTrigger>
            <TabsTrigger value="brands">Brand News</TabsTrigger>
            <TabsTrigger value="assets">Asset Updates</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-foreground">All Notifications</h2>
                <Button variant="outline" size="sm">
                  Mark All as Read
                </Button>
              </div>
              
              <div className="space-y-3">
                {notifications.map((notification) => (
                  <NotificationCard key={notification.id} notification={notification} />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="users" className="mt-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">User Activity</h2>
              <div className="space-y-3">
                {userNotifications.map((notification) => (
                  <NotificationCard key={notification.id} notification={notification} />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="brands" className="mt-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Brand News</h2>
              <div className="space-y-3">
                {brandNotifications.map((notification) => (
                  <NotificationCard key={notification.id} notification={notification} />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="assets" className="mt-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Asset Updates</h2>
              <div className="space-y-3">
                {assetNotifications.map((notification) => (
                  <NotificationCard key={notification.id} notification={notification} />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}