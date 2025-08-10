import { TrendingUp, FileText, Calendar, Users, BarChart3, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function InvestorRelations() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-card-foreground">
            Investor Relations
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with the latest updates, financial reports, and insights from Keeps' investor relations team.
          </p>
        </div>

        {/* Key Performance Metrics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-card-foreground">Platform Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-professional text-center">
              <CardContent className="p-6">
                <TrendingUp className="w-8 h-8 mx-auto mb-4 text-success" />
                <h3 className="text-2xl font-bold text-card-foreground mb-2">£127.3M</h3>
                <p className="text-muted-foreground">Total Assets Under Management</p>
                <Badge variant="success" className="mt-2">+23.4% YoY</Badge>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardContent className="p-6">
                <Users className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold text-card-foreground mb-2">24,789</h3>
                <p className="text-muted-foreground">Active Investors</p>
                <Badge variant="secondary" className="mt-2">+31.2% YoY</Badge>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardContent className="p-6">
                <BarChart3 className="w-8 h-8 mx-auto mb-4 text-warning" />
                <h3 className="text-2xl font-bold text-card-foreground mb-2">12.7%</h3>
                <p className="text-muted-foreground">Average Annual Return</p>
                <Badge variant="outline" className="mt-2">Since Launch</Badge>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardContent className="p-6">
                <Calendar className="w-8 h-8 mx-auto mb-4 text-destructive" />
                <h3 className="text-2xl font-bold text-card-foreground mb-2">147</h3>
                <p className="text-muted-foreground">Completed Deals</p>
                <Badge variant="outline" className="mt-2">2024 YTD</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Latest Reports */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-card-foreground">Financial Reports</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary" />
                  Annual Reports
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-accent/20 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Annual Report 2023</h4>
                    <p className="text-sm text-muted-foreground">Published: 31st March 2024</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 bg-accent/20 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Annual Report 2022</h4>
                    <p className="text-sm text-muted-foreground">Published: 31st March 2023</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 bg-accent/20 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Annual Report 2021</h4>
                    <p className="text-sm text-muted-foreground">Published: 31st March 2022</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <BarChart3 className="w-6 h-6 text-primary" />
                  Quarterly Updates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-accent/20 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Q3 2024 Performance</h4>
                    <p className="text-sm text-muted-foreground">Published: 31st October 2024</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 bg-accent/20 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Q2 2024 Performance</h4>
                    <p className="text-sm text-muted-foreground">Published: 31st July 2024</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 bg-accent/20 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Q1 2024 Performance</h4>
                    <p className="text-sm text-muted-foreground">Published: 30th April 2024</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Investor Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-card-foreground">Upcoming Events</h2>
          <div className="space-y-6">
            <Card className="card-professional">
              <CardContent className="p-6">
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 p-4 rounded-lg text-center min-w-[100px]">
                    <div className="text-2xl font-bold text-primary">15</div>
                    <div className="text-sm text-primary">DEC</div>
                    <div className="text-xs text-muted-foreground">2024</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-card-foreground">Q4 2024 Investor Webinar</h3>
                    <p className="text-muted-foreground mb-4">
                      Join our CEO and CFO for a comprehensive review of Q4 performance, market outlook for 2025, and strategic updates.
                    </p>
                    <div className="flex items-center gap-4">
                      <Badge variant="secondary">Virtual Event</Badge>
                      <span className="text-sm text-muted-foreground">2:00 PM GMT</span>
                      <Button variant="outline" size="sm">Register</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardContent className="p-6">
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 p-4 rounded-lg text-center min-w-[100px]">
                    <div className="text-2xl font-bold text-primary">28</div>
                    <div className="text-sm text-primary">FEB</div>
                    <div className="text-xs text-muted-foreground">2025</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-card-foreground">Annual General Meeting</h3>
                    <p className="text-muted-foreground mb-4">
                      Annual shareholder meeting to discuss 2024 performance, approve financial statements, and outline strategic direction for 2025.
                    </p>
                    <div className="flex items-center gap-4">
                      <Badge variant="secondary">London, UK</Badge>
                      <span className="text-sm text-muted-foreground">10:00 AM GMT</span>
                      <Button variant="outline" size="sm">More Info</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Information */}
        <section>
          <Card className="card-professional bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-primary">Investor Relations Contact</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-muted-foreground max-w-2xl mx-auto">
                For investor enquiries, financial information requests, or to speak with our investor relations team, please get in touch.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3 text-card-foreground">General Enquiries</h4>
                  <p className="text-sm text-muted-foreground mb-2">Email: investors@keeps.sport</p>
                  <p className="text-sm text-muted-foreground">Phone: +44 (0) 20 7946 0123</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-card-foreground">Media Relations</h4>
                  <p className="text-sm text-muted-foreground mb-2">Email: media@keeps.sport</p>
                  <p className="text-sm text-muted-foreground">Phone: +44 (0) 20 7946 0456</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}