import { Users, Target, Award, TrendingUp, MapPin, Mail, Linkedin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PageHeader from "@/components/PageHeader";

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b19e?w=400&h=400&fit=crop&crop=face",
    bio: "Former Goldman Sachs investment banker with 15 years in sports finance"
  },
  {
    name: "Marcus Chen",
    role: "Head of Investments",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Ex-McKinsey consultant specializing in sports business strategy"
  },
  {
    name: "Emma Williams",
    role: "Head of Technology",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Former fintech CTO with expertise in investment platforms"
  },
  {
    name: "David Rodriguez",
    role: "Head of Legal & Compliance",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Regulatory expert with deep knowledge of sports investment law"
  }
];

const values = [
  {
    icon: Target,
    title: "Transparency",
    description: "Clear, honest communication about all investment opportunities and risks"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering exceptional investment opportunities and customer service"
  },
  {
    icon: Users,
    title: "Accessibility",
    description: "Making sports investments accessible to everyone, not just institutional investors"
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "Pioneering new ways to invest in the sports industry through technology"
  }
];

const stats = [
  { label: "Assets Under Management", value: "£250M+" },
  { label: "Active Investors", value: "15,000+" },
  { label: "Completed Deals", value: "85+" },
  { label: "Average Annual Return", value: "12.4%" }
];

export default function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6 py-12">
        <img 
          src="/lovable-uploads/3c5b79e2-f293-41c2-8781-84b778710c31.png" 
          alt="Keeps Logo" 
          className="h-20 w-auto mx-auto mb-8 object-contain"
        />
        <PageHeader
          title="About Us"
          subtitle="We're on a mission to make sports investment accessible to everyone. Keeps has become the leading platform for retail sports investment in the UK."
          align="center"
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center bg-card border-0 shadow-lg">
            <CardContent className="p-6">
              <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mission & Story */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Keeps was founded when our team realised that the most exciting investment 
              opportunities in sports were only available to institutional investors and 
              ultra-high-net-worth individuals.
            </p>
            <p>
              We set out to change that by creating a platform that gives everyday investors 
              access to the same opportunities - from stadium developments to team equity, 
              from broadcast rights to merchandise revenues.
            </p>
            <p>
              Today, we're proud to have democratized sports investment, giving over 15,000 
              investors the chance to own a piece of the sports they love while building 
              their financial future.
            </p>
          </div>
        </div>
        
        <div className="space-y-6">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                To make sports investment accessible, transparent, and profitable for 
                everyone while supporting the growth of the sports industry.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-success/5 border-success/20">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground">
                A world where fans can financially participate in the success of their 
                favorite sports teams and athletes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Values */}
      <div>
        <h2 className="text-3xl font-bold text-center text-foreground mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="bg-card border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>


      {/* Contact */}
      <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-6">
            Have questions about our mission or want to learn more about our team?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="flex items-center gap-2"
              onClick={() => window.location.href = "mailto:info@keeps.sport"}
            >
              <Mail className="w-4 h-4" />
              Contact Us
            </Button>
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => window.open("https://www.linkedin.com/company/keeps-sport/posts/?feedView=all", "_blank")}
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            London, UK • New York, US
          </div>
        </CardContent>
      </Card>
    </div>
  );
}