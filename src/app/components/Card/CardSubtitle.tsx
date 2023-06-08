type CardSubtitleProps = {
  subtitle: string;
};

export const CardSubtitle = ({ subtitle }: CardSubtitleProps) => {
  return <h6 className="mb-3 text-xl font-normal text-[color:var(--redPrimary)]">{subtitle}</h6>;
};
