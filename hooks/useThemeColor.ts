/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useColorScheme } from 'react-native';

import { appColors } from '@/constants/Colors';

export function useThemeColor(
  colorName: keyof typeof appColors.light & keyof typeof appColors.dark
) {
  const theme = useColorScheme() ?? 'light';
  return appColors[theme][colorName];
}
