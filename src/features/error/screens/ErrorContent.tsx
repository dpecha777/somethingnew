import React from 'react';
import { Box, Button, Spacer, Text } from '../../../components';
import { AlertIcon } from '../../../icons';
import { StyleSheet } from 'react-native';
import { radius } from '../../../constants/Border';
import { useThemeColor } from '../../../hooks/useThemeColor';

const ICON_BOX_SIZE = 44;

type ErrorContentProps = {
  error: string;
  btnTitle: string;
  onPress: () => void;
};

export const ErrorContent = ({
  error,
  btnTitle,
  onPress,
}: ErrorContentProps) => {
  const iconBoxBg = useThemeColor('secondaryBg');

  return (
    <Box justifyContent='center' alignItems='center' fullHeight>
      <Box
        justifyContent='center'
        alignItems='center'
        style={[styles.iconBox, { backgroundColor: iconBoxBg }]}
      >
        <AlertIcon />
      </Box>
      <Spacer size='md' />
      <Text>{error}</Text>
      <Spacer size='md' />
      <Box>
        <Button variant='outline' onPress={onPress}>
          {btnTitle}
        </Button>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  iconBox: {
    height: ICON_BOX_SIZE,
    width: ICON_BOX_SIZE,
    borderRadius: radius.normal,
  },
});
