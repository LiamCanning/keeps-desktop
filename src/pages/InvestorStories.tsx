import React from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import alex from "@/assets/avatars/alex-avatar.png";
import emma from "@/assets/avatars/emma-avatar.png";
import mike from "@/assets/avatars/mike-avatar.png";
import jennifer from "@/assets/avatars/jennifer-avatar.png";
import sarah from "@/assets/avatars/sarah-avatar.png";
import tom from "@/assets/avatars/tom-avatar.png";

const testimonials = [
  { name: "Alex M.", tag: "Early investor", img: alex, quote: "The disclosures and risk guidance made it easy to size positions responsibly." },
  { name: "Emma R.", tag: "Football enthusiast", img: emma, quote: "Clear timelines and benefits helped set expectations from day one." },
  { name: "Mike T.", tag: "Motorsport fan", img: mike, quote: "Fees were transparent and the portfolio tools are genuinely helpful." },
  { name: "Jennifer S.", tag: "Diversified", img: jennifer, quote: "I split across assets and appreciated the horizon labels and risk notes." },
  { name: "Sarah P.", tag: "New to investing", img: sarah, quote: "The onboarding and KYC were straightforward and quick." },
  { name: "Tom H.", tag: "Long‑term holder", img: tom, quote: "Regular updates and benefits make it easy to stay engaged." },
];

const InvestorStories: React.FC = () => {
  const canonicalUrl = typeof window !== "undefined" ? `${window.location.origin}/investor-stories` : "/investor-stories";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: testimonials.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Review",
        author: { "@type": "Person", name: t.name },
        reviewBody: t.quote,
      },
    })),
  };

  return (
    <main>
      <Helmet>
        <title>Investor Stories - Keeps Sports Investments</title>
        <meta name="description" content="Real investor stories and testimonials about investing in sports assets on Keeps." />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <PageHeader
        title="Investor Stories"
        subtitle="What our community says about research, fees, timelines, and outcomes."
      />

      <section className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={t.name} className="p-6">
            <blockquote className="text-base leading-relaxed">“{t.quote}”</blockquote>
            <CardContent className="flex items-center gap-3 pt-6">
              <Avatar className="h-10 w-10">
                <AvatarImage src={t.img} alt={`${t.name} avatar`} />
                <AvatarFallback>{t.name.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.tag}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-10 grid md:grid-cols-3 gap-6" aria-labelledby="press-heading">
        <h2 id="press-heading" className="text-xl font-semibold tracking-tight md:col-span-3">Press & community mentions</h2>
        <Card className="md:col-span-2">
          <CardContent className="pt-6 text-sm text-muted-foreground">
            <ul className="space-y-2 list-disc pl-5">
              <li>“Keeps brings clarity to alternative sports investments.”</li>
              <li>“Transparent disclosures and simple onboarding.”</li>
              <li>“A thoughtful approach to risk and time horizons.”</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm">Want to share your experience?</p>
            <div className="mt-3 flex gap-2">
              <Link to="/community" className="underline underline-offset-4 text-sm">Join the Community</Link>
              <span className="text-muted-foreground">or</span>
              <Link to="/support-hub" className="underline underline-offset-4 text-sm">Contact Support</Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default InvestorStories;
