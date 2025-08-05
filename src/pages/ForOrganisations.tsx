import { Building2, Users, TrendingUp, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Building2,
    title: "Corporate Investment Solutions",
    description: "Tailored investment opportunities for corporate entities and institutional investors."
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Advanced portfolio management tools for investment teams and fund managers."
  },
  {
    icon: TrendingUp,
    title: "Market Analytics",
    description: "Comprehensive market data and analytics for informed investment decisions."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security and compliance for institutional-grade transactions."
  }
];

const benefits = [
  "Priority access to exclusive deals",
  "Dedicated relationship manager",
  "Custom investment minimums",
  "Advanced reporting and analytics",
  "White-label investment platform",
  "API integration capabilities"
];

export default function ForOrganisations() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4 py-12">
        <Badge variant="secondary" className="mb-4">
          Enterprise Solutions
        </Badge>
        <h1 className="text-4xl font-bold text-foreground">
          Investment Solutions for Organisations
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Unlock exclusive sports investment opportunities with our enterprise-grade platform 
          designed for institutional investors, corporations, and investment teams.
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
            Why Choose Keeps for Your Organisation?
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
              Schedule a Demo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <p className="text-sm text-muted-foreground">
              Or call us at +44 20 7946 0958
            </p>
          </div>
        </div>

        <Card className="bg-card border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-center">Enterprise Package</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">Custom Pricing</p>
              <p className="text-muted-foreground">Based on your requirements</p>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Minimum Investment</span>
                <span className="font-medium">£100,000+</span>
              </div>
              <div className="flex justify-between">
                <span>Access Level</span>
                <span className="font-medium">Tier 1 (All Deals)</span>
              </div>
              <div className="flex justify-between">
                <span>Support</span>
                <span className="font-medium">24/7 Priority</span>
              </div>
              <div className="flex justify-between">
                <span>Reporting</span>
                <span className="font-medium">Advanced Analytics</span>
              </div>
            </div>

            <Button className="w-full" size="lg">
              Contact Sales Team
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
              name: "Premier Investment Group",
              type: "Investment Fund",
              amount: "£50M+ Invested",
              description: "Successfully diversified portfolio with sports assets across 15 different deals."
            },
            {
              name: "Corporate Pension Fund",
              type: "Pension Fund",
              amount: "£25M+ Invested",
              description: "Achieved 12% annual returns through strategic sports infrastructure investments."
            },
            {
              name: "Family Office Partners",
              type: "Family Office",
              amount: "£100M+ Invested",
              description: "Built comprehensive sports investment portfolio spanning multiple continents."
            }
          ].map((client, index) => (
            <Card key={index} className="bg-card border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-foreground mb-2">{client.name}</h3>
                <Badge variant="secondary" className="mb-3">{client.type}</Badge>
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