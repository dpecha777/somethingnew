import { Theme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/src/hooks/useColorScheme';
import { darkNavigationTheme, lightNavigationTheme } from '../constants/Colors';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { useThemeColor } from '../hooks/useThemeColor';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

export const unstable_settings = {
  initialRouteName: '(app)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Providers>
      <Stack>
        <Stack.Screen name='(app)' options={{ headerShown: false }} />
        <Stack.Screen name='login' options={{ headerShown: false }} />
        <Stack.Screen name='+not-found' />
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
        <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
