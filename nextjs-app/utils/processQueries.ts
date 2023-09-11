```typescript
import { UserQuery } from '../types';
import { llamacpp } from '../lib/langchain';

export function processQueries(query: UserQuery): Promise<string> {
  return new Promise((resolve, reject) => {
    try {
      // Process the user query using llamacpp
      const processedQuery = llamacpp.processQuery(query);

      resolve(processedQuery);
    } catch (error) {
      reject(error);
    }
  });
}
```