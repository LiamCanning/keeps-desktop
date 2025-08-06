import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Bell, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const assets = [
    { name: "Liverpool FC", path: "/deal/liverpoolfc" },
    { name: "McLaren F1", path: "/deal/mclarenf1" },
    { name: "Ryder Cup", path: "/deal/rydercup" }
  ];

  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      const asset = assets.find(a => 
        a.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (asset) {
        navigate(asset.path);
        setSearchQuery("");
      }
    }
  };

  return (
    <SidebarProvider defaultOpen>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Top Header */}
          <header className="h-16 border-b border-sidebar-border bg-background/95 backdrop-blur-sm sticky top-0 z-40">
            <div className="flex items-center justify-between h-full px-6">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="lg:hidden bg-sidebar-accent hover:bg-sidebar-accent/80 text-foreground">
                  <Menu className="w-5 h-5" />
                </SidebarTrigger>
                
                <div className="flex items-center gap-2 flex-1 max-w-4xl">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input 
                      placeholder="search sports assets Liverpool FC, McLaren F1, Ryder Cup" 
                      className="pl-10 bg-card border-border/60 focus:bg-card text-card-foreground placeholder:text-muted-foreground w-full"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={handleSearch}
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="relative hover:bg-sidebar-accent text-foreground"
                  onClick={() => navigate('/notifications')}
                >
                  <Bell className="w-5 h-5" />
                  <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 text-xs bg-primary flex items-center justify-center">
                    3
                  </Badge>
                </Button>
              </div>
            </div>
          </header>
          
          {/* Main Content */}
          <main className="flex-1 overflow-auto scrollbar-styled">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}