
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-12">
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="text-lg text-muted-foreground mt-4">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
