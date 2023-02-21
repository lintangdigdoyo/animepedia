import style from "styles/components/Detail.module.scss";

interface SectionProps {
  children: React.ReactNode;
  title?: string;
}

const Section = ({ children, title }: SectionProps) => (
  <div className={style.detail_section} data-testid="section">
    {title && (
      <h5 className={style.detail__title} data-testid="title">
        {title}
      </h5>
    )}
    {children}
  </div>
);

export default Section;
