export type Itunes = {
  feed: Feed;
};

export type Feed = {
  author: Author;
  entry: Entry[];
  updated: Icon;
  rights: Icon;
  title: Icon;
  icon: Icon;
  link: Link[];
  id: Icon;
};

export type Author = {
  name: Icon;
  uri: Icon;
};

export type Icon = {
  label: string;
};

export type Entry = {
  'im:name': Icon;
  'im:image': IMImage[];
  'im:itemCount': Icon;
  'im:price': IMPrice;
  'im:contentType': EntryIMContentType;
  rights: Icon;
  title: Icon;
  link: Link;
  id: ID;
  'im:artist': IMArtist;
  category: Category;
  'im:releaseDate': IMReleaseDate;
};

export type Category = {
  attributes: CategoryAttributes;
};

export type CategoryAttributes = {
  'im:id': string;
  term: string;
  scheme: string;
  label: string;
};

export type ID = {
  label: string;
  attributes: IDAttributes;
};

export type IDAttributes = {
  'im:id': string;
};

export type IMArtist = {
  label: string;
  attributes?: IMArtistAttributes;
};

export type IMArtistAttributes = {
  href: string;
};

export type EntryIMContentType = {
  'im:contentType': IMContentTypeIMContentType;
  attributes: IMContentTypeAttributes;
};

export type IMContentTypeAttributes = {
  term: Label;
  label: Label;
};

export type Label = 'Music' | 'Album';

export type IMContentTypeIMContentType = {
  attributes: IMContentTypeAttributes;
};

export type IMImage = {
  label: string;
  attributes: IMImageAttributes;
};

export type IMImageAttributes = {
  height: string;
};

export type IMPrice = {
  label: string;
  attributes: IMPriceAttributes;
};

export type IMPriceAttributes = {
  amount: string;
  currency: Currency;
};

export type Currency = 'USD';

export type IMReleaseDate = {
  label: Date;
  attributes: Icon;
};

export type Link = {
  attributes: LinkAttributes;
};

export type LinkAttributes = {
  rel: Rel;
  type?: Type;
  href: string;
};

export type Rel = 'alternate' | 'self';

export type Type = 'text/html';
