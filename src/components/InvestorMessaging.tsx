import { useState } from "react";
import { Send, Users, Bell, MessageSquare, Target, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

export function InvestorMessaging() {
  const [messageType, setMessageType] = useState("announcement");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [targetAudience, setTargetAudience] = useState<string[]>([]);
  const [priority, setPriority] = useState("normal");
  const { toast } = useToast();

  const audienceOptions = [
    { id: "all", label: "All Investors", count: "8,750" },
    { id: "diamond", label: "Diamond Tier (£75k+)", count: "175" },
    { id: "platinum", label: "Platinum Tier (£35k+)", count: "525" },
    { id: "gold", label: "Gold Tier (£15k+)", count: "1,050" },
    { id: "silver", label: "Silver Tier (£5k+)", count: "2,625" },
    { id: "bronze", label: "Bronze Tier (£1k+)", count: "4,375" }
  ];

  const messageTemplates = {
    announcement: {
      subject: "Important Update from McLaren F1",
      message: "Dear McLaren Investors,\n\nWe have an important update to share with you regarding..."
    },
    benefits: {
      subject: "Exclusive McLaren Store Offer - 20% Off",
      message: "Dear Valued Investor,\n\nAs a thank you for your continued support, we're pleased to offer you an exclusive 20% discount on all McLaren merchandise..."
    },
    performance: {
      subject: "Q4 Performance Update",
      message: "Dear Investors,\n\nWe're excited to share our latest performance metrics and achievements..."
    },
    raffle: {
      subject: "Benefits: Win Lando Norris' Worn F1 Suit – Silverstone",
      message: "Dear Investor,\n\nWe're thrilled to announce an exclusive raffle for Keeps investors: a chance to win Lando Norris' race-worn F1 suit from the British Grand Prix at Silverstone.\n\nHow to enter:\n• Diamond & Platinum tiers: Automatically entered\n• Gold & Silver tiers: Complete McLaren fan survey to provide valuable data insights (link will be sent separately)\n• Bronze tier: Not eligible for this exclusive offering\n• Entry window: Opens today and closes in 14 days\n• Winner announcement: Via email and dashboard notifications\n\nTop-tier investors are automatically included as a premium benefit, while other tiers can earn entry by sharing their preferences and engagement data to help us better understand our investor community.\n\nThank you for being part of McLaren's journey. Good luck!\n\nBest regards,\nMcLaren Racing Investor Relations"
    }
  };

  const handleTemplateSelect = (template: keyof typeof messageTemplates) => {
    setSubject(messageTemplates[template].subject);
    setMessage(messageTemplates[template].message);
  };

  const handleAudienceChange = (audienceId: string, checked: boolean) => {
    setTargetAudience(prev => 
      checked 
        ? [...prev, audienceId]
        : prev.filter(id => id !== audienceId)
    );
  };

  const handleSendMessage = () => {
    if (!subject || !message || targetAudience.length === 0) {
      toast({
        title: "Incomplete Message",
        description: "Please fill in all required fields and select an audience.",
        variant: "destructive",
      });
      return;
    }

    const totalRecipients = targetAudience.reduce((sum, audienceId) => {
      const audience = audienceOptions.find(opt => opt.id === audienceId);
      return sum + (audience ? parseInt(audience.count.replace(",", "")) : 0);
    }, 0);

    toast({
      title: "Message Sent Successfully",
      description: `Your message has been sent to ${totalRecipients.toLocaleString()} investors.`,
    });

    // Reset form
    setSubject("");
    setMessage("");
    setTargetAudience([]);
    setMessageType("announcement");
    setPriority("normal");
  };

  return (
    <Card className="card-professional">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5" />
          Investor Communications
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Message Type Selection */}
        <div className="space-y-3">
          <Label className="text-base font-medium">Message Type</Label>
          <RadioGroup value={messageType} onValueChange={setMessageType}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 p-3 border rounded-lg">
                <RadioGroupItem value="announcement" id="announcement" />
                <Label htmlFor="announcement" className="flex items-center gap-2 cursor-pointer">
                  <Bell className="w-4 h-4" />
                  Announcement
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-3 border rounded-lg">
                <RadioGroupItem value="benefits" id="benefits" />
                <Label htmlFor="benefits" className="flex items-center gap-2 cursor-pointer">
                  <Target className="w-4 h-4" />
                  Benefits & Offers
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-3 border rounded-lg">
                <RadioGroupItem value="performance" id="performance" />
                <Label htmlFor="performance" className="flex items-center gap-2 cursor-pointer">
                  <Calendar className="w-4 h-4" />
                  Performance Update
                </Label>
              </div>
            </div>
          </RadioGroup>
        </div>

        {/* Quick Templates */}
        <div className="space-y-3">
          <Label className="text-base font-medium">Quick Templates</Label>
          <div className="flex gap-2 flex-wrap">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => handleTemplateSelect("announcement")}
            >
              Important Update
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => handleTemplateSelect("benefits")}
            >
              Store Discount
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => handleTemplateSelect("raffle")}
            >
              Benefits
            </Button>
          </div>
        </div>

        {/* Subject Line */}
        <div className="space-y-2">
          <Label htmlFor="subject">Subject Line *</Label>
          <Input
            id="subject"
            placeholder="Enter message subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        {/* Message Content */}
        <div className="space-y-2">
          <Label htmlFor="message">Message Content *</Label>
          <Textarea
            id="message"
            placeholder="Type your message here..."
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        {/* Target Audience */}
        <div className="space-y-3">
          <Label className="text-base font-medium">Target Audience *</Label>
          <div className="space-y-2">
            {audienceOptions.map((option) => (
              <div key={option.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id={option.id}
                    checked={targetAudience.includes(option.id)}
                    onCheckedChange={(checked) => handleAudienceChange(option.id, checked as boolean)}
                  />
                  <Label htmlFor={option.id} className="cursor-pointer">
                    {option.label}
                  </Label>
                </div>
                <Badge variant="secondary">{option.count} investors</Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Priority Level */}
        <div className="space-y-3">
          <Label className="text-base font-medium">Priority Level</Label>
          <RadioGroup value={priority} onValueChange={setPriority}>
            <div className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="normal" id="normal" />
                <Label htmlFor="normal">Normal</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="high" id="high" />
                <Label htmlFor="high">High Priority</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="urgent" id="urgent" />
                <Label htmlFor="urgent">Urgent</Label>
              </div>
            </div>
          </RadioGroup>
        </div>

        {/* Send Button */}
        <div className="pt-4 border-t">
          <Button 
            className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
            onClick={handleSendMessage}
          >
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}