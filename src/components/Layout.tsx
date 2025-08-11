import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Footer } from "@/components/Footer";
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import keepsLogo from "@/assets/keeps-logo.png";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const assets = [
    { name: "Liverpool FC", path: "/assets/liverpool-fc" },
    { name: "McLaren Racing", path: "/assets/mclaren-racing" },
    { name: "Ryder Cup", path: "/assets/ryder-cup" }
  ];

  const filteredAssets = assets.filter(asset =>
    asset.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      const asset = assets.find(a => 
        a.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (asset) {
        navigate(asset.path);
        setSearchQuery("");
        setShowDropdown(false);
      }
    }
  };

  const handleAssetSelect = (asset: typeof assets[0]) => {
    navigate(asset.path);
    setSearchQuery("");
    setShowDropdown(false);
  };

  return (
    <SidebarProvider defaultOpen>
      {(() => {
        return (
          <ResizablePanelGroup
            direction="horizontal"
            className="min-h-screen w-full bg-background"
            
            onLayout={(sizes) => localStorage.setItem("app:layout", JSON.stringify(sizes))}
          >
            <ResizablePanel defaultSize={20} minSize={12} maxSize={40} className="hidden lg:flex">
              <AppSidebar />
            </ResizablePanel>
            <ResizableHandle withHandle className="hidden lg:flex" />
            <ResizablePanel defaultSize={80} minSize={40}>
              <div className="flex min-h-screen w-full flex-col">
                {/* Top Header */}
                <header className="h-16 border-b border-sidebar-border bg-background/95 backdrop-blur-sm sticky top-0 z-40">
                  <div className="flex items-center justify-between h-full px-6">
                    <div className="flex items-center gap-2 sm:gap-4 flex-1">
                      <SidebarTrigger className="lg:hidden bg-sidebar-accent hover:bg-sidebar-accent/80 text-foreground min-h-[44px] min-w-[44px] flex items-center justify-center">
                        <img src={keepsLogo} alt="Keeps menu" className="w-8 h-8 object-contain" />
                      </SidebarTrigger>
                      
                      <div className="flex items-center gap-2 flex-1 max-w-full">
                        <div className="relative flex-1 max-w-2xl">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input 
                            placeholder="search sports assets" 
                            className="pl-10 bg-card border-border/60 focus:bg-card text-card-foreground placeholder:text-muted-foreground w-full h-10 sm:h-10 text-base sm:text-sm"
                            value={searchQuery}
                            onChange={(e) => {
                              setSearchQuery(e.target.value);
                              setShowDropdown(e.target.value.length > 0);
                            }}
                            onKeyDown={handleSearch}
                            onFocus={() => setShowDropdown(searchQuery.length > 0)}
                            onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
                          />
                          
                          {showDropdown && filteredAssets.length > 0 && (
                            <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-md shadow-lg z-50 max-h-48 sm:max-h-64 overflow-y-auto">
                              {filteredAssets.map((asset) => (
                                <button
                                  key={asset.path}
                                  className="w-full px-4 py-3 sm:py-2 text-left hover:bg-accent hover:text-accent-foreground text-card-foreground text-base sm:text-sm min-h-[44px] sm:min-h-auto flex items-center"
                                  onClick={() => handleAssetSelect(asset)}
                                >
                                  {asset.name}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 sm:gap-4">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="relative hover:bg-sidebar-accent text-foreground min-h-[44px] min-w-[44px] flex items-center justify-center"
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
                  <div className="min-h-full flex flex-col">
                    <div className="flex-1">
                      {children}
                    </div>
                    <Footer />
                  </div>
                </main>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        );
      })()}
    </SidebarProvider>
  );
}