import * as React from 'react';
import { Path } from 'react-native-svg';
import { useThemeColor } from '../hooks/useThemeColor';
import { IconProps } from './types';
import { RawSvg } from './RawSvg';

export const AlertIcon = ({ color }: IconProps) => {
  const strokeColor = useThemeColor(color ?? 'primaryTxt');
  return (
    <RawSvg>
      <Path
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M12 8v4m0 4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z'
      />
    </RawSvg>
  );
};
