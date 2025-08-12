interface TabsBannerProps {
  title: string;
  count: number;
}

export function TabsBanner({ title, count }: TabsBannerProps) {
  return (
    <div className="hidden md:block">
      <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 shadow-[var(--shadow-elegant)] rounded-lg mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gradient">{title}</h2>
            <p className="text-muted-foreground mt-1">Explore and manage your investment opportunities</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-primary animate-glow-pulse">{count}</div>
            <p className="text-sm text-muted-foreground">Available Options</p>
          </div>
        </div>
      </div>
    </div>
  );
}