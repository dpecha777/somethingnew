import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { client } from '../common';
import type { User } from './types';

type Variables = undefined;
type TasksResponse = User[];

export const useGetUsers = createQuery<TasksResponse, Variables, AxiosError>({
  queryKey: ['users'],
  fetcher: async () => {
    return client.get(`/users`).then((response) => response.data.data);
  },
});
