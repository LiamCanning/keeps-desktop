import { useState } from "react";
import { Search, HelpCircle, MessageCircle, Mail, Phone, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Are these real assets?",
    answer: "Yes, all assets on Keeps are real sports organisations with verified ownership structures. We work directly with clubs, teams, and sports entities to offer genuine investment opportunities."
  },
  {
    question: "Is Keeps regulated?",
    answer: "Keeps operates under UK financial regulations and works with authorised intermediaries. All investments are subject to regulatory oversight and investor protection measures."
  },
  {
    question: "What is the minimum investment amount?",
    answer: "Most investments start from £500, making sports assets accessible to a wider range of investors. Some premium opportunities may have higher minimums."
  },
  {
    question: "How do I receive returns on my investments?",
    answer: "Returns are distributed according to each investment's terms. This may include annual dividends, profit sharing, or capital appreciation depending on the asset type."
  },
  {
    question: "Can I sell my investments?",
    answer: "Yes, we offer a secondary market where you can sell your investments to other users. Liquidity depends on demand and the specific terms of your investment."
  },
  {
    question: "What exclusive benefits do I receive?",
    answer: "Benefits vary by investment tier and include priority booking for events, meet & greet opportunities, exclusive merchandise, VIP access, and unique experiences with your chosen teams."
  },
  {
    question: "How are asset valuations determined?",
    answer: "Asset valuations are conducted by independent third-party professionals using industry-standard methodologies including revenue multiples, comparable transactions, and discounted cash flow analysis."
  },
  {
    question: "What fees does Keeps charge?",
    answer: "Keeps charges a transparent 2.5% processing fee on investments. There are no hidden charges, and all fees are clearly disclosed before you invest."
  },
  {
    question: "How do I track my investment performance?",
    answer: "Use your portfolio dashboard to monitor real-time performance, view detailed analytics, and track returns. You'll also receive regular updates on your investments."
  },
  {
    question: "Is my personal information secure?",
    answer: "Yes, we use bank-grade encryption and security measures to protect your data. We're compliant with GDPR and follow strict data protection protocols."
  }
];

const contactOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant help from our support team",
    action: "Start Chat",
    availability: "9AM - 6PM, Mon-Fri"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us a detailed message",
    action: "Send Email",
    availability: "Response within 24 hours"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with an advisor",
    action: "Call Now",
    availability: "+44 20 7946 0958"
  }
];

export default function SupportHub() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4 py-8">
        <h1 className="text-4xl font-bold text-foreground">Support Hub</h1>
        <p className="text-xl text-muted-foreground">
          Get help with your investments and account
        </p>
      </div>

      {/* Search */}
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search for help articles, FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactOptions.map((option, index) => (
          <Card key={index} className="bg-card border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <option.icon className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-lg">{option.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">{option.description}</p>
              <div className="space-y-2">
                <Button className="w-full">{option.action}</Button>
                <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                  <Clock className="w-3 h-3" />
                  {option.availability}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* System Status */}
      <Card className="bg-success/5 border-success/20">
        <CardContent className="p-6">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-success" />
            <div>
              <h3 className="font-semibold text-foreground">All Systems Operational</h3>
              <p className="text-sm text-muted-foreground">
                Platform and payment systems are running normally
              </p>
            </div>
            <Badge variant="success" className="ml-auto">Online</Badge>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <HelpCircle className="w-6 h-6" />
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
              <AccordionTrigger className="text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {filteredFaqs.length === 0 && searchQuery && (
          <Card className="text-center p-8">
            <CardContent>
              <HelpCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No results found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or contact our support team
              </p>
              <Button variant="outline">Contact Support</Button>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Help Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Getting Started", count: 8 },
          { title: "Investments", count: 12 },
          { title: "Account Management", count: 6 },
          { title: "Payments & Withdrawals", count: 5 }
        ].map((category, index) => (
          <Card key={index} className="bg-card border-0 shadow hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-foreground mb-2">{category.title}</h3>
              <p className="text-sm text-muted-foreground">{category.count} articles</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}