import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Send, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function RequestTeam() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    teamName: "",
    sport: "",
    reason: "",
    userEmail: "",
    userName: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!formData.teamName || !formData.reason || !formData.userEmail) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Create email body
      const emailBody = `
Team Request Submission

Team/Organisation Name: ${formData.teamName}
Sport/Category: ${formData.sport}
Requester Name: ${formData.userName}
Requester Email: ${formData.userEmail}

Reason for Request:
${formData.reason}

---
Submitted via Keeps Platform Team Request Form
      `.trim();

      // Create mailto link
      const subject = encodeURIComponent(`Team Request: ${formData.teamName}`);
      const body = encodeURIComponent(emailBody);
      const mailtoLink = `mailto:assetrequest@keeps.sport?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      toast.success("Email client opened! Please send the email to complete your request.");
      
      // Clear form
      setFormData({
        teamName: "",
        sport: "",
        reason: "",
        userEmail: "",
        userName: ""
      });
      
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="space-y-2">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => navigate('/assets')}
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Assets
        </Button>
        <h1 className="text-3xl font-bold text-gradient">Request Your Team</h1>
        <p className="text-lg text-muted-foreground">
          Tell us which sports organisation you'd like to see on our platform
        </p>
      </div>

      {/* Form Card */}
      <Card className="premium-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Plus className="w-5 h-5 text-primary" />
            </div>
            Team Request Form
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="teamName">Team/Organisation Name *</Label>
              <Input
                id="teamName"
                placeholder="e.g. Real Madrid, Golden State Warriors"
                value={formData.teamName}
                onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                className="bg-background"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="sport">Sport/Category</Label>
              <Input
                id="sport"
                placeholder="e.g. Football, Basketball, Tennis"
                value={formData.sport}
                onChange={(e) => setFormData({ ...formData, sport: e.target.value })}
                className="bg-background"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="userName">Your Name</Label>
              <Input
                id="userName"
                placeholder="Your full name"
                value={formData.userName}
                onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                className="bg-background"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="userEmail">Your Email *</Label>
              <Input
                id="userEmail"
                type="email"
                placeholder="your.email@example.com"
                value={formData.userEmail}
                onChange={(e) => setFormData({ ...formData, userEmail: e.target.value })}
                className="bg-background"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="reason">Why do you want to invest in this team? *</Label>
            <Textarea
              id="reason"
              placeholder="Tell us why you're interested in this particular team or organisation. Include details about their potential, market position, or personal connection..."
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              className="min-h-32 bg-background"
            />
          </div>

          <div className="pt-4 border-t border-border">
            <div className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                * Required fields
              </p>
              <Button 
                onClick={handleSubmit}
                disabled={isSubmitting}
                size="lg"
                className="min-w-32"
              >
                {isSubmitting ? "Submitting..." : (
                  <>
                    Submit Request
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Info Section */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-6">
          <h3 className="font-semibold text-lg mb-3">What happens next?</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>• Your request will be sent directly to our asset research team</p>
            <p>• We'll evaluate the commercial viability and investment potential</p>
            <p>• If selected, we'll begin due diligence and partnership discussions</p>
            <p>• You'll be notified when the asset becomes available for investment</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}