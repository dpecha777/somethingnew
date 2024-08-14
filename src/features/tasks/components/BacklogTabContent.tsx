import { Alert, FlatList } from 'react-native';
import { Spacer, Tabs } from '../../../components';
import { DASHBOARD_TABS } from '../constants';
import { Task } from '../../../api';
import { TaskListItem } from './TaskListItem';

type BacklogTabContentProps = {
  tasks: Task[] | undefined;
};

export const BacklogTabContent = ({ tasks = [] }: BacklogTabContentProps) => {
  return (
    <Tabs.Content id={DASHBOARD_TABS.backlog}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={tasks}
        renderItem={({ item }) => {
          return (
            <>
              <TaskListItem
                item={item}
                onPress={() => Alert.alert('TODO', 'Create task detail')}
              />
              <Spacer size='sm' />
            </>
          );
        }}
      />
    </Tabs.Content>
  );
};
