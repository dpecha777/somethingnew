import type { AxiosError } from 'axios';
import { createMutation } from 'react-query-kit';

import { client } from '../common';
import { AuthLoginResponse } from './types';

export const useAuthRefreshToken = createMutation<
  AuthLoginResponse,
  undefined,
  AxiosError
>({
  mutationFn: async () =>
    client({
      url: '/auth/refresh',
      method: 'POST',
    }).then((response) => response.data),
});
