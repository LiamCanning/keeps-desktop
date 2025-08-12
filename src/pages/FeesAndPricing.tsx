import React from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BadgePercent, Info } from "lucide-react";
import { Link } from "react-router-dom";

const FeesAndPricing: React.FC = () => {
  const canonicalUrl = typeof window !== "undefined" ? `${window.location.origin}/fees-and-pricing` : "/fees-and-pricing";

  return (
    <main>
      <Helmet>
        <title>Fees & Pricing - Keeps Sports Investments</title>
        <meta name="description" content="Transparent fees and pricing for investing in sports assets on Keeps, with example scenarios and clear breakdowns." />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Fees & Pricing</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">A simple, transparent breakdown of costs and when they apply.</p>
      </header>

      <section className="grid gap-6 md:grid-cols-3" aria-labelledby="fee-breakdown">
        <h2 id="fee-breakdown" className="sr-only">Fee Breakdown</h2>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><BadgePercent className="h-5 w-5" /> What you pay</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><strong className="text-foreground">Platform fee:</strong> Applied on successful investments; varies by asset.</li>
              <li><strong className="text-foreground">Transaction costs:</strong> Payment processing and settlement fees where applicable.</li>
              <li><strong className="text-foreground">Ongoing costs:</strong> Only if specified in the deal terms.</li>
            </ul>
            <p className="text-xs text-muted-foreground mt-3 flex items-start gap-2"><Info className="h-4 w-4 mt-0.5" /> Exact fees are always disclosed on the deal page before you confirm.</p>
          </CardContent>
        </Card>
        <aside>
          <Card>
            <CardContent className="pt-6 text-sm">
              <p>See <Link to="/risk-disclosure" className="underline underline-offset-4">Risk Disclosure</Link> and <Link to="/regulatory-compliance" className="underline underline-offset-4">Regulatory Compliance</Link> for more details.</p>
            </CardContent>
          </Card>
        </aside>
      </section>

      <section className="mt-10" aria-labelledby="examples">
        <h2 id="examples" className="text-xl font-semibold tracking-tight mb-4">Example scenarios</h2>
        <div className="rounded-lg border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Scenario</TableHead>
                <TableHead>Investment</TableHead>
                <TableHead>Estimated Fees</TableHead>
                <TableHead>Illustrative Outcome</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Starter</TableCell>
                <TableCell>£250</TableCell>
                <TableCell>£5–£12</TableCell>
                <TableCell>Potential small upside/downsides; focus on learning</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Balanced</TableCell>
                <TableCell>£1,000</TableCell>
                <TableCell>£15–£40</TableCell>
                <TableCell>Moderate risk/return profile over medium horizon</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Advanced</TableCell>
                <TableCell>£5,000</TableCell>
                <TableCell>£60–£180</TableCell>
                <TableCell>Higher risk/return; ensure diversification and horizon fit</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <p className="text-xs text-muted-foreground mt-3">Figures are illustrative only and not guarantees. Your capital is at risk.</p>
      </section>
    </main>
  );
};

export default FeesAndPricing;
