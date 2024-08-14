import { Theme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import { useColorScheme } from '@/src/hooks/useColorScheme';
import { darkNavigationTheme, lightNavigationTheme } from '../constants/Colors';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { useThemeColor } from '../hooks/useThemeColor';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { APIProvider } from '../api';
import { AuthProvider } from '../contexts/AuthProvider/AuthProvider';

export const unstable_settings = {
  initialRouteName: '(app)',
};

export { ErrorBoundary } from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Providers>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name='(app)' options={{ title: 'Dashboard' }} />
        <Stack.Screen name='login' options={{ title: 'Login' }} />
        <Stack.Screen name='error' options={{ title: 'Error' }} />
        <Stack.Screen
          name='+not-found'
          options={{ headerShown: true, title: 'Login' }}
        />
      </Stack>
    </Providers>
  );
}

function Providers({ children }: { children: React.ReactNode }) {
  const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor('primaryBg', 'dark');
  const theme: Theme =
    colorScheme === 'dark' ? darkNavigationTheme : lightNavigationTheme;

  return (
    <GestureHandlerRootView style={[styles.container, { backgroundColor }]}>
      <ThemeProvider value={theme}>
        <APIProvider>
          <AuthProvider>
            <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
          </AuthProvider>
        </APIProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
