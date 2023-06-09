import { useWindowSize } from '@/app/hooks/useWindowSize';

type CardImageProps = {
  src: string;
  alt: string;
  /**
   * Indicates whether the card should be 140x140 or 216x216
   */
  small?: boolean;
};

export const CardImage = ({ src, alt, small = true }: CardImageProps) => {
  const windowSize = useWindowSize();
  const width = small ? 140 : 216;
  const height = small ? 140 : 216;
  return (
    <img
      className="object-cover rounded-md w-45 m-4"
      src={src}
      alt={alt}
      /**
       * The width value determined by the condition.
       * If `small` is true and window width is less than 640 pixels, returns 216.
       * Otherwise, returns the provided `width` value.
       * @type {number}
       */
      width={small && windowSize.width < 640 ? 216 : width}
      /**
       * The height value determined by the condition.
       * If `small` is true and window height is less than 640 pixels, returns 216.
       * Otherwise, returns the provided `height` value.
       * @type {number}
       */
      height={small && windowSize.height < 640 ? 216 : height}
    />
  );
};
