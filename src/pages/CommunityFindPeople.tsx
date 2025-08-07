import { useState } from "react";
import { ArrowLeft, Search, Users, UserPlus, Star, TrendingUp, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

interface CommunityMember {
  id: string;
  name: string;
  username: string;
  avatar: string;
  verified: boolean;
  followers: string;
  following: string;
  posts: number;
  investmentFocus: string[];
  portfolioReturn: string;
  tier: "Bronze" | "Silver" | "Gold" | "Diamond";
  bio: string;
  location: string;
  joinedDate: string;
  isFollowing: boolean;
}

const communityMembers: CommunityMember[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    username: "sarahm_investor",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612400d?w=64&h=64&fit=crop&crop=face",
    verified: true,
    followers: "2.1K",
    following: "487",
    posts: 156,
    investmentFocus: ["Liverpool FC", "McLaren F1"],
    portfolioReturn: "+24.3%",
    tier: "Diamond",
    bio: "Professional sports investor | Liverpool fan since birth | F1 enthusiast",
    location: "London, UK",
    joinedDate: "Jan 2024",
    isFollowing: false
  },
  {
    id: "2",
    name: "Mike Rodriguez",
    username: "f1mike",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
    verified: false,
    followers: "1.8K",
    following: "623",
    posts: 234,
    investmentFocus: ["McLaren F1", "Ryder Cup"],
    portfolioReturn: "+19.7%",
    tier: "Gold",
    bio: "F1 fanatic | Sports investment strategist | Technology sector background",
    location: "Barcelona, Spain",
    joinedDate: "Feb 2024",
    isFollowing: true
  },
  {
    id: "3",
    name: "Emma Thompson",
    username: "golf_emma",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=64&h=64&fit=crop&crop=face",
    verified: true,
    followers: "3.2K",
    following: "291",
    posts: 89,
    investmentFocus: ["Ryder Cup", "British Cycling"],
    portfolioReturn: "+31.2%",
    tier: "Diamond",
    bio: "Golf professional turned investor | Ryder Cup expert | Portfolio optimization",
    location: "Edinburgh, Scotland",
    joinedDate: "Mar 2024",
    isFollowing: false
  },
  {
    id: "4",
    name: "Alex Chen",
    username: "alexc_sports",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
    verified: false,
    followers: "987",
    following: "1.2K",
    posts: 78,
    investmentFocus: ["Liverpool FC", "British Cycling"],
    portfolioReturn: "+16.8%",
    tier: "Silver",
    bio: "Data analyst | Sports investment research | Liverpool season ticket holder",
    location: "Manchester, UK",
    joinedDate: "Apr 2024",
    isFollowing: false
  },
  {
    id: "5",
    name: "James Wilson",
    username: "jwilson_reds",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&h=64&fit=crop&crop=face",
    verified: true,
    followers: "4.7K",
    following: "156",
    posts: 267,
    investmentFocus: ["Liverpool FC"],
    portfolioReturn: "+28.9%",
    tier: "Diamond",
    bio: "Liverpool FC historian | Sports investment pioneer | YNWA since 1985",
    location: "Liverpool, UK",
    joinedDate: "Jan 2024",
    isFollowing: true
  },
  {
    id: "6",
    name: "Maria Garcia",
    username: "maria_portfolio",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
    verified: false,
    followers: "1.4K",
    following: "734",
    posts: 123,
    investmentFocus: ["McLaren F1", "Ryder Cup", "British Cycling"],
    portfolioReturn: "+22.1%",
    tier: "Gold",
    bio: "Diversified sports portfolio | Risk management expert | Formula 1 paddock access",
    location: "Madrid, Spain",
    joinedDate: "May 2024",
    isFollowing: false
  }
];

export default function CommunityFindPeople() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("followers");
  const [filterTier, setFilterTier] = useState("all");
  const [members, setMembers] = useState(communityMembers);

  const toggleFollow = (memberId: string) => {
    setMembers(prev => prev.map(member => 
      member.id === memberId 
        ? { ...member, isFollowing: !member.isFollowing }
        : member
    ));
  };

  const filteredMembers = members
    .filter(member => {
      const matchesSearch = 
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.investmentFocus.some(focus => 
          focus.toLowerCase().includes(searchTerm.toLowerCase())
        );
      
      const matchesTier = filterTier === "all" || member.tier === filterTier;
      
      return matchesSearch && matchesTier;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "followers":
          return parseFloat(b.followers.replace(/[K,]/g, '')) - parseFloat(a.followers.replace(/[K,]/g, ''));
        case "returns":
          return parseFloat(b.portfolioReturn.replace(/[+%]/g, '')) - parseFloat(a.portfolioReturn.replace(/[+%]/g, ''));
        case "posts":
          return b.posts - a.posts;
        case "joined":
          return new Date(b.joinedDate).getTime() - new Date(a.joinedDate).getTime();
        default:
          return 0;
      }
    });

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Diamond": return "text-purple-600";
      case "Gold": return "text-yellow-600";
      case "Silver": return "text-gray-600";
      case "Bronze": return "text-orange-600";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => navigate("/community")}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-gradient">Find People</h1>
          <p className="text-lg text-foreground/80">Discover fellow sports investors</p>
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="card-professional">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search by name, username, bio, or investment focus..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <TrendingUp className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="followers">Most Followers</SelectItem>
                <SelectItem value="returns">Best Returns</SelectItem>
                <SelectItem value="posts">Most Posts</SelectItem>
                <SelectItem value="joined">Recently Joined</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterTier} onValueChange={setFilterTier}>
              <SelectTrigger className="w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by tier" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Tiers</SelectItem>
                <SelectItem value="Diamond">Diamond</SelectItem>
                <SelectItem value="Gold">Gold</SelectItem>
                <SelectItem value="Silver">Silver</SelectItem>
                <SelectItem value="Bronze">Bronze</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Members</p>
              <p className="font-semibold text-xl text-card-foreground">{members.length}</p>
            </div>
          </div>
        </Card>
        
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-success/20 rounded-lg">
              <UserPlus className="w-5 h-5 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Following</p>
              <p className="font-semibold text-xl text-card-foreground">
                {members.filter(m => m.isFollowing).length}
              </p>
            </div>
          </div>
        </Card>
        
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-warning/20 rounded-lg">
              <Star className="w-5 h-5 text-warning" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Diamond Tier</p>
              <p className="font-semibold text-xl text-card-foreground">
                {members.filter(m => m.tier === "Diamond").length}
              </p>
            </div>
          </div>
        </Card>
        
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-accent/20 rounded-lg">
              <TrendingUp className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Avg Returns</p>
              <p className="font-semibold text-xl text-card-foreground">+23.2%</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Results */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-card-foreground">
            {searchTerm ? `Search Results` : `All Members`}
          </h2>
          <Badge variant="secondary">
            {filteredMembers.length} Members
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member) => (
            <Card key={member.id} className="card-professional hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Profile Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-16 h-16 cursor-pointer" 
                            onClick={() => navigate(`/community-profile/${member.username}`)}>
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-card-foreground cursor-pointer hover:text-primary"
                              onClick={() => navigate(`/community-profile/${member.username}`)}>
                            {member.name}
                          </h3>
                          {member.verified && <Badge variant="success" className="text-xs">✓</Badge>}
                        </div>
                        <p className="text-sm text-muted-foreground">@{member.username}</p>
                        <Badge variant="outline" className={`text-xs mt-1 ${getTierColor(member.tier)}`}>
                          {member.tier} Tier
                        </Badge>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant={member.isFollowing ? "outline" : "default"}
                      onClick={() => toggleFollow(member.id)}
                      className="flex items-center gap-2"
                    >
                      <UserPlus className="w-4 h-4" />
                      {member.isFollowing ? "Following" : "Follow"}
                    </Button>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-muted-foreground line-clamp-2">{member.bio}</p>

                  {/* Investment Focus */}
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-card-foreground">Investment Focus:</p>
                    <div className="flex flex-wrap gap-1">
                      {member.investmentFocus.map((focus, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {focus}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-3 border-t border-border">
                    <div className="text-center">
                      <p className="font-semibold text-card-foreground">{member.portfolioReturn}</p>
                      <p className="text-xs text-muted-foreground">Portfolio Return</p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-card-foreground">{member.followers}</p>
                      <p className="text-xs text-muted-foreground">Followers</p>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p>📍 {member.location}</p>
                    <p>📅 Joined {member.joinedDate}</p>
                    <p>💬 {member.posts} posts</p>
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