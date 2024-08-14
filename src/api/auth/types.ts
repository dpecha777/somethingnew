export type AuthLoginResponse = {
  access_token: string;
  token_type: string;
  expires: number;
  expires_in: number;
};

export type AuthLoginVariables = { email: string; password: string };

export type AuthErrorResponse = { response: { data: { message: string } } };
