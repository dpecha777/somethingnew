import { Alert, Pressable, SafeAreaView } from 'react-native';
import {
  Box,
  Text,
  Tabs,
  Spacer,
  Modal,
  useModal,
  Button,
} from '../../../components';
import { DASHBOARD_TABS } from '../constants';
import { BacklogTabContent } from '../components/BacklogTabContent';
import { DoingTabContent } from '../components/DoingTabContent';
import { DoneTabContent } from '../components/DoneTabContent';
import { OutlineBox } from '../components/OutlineBox';
import {
  DistributeSpacingVerticalIcon,
  FilterLinesIcon,
  GridIcon,
} from '../../../icons';
import { FilledBox } from '../components/FilledBox';
import { useMemo, useState } from 'react';
import { useGetUsers, User, useTasks } from '../../../api';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { UserFilterItemSwitch } from '../components/UserFilterItemSwitch';

/*
 * TODO:
 * OMLOUVAM SE UZ JSEM NEMEL CAS TO TADY UKLIDIT A PREHAZET DO KOMPONENT
 *  😔😔😔😔😔😔😔😔😔😔😔😔
 */

export const TaskDashboardScreen = () => {
  const title = 'Dashboard';
  const description = `All of your team's work in one place.`;
  const { ref, present, dismiss } = useModal();

  const { data: tasks } = useTasks();
  const { data: users } = useGetUsers();

  const [filteredByUsers, setFilteredByUsers] = useState<number[]>([]);
  const isFiltredByUsers = filteredByUsers?.length > 0;
  const filteredTasks = useMemo(
    () => tasks?.filter((task) => filteredByUsers.includes(task.user.id)) || [],
    [tasks, filteredByUsers],
  );

  const backlogTasks = useMemo(() => {
    if (isFiltredByUsers) {
      return filteredTasks;
    } else {
      return tasks;
    }
  }, [tasks, filteredTasks, isFiltredByUsers]);

  const showBtnTitle = `Show (${filteredTasks.length})`;

  const handleSwitchingOnUser = (item: User) => {
    setFilteredByUsers((prev) => {
      if (prev?.includes(item.id)) {
        return prev?.filter((id) => id !== item.id);
      } else {
        return [...(prev ?? []), item.id];
      }
    });
  };
  const handleReset = () => {
    setFilteredByUsers([]);
    dismiss();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box
        paddingTop='lg'
        paddingHorizontal='lg'
        flexDirection='row'
        justifyContent='space-between'
      >
        <OutlineBox>
          <GridIcon />
        </OutlineBox>
        <Box flexDirection='row'>
          <FilledBox onPress={() => Alert.alert('TODO', 'Toggle task view')}>
            <DistributeSpacingVerticalIcon />
          </FilledBox>
          <Spacer size='xs' isInline />
          <FilledBox onPress={present}>
            <FilterLinesIcon
              color={isFiltredByUsers ? 'brand' : 'primaryTxt'}
            />
          </FilledBox>
        </Box>
      </Box>
      <Box paddingTop='lg' paddingHorizontal='lg' fullHeight>
        <Text variant='h1'>{title}</Text>
        <Spacer size='xs' />
        <Text color='secondary'>{description}</Text>
        <Spacer size='lg' />

        <Box fullHeight>
          <Tabs.Container>
            <Tabs.Header defaultTabId={DASHBOARD_TABS.backlog}>
              <Tabs.Button label='Backlog' id={DASHBOARD_TABS.backlog} />
              <Tabs.Button label='Doing' id={DASHBOARD_TABS.doing} />
              <Tabs.Button label='Done' id={DASHBOARD_TABS.done} />
            </Tabs.Header>
            <Spacer size='lg' />
            <BacklogTabContent tasks={backlogTasks} />
            <DoingTabContent />
            <DoneTabContent />
          </Tabs.Container>
        </Box>
      </Box>
      <Modal snapPoints={['80%', '90%', '100%']} ref={ref}>
        <Box paddingHorizontal='lg' fullHeight>
          <Box
            flexDirection='row'
            justifyContent='space-between'
            alignItems='center'
          >
            <OutlineBox>
              <FilterLinesIcon />
            </OutlineBox>
            <Pressable onPress={dismiss}>
              <Text variant='button' color='secondary'>
                Close
              </Text>
            </Pressable>
          </Box>
          <Spacer size='xl' />
          <Text variant='h1'>Filters</Text>
          <Spacer size='xs' />
          <Text color='secondary'>
            Filter your tasks to maximize effectivness
          </Text>
          <Spacer size='xl' />

          <BottomSheetFlatList
            data={users}
            ListFooterComponent={
              isFiltredByUsers ? (
                <>
                  <Spacer size='xl' />
                  <Box flexDirection='row'>
                    <Button fullWidth variant='outline' onPress={handleReset}>
                      Reset
                    </Button>
                    <Spacer isInline size='sm' />
                    <Button fullWidth onPress={dismiss}>
                      {showBtnTitle}
                    </Button>
                  </Box>
                </>
              ) : null
            }
            renderItem={({ item }) => (
              <>
                <UserFilterItemSwitch
                  user={item}
                  switchedOn={filteredByUsers?.includes(item.id)}
                  onSwitching={() => handleSwitchingOnUser(item)}
                />
                <Spacer size='sm' />
              </>
            )}
          />
        </Box>
      </Modal>
    </SafeAreaView>
  );
};
