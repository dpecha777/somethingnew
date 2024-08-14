import { Tabs, Text } from '../../../components';
import { DASHBOARD_TABS } from '../constants';

export const DoneTabContent = () => {
  return (
    <Tabs.Content id={DASHBOARD_TABS.done}>
      <Text variant='h1'>TODO: Done list</Text>
    </Tabs.Content>
  );
};
