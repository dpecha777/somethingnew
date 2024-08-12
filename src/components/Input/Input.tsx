import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import { radius } from '../../constants/Radius';
import { useThemeColor } from '../../hooks/useThemeColor';
import { useState } from 'react';
import { AppTextStyles } from '../Text/Text';
import { Box } from '../Box/Box';

const INPUT_HEIGHT = 50;

export type InputProps = Omit<
  TextInputProps,
  'style' | 'editable' | 'readOnly'
> & {
  disabled?: boolean;
};

export const Input = ({
  disabled = false,
  placeholder = 'Enter your text',
  onChangeText,
  value,
  onBlur,
  onFocus,
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const primaryTextColor = useThemeColor('primaryTxt');
  const secondaryTextColor = useThemeColor('secondaryTxt');
  const outlineColor = useThemeColor('outline');

  return (
    <Box
      justifyContent='center'
      paddingHorizontal='md'
      style={[
        styles.baseInput,
        { borderColor: outlineColor },
        disabled && styles.disabled,
      ]}
    >
      <RNTextInput
        {...props}
        editable={!disabled}
        readOnly={disabled}
        style={[
          AppTextStyles.regular,
          { color: primaryTextColor },
          isFocused && { borderColor: secondaryTextColor },
        ]}
        placeholder={placeholder}
        placeholderTextColor={secondaryTextColor}
        onFocus={(e) => {
          setIsFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          onBlur?.(e);
        }}
        onChangeText={onChangeText}
        value={value}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  baseInput: {
    borderRadius: radius.normal,
    borderWidth: 2,
    height: INPUT_HEIGHT,
  },
  disabled: {
    opacity: 0.3,
  },
});
