type CardSubtitleProps = {
  subtitle: string;
};

export const CardSubtitle = ({ subtitle }: CardSubtitleProps) => {
  return (
    <h6 className="mb-3 sm:text-xl font-normal text-[color:var(--redPrimary)] overflow-hidden overflow-ellipsis">
      {subtitle}
    </h6>
  );
};
