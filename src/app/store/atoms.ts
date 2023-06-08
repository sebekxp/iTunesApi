import { atom } from 'recoil';
import { Itunes } from '../types/itunes';

export const iTunesState = atom({
  key: 'iTunesState',
  default: {} as Itunes,
});

export const searchQueryState = atom({
  key: 'searchQuery',
  default: '',
});
