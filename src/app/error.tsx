import React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ErrorContent } from '../features/error/screens/ErrorContent';
import { useAuth } from '../contexts/AuthProvider/AuthProvider';

export default function error() {
  const { error } = useLocalSearchParams();
  const errorMessage = error as string;

  const router = useRouter();
  const { isAuthenticated } = useAuth();

  const btnTitle = isAuthenticated ? 'Back to dashboard' : 'Go back';
  const handleBtn = () => {
    const canGoBack = router.canGoBack();
    if (canGoBack) {
      router.back();
    } else {
      router.replace('/(app)');
    }
  };
  return (
    <ErrorContent
      error={errorMessage}
      btnTitle={btnTitle}
      onPress={handleBtn}
    />
  );
}
