import { Alert, FlatList } from 'react-native';
import { Spacer, Tabs } from '../../../components';
import { DASHBOARD_TABS } from '../constants';
import { usePost } from '../../../api/task';
import { TaskListItem } from './TaskListItem';

export const BacklogTabContent = () => {
  const { data: tasks } = usePost();

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
