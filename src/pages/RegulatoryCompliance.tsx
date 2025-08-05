import { Shield, FileText, CheckCircle, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function RegulatoryCompliance() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-card-foreground">
            Regulatory Compliance
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We operate under strict regulatory frameworks to ensure your investments are protected and compliant with UK financial regulations.
          </p>
        </div>

        {/* Authorisation Status */}
        <section className="mb-16">
          <Card className="card-professional border-success/30 bg-success/5">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-success" />
                <div>
                  <CardTitle className="text-2xl text-success-foreground">FCA Authorised</CardTitle>
                  <p className="text-success-foreground/80">Financial Conduct Authority Registration</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-success-foreground/90 leading-relaxed">
                Rork Keeps is authorised and regulated by the Financial Conduct Authority (FCA) under firm reference number [FRN]. 
                This authorisation ensures we meet the highest standards of financial services regulation in the UK.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Compliance Framework */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-card-foreground">Our Compliance Framework</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-professional">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                  <Badge variant="secondary">Essential</Badge>
                </div>
                <CardTitle>Anti-Money Laundering (AML)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive AML procedures including customer due diligence, transaction monitoring, and suspicious activity reporting.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <Badge variant="secondary">Required</Badge>
                </div>
                <CardTitle>Know Your Customer (KYC)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Rigorous identity verification processes to ensure all investors meet regulatory requirements and investment suitability.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                  <Badge variant="secondary">Critical</Badge>
                </div>
                <CardTitle>Data Protection (GDPR)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Full compliance with UK GDPR and Data Protection Act 2018, ensuring your personal data is secure and properly managed.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                  <Badge variant="secondary">Mandatory</Badge>
                </div>
                <CardTitle>Risk Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive risk assessment frameworks and ongoing monitoring to protect investor interests and platform stability.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                  <Badge variant="secondary">Ongoing</Badge>
                </div>
                <CardTitle>Regulatory Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Regular reporting to regulatory bodies including transaction reporting, prudential returns, and compliance monitoring.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <Badge variant="secondary">Protected</Badge>
                </div>
                <CardTitle>Client Money Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Client funds are held in segregated accounts with major UK banks, ensuring your money is protected at all times.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Investment Protection */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-card-foreground">Investment Protection</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  FSCS Protection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Eligible investors are protected under the Financial Services Compensation Scheme (FSCS) up to £85,000 per person, per authorised firm.
                </p>
                <div className="bg-accent/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-card-foreground">Coverage Includes:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Investment business compensation</li>
                    <li>• Deposit protection for cash holdings</li>
                    <li>• Professional negligence cover</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                  Risk Warnings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  All investments carry risk. Sports investments can be particularly volatile and past performance does not guarantee future returns.
                </p>
                <div className="bg-warning/20 border border-warning/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-warning-foreground">Important Considerations:</h4>
                  <ul className="space-y-1 text-sm text-warning-foreground">
                    <li>• Capital at risk - you may lose money</li>
                    <li>• Investments may not be readily realisable</li>
                    <li>• Performance depends on sporting success</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Compliance */}
        <section>
          <Card className="card-professional bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-primary">Compliance Enquiries</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                For any compliance-related questions or to report concerns, please contact our compliance team.
              </p>
              <div className="space-y-2">
                <p className="font-medium text-card-foreground">Email: compliance@rorkkeeps.com</p>
                <p className="font-medium text-card-foreground">Phone: +44 (0) 20 7946 0958</p>
                <p className="text-sm text-muted-foreground">Available Monday to Friday, 9:00 AM to 5:00 PM GMT</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}