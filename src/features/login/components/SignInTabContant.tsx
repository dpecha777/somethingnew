import { Box, Button, Input, Spacer, Tabs, TabId } from '../../../components';

type SigninTabContentProps = {
  tabId: TabId;
  dismissModal: () => void;
};

export const SigninTabContent = ({
  tabId,
  dismissModal,
}: SigninTabContentProps) => {
  return (
    <Tabs.Content id={tabId}>
      <Box fullHeight>
        <Input placeholder='New username' />
        <Spacer size='sm' />
        <Input placeholder='New password' secureTextEntry />
        <Spacer size='xl' />
        <Button fullWidth onPress={dismissModal}>
          Signin
        </Button>
      </Box>
    </Tabs.Content>
  );
};
