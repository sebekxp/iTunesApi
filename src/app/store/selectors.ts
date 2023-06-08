import { selector } from 'recoil';
import { iTunesState, searchQueryState } from './atoms';
import { getTitle } from '../helpers/extractors';
import { normalizeText } from '../helpers/normalizeText';

export const filteredQuery = selector({
  key: 'filteredQuery',
  get: ({ get }) => {
    const query = get(searchQueryState);
    const iTunesData = get(iTunesState);
    
    return (
      iTunesData?.feed?.entry?.filter((entry) =>
        normalizeText(getTitle(entry)).includes(normalizeText(query)),
      ) ?? []
    );
  },
});
