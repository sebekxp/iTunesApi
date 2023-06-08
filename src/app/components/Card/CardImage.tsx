type CardImageProps = {
  src: string;
  alt: string;
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
