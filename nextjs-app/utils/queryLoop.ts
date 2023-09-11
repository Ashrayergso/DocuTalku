import { UserQuery } from '../types';
import { processQueries } from './processQueries';

export const queryLoop = async () => {
  while (true) {
    const userQuery: UserQuery = await getUserQuery();
    processQueries(userQuery);
  }
}

const getUserQuery = (): Promise<UserQuery> => {
  return new Promise((resolve) => {
    const queryInput = document.getElementById('queryInput');
    queryInput.addEventListener('queryReceived', (event) => {
      resolve(event.detail);
    });
  });
}