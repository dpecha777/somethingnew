import type { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';

import { appSpacing, AppSpacingUnion } from '../../constants/Spacing';
import { useSpacing } from '../../hooks/useAppSpacing';

export type SpacerProps = {
  size?: AppSpacingUnion;
  isInline?: boolean;
};

export const Spacer = ({
  size,
  isInline = false, // for when spacer is inserted in row layout
}: SpacerProps) => {
  const baseSpacing = useSpacing('sm');
  const spacing = size ? appSpacing[size] : baseSpacing;

  const heightStyle = isInline
    ? undefined
    : ({ height: spacing } satisfies ViewStyle);
  const widthStyle = (
    isInline ? { width: spacing } : { width: '100%' }
  ) satisfies ViewStyle;

  const style: StyleProp<ViewStyle> = [heightStyle, widthStyle];
  return <View style={style} />;
};
