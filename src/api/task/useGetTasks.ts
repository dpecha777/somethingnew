import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { client } from '../common';
import type { Task } from './types';

type Variables = undefined;
type TasksResponse = Task[];

export const useTasks = createQuery<TasksResponse, Variables, AxiosError>({
  queryKey: ['tasks'],
  fetcher: async () => {
    return client.get(`/tasks`).then((response) => response.data.data);
  },
});
