'use client';
import {
  getArtist,
  getCategory,
  getId,
  getImageSrcWithProperHeight,
  getReleaseDate,
  getRights,
  getTitle,
} from '@/app/helpers/extractors';
import { iTunesState } from '@/app/store/atoms';
import { filteredQuery } from '@/app/store/selectors';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Itunes } from '../types/itunes';
import { Card } from './Card/Card';

type TopAlbumsProps = {
  data: Itunes;
};

export const TopAlbums = ({ data }: TopAlbumsProps) => {
  const [_, setItunes] = useRecoilState(iTunesState);

  useEffect(() => {
    setItunes(data);
  }, [data]);

  const filteredData = useRecoilValue(filteredQuery);
  return (
    <>
      {filteredData.map((entry, index) => (
        <Card key={getId(entry)} entry={entry} bgFit={index % 2 === 0}>
          <Card.Image src={getImageSrcWithProperHeight(entry, '170')} alt={getTitle(entry)} />
          <Card.Body>
            <Card.Title title={getTitle(entry)} />
            <Card.Subtitle subtitle={getArtist(entry)} />
            <Card.Description text={`${getCategory(entry)} · ${getReleaseDate(entry)}`} />
            <Card.Description text={getRights(entry)} />
          </Card.Body>
        </Card>
      ))}
    </>
  );
};
