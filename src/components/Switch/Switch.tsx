import React, { useState } from 'react';
import { TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { BORDER_WIDHT } from '../../constants/Border';
import { useThemeColor } from '../../hooks/useThemeColor';

interface SwitchProps {
  initialValue?: boolean;
  onValueChange?: (value: boolean) => void;
}

export const Switch: React.FC<SwitchProps> = ({
  initialValue = false,
  onValueChange,
}) => {
  const [isOn, setIsOn] = useState(initialValue);
  const [animation] = useState(new Animated.Value(isOn ? 1 : 0));

  const brandColor = useThemeColor('brand');
  const secondaryTxtColor = useThemeColor('secondaryTxt');
  const outlineColor = useThemeColor('outline');
  const whiteColor = useThemeColor('white');

  const toggleSwitch = () => {
    const newValue = !isOn;
    setIsOn(newValue);
    Animated.timing(animation, {
      toValue: newValue ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
    onValueChange?.(newValue);
  };

  const backgroundColorInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['transparent', brandColor],
  });

  const borderColorInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [outlineColor, brandColor],
  });

  const bgThumbColorInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [secondaryTxtColor, whiteColor],
  });

  const translateXInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 14],
  });

  return (
    <TouchableOpacity onPress={toggleSwitch} activeOpacity={0.8}>
      <Animated.View
        style={[
          styles.track,
          {
            backgroundColor: backgroundColorInterpolation,
            borderColor: borderColorInterpolation,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.thumb,
            {
              transform: [{ translateX: translateXInterpolation }],
              backgroundColor: bgThumbColorInterpolation,
            },
          ]}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  track: {
    width: 36,
    height: 24,
    borderRadius: 13,
    borderWidth: BORDER_WIDHT,
    borderColor: 'green',
    justifyContent: 'center',
  },
  thumb: {
    width: 16,
    height: 16,
    borderRadius: 11,
    backgroundColor: 'white',
  },
});
