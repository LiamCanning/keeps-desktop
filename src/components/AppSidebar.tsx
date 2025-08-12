import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import liamAvatar from "@/assets/liam-avatar.png";
import { 
  Home, 
  Gift, 
  FileText, 
  PieChart, 
  TrendingUp, 
  User,
  ChevronDown,
  Building2,
  HelpCircle,
  Info,
  BarChart3,
  Menu,
  Users,
  BookOpen,
  ListChecks,
  BadgePercent,
  MessageSquareHeart
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Assets", url: "/assets", icon: Building2 },
  { title: "Benefits", url: "/benefits", icon: Gift },
  { title: "Content", url: "/content", icon: FileText },
  { title: "Community", url: "/community", icon: Users },
  { title: "Portfolio", url: "/portfolio", icon: PieChart },
  { title: "Trade", url: "/market", icon: TrendingUp },
  { title: "Account", url: "/my-account", icon: User },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(path);
  };

  const getNavClassName = (path: string) => {
    const base = "w-full justify-start transition-all duration-200 text-left h-12 rounded-lg";
    if (isActive(path)) {
      return `${base} bg-primary text-primary-foreground font-medium shadow-sm`;
    }
    return `${base} text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground`;
  };

  return (
    <Sidebar className={`${isCollapsed ? "w-16" : "w-64"} transition-all duration-300 bg-sidebar border-r border-sidebar-border`}>
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="flex items-center gap-3 p-2 h-auto hover:bg-sidebar-accent rounded-lg text-sidebar-foreground"
              >
                <img 
                  src="/lovable-uploads/dc831468-4f46-45d2-9dc9-6253f84112be.png" 
                  alt="Keeps" 
                  className="w-8 h-8 flex-shrink-0 object-contain"
                />
                {!isCollapsed && (
                  <>
                    <div className="text-left">
                      <h2 className="text-lg font-bold text-primary">keeps</h2>
                      <p className="text-xs text-sidebar-foreground/70">Sports Investment</p>
                    </div>
                    <ChevronDown className="w-4 h-4 text-sidebar-foreground/70 ml-auto" />
                  </>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="start" 
              className="w-56 bg-popover border border-border shadow-dropdown"
            >
              <DropdownMenuItem asChild>
                <NavLink to="/about-us" className="flex items-center gap-3 py-3 w-full">
                  <Info className="w-4 h-4" />
                  <span>About Us</span>
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <NavLink to="/how-it-works" className="flex items-center gap-3 py-3 w-full">
                  <ListChecks className="w-4 h-4" />
                  <span>How It Works</span>
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <NavLink to="/knowledge-base" className="flex items-center gap-3 py-3 w-full">
                  <BookOpen className="w-4 h-4" />
                  <span>Knowledge Base</span>
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <NavLink to="/fees-and-pricing" className="flex items-center gap-3 py-3 w-full">
                  <BadgePercent className="w-4 h-4" />
                  <span>Fees & Pricing</span>
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <NavLink to="/market-trends" className="flex items-center gap-3 py-3 w-full">
                  <BarChart3 className="w-4 h-4" />
                  <span>Market Trends</span>
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <NavLink to="/investor-stories" className="flex items-center gap-3 py-3 w-full">
                  <MessageSquareHeart className="w-4 h-4" />
                  <span>Investor Stories</span>
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <NavLink to="/referral-program" className="flex items-center gap-3 py-3 w-full">
                  <Users className="w-4 h-4" />
                  <span>Referral Program</span>
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <NavLink to="/support-hub" className="flex items-center gap-3 py-3 w-full">
                  <HelpCircle className="w-4 h-4" />
                  <span>Support Hub</span>
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <NavLink to="/for-organisations" className="flex items-center gap-3 py-3 w-full">
                  <Building2 className="w-4 h-4" />
                  <span>For Organisations</span>
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <NavLink to="/organisation-dashboard" className="flex items-center gap-3 py-3 w-full">
                  <TrendingUp className="w-4 h-4" />
                  <span>Organisation Dashboard</span>
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <NavLink to="/login" className="flex items-center gap-3 py-3 w-full">
                  <User className="w-4 h-4" />
                  <span>Login</span>
                </NavLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-3">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="p-0">
                    <NavLink to={item.url} className={getNavClassName(item.url)}>
                      <div className="flex items-center gap-3 w-full px-4">
                        <item.icon className="w-5 h-5 flex-shrink-0" />
                        {!isCollapsed && <span className="font-medium">{item.title}</span>}
                      </div>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-4">
        {!isCollapsed && (
          <NavLink to="/my-account" className="flex items-center gap-3 p-3 bg-sidebar-accent rounded-lg hover:bg-sidebar-accent/80 transition-colors cursor-pointer">
            <Avatar className="w-10 h-10">
              <AvatarImage src={liamAvatar} alt="Liam Canning" />
              <AvatarFallback className="bg-primary text-primary-foreground font-medium">LC</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">Liam Canning</p>
              <p className="text-xs text-sidebar-foreground/70 truncate">@liam_canning</p>
            </div>
          </NavLink>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}