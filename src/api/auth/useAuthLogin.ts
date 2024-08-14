import type { AxiosError } from 'axios';
import { createMutation } from 'react-query-kit';

import { client } from '../common';
import { AuthLoginResponse, AuthLoginVariables } from './types';

export const useAuthLogin = createMutation<
  AuthLoginResponse,
  AuthLoginVariables,
  AxiosError
>({
  mutationFn: async (variables) =>
    client({
      url: '/auth/login',
      method: 'POST',
      data: variables,
    }).then((response) => response.data),
});
