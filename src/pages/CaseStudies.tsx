import React from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OptimizedImage } from "@/components/ui/optimized-image";
import liverpoolImg from "@/assets/liverpool-squad.jpg";
import mclarenImg from "@/assets/mclaren-racing.jpg";
import ryderImg from "@/assets/ryder-cup-golf.jpg";

const CaseStudies: React.FC = () => {
  const canonicalUrl = typeof window !== "undefined" ? `${window.location.origin}/case-studies` : "/case-studies";

  const cases = [
    {
      title: "Club equity – long‑term hold",
      img: liverpoolImg,
      alt: "Liverpool FC squad photo case study",
      points: ["5‑year horizon", "Member benefits access", "Volatility managed via staged entries"],
    },
    {
      title: "Motorsport – performance‑linked",
      img: mclarenImg,
      alt: "McLaren Racing pit crew case study",
      points: ["Season‑based returns", "Transparent risk factors", "Outcomes varied by standings"],
    },
    {
      title: "Event series – capped supply",
      img: ryderImg,
      alt: "Ryder Cup golf event case study",
      points: ["Scarcity dynamics", "Mixed short/medium horizons", "Demand cycles around events"],
    },
  ];

  return (
    <main>
      <Helmet>
        <title>Case Studies - Keeps Sports Investments</title>
        <meta name="description" content="Real case studies from sports assets with outcomes, time horizons, and key lessons for investors." />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Case Studies</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">Selected examples to illustrate outcomes, risks, and time horizons across asset types.</p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {cases.map((c) => (
          <Card key={c.title} asChild>
            <article>
              <CardHeader>
                <CardTitle className="text-xl">{c.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <OptimizedImage src={c.img} alt={c.alt} aspectRatio="video" className="rounded-md" />
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  {c.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </CardContent>
            </article>
          </Card>
        ))}
      </section>
    </main>
  );
};

export default CaseStudies;
