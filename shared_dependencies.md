Shared Dependencies:

1. **Exported Variables**: 
   - `pdfDirectory`: The directory from which PDF documents are loaded.
   - `embeddingsStore`: The FAISS vector store where embeddings are stored.

2. **Data Schemas**: 
   - `TextChunk`: Represents a small chunk of text from a PDF document.
   - `Embedding`: Represents the embedding of a text chunk.
   - `UserQuery`: Represents a user's query in chat style.

3. **DOM Element IDs**: 
   - `queryInput`: The input field where users enter their queries.
   - `resultsDisplay`: The area where the results of a user's query are displayed.

4. **Message Names**: 
   - `queryReceived`: Emitted when a user submits a query.
   - `resultsReady`: Emitted when the results of a user's query are ready to be displayed.

5. **Function Names**: 
   - `suppressOutput()`: Suppresses standard output and error.
   - `loadPDFs()`: Loads PDF documents from a specified directory.
   - `splitText()`: Splits loaded documents into smaller text chunks.
   - `generateEmbeddings()`: Generates embeddings for each text chunk.
   - `storeEmbeddings()`: Stores these embeddings in an efficient vector store.
   - `queryLoop()`: Enters into an infinite loop to await user queries.
   - `processQueries()`: Processes the user queries.
   - `retrieveDocuments()`: Uses llamacpp with a local llm model to retrieve the most relevant document sections based on the user queries.

6. **Libraries**: 
   - `Langchain`: A library that is encouraged to be used in the application.
   - `llamacpp`: A library used to process user queries and retrieve relevant document sections.
   - `FAISS`: A library used for efficient vector storage of embeddings.