const ALBUM_NAME_REGEX = /https:\/\/music\.apple\.com\/us\/album\/([^\/]+)\//;

export function encodeUrlToAlbumName(url: string) {
  return url.match(ALBUM_NAME_REGEX)?.[1] ?? '';
}

export function decodeAlbumNameToUrl(albumName: string) {
  return `https://music.apple.com/us/album/${albumName}`;
}
