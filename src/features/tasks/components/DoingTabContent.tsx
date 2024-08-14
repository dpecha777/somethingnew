import { Tabs, Text } from '../../../components';
import { DASHBOARD_TABS } from '../constants';

export const DoingTabContent = () => {
  return (
    <Tabs.Content id={DASHBOARD_TABS.doing}>
      <Text variant='h1'>TODO: Doing list</Text>
    </Tabs.Content>
  );
};
