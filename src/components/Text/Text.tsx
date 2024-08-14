import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from 'react-native';
import { useThemeColor } from '../../hooks/useThemeColor';

type TextColors = 'primary' | 'secondary' | 'brand' | 'white';

export type TextProps = {
  children: string | number;
  variant?: 'highlight' | 'regular' | 'h1' | 'tag' | 'button';
  color?: TextColors;
  center?: boolean;
  numberOfLines?: RNTextProps['numberOfLines'];
};

export const Text = ({
  children,
  color = 'primary',
  variant = 'regular',
  center = false,
  ...props
}: TextProps) => {
  const primaryTextColor = useThemeColor('primaryTxt');
  const secondaryTextColor = useThemeColor('secondaryTxt');
  const brandTextColor = useThemeColor('brand');
  const whiteTextColor = useThemeColor('white');

  const colorMap: Record<TextColors, string> = {
    primary: primaryTextColor,
    secondary: secondaryTextColor,
    brand: brandTextColor,
    white: whiteTextColor,
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
      {...props}
    >
      {children}
    </RNText>
  );
};

export const AppTextStyles = StyleSheet.create({
  highlight: {
    lineHeight: 20.15,
    fontSize: 14,
    fontFamily: 'ObjektivMk1Bold',
  },
  regular: {
    lineHeight: 20.15,
    fontSize: 14,
    fontFamily: 'ObjektivMk1',
  },
  h1: {
    fontSize: 22,
    lineHeight: 32,
    fontFamily: 'ObjektivMk1Bold',
  },
  tag: {
    fontSize: 10,
    lineHeight: 14,
    fontFamily: 'ObjektivMk1Bold',
  },
  center: {
    textAlign: 'center',
  },
  button: {
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 0.85,
    textTransform: 'uppercase',
    fontFamily: 'ObjektivMk1Bold',
  },
});
