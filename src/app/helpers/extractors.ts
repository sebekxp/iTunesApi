import { Entry } from '../types/itunes';

/**
 * Allowed sizes of images that are available in the api
 */
type ImageHeight = '55' | '60' | '170';

/**
 * Returns the source URL of an image with the specified height from the given entry
 * @param entry - The entry object containing the images.
 * @param height - Desired image height
 * @returns the image source URL in the given height as a string or an empty string if no matching image is found
 */
export function getImageSrcWithProperHeight(entry: Entry, height: ImageHeight = '55'): string {
  const foundImage = (entry['im:image'] ?? []).find((img) => img.attributes.height === height);
  return foundImage ? foundImage.label : '';
}

/**
 * Returns the ID of the given entry.
 * @param entry - The entry object.
 * @returns The ID of the entry, or an empty string if the ID is not found.
 */
export function getId(entry: Entry) {
  return entry?.id?.attributes['im:id'] ?? '';
}

/**
 * Returns the title of the given entry.
 * @param entry - The entry object.
 * @returns The title of the entry, or an empty string if the title is not found.
 */
export function getTitle(entry: Entry) {
  return entry['im:name']?.label ?? '';
}

/**
 * Returns the artist of the given entry.
 * @param entry - The entry object.
 * @returns The artist of the entry, or an empty string if the artist is not found.
 */
export function getArtist(entry: Entry) {
  return entry['im:artist']?.label ?? '';
}

/**
 * Returns the rights of the given entry.
 * @param entry - The entry object.
 * @returns The rights of the entry, or an empty string if the rights is not found.
 */
export function getRights(entry: Entry) {
  return entry?.rights?.label ?? '';
}

/**
 * Returns the link of the given entry.
 * @param entry - The entry object.
 * @returns The link of the entry, or an empty string if the link is not found.
 */
export function getLink(entry: Entry) {
  return entry?.link?.attributes?.href ?? '';
}

/**
 * Returns the release date of the given entry.
 * @param entry - The entry object.
 * @returns The release date of the entry, or an empty string if the release date is not found.
 */
export function getReleaseDate(entry: Entry) {
  return entry['im:releaseDate']?.attributes?.label ?? '';
}

/**
 * Returns the category of the given entry.
 * @param entry - The entry object.
 * @returns The category of the entry, or an empty string if the category is not found.
 */
export function getCategory(entry: Entry) {
  return entry?.category?.attributes?.term ?? '';
}

/**
 * Returns the price of the given entry.
 * @param entry - The entry object.
 * @returns The price of the entry, or an empty string if the price is not found.
 */
export function getPrice(entry: Entry) {
  return entry?.['im:price']?.label ?? '';
}
