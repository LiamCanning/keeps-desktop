import React from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Search, FileCheck2, TrendingUp, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowItWorks: React.FC = () => {
  const canonicalUrl = typeof window !== "undefined" ? `${window.location.origin}/how-it-works` : "/how-it-works";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How Keeps Works",
    "description": "Discover, invest, and track sports assets on Keeps.",
    "step": [
      { "@type": "HowToStep", "name": "Discover & Research" },
      { "@type": "HowToStep", "name": "Invest & Own" },
      { "@type": "HowToStep", "name": "Track & Benefit" }
    ]
  };

  return (
    <main>
      <Helmet>
        <title>How It Works - Keeps Sports Investments</title>
        <meta name="description" content="Understand how Keeps works in 3 steps: research assets, invest securely with KYC, and track performance and benefits." />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">How It Works</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          A clear, transparent 3‑step journey to discover, invest, and track your sports assets.
        </p>
      </header>

      <section aria-labelledby="steps-heading" className="grid gap-6 md:grid-cols-3">
        <h2 id="steps-heading" className="sr-only">Steps</h2>
        <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl"><Search className="h-5 w-5" /> Discover & Research</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Browse assets, read deal terms, and review independent content.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Transparent information and risks</li>
                <li>Knowledge Base and market insights</li>
              </ul>
            </CardContent>
        </Card>

        <Card asChild>
          <article>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl"><FileCheck2 className="h-5 w-5" /> Invest & Own</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Create an account, complete KYC/AML, and invest with a transparent fee structure.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Digital documentation and confirmations</li>
                <li>Secure custody and record‑keeping</li>
              </ul>
            </CardContent>
          </article>
        </Card>

        <Card asChild>
          <article>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl"><TrendingUp className="h-5 w-5" /> Track & Benefit</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Monitor performance, receive updates, and access benefits where applicable.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Portfolio and performance analytics</li>
                <li>Notifications and holder benefits</li>
              </ul>
            </CardContent>
          </article>
        </Card>
      </section>

      <section className="grid gap-6 md:grid-cols-3 mt-10" aria-labelledby="security-heading">
        <h2 id="security-heading" className="text-xl font-semibold tracking-tight flex items-center gap-2"><ShieldCheck className="h-5 w-5" /> Security, Custody & Compliance</h2>
        <Card className="md:col-span-2">
          <CardContent className="pt-6">
            <ul className="grid gap-3 sm:grid-cols-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-primary" /> KYC/AML with industry‑standard verification</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-primary" /> Asset custody with segregated accounts</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-primary" /> FCA‑aligned policies and disclosures</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-primary" /> Data security and regular audits</li>
            </ul>
            <div className="mt-4 text-sm">
              Learn more in our <Link to="/regulatory-compliance" className="underline underline-offset-4">Regulatory Compliance</Link> and <Link to="/risk-disclosure" className="underline underline-offset-4">Risk Disclosure</Link> pages.
            </div>
          </CardContent>
        </Card>
        <aside className="space-y-3">
          <Card>
            <CardContent className="pt-6 text-sm">
              <p className="font-medium">Common next steps</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                <li>Review the <Link to="/knowledge-base" className="underline underline-offset-4">Knowledge Base</Link></li>
                <li>Create an account to start your KYC</li>
                <li>Join the <Link to="/community" className="underline underline-offset-4">Community</Link></li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button asChild size="sm"><Link to="/login">Get started</Link></Button>
                <Button asChild variant="outline" size="sm"><Link to="/support-hub">Contact support</Link></Button>
              </div>
            </CardContent>
          </Card>
        </aside>
      </section>
    </main>
  );
};

export default HowItWorks;
