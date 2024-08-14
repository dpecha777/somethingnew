import { useColorScheme } from 'react-native';
import { appColors } from '@/src/constants/Colors';

export type UseThemeColorNameProp = keyof typeof appColors.light &
  keyof typeof appColors.dark;

export function useThemeColor(
  colorName: UseThemeColorNameProp,
  fromTheme?: 'light' | 'dark',
) {
  const theme = useColorScheme() ?? 'light';
  if (fromTheme) {
    return appColors[fromTheme][colorName];
  }
  return appColors[theme][colorName];
}
