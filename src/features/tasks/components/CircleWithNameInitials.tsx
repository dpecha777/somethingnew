import { StyleSheet } from 'react-native';
import { User } from '../../../api/user';
import { Box, Text } from '../../../components';
import { getInitialsFromName } from '../../../helpers';
import { useThemeColor } from '../../../hooks/useThemeColor';

const CIRCLE_SIZE = 30;

type CircleWithNameInitialsProps = { user: User };

export const CircleWithNameInitials = ({
  user,
}: CircleWithNameInitialsProps) => {
  const { first_name, last_name } = user;
  const secTextColor = useThemeColor('secondaryTxt');

  return (
    <Box
      justifyContent='center'
      alignItems='center'
      style={[
        styles.circle,
        {
          backgroundColor: secTextColor,
        },
      ]}
    >
      <Text variant='tag' color='white'>
        {getInitialsFromName(first_name, last_name)}
      </Text>
    </Box>
  );
};

const styles = StyleSheet.create({
  circle: {
    height: CIRCLE_SIZE,
    width: CIRCLE_SIZE,
    borderRadius: 50,
  },
});
