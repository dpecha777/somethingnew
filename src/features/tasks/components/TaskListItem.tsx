import { Pressable } from 'react-native';
import { Task } from '../../../api/task';
import { Box, Spacer, Text } from '../../../components';
import { radius } from '../../../constants/Border';
import { useThemeColor } from '../../../hooks/useThemeColor';
import { TaskIcon } from '../../../icons';
import { CircleWithNameInitials } from './CircleWithNameInitials';
import { OutlineBox } from './OutlineBox';

type TaskListItemProps = {
  item: Task;
  onPress: () => void;
};

export const TaskListItem = ({ item, onPress }: TaskListItemProps) => {
  const secBg = useThemeColor('secondaryBg');

  return (
    <Pressable onPress={onPress}>
      <Box
        paddingHorizontal='md'
        paddingVertical='sm'
        justifyContent='center'
        alignItems='center'
        flexDirection='row'
        style={{
          backgroundColor: secBg,
          borderRadius: radius.normal,
        }}
      >
        <OutlineBox>
          <TaskIcon />
        </OutlineBox>
        <Spacer size='md' isInline />
        <Box style={{ flexShrink: 1 }}>
          <Text variant='highlight' numberOfLines={1}>
            {item.name}
          </Text>
          <Spacer size='xxs' />
          <Text color='secondary'>{item.estimation}</Text>
        </Box>
        <Spacer size='md' isInline />
        <CircleWithNameInitials user={item.user} />
      </Box>
    </Pressable>
  );
};
