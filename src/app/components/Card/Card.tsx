import Link from 'next/link';
import { CardBody } from './CardBody';
import { CardDescription } from './CardDescription';
import { CardImage } from './CardImage';
import { CardSubtitle } from './CardSubtitle';
import { CardTitle } from './CardTitle';
import { Entry, Itunes } from '@/app/types/itunes';
import { getLink } from '@/app/helpers/extractors';
import { encodeUrlToAlbumName } from '@/app/helpers/encodeDecode';

type CardPorps = {
  entry: Entry;
  children: React.ReactNode;
  bgFit?: boolean;
  withScaling?: boolean;
  withBorder?: boolean;
  withHover?: boolean;
};

const CardComponent = ({
  children,
  entry,
  bgFit = false,
  withScaling = true,
  withBorder = false,
  withHover = true,
}: CardPorps) => {
  const url = getLink(entry);
  const albumName = encodeUrlToAlbumName(url);
  const scalingClassNameProperties = 'transform transition-transform duration-200 hover:scale-95';
  const borderClassNameProperties = 'border border-gray-500';
  const hoverClassNameProperties = 'hover:bg-[color:var(--greySecondary)]';
  const className = `
        flex items-center w-full rounded-lg shadow 
        ${bgFit ? 'bg-[color:var(--background)]' : 'bg-[color:var(--greyPrimary)]'} 
        ${withScaling ? scalingClassNameProperties : ''} 
        ${withBorder ? borderClassNameProperties : ''} 
        ${withHover ? hoverClassNameProperties : ''}
  `;

  return (
    <Link className={className} href={`/player/${albumName}`}>
      {children}
    </Link>
  );
};

/**
 *
 * @example An example of using Card as a component. Aggregation was used so that elements could be arranged as needed
 *
 *  <Card href={getLink(entry)}>
 *    <Card.Image src={'...'} alt={'...'} />
 *    <Card.Body>
 *      <Card.Title title={'...'} />
 *      <Card.Subtitle subtitle={'...'} />
 *      <Card.Description text={'...'} />
 *      <Card.Description text={'...'} />
 *    </Card.Body>
 *  </Card>
 */
export const Card = Object.assign(CardComponent, {
  Body: CardBody,
  Image: CardImage,
  Description: CardDescription,
  Subtitle: CardSubtitle,
  Title: CardTitle,
});
