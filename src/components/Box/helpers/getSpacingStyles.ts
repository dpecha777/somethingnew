import { ViewStyle } from 'react-native';
import { BoxProps } from '../Box';
import { appSpacing } from '../../../constants/Spacing';

export const getSpacingStyles = (props: BoxProps): ViewStyle => {
  const {
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
  } = props;

  return {
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
};
