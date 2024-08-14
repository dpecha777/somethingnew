import * as React from 'react';
import { Path } from 'react-native-svg';
import { RawSvg } from './RawSvg';
import { useThemeColor } from '../hooks/useThemeColor';
import { IconProps } from './types';

export const FilterLinesIcon = ({ color }: IconProps) => {
  const strokeColor = useThemeColor(color ?? 'primaryTxt');
  return (
    <RawSvg>
      <Path
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M6 12h12M3 6h18M9 18h6'
      />
    </RawSvg>
  );
};
