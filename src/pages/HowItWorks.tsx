import React from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Search, FileCheck2, TrendingUp, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";

const HowItWorks: React.FC = () => {
  const canonicalUrl = typeof window !== "undefined" ? `${window.location.origin}/how-it-works` : "/how-it-works";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Keeps Works",
    description: "Discover, invest, and track sports assets on Keeps.",
    step: [
      { "@type": "HowToStep", name: "Discover & Research" },
      { "@type": "HowToStep", name: "Invest & Own" },
      { "@type": "HowToStep", name: "Track & Benefit" },
    ],
  };

  return (
    <main>
      <Helmet>
        <title>How It Works - Keeps Sports Investments</title>
        <meta
          name="description"
          content="Understand how Keeps works in 3 steps: research assets, invest securely with KYC, and track performance and benefits."
        />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <PageHeader
        title="How It Works"
        subtitle="A clear, transparent 3‑step journey to discover, invest, and track your sports assets — with security at every step."
      />

      {/* Unified 3-step timeline with security in one card */}
      <section aria-labelledby="steps-heading" className="mt-4">
        <Card className="p-4 sm:p-6">
          <CardHeader className="pb-4">
            <CardTitle id="steps-heading" className="text-xl">Your 3‑step journey</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <ol className="grid gap-6 md:grid-cols-3">
              <li className="relative">
                <div className="md:border-r md:pr-6 md:h-full md:flex md:flex-col">
                  <div className="flex items-center gap-2 text-base font-semibold mb-2">
                    <Search className="h-5 w-5" /> Discover & Research
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Browse assets, read deal terms, and review independent content.</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Transparent information and risks</li>
                    <li>Knowledge Base and market insights</li>
                  </ul>
                </div>
              </li>

              <li className="relative">
                <div className="md:border-r md:pr-6 md:h-full md:flex md:flex-col">
                  <div className="flex items-center gap-2 text-base font-semibold mb-2">
                    <FileCheck2 className="h-5 w-5" /> Invest & Own
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Create an account, complete KYC/AML, and invest with a transparent fee structure.</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Digital documentation and confirmations</li>
                    <li>Secure custody and record‑keeping</li>
                  </ul>
                </div>
              </li>

              <li>
                <div className="md:h-full md:flex md:flex-col">
                  <div className="flex items-center gap-2 text-base font-semibold mb-2">
                    <TrendingUp className="h-5 w-5" /> Track & Benefit
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Monitor performance, receive updates, and access benefits where applicable.</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Portfolio and performance analytics</li>
                    <li>Notifications and holder benefits</li>
                  </ul>
                </div>
              </li>
            </ol>

            <div className="border-t pt-6">
              <h3 className="text-base font-semibold tracking-tight flex items-center gap-2 mb-3">
                <ShieldCheck className="h-5 w-5" /> Security, Custody & Compliance
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary" /> KYC/AML with industry‑standard verification
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary" /> Asset custody with segregated accounts
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary" /> FCA‑aligned policies and disclosures
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary" /> Data security and regular audits
                </li>
              </ul>
              <div className="mt-4 text-sm">
                Learn more in our <Link to="/regulatory-compliance" className="underline underline-offset-4">Regulatory Compliance</Link> and
                <Link to="/risk-disclosure" className="underline underline-offset-4"> Risk Disclosure</Link> pages.
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button asChild size="sm">
                <Link to="/login">Get started</Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link to="/support-hub">Contact support</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default HowItWorks;
