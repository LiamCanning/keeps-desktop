import { Building2, Users, TrendingUp, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: TrendingUp,
    title: "Sustainable Capital Raising",
    description: "Raise capital from passionate fans and investors who believe in your organisation's future."
  },
  {
    icon: Users,
    title: "Audience Growth",
    description: "Connect with new fans and expand your global reach through our investment community."
  },
  {
    icon: Building2,
    title: "Data Utilisation",
    description: "Access comprehensive analytics and insights to drive commercial decision-making."
  },
  {
    icon: Shield,
    title: "Brand Commercialisation",
    description: "Unlock new revenue streams and monetise your brand through innovative partnerships."
  }
];

const benefits = [
  "Direct access to passionate fan investors",
  "Transparent and regulated fundraising process",
  "Comprehensive investor relations support", 
  "Real-time analytics and performance tracking",
  "Global reach through digital platform",
  "Ongoing commercial partnership opportunities"
];

export default function ForOrganisations() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4 py-12">
        <Badge variant="secondary" className="mb-4">
          Capital Raising Solutions
        </Badge>
        <h1 className="text-4xl font-bold text-foreground">
          Raise Capital Sustainably with Keeps
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Partner with leading sports organisations to raise capital sustainably, grow your audience, 
          and leverage data utilisation to further commercialise your brand.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {features.map((feature, index) => (
          <Card key={index} className="bg-card border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-lg">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Why Partner with Keeps?
          </h2>
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 space-y-4">
            <Button size="lg" className="w-full sm:w-auto">
              Partner with Keeps
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <p className="text-sm text-muted-foreground">
              Or email us at partnerships@keeps.sport
            </p>
          </div>
        </div>

        <Card className="bg-card border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-center">Partnership Package</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">Custom Terms</p>
              <p className="text-muted-foreground">Tailored to your organisation</p>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Fundraising Target</span>
                <span className="font-medium">£1M - £100M+</span>
              </div>
              <div className="flex justify-between">
                <span>Investor Access</span>
                <span className="font-medium">Global Platform</span>
              </div>
              <div className="flex justify-between">
                <span>Support Level</span>
                <span className="font-medium">Dedicated Team</span>
              </div>
              <div className="flex justify-between">
                <span>Data & Analytics</span>
                <span className="font-medium">Real-time Dashboard</span>
              </div>
            </div>

            <Button className="w-full" size="lg">
              Start Partnership
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Case Studies */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center text-foreground mb-8">
          Trusted by Leading Organisations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Liverpool FC",
              type: "Football Club",
              amount: "£80M Raised",
              description: "Successfully raised capital through equity offering, expanding global fanbase and commercial opportunities.",
              logo: "/placeholder.svg"
            },
            {
              name: "McLaren Racing",
              type: "F1 Team",
              amount: "£100M Raised",
              description: "Innovative income sharing agreement providing fans exclusive access while funding technology development.",
              logo: "/placeholder.svg"
            },
            {
              name: "Ryder Cup",
              type: "Golf Tournament",
              amount: "£50M Raised",
              description: "Premium debenture programme offering guaranteed returns and exclusive tournament access to investors.",
              logo: "/placeholder.svg"
            }
          ].map((client, index) => (
            <Card key={index} className="bg-card border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{client.name}</h3>
                    <Badge variant="secondary">{client.type}</Badge>
                  </div>
                </div>
                <p className="text-primary font-semibold mb-3">{client.amount}</p>
                <p className="text-muted-foreground text-sm">{client.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}