```typescript
import { LlamaCpp } from 'llamacpp';

export class Langchain {
  private llamacpp: LlamaCpp;

  constructor() {
    this.llamacpp = new LlamaCpp();
  }

  public processQuery(query: string): Promise<string> {
    return this.llamacpp.processQuery(query);
  }

  public retrieveDocuments(query: string): Promise<string[]> {
    return this.llamacpp.retrieveDocuments(query);
  }
}
```