type CardImageProps = {
  src: string;
  alt: string;
  /**
   * Indicates whether the card should be 140x140 or 216x216
   */
  small?: boolean;
};

export const CardImage = ({ src, alt, small = true }: CardImageProps) => {
  const width = small ? 140 : 216;
  const height = small ? 140 : 216;
  return (
    <img
      className="object-cover rounded-md w-45 m-4"
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};
