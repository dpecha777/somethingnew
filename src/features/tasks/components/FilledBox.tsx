import { Pressable } from 'react-native';
import { Box } from '../../../components';
import { radius } from '../../../constants/Border';
import { useThemeColor } from '../../../hooks/useThemeColor';

const BOX_SIZE = 44;

type FilledBoxProps = {
  children: React.ReactNode;
  onPress?: () => void;
};

export const FilledBox = ({ children, onPress }: FilledBoxProps) => {
  const secBg = useThemeColor('secondaryBg');

  const box = (
    <Box
      justifyContent='center'
      alignItems='center'
      style={{
        height: BOX_SIZE,
        width: BOX_SIZE,
        backgroundColor: secBg,
        borderRadius: radius.normal,
      }}
    >
      {children}
    </Box>
  );

  if (onPress) {
    return <Pressable onPress={onPress}>{box}</Pressable>;
  }

  return box;
};
