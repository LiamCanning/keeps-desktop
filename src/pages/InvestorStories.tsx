import React from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import alex from "@/assets/avatars/alex-avatar.png";
import emma from "@/assets/avatars/emma-avatar.png";
import mike from "@/assets/avatars/mike-avatar.png";

const testimonials = [
  {
    name: "Alex M.",
    tag: "Early investor",
    img: alex,
    quote: "The disclosures and risk guidance made it easy to size positions responsibly.",
  },
  {
    name: "Emma R.",
    tag: "Football enthusiast",
    img: emma,
    quote: "Clear timelines and benefits helped set expectations from day one.",
  },
  {
    name: "Mike T.",
    tag: "Motorsport fan",
    img: mike,
    quote: "Fees were transparent and the portfolio tools are genuinely helpful.",
  },
];

const InvestorStories: React.FC = () => {
  const canonicalUrl = typeof window !== "undefined" ? `${window.location.origin}/investor-stories` : "/investor-stories";

  return (
    <main>
      <Helmet>
        <title>Investor Stories - Keeps Sports Investments</title>
        <meta name="description" content="Real investor stories and testimonials about investing in sports assets on Keeps." />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Investor Stories</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">What our community says about research, fees, timelines, and outcomes.</p>
      </header>

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
    </main>
  );
};

export default InvestorStories;
