import { SafeAreaView } from 'react-native';
import { Box, Text, Tabs, Spacer } from '../../../components';
import { DASHBOARD_TABS } from '../constants';
import { BacklogTabContent } from '../components/BacklogTabContent';
import { DoingTabContent } from '../components/DoingTabContent';
import { DoneTabContent } from '../components/DoneTabContent';

export const TaskDashboardScreen = () => {
  const title = 'Dashboard';
  const description = `All of your team's work in one place.`;

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
            <BacklogTabContent />
            <DoingTabContent />
            <DoneTabContent />
          </Tabs.Container>
        </Box>
      </Box>
    </SafeAreaView>
  );
};
