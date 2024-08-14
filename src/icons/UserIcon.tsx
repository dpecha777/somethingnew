import * as React from 'react';
import { Path } from 'react-native-svg';
import { RawSvg } from './RawSvg';
import { useThemeColor } from '../hooks/useThemeColor';
import { IconProps } from './types';

export const UserIcon = ({ color }: IconProps) => {
  const strokeColor = useThemeColor(color ?? 'primaryTxt');
  return (
    <RawSvg>
      <Path
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M20 21c0-1.396 0-2.093-.172-2.661a4 4 0 0 0-2.667-2.667c-.568-.172-1.265-.172-2.661-.172h-5c-1.396 0-2.093 0-2.661.172a4 4 0 0 0-2.667 2.667C4 18.907 4 19.604 4 21M16.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z'
      />
    </RawSvg>
  );
};
