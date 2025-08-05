import { NavLink, useLocation } from "react-router-dom";
import { 
  Home, 
  Gift, 
  FileText, 
  PieChart, 
  TrendingUp, 
  User,
  LogOut,
  Settings
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import keepsLogo from "@/assets/keeps-logo.png";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Benefits", url: "/benefits", icon: Gift },
  { title: "Content", url: "/content", icon: FileText },
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
    const base = "w-full justify-start transition-all duration-200 text-left";
    if (isActive(path)) {
      return `${base} bg-primary/20 text-primary border-r-2 border-primary font-medium`;
    }
    return `${base} text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground`;
  };

  return (
    <Sidebar className={`${isCollapsed ? "w-16" : "w-64"} transition-all duration-300`}>
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <img 
            src={keepsLogo} 
            alt="Keeps" 
            className="w-8 h-8 flex-shrink-0"
          />
          {!isCollapsed && (
            <div>
              <h2 className="text-lg font-bold text-primary">keeps</h2>
              <p className="text-xs text-muted-foreground">Sports Investment</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupLabel className={isCollapsed ? "sr-only" : ""}>
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="p-0">
                    <NavLink to={item.url} className={getNavClassName(item.url)}>
                      <div className="flex items-center gap-3 w-full py-3 px-3 rounded-lg">
                        <item.icon className="w-5 h-5 flex-shrink-0" />
                        {!isCollapsed && <span>{item.title}</span>}
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
        <div className="space-y-2">
          {!isCollapsed && (
            <div className="flex items-center gap-3 p-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="bg-primary text-primary-foreground">LC</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">Liam Canning</p>
                <p className="text-xs text-muted-foreground truncate">@liam_canning</p>
              </div>
            </div>
          )}
          
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size={isCollapsed ? "icon" : "sm"}
              className="text-sidebar-foreground hover:text-sidebar-accent-foreground"
            >
              <Settings className="w-4 h-4" />
              {!isCollapsed && <span className="ml-2">Settings</span>}
            </Button>
            
            {isCollapsed ? (
              <Button
                variant="ghost"
                size="icon"
                className="text-sidebar-foreground hover:text-sidebar-accent-foreground"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                className="text-sidebar-foreground hover:text-sidebar-accent-foreground"
              >
                <LogOut className="w-4 h-4" />
                <span className="ml-2">Sign Out</span>
              </Button>
            )}
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}