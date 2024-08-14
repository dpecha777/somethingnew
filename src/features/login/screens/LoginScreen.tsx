import { Box, Button, Spacer, Tabs, Text } from '../../../components';
import { SafeAreaView, Keyboard } from 'react-native';
import { PhoneSystem } from '../../../images/svg/PhoneSystem';
import { Modal, useModal } from '../../../components/Modal/Modal';
import { useState } from 'react';
import { LoginTabContent } from '../components/LoginTabContent';
import { SigninTabContent } from '../components/SignInTabContant';

const LoginTabs = {
  login: 'login',
  signup: 'signup',
};

export const LoginScreen = () => {
  const title = 'Seamless project management like never before.';
  const description = `Create tasks, add estimations and see all of your team's work in a single application. Get started today!`;

  const [defaultTab, setDefaultTab] = useState('login');
  const { ref, present, dismiss } = useModal();

  const handleLogin = () => {
    setDefaultTab('login');
    present();
  };
  const handleSignin = () => {
    setDefaultTab('signup');
    present();
  };

  Keyboard.addListener('keyboardDidShow', () => {
    ref.current?.snapToIndex(4);
  });
  Keyboard.addListener('keyboardDidHide', () => {
    ref.current?.snapToIndex(0);
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box
        justifyContent='center'
        alignItems='center'
        paddingHorizontal='lg'
        fullHeight
      >
        <PhoneSystem />
        <Spacer size='2xl' />
        <Text variant='h1' center>
          {title}
        </Text>
        <Spacer />
        <Text color='secondary' center>
          {description}
        </Text>
      </Box>
      <Box
        flexDirection='row'
        justifyContent='center'
        paddingHorizontal='lg'
        paddingBottom='md'
      >
        <Button fullWidth variant='outline' onPress={handleLogin}>
          Log in
        </Button>
        <Spacer isInline size='sm' />
        <Button fullWidth onPress={handleSignin}>
          Sign up
        </Button>
      </Box>

      <Modal snapPoints={['60%', '70%', '80%', '90%', '100%']} ref={ref}>
        <Box paddingHorizontal='lg' fullHeight>
          <Tabs.Container>
            <Tabs.Header defaultTabId={defaultTab}>
              <Tabs.Button label='Login' id={LoginTabs.login} />
              <Tabs.Button label='Signup' id={LoginTabs.signup} />
            </Tabs.Header>
            <Spacer size='xl' />
            <LoginTabContent tabId={LoginTabs.login} dismissModal={dismiss} />
            <SigninTabContent tabId={LoginTabs.signup} dismissModal={dismiss} />
          </Tabs.Container>
        </Box>
      </Modal>
    </SafeAreaView>
  );
};
