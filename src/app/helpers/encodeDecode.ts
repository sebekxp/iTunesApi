/**
 * Regular expression to match and extract the album name from a URL.
 *
 * This regular expression is used to extract the album name from a URL string
 * in the format "https://music.apple.com/us/album/{albumName}/". It captures
 * the album name portion of the URL for further processing.
 *
 * @type {RegExp}
 */
const ALBUM_NAME_REGEX = /https:\/\/music\.apple\.com\/us\/album\/([^\/]+)\//;

/**
 * Encodes a URL to extract the album name.
 * @param url - The URL to encode.
 * @returns The encoded album name.
 */
export function encodeUrlToAlbumName(url: string) {
  return url.match(ALBUM_NAME_REGEX)?.[1] ?? '';
}

/**
 * Decodes an album name to generate a URL.
 * @param albumName - The album name to decode.
 * @returns The decoded URL.
 */
export function decodeAlbumNameToUrl(albumName: string) {
  return `https://music.apple.com/us/album/${albumName}`;
}
