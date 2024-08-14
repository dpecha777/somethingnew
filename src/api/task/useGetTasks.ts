import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { client } from '../common';
import type { Task } from './types';

type Variables = undefined;
type TasksResponse = Task[];

export const usePost = createQuery<TasksResponse, Variables, AxiosError>({
  queryKey: ['posts'],
  fetcher: async () => {
    return client.get(`/tasks`).then((response) => response.data.data);
  },
});
