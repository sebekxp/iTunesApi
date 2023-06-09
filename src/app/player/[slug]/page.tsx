'use client';
import { ArrowButton } from '@/app/components/ArrowButton';
import { Card } from '@/app/components/Card/Card';
import { decodeAlbumNameToUrl, encodeUrlToAlbumName } from '@/app/helpers/encodeDecode';
import {
  getArtist,
  getCategory,
  getId,
  getImageSrcWithProperHeight,
  getLink,
  getPrice,
  getReleaseDate,
  getRights,
  getTitle,
} from '@/app/helpers/extractors';
import { filteredQuery } from '@/app/store/selectors';
import { Entry } from '@/app/types/itunes';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

export default function Album() {
  const router = useRouter();
  const pathname = usePathname();
  const albumName = pathname.split('/')[2];
  const filteredData = useRecoilValue(filteredQuery);

  /**
   * While being at this location (/player/{albumName}), we want to know the next and previous albums.
   * Therefore, based on the album list, we find the ones that start with the same URL as the one in
   * the URL bar. Then, using the index, we select the previous and next albums. This way, we can easily
   * navigate between albums using the arrow buttons.
   */
  const index = filteredData.findIndex((entry) =>
    /**
     * Checks if the link of an entry starts with the decoded album name converted to URL format.
     */
    getLink(entry).startsWith(decodeAlbumNameToUrl(albumName)),
  );
  const entry = filteredData[index];
  const next = filteredData[index + 1];
  const prev = filteredData[index - 1];

  useEffect(() => {
    /**
     * Force the user to go back to the home page when there is no data in store
     */
    if (!entry) {
      return router.push('/');
    }
  }, [entry]);

  if (!entry) {
    return null;
  }

  const handlePrevNextClick = (entry: Entry) => {
    const link = getLink(entry);
    /**
     * Handles extreme cases when we don't have a previous element (the current one is the first)
     * and the next one (when the current one is the last) otherwise, it will redirect to the indicated album.
     */
    if (link) {
      router.push(`/player/${encodeUrlToAlbumName(link)}`);
    }
  };

  return (
    <div className="container mx-auto py-32 px-32">
      <h1 className="mb-10 py-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl w-full overflow-hidden whitespace-nowrap overflow-ellipsis">
        {getTitle(entry)}
      </h1>
      <div className="mb-5">
        <ArrowButton direction="left" onClick={() => router.push('/')} />
      </div>
      <Card
        key={getId(entry)}
        entry={entry}
        withScaling={false}
        withHover={false}
        withBorder={false}
      >
        <Card.Image
          src={getImageSrcWithProperHeight(entry, '170')}
          alt={getTitle(entry)}
          small={false}
        />
        <Card.Body>
          <Card.Title title={getTitle(entry)} />
          <Card.Subtitle subtitle={getArtist(entry)} />
          <Card.Description text={`${getCategory(entry)} · ${getReleaseDate(entry)}`} />
          <Card.Description text={getRights(entry)} />
          <Card.Description text={getPrice(entry)} />
        </Card.Body>
      </Card>
      <div className="mt-5 flex justify-center gap-5">
        <ArrowButton direction="left" onClick={() => handlePrevNextClick(prev)} />
        <ArrowButton direction="right" onClick={() => handlePrevNextClick(next)} />
      </div>
    </div>
  );
}
