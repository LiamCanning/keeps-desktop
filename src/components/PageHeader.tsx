import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, align = "left" }) => {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <header className={`mb-8 flex flex-col gap-3 ${alignCls}`}>
      <h1 className="text-4xl font-bold leading-tight text-gradient">{title}</h1>
      {subtitle && <p className="text-lg text-muted-foreground max-w-3xl">{subtitle}</p>}
    </header>
  );
};

export default PageHeader;
