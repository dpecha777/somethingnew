import * as React from 'react';
import { Path } from 'react-native-svg';
import { useThemeColor } from '../hooks/useThemeColor';
import { IconProps } from './types';
import { RawSvg } from './RawSvg';

export const PlusIcon = ({ color }: IconProps) => {
  const strokeColor = useThemeColor(color ?? 'primaryTxt');
  return (
    <RawSvg>
      <Path
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M12 5v14m-7-7h14'
      />
    </RawSvg>
  );
};
