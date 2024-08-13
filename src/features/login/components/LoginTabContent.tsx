import { Box, Button, Input, Spacer, TabId, Tabs } from '../../../components';

type LoginTabContentProps = {
  tabId: TabId;
  dismissModal: () => void;
};

export const LoginTabContent = ({
  tabId,
  dismissModal,
}: LoginTabContentProps) => {
  return (
    <Tabs.Content id={tabId}>
      <Box fullHeight>
        <Input placeholder='Username' />
        <Spacer size='sm' />
        <Input placeholder='Password' secureTextEntry />
        <Spacer size='xl' />
        <Button fullWidth onPress={dismissModal}>
          Login
        </Button>
      </Box>
    </Tabs.Content>
  );
};
