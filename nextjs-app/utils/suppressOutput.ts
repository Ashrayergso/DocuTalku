```typescript
// nextjs-app/utils/suppressOutput.ts

/**
 * Suppresses standard output and error.
 */
function suppressOutput(): void {
  process.stdout.write = () => {};
  process.stderr.write = () => {};
}

export default suppressOutput;
```