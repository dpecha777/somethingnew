import { Box } from '../../../components';
import { BORDER_WIDHT, radius } from '../../../constants/Border';
import { useThemeColor } from '../../../hooks/useThemeColor';

const BOX_SIZE = 44;

type OutlineBoxProps = {
  children: React.ReactNode;
};

export const OutlineBox = ({ children }: OutlineBoxProps) => {
  const borderColor = useThemeColor('outline');

  return (
    <Box
      justifyContent='center'
      alignItems='center'
      style={{
        height: BOX_SIZE,
        width: BOX_SIZE,
        borderColor,
        borderWidth: BORDER_WIDHT,
        borderRadius: radius.normal,
      }}
    >
      {children}
    </Box>
  );
};
