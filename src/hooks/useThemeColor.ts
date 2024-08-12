import { useColorScheme } from 'react-native';

import { appColors } from '@/src/constants/Colors';

export function useThemeColor(
  colorName: keyof typeof appColors.light & keyof typeof appColors.dark,
  fromTheme?: 'light' | 'dark',
) {
  const theme = useColorScheme() ?? 'light';
  if (fromTheme) {
    return appColors[fromTheme][colorName];
  }
  return appColors[theme][colorName];
}
