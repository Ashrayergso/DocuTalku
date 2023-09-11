```typescript
import { TextChunk } from '../types';

/**
 * Splits a given text into smaller chunks.
 * @param text The text to be split.
 * @param chunkSize The size of each chunk.
 * @returns An array of text chunks.
 */
export function splitText(text: string, chunkSize: number): TextChunk[] {
  const chunks: TextChunk[] = [];
  for (let i = 0; i < text.length; i += chunkSize) {
    const chunkText = text.slice(i, i + chunkSize);
    chunks.push({ text: chunkText });
  }
  return chunks;
}
```