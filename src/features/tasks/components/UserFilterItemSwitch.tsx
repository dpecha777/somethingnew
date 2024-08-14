import { User } from '../../../api';
import { Box, Switch, Text } from '../../../components';
import { radius } from '../../../constants/Border';
import { composeUserName } from '../../../helpers';
import { useThemeColor } from '../../../hooks/useThemeColor';

type UserFilterItemSwitchProps = {
  user: User;
  switchedOn: boolean;
  onSwitching: (val: boolean) => void;
};

export const UserFilterItemSwitch = ({
  user,
  switchedOn,
  onSwitching,
}: UserFilterItemSwitchProps) => {
  const secBgColor = useThemeColor('secondaryBg');

  return (
    <Box
      flexDirection='row'
      justifyContent='space-between'
      alignItems='center'
      paddingVertical='sm'
      paddingHorizontal='sm'
      style={{
        backgroundColor: secBgColor,
        borderRadius: radius.normal,
      }}
    >
      <Text variant='highlight'>
        {composeUserName(user.first_name, user.last_name)}
      </Text>

      <Switch
        initialValue={switchedOn}
        onValueChange={(val) => onSwitching(val)}
      />
    </Box>
  );
};
