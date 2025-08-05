import { ReactNode } from "react";
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
  return (
    <SidebarProvider defaultOpen>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Top Header */}
          <header className="h-16 border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-40">
            <div className="flex items-center justify-between h-full px-6">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="lg:hidden bg-sidebar-accent hover:bg-sidebar-accent/80">
                  <Menu className="w-5 h-5" />
                </SidebarTrigger>
                
                <div className="hidden md:flex items-center gap-2 max-w-sm">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search investments, teams..." 
                      className="pl-10 bg-muted/50 border-border/60 focus:bg-background"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="relative hover:bg-muted">
                  <Bell className="w-5 h-5" />
                  <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 text-xs bg-primary flex items-center justify-center">
                    3
                  </Badge>
                </Button>
                
                <div className="hidden lg:flex items-center gap-3 px-4 py-2 bg-muted rounded-lg">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Portfolio:</span>
                    <span className="font-semibold text-success ml-2">£302,355</span>
                    <span className="text-success text-xs ml-1">+20.9%</span>
                  </div>
                </div>
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