import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';
import { useThemeColor } from '../../hooks/useThemeColor';

export const PhoneSystem = () => {
  const bg = useThemeColor('secondaryBg');

  return (
    <Svg width={140} height={300} fill='none'>
      <Rect width={138.626} height={300} x={0.687} fill={bg} rx={16} />
      <Path
        fill='gray'
        d='M11.687 244c0-7.18 5.82-13 13-13h91c7.18 0 13 5.82 13 13s-5.82 13-13 13h-91c-7.18 0-13-5.82-13-13Z'
        opacity={0.1}
      />
      <Path
        fill='gray'
        d='M11.687 260c0-7.18 5.82-13 13-13h91c7.18 0 13 5.82 13 13s-5.82 13-13 13h-91c-7.18 0-13-5.82-13-13Z'
        opacity={0.3}
      />
      <Path
        fill='#F02'
        d='M11.687 276c0-7.18 5.82-13 13-13h91c7.18 0 13 5.82 13 13s-5.82 13-13 13h-91c-7.18 0-13-5.82-13-13Z'
      />
    </Svg>
  );
};
