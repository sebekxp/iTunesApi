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
  /**
   * Extracts the album name and identifier or just the identifier from a URL path.
   *
   * @param {string} pathname - The pathname from which to extract the album name and identifier.
   * @returns {string} The album name and identifier separated by a slash ("/") or just the identifier.
   *
   * @description
   * This expression takes a pathname string in the format "/player/{albumName}/{identifier}" and
   * extracts either the album name and identifier separated by a slash ("/") or just the identifier,
   * depending on the pattern. It splits the pathname by the "/" character, filters out the elements
   * at indices 0 and 1 (which are not part of the album name or identifier), and joins the remaining
   * elements with a slash ("/").
   *
   * If the pathname matches the pattern and contains both the album name and identifier, the function
   * returns them separated by a slash ("/"). If the pathname only contains the identifier, the function
   * returns just the identifier. If the pathname does not match the pattern or is empty, the function
   * returns an empty string.
   */
  const albumName = pathname
    .split('/')
    .filter((_, index) => ![0, 1].includes(index))
    .join('/');
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
    <div className="container mx-auto px-8 py-32 sm:px-16 md:px-32">
      <h1 className="mb-10 w-full overflow-hidden overflow-ellipsis whitespace-nowrap py-4 text-3xl font-extrabold leading-none tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
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
