import React, {
  createContext,
  useState,
  useContext,
  ReactElement,
  useEffect,
} from 'react';
import { assertContext } from '../helpers';
import { useStorageState } from '../../hooks/useStorageState';
import { client } from '../../api';

export type AuthContextType = {
  isAuthenticated: boolean;
  isLoading?: boolean;
  login: (accessToken: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactElement }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [
    [isLoadingAuthorizationToken, authorizationToken],
    setAuthorizationToken,
  ] = useStorageState('authorizationToken');

  useEffect(() => {
    if (authorizationToken) {
      client.defaults.headers.common['Authorization'] =
        `Bearer ${authorizationToken}`;
    }
  }, [authorizationToken]);

  const isLoading = isLoadingAuthorizationToken;

  useEffect(() => {
    if (authorizationToken) {
      try {
        setIsAuthenticated(true);
      } catch (error) {
        console.log('error :>> ', error);
      }
    }
  }, [authorizationToken]);

  const login = (accessToken: string) => {
    try {
      setAuthorizationToken(accessToken);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('AuthProvider login error:', error);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setAuthorizationToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  assertContext(context, 'AuthContext');
  return context;
};
