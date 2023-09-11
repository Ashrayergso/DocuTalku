```typescript
import { TextChunk, Embedding } from '../types';
import * as Langchain from '../lib/langchain';

/**
 * Function to generate embeddings for each text chunk.
 * @param textChunks - Array of text chunks.
 * @returns Array of embeddings.
 */
export async function generateEmbeddings(textChunks: TextChunk[]): Promise<Embedding[]> {
  const embeddings: Embedding[] = [];

  for (const chunk of textChunks) {
    const embedding = await Langchain.generateEmbedding(chunk.text);
    embeddings.push({
      id: chunk.id,
      embedding,
    });
  }

  return embeddings;
}
```