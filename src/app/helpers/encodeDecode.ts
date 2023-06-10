/**
 * Regular expression to match and extract the album name and identifier from a URL.
 *
 * This regular expression is used to extract the album name and identifier from a URL string
 * in the format "https://music.apple.com/us/album/{albumName}/{identifier}?uo=2". It captures
 * both the album name and identifier portions of the URL for further processing.
 *
 * @type {RegExp}
 */
const ALBUM_REGEX = /https:\/\/music\.apple\.com\/us\/album\/([^\/]+)\/([^?]+)/;
/**
 * Regular expression to match and extract the album name from a URL.
 *
 * This regular expression is used as a fallback to extract the album name from
 * a URL string in the format "https://music.apple.com/us/album/{albumName}?uo=2".
 * It captures the album name portion of the URL (before the "?" character) for further processing.
 *
 * @type {RegExp}
 */
const FALLBACK_ALBUM_NAME_REGEX = /https:\/\/music\.apple\.com\/us\/album\/([^?]+)/;

/**
 * Extracts the album name and identifier from a URL.
 *
 * @param url - The URL from which to extract the album name and identifier.
 * @returns The album name and identifier separated by a slash ("/") or identifier only if album name does not exist
 *
 * @description
 * This function takes a URL string in the format "https://music.apple.com/us/album/{albumName}/{identifier}?uo=2"
 * and extracts both the album name and identifier portions from it. It uses regular expressions to match
 * and capture the album name and identifier for further processing.
 *
 * The function first tries to match the URL against the regular expression ALBUM_REGEX, which captures both
 * the album name and identifier. If a match is found, it extracts the album name and identifier from the
 * respective capture groups and returns them separated by a slash ("/").
 *
 * If the first regular expression match fails, the function falls back to the regular expression
 * FALLBACK_ALBUM_NAME_REGEX, which captures only the album name. If a match is found, it extracts
 * the album name and returns it.
 *
 * If no matches are found using either regular expression, the function returns an empty string.
 */
export function encodeUrlToAlbumName(url: string) {
  const albumMatch = url.match(ALBUM_REGEX);
  const identifierMatch = url.match(FALLBACK_ALBUM_NAME_REGEX);
  if (albumMatch) {
    const albumName = albumMatch?.[1] ?? '';
    const identifier = albumMatch?.[2] ?? '';
    return `${albumName}/${identifier}`;
  } else if (identifierMatch) {
    return identifierMatch?.[1] ?? '';
  }
  return '';
}

/**
 * Decodes an album name to generate a URL.
 * @param albumName - The album name to decode.
 * @returns The decoded URL.
 */
export function decodeAlbumNameToUrl(albumName: string) {
  return `https://music.apple.com/us/album/${albumName}`;
}
