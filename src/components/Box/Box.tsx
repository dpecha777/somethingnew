import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { appSpacing, AppSpacingUnion } from '../../constants/Spacing';

export type BoxProps = {
  children: React.ReactNode;
  justifyContent?: ViewStyle['justifyContent'];
  alignItems?: ViewStyle['alignItems'];
  flexDirection?: ViewStyle['flexDirection'];
  style?: StyleProp<ViewStyle>;

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

export const Box = ({
  children,
  justifyContent,
  alignItems,
  flexDirection,
  margin,
  marginVertical,
  marginHorizontal,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  padding,
  paddingVertical,
  paddingHorizontal,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  style,
}: BoxProps) => {
  const spacing: ViewStyle = {
    margin: margin ? appSpacing[margin] : undefined,
    marginVertical: marginVertical ? appSpacing[marginVertical] : undefined,
    marginHorizontal: marginHorizontal
      ? appSpacing[marginHorizontal]
      : undefined,
    marginTop: marginTop ? appSpacing[marginTop] : undefined,
    marginBottom: marginBottom ? appSpacing[marginBottom] : undefined,
    marginLeft: marginLeft ? appSpacing[marginLeft] : undefined,
    marginRight: marginRight ? appSpacing[marginRight] : undefined,
    padding: padding ? appSpacing[padding] : undefined,
    paddingVertical: paddingVertical ? appSpacing[paddingVertical] : undefined,
    paddingHorizontal: paddingHorizontal
      ? appSpacing[paddingHorizontal]
      : undefined,
    paddingTop: paddingTop ? appSpacing[paddingTop] : undefined,
    paddingBottom: paddingBottom ? appSpacing[paddingBottom] : undefined,
    paddingLeft: paddingLeft ? appSpacing[paddingLeft] : undefined,
    paddingRight: paddingRight ? appSpacing[paddingRight] : undefined,
  };

  return (
    <View
      style={[
        {
          justifyContent,
          alignItems,
          flexDirection,
          ...spacing,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};
