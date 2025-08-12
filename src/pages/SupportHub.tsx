import { useState } from "react";
import { Search, HelpCircle, MessageCircle, Mail, Phone, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PageHeader from "@/components/PageHeader";

const faqs = [
  // Investment mechanics
  {
    question: "How do investments on Keeps work?",
    answer: "You choose an asset, review the terms, complete KYC/AML, and invest. Your holdings are recorded in your portfolio with digital confirmations and ongoing updates."
  },
  {
    question: "What asset types can I invest in?",
    answer: "We offer Equity, Income Sharing Agreements, and Debentures. Each has different risk profiles and time horizons."
  },
  {
    question: "How are risks disclosed?",
    answer: "Each deal page includes a Risks section with key risk factors. You should also review our Risk Disclosure page for a full framework."
  },

  // Secondary market
  {
    question: "How does the secondary market work?",
    answer: "You can list eligible holdings for sale or buy from other investors. Prices are set by sellers and influenced by demand. Standard processing fee applies."
  },
  {
    question: "How long do trades take to settle?",
    answer: "Most trades settle within 1–3 business days after payment confirmation, subject to compliance checks."
  },
  {
    question: "What are the secondary market fees?",
    answer: "We charge 2.5% on both buy and sell sides. Full pricing is shown before you confirm a trade."
  },

  // Tax
  {
    question: "How are my returns taxed?",
    answer: "Tax treatment depends on your personal circumstances and jurisdiction. Capital gains, dividends, or interest may apply. Consult a tax advisor."
  },
  {
    question: "Do you provide tax statements?",
    answer: "Yes. Annual summaries and downloadable statements are available in your portfolio for reporting purposes."
  },

  // Withdrawals
  {
    question: "How do I withdraw funds?",
    answer: "Go to Payment Methods to add a payout account, then request a withdrawal from your wallet."
  },
  {
    question: "How long do withdrawals take?",
    answer: "Bank transfers typically take 1–3 business days once processed. Additional verification may extend timelines."
  },

  // Support SLAs
  {
    question: "What are your support response times?",
    answer: "Live chat: within minutes during business hours. Email: within 24 hours. Critical incidents are prioritised with immediate escalation."
  },

  // Compliance & custody
  {
    question: "What KYC/AML checks do you perform?",
    answer: "We verify identity and address and screen against sanctions and PEP lists via industry-standard providers."
  },
  {
    question: "How are assets held in custody?",
    answer: "Investor holdings are recorded with segregated accounts and robust record‑keeping. Operational controls are reviewed regularly."
  },
  {
    question: "Are you FCA regulated?",
    answer: "We follow FCA‑aligned policies and disclosures. Certain activities may be conducted via regulated partners where required."
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
      <PageHeader
        title="Support Hub"
        subtitle="Get help with your investments and account"
        align="center"
      />

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
                <Button 
                  className="w-full"
                  onClick={() => {
                    if (option.title === "Live Chat") {
                      window.location.href = "/support-chat";
                    } else if (option.title === "Email Support") {
                      window.location.href = "mailto:support@keeps.sport";
                    }
                  }}
                >
                  {option.action}
                </Button>
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