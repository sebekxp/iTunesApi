type CardSubtitleProps = {
  subtitle: string;
};

export const CardSubtitle = ({ subtitle }: CardSubtitleProps) => {
  return (
    <h6 className="mb-3 overflow-hidden overflow-ellipsis font-normal text-[color:var(--redPrimary)] sm:text-xl">
      {subtitle}
    </h6>
  );
};
