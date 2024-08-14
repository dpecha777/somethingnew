import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { AppSpacingUnion } from '../../constants/Spacing';
import { getSpacingStyles } from './helpers/getSpacingStyles';

export type BoxProps = {
  children?: React.ReactNode;
  justifyContent?: ViewStyle['justifyContent'];
  alignItems?: ViewStyle['alignItems'];
  flexDirection?: ViewStyle['flexDirection'];
  style?: StyleProp<ViewStyle>;
  fullHeight?: boolean;

  margin?: AppSpacingUnion;
  marginVertical?: AppSpacingUnion;
  marginHorizontal?: AppSpacingUnion;
  marginTop?: AppSpacingUnion;
  marginBottom?: AppSpacingUnion;
  marginLeft?: AppSpacingUnion;
  marginRight?: AppSpacingUnion;

  padding?: AppSpacingUnion;
  paddingVertical?: AppSpacingUnion;
  paddingHorizontal?: AppSpacingUnion;
  paddingTop?: AppSpacingUnion;
  paddingBottom?: AppSpacingUnion;
  paddingLeft?: AppSpacingUnion;
  paddingRight?: AppSpacingUnion;
};

export const Box = (props: BoxProps) => {
  const {
    children,
    justifyContent,
    alignItems,
    flexDirection,
    fullHeight,
    style,
  } = props;
  const spacing = getSpacingStyles(props);

  return (
    <View
      style={[
        {
          justifyContent,
          alignItems,
          flexDirection,
          ...spacing,
        },
        fullHeight ? { flex: 1, height: '100%' } : undefined,
        style,
      ]}
    >
      {children}
    </View>
  );
};
