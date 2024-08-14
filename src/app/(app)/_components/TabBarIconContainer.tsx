import { Box } from '../../../components';
import { radius } from '../../../constants/Border';
import {
  useThemeColor,
  UseThemeColorNameProp,
} from '../../../hooks/useThemeColor';

type TabBarIconContainerProps = {
  children: React.ReactNode;
  focused?: boolean;
  customBackgroundColor?: UseThemeColorNameProp;
  showIndicator?: boolean;
};

const ICON_CONTAINER_SIZE = 44;
const DOT_SIZE = 6;

export const TabBarIconContainer = ({
  children,
  focused,
  customBackgroundColor,
  showIndicator = true,
}: TabBarIconContainerProps) => {
  const secBgColor = useThemeColor('secondaryBg');
  const primaryTextColor = useThemeColor('primaryTxt');
  const customBgColor = useThemeColor(customBackgroundColor ?? 'brand');

  const color = customBackgroundColor ? customBgColor : secBgColor;
  const containerBackgroundColor = focused ? color : 'transparent';

  return (
    <>
      <Box
        justifyContent='center'
        alignItems='center'
        style={{
          backgroundColor: containerBackgroundColor,
          borderRadius: radius.normal,
          height: ICON_CONTAINER_SIZE,
          width: ICON_CONTAINER_SIZE,
        }}
      >
        {children}
      </Box>
      {focused && showIndicator && (
        <Box
          style={{
            height: DOT_SIZE,
            width: DOT_SIZE,
            borderRadius: 50,
            backgroundColor: primaryTextColor,
            position: 'absolute',
            bottom: -25,
          }}
        />
      )}
    </>
  );
};
