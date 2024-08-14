import * as React from 'react';
import { Path } from 'react-native-svg';
import { useThemeColor } from '../hooks/useThemeColor';
import { IconProps } from './types';
import { RawSvg } from './RawSvg';

export const TaskIcon = ({ color }: IconProps) => {
  const strokeColor = useThemeColor(color ?? 'primaryTxt');
  return (
    <RawSvg>
      <Path
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M14 11H8m2 4H8m8-8H8m12-.2v10.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 22 16.88 22 15.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2V6.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 2 7.12 2 8.8 2h6.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C20 4.28 20 5.12 20 6.8Z'
      />
    </RawSvg>
  );
};
