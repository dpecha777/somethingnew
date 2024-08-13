import { Text as RNText, StyleSheet } from 'react-native';
import { useThemeColor } from '../../hooks/useThemeColor';

type TextColors = 'primary' | 'secondary' | 'brand';

export type TextProps = {
  children: string;
  variant?: 'highlight' | 'regular' | 'h1';
  color?: TextColors;
  center?: boolean;
};

export const Text = ({
  children,
  color = 'primary',
  variant = 'regular',
  center = false,
}: TextProps) => {
  const primaryTextColor = useThemeColor('primaryTxt');
  const secondaryTextColor = useThemeColor('secondaryTxt');
  const brandTextColor = useThemeColor('brand');

  const colorMap: Record<TextColors, string> = {
    primary: primaryTextColor,
    secondary: secondaryTextColor,
    brand: brandTextColor,
  };

  return (
    <RNText
      style={[
        {
          ...AppTextStyles[variant],
          color: colorMap[color],
        },
        center && AppTextStyles.center,
      ]}
    >
      {children}
    </RNText>
  );
};

export const AppTextStyles = StyleSheet.create({
  highlight: {
    fontWeight: 700,
    lineHeight: 20.15,
    fontSize: 14,
  },
  regular: {
    fontWeight: 'normal',
    lineHeight: 20.15,
    fontSize: 14,
  },
  h1: {
    fontWeight: 700,
    fontSize: 22,
    lineHeight: 32,
  },
  center: {
    textAlign: 'center',
  },
});
