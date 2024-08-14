import Svg from 'react-native-svg';

const BASE_SIZE = 24;

export type RawSvgProps = {
  children: React.ReactNode;
  size?: number;
  viewBoxSize?: number;
};

export const RawSvg = ({
  size = BASE_SIZE,
  viewBoxSize,
  children,
}: RawSvgProps) => {
  return (
    <Svg
      fill='none'
      height={size}
      width={size}
      viewBox={`0 0 ${viewBoxSize || BASE_SIZE} ${viewBoxSize || BASE_SIZE}`}
    >
      {children}
    </Svg>
  );
};
