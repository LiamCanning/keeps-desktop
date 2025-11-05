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

export function InvestorMessagingAO() {
  const [messageType, setMessageType] = useState("announcement");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [targetAudience, setTargetAudience] = useState<string[]>([]);
  const [priority, setPriority] = useState("normal");
  const { toast } = useToast();

  const audienceOptions = [
    { id: "diamond", label: "Diamond Tier", count: "500" },
    { id: "platinum", label: "Platinum Tier", count: "1,500" }
  ];

  const messageTemplates = {
    announcement: {
      subject: "Important Update: Australian Open 2026 Tournament Schedule",
      message: "Dear [Investor's Name],\n\nWe are excited to share important updates regarding the Australian Open 2026 tournament. Following our successful sellout of all 2,000 debentures, we have confirmed enhanced benefits for all debenture holders:\n\n• Guaranteed access to all sessions during the 2-week tournament\n• Priority booking for Rod Laver Arena night sessions (62% of investors prefer evening matches)\n• Exclusive hospitality packages with 84% uptake rate among our community\n• Behind-the-scenes access and player meet-and-greet opportunities\n\nYour investment of £52.5M has positioned the Australian Open for continued growth and world-class experiences. We look forward to welcoming you to Melbourne Park in January 2026.\n\nBest regards,\nAustralian Open Investor Relations"
    },
    benefits: {
      subject: "Exclusive Raffle: Win Carlos Alcaraz's Match-Used Racquet",
      message: "Dear [Investor's Name],\n\nWe are thrilled to announce an exclusive raffle for Australian Open debenture holders: a chance to win Carlos Alcaraz's match-used racquet from the 2025 Australian Open Championship.\n\nHow to enter:\n• Diamond Tier: Automatically entered with 5 bonus entries\n• Platinum Tier: Automatically entered with 2 bonus entries\n• Entry window: Opens today and closes in 14 days\n• Winner announcement: Via email and dashboard notifications\n\nThis authentic Grand Slam memorabilia includes a certificate of authenticity and will be personally signed by Carlos. As one of our valued debenture holders, you are automatically eligible for this exclusive opportunity.\n\nAdditional prizes:\n• 2nd Prize: VIP court-side suite experience for 8 guests\n• 3rd Prize: Signed racquet collection from top 10 ATP/WTA players\n• 10 Runner-up Prizes: Premium AO merchandise packages (AUD $500 each)\n\nThank you for being part of the Australian Open family. Good luck!\n\nBest regards,\nAustralian Open Investor Relations"
    },
    performance: {
      subject: "Australian Open 2025 Performance Update & 2026 Preview",
      message: "Dear [Investor's Name],\n\nWe are pleased to share our latest performance metrics and achievements following the successful 2025 Australian Open tournament:\n\nKey Metrics:\n• 94.8% investor retention rate (highest among Grand Slam events)\n• 84% hospitality package utilization\n• 92% investor interest in player meet-and-greet experiences\n• 41.7% merchandise purchase rate through AO Store discount program\n• 8.7/10 average engagement score\n\nInvestor Experience Highlights:\n• 62% of investors preferred night sessions at Rod Laver Arena\n• 68% selected Rod Laver Arena as their primary venue\n• 76% participated in behind-the-scenes tours\n• 18.4% referral rate demonstrating strong satisfaction\n\nLooking ahead to 2026, we are enhancing our debenture holder benefits package with expanded player access programs and premium dining experiences. Your continued support drives our commitment to delivering world-class tennis and unforgettable experiences.\n\nThank you for your investment in Australian Open excellence.\n\nBest regards,\nAustralian Open Investor Relations"
    },
    store: {
      subject: "Exclusive: 25% Off Australian Open Store",
      message: "Dear [Investor's Name],\n\nAs a valued Australian Open debenture holder, enjoy an exclusive 25% discount on all official merchandise from the AO Store:\n\n• Championship towels and apparel\n• Player-signed memorabilia\n• Premium polo shirts and caps\n• Limited-edition collectibles\n• Court bags and accessories\n\nOffer Details:\n• Discount Code: AOINVESTOR25\n• Valid Until: 31st December 2025\n• Minimum Spend: AUD $75\n• Free shipping on orders over AUD $150\n\nWith a 41.7% purchase rate among our investor community, these exclusive items are popular and many limited-edition pieces sell out quickly. Shop now to secure your favorite Australian Open merchandise.\n\nVisit the AO Store online or at Melbourne Park.\n\nBest regards,\nAustralian Open Store Team"
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
              onClick={() => handleTemplateSelect("store")}
            >
              Store Discount
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => handleTemplateSelect("benefits")}
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
