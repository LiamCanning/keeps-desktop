import { useNavigate } from "react-router-dom";
import { ArrowLeft, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-background to-background/90">
      <Card className="max-w-md w-full bg-card border-0 shadow-elegant">
        <CardContent className="p-8 text-center space-y-6">
          {/* 404 Icon */}
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
            <Search className="w-12 h-12 text-primary" />
          </div>
          
          {/* Error Message */}
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-card-foreground">404</h1>
            <h2 className="text-xl font-semibold text-card-foreground">Page Not Found</h2>
            <p className="text-muted-foreground">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="space-y-3 pt-4">
            <Button 
              onClick={() => navigate("/")}
              className="w-full bg-gradient-to-r from-primary to-primary-glow hover:from-primary-hover hover:to-primary text-primary-foreground font-semibold"
            >
              <Home className="w-4 h-4 mr-2" />
              Go to Dashboard
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => navigate(-1)}
              className="w-full border-border hover:bg-accent"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
          
          {/* Help Text */}
          <div className="pt-4 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              Need help? Visit our{" "}
              <button 
                onClick={() => navigate("/support-hub")}
                className="text-primary hover:underline font-medium"
              >
                Support Hub
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}