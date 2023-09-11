import { Embedding } from '../types';
import * as faiss from 'faiss';

let embeddingsStore: faiss.IndexFlatL2;

export function storeEmbeddings(embeddings: Embedding[]): void {
  if (!embeddingsStore) {
    const dimension = embeddings[0].vector.length;
    embeddingsStore = new faiss.IndexFlatL2(dimension);
  }

  for (const embedding of embeddings) {
    embeddingsStore.add(embedding.vector);
  }
}