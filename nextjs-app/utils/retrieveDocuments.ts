import { UserQuery } from '../types';
import llamacpp from 'llamacpp';

const retrieveDocuments = async (query: UserQuery, embeddingsStore: any) => {
  const llmModel = await llamacpp.loadModel('path/to/llm/model');

  const results = llmModel.retrieve(query, embeddingsStore);

  return results;
};

export default retrieveDocuments;