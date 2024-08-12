import { Text as RNText, StyleSheet } from 'react-native';
import { useThemeColor } from '../../hooks/useThemeColor';

export type TextProps = {
  variant?: 'highlight' | 'regular' | 'h1';
  color?: 'primary' | 'secondary';
  children: string;
};

export const Text = ({
  children,
  color = 'primary',
  variant = 'regular',
}: TextProps) => {
  const primaryTextColor = useThemeColor('primaryTxt');
  const secondaryTextColor = useThemeColor('secondaryTxt');

  return (
    <RNText
      style={{
        ...styles[variant],
        color: color === 'primary' ? primaryTextColor : secondaryTextColor,
      }}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
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
});
