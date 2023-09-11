import React, { useEffect, useState } from 'react';
import DocumentRetrievalSystem from '../components/DocumentRetrievalSystem';
import { loadPDFs } from '../utils/loadPDFs';
import { splitText } from '../utils/splitText';
import { generateEmbeddings } from '../utils/generateEmbeddings';
import { storeEmbeddings } from '../utils/storeEmbeddings';
import { queryLoop } from '../utils/queryLoop';
import { processQueries } from '../utils/processQueries';
import { retrieveDocuments } from '../utils/retrieveDocuments';
import { suppressOutput } from '../utils/suppressOutput';

const IndexPage: React.FC = () => {
  const [pdfDirectory, setPdfDirectory] = useState<string>('');
  const [embeddingsStore, setEmbeddingsStore] = useState<any>(null);

  useEffect(() => {
    suppressOutput();
    const pdfs = loadPDFs(pdfDirectory);
    const textChunks = splitText(pdfs);
    const embeddings = generateEmbeddings(textChunks);
    const store = storeEmbeddings(embeddings);
    setEmbeddingsStore(store);
    queryLoop();
  }, [pdfDirectory]);

  const handleQuery = (query: string) => {
    const processedQuery = processQueries(query);
    const documents = retrieveDocuments(processedQuery, embeddingsStore);
    return documents;
  };

  return (
    <DocumentRetrievalSystem
      onQuery={handleQuery}
    />
  );
};

export default IndexPage;