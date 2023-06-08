/**
 * Normalize the text by removing diacritical marks, trimming whitespace,
 * and converting all characters to lowercase.
 * @param text - The text to normalize.
 * @returns The normalized text.
 */
export function normalizeText(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase();
}
