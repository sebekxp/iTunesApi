export type Itunes = {
  feed: Feed;
};

export type Feed = {
  author: Author;
  entry: Entry[];
  updated: Body;
  rights: Body;
  title: Body;
  icon: Body;
  link: Link[];
  id: Body;
};

export type Author = {
  name: Body;
  uri: Body;
};

export type Body = {
  label: string;
};

export type Entry = {
  'im:name': Body;
  'im:image': IMImage[];
  'im:itemCount': Body;
  'im:price': IMPrice;
  'im:contentType': EntryIMContentType;
  rights: Body;
  title: Body;
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
  attributes: Body;
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
