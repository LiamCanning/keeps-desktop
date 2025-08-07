import { useNavigate } from "react-router-dom";
import { TrendingUp, Shield, Trophy, Users, Star, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/ui/optimized-image";
import liverpoolLogo from "@/assets/brands/liverpool-fc-logo.png";
import mclarenLogo from "@/assets/brands/mclaren-logo.png";
import ryderCupLogo from "@/assets/logos/ryder-cup-logo.png";

export default function Index() {
  const navigate = useNavigate();

  const featuredDeals = [
    {
      id: "liverpool-fc",
      name: "Liverpool FC",
      logo: liverpoolLogo,
      title: "Fund Anfield stadium capacity to 75,000",
      type: "Equity Investment",
      amount: "£40,000,000",
      progress: 75,
      investors: "10,250",
      minEntry: "£500",
      description: "Own a stake in one of the world's most successful football clubs with global reach and consistent performance."
    },
    {
      id: "mclaren-f1",
      name: "McLaren Racing",
      logo: mclarenLogo,
      title: "McLaren Racing Technology Development",
      type: "Income Sharing Agreement",
      amount: "£50,000,000",
      progress: 92,
      investors: "8,750",
      minEntry: "£1,000",
      description: "Invest in Formula 1 excellence with McLaren's racing team, technology innovation, and global partnerships."
    },
    {
      id: "ryder-cup",
      name: "Ryder Cup",
      logo: ryderCupLogo,
      title: "Ryder Cup 2025 Debenture Programme",
      type: "Debentures",
      amount: "£42,500,000",
      progress: 90,
      investors: "2,340",
      minEntry: "£2,500",
      description: "Debenture investment in golf's most prestigious team tournament with guaranteed returns and exclusive access."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="success" className="text-lg px-6 py-2">
              <Shield className="w-4 h-4 mr-2" />
              FCA Regulated Platform
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gradient leading-tight">
              Invest in the World's
              <br />
              Greatest Sports Assets
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Own a piece of legendary teams and tournaments. Access exclusive benefits while building your sports investment portfolio.
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <Button size="lg" className="btn-invest text-lg px-8 py-4" onClick={() => navigate('/dashboard')}>
                <TrendingUp className="w-5 h-5 mr-2" />
                Start Investing
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4" onClick={() => navigate('/about-us')}>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Investment Opportunities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">Featured Investment Opportunities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Premium sports assets with proven track records and exclusive investor benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredDeals.map((deal) => (
              <Card 
                key={deal.id} 
                className="card-professional group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
                onClick={() => navigate(`/assets/${deal.id}`)}
              >
                <div className="p-6 space-y-6">
                  {/* Asset Header */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white rounded-xl shadow-sm border">
                      <img 
                        src={deal.logo} 
                        alt={`${deal.name} logo`}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {deal.name}
                      </h3>
                      <Badge variant="success" className="mt-1">Live Investment</Badge>
                    </div>
                  </div>

                  {/* Investment Details */}
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {deal.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg">
                        <div className="text-sm text-muted-foreground">Target Amount</div>
                        <div className="font-bold text-lg text-primary">{deal.amount}</div>
                      </div>
                      <div className="p-3 bg-gradient-to-br from-success/5 to-success/10 rounded-lg">
                        <div className="text-sm text-muted-foreground">Min. Entry</div>
                        <div className="font-bold text-lg text-success">{deal.minEntry}</div>
                      </div>
                    </div>

                    <div className="p-3 bg-muted/20 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Investment Progress</span>
                        <span className="text-sm text-muted-foreground">{deal.progress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${deal.progress}%` }}
                        />
                      </div>
                      <div className="flex justify-between items-center mt-2 text-xs text-muted-foreground">
                        <span>{deal.investors} investors</span>
                        <span>{deal.type}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button 
                    className="w-full btn-invest group-hover:scale-[1.02] transition-transform"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/assets/${deal.id}`);
                    }}
                  >
                    View Deal
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-20 bg-gradient-to-r from-muted/20 to-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">Why Invest in Sports Assets?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sports investments offer unique opportunities for both financial returns and exclusive experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="card-professional text-center p-8">
              <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Strong Returns</h3>
              <p className="text-muted-foreground">
                Sports assets have shown consistent growth with potential for capital appreciation and dividend income.
              </p>
            </Card>

            <Card className="card-professional text-center p-8">
              <div className="p-4 bg-success/10 rounded-full w-fit mx-auto mb-6">
                <Trophy className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-xl font-bold mb-4">Exclusive Benefits</h3>
              <p className="text-muted-foreground">
                Access VIP experiences, premium seats, meet-and-greets, and behind-the-scenes access.
              </p>
            </Card>

            <Card className="card-professional text-center p-8">
              <div className="p-4 bg-warning/10 rounded-full w-fit mx-auto mb-6">
                <Users className="w-8 h-8 text-warning" />
              </div>
              <h3 className="text-xl font-bold mb-4">Global Community</h3>
              <p className="text-muted-foreground">
                Join a community of passionate sports investors and like-minded enthusiasts worldwide.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold text-foreground">Ready to Start Your Sports Investment Journey?</h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of investors already backing the world's greatest sports assets
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <Button size="lg" className="btn-invest text-lg px-8 py-4" onClick={() => navigate('/dashboard')}>
                <Star className="w-5 h-5 mr-2" />
                View Live Deals
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4" onClick={() => navigate('/login')}>
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}