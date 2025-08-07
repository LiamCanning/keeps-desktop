import { ArrowLeft, Smartphone, Monitor, Tablet, MapPin, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface Device {
  id: string;
  name: string;
  type: "mobile" | "desktop" | "tablet";
  browser: string;
  location: string;
  lastActive: string;
  isCurrent: boolean;
}

export default function ConnectedDevices() {
  const navigate = useNavigate();
  
  const devices: Device[] = [
    {
      id: "1",
      name: "iPhone 15 Pro",
      type: "mobile",
      browser: "Safari 17.0",
      location: "London, UK",
      lastActive: "Active now",
      isCurrent: true
    },
    {
      id: "2",
      name: "MacBook Pro",
      type: "desktop",
      browser: "Chrome 118.0",
      location: "London, UK",
      lastActive: "2 hours ago",
      isCurrent: false
    },
    {
      id: "3",
      name: "iPad Pro",
      type: "tablet",
      browser: "Safari 17.0",
      location: "London, UK",
      lastActive: "1 day ago",
      isCurrent: false
    },
    {
      id: "4",
      name: "Windows PC",
      type: "desktop",
      browser: "Edge 118.0",
      location: "Manchester, UK",
      lastActive: "3 days ago",
      isCurrent: false
    }
  ];

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case "mobile":
        return Smartphone;
      case "tablet":
        return Tablet;
      default:
        return Monitor;
    }
  };

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <Button 
        variant="ghost" 
        onClick={() => navigate("/my-account")}
        className="flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Account
      </Button>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gradient">Connected Devices</h1>
        <p className="text-lg text-muted-foreground">Manage devices that have access to your account</p>
      </div>

      <Card className="card-professional">
        <CardHeader>
          <CardTitle>Account Security</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
            <p className="font-medium">Secure Access</p>
            <p className="text-sm text-muted-foreground mt-1">
              Review and manage all devices that have accessed your Keeps account. 
              Remove any devices you don't recognize for enhanced security.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Active Sessions</h2>
          <Button variant="outline" className="text-destructive hover:bg-destructive hover:text-destructive-foreground">
            Sign Out All Devices
          </Button>
        </div>
        
        {devices.map((device) => {
          const DeviceIcon = getDeviceIcon(device.type);
          
          return (
            <Card key={device.id} className="card-professional">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${device.isCurrent ? 'bg-success/10' : 'bg-muted/20'}`}>
                      <DeviceIcon className={`w-6 h-6 ${device.isCurrent ? 'text-success' : 'text-muted-foreground'}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{device.name}</h3>
                        {device.isCurrent && (
                          <Badge variant="success">Current Device</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{device.browser}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                        <MapPin className="w-3 h-3" />
                        <span>{device.location}</span>
                        <span>•</span>
                        <span>{device.lastActive}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {!device.isCurrent && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-destructive hover:bg-destructive hover:text-destructive-foreground"
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Remove
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="card-professional">
        <CardHeader>
          <CardTitle>Security Tips</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <div>
                <p className="font-medium">Always sign out from public devices</p>
                <p className="text-sm text-muted-foreground">Never leave your account logged in on shared computers</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <div>
                <p className="font-medium">Review devices regularly</p>
                <p className="text-sm text-muted-foreground">Check this page monthly to ensure all devices are yours</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <div>
                <p className="font-medium">Remove unknown devices immediately</p>
                <p className="text-sm text-muted-foreground">If you see a device you don't recognize, remove it and change your password</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}