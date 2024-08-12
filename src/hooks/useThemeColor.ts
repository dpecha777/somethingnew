import { useColorScheme } from 'react-native';

import { appColors } from '@/src/constants/Colors';

export function useThemeColor(
  colorName: keyof typeof appColors.light & keyof typeof appColors.dark,
) {
  const theme = useColorScheme() ?? 'light';
  return appColors[theme][colorName];
}
