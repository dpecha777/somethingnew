import { Text, Pressable, StyleSheet, ViewStyle } from 'react-native';
import { BORDER_WIDHT, radius } from '../../constants/Border';
import { Box } from '../Box/Box';
import { useThemeColor } from '../../hooks/useThemeColor';

const BTN_HEIGHT = 50;

export type ButtonProps = {
  children: string;
  onPress?: () => void;
  fullWidth?: boolean;
  small?: boolean;
  disabled?: boolean;
  variant?: 'primary' | 'outline';
};

export const Button = ({
  fullWidth = false,
  small = false,
  disabled = false,
  variant = 'primary',
  children,
  onPress,
}: ButtonProps) => {
  const backgroundColor = useThemeColor('brand');
  const borderColor = useThemeColor('outline');
  const textColor = useThemeColor('primaryTxt');
  const primaryBtnTextColor = useThemeColor('primaryTxt', 'dark');

  const primary: ViewStyle = {
    backgroundColor: backgroundColor,
    borderColor: backgroundColor,
  };
  const outline: ViewStyle = {
    backgroundColor: 'transparent',
    borderColor,
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        { opacity: pressed ? 0.8 : 1 },
        styles.base,
        fullWidth ? styles.fullWidht : undefined,
        small ? styles.small : undefined,
        variant === 'primary' ? primary : outline,
        disabled ? styles.disabled : undefined,
      ]}
    >
      <Box
        paddingHorizontal={small ? 'xs' : 'lg'}
        paddingVertical={small ? 'xxs' : undefined}
      >
        <Text
          style={[
            styles.baseText,
            small ? styles.smallText : undefined,
            { color: variant === 'primary' ? primaryBtnTextColor : textColor },
          ]}
        >
          {children}
        </Text>
      </Box>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    maxHeight: BTN_HEIGHT,
    height: BTN_HEIGHT,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: radius.normal,
    alignSelf: 'flex-start',
    borderWidth: BORDER_WIDHT,
  },
  baseText: {
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: 0.85,
    textTransform: 'uppercase',
    fontWeight: 800,
  },
  fullWidht: {
    flex: 1,
    width: '100%',
  },
  small: {
    height: undefined,
    borderRadius: radius.small,
  },
  smallText: { lineHeight: 14, fontSize: 10 },
  disabled: {
    opacity: 0.3,
  },
});
