import { Box, Button, Spacer, Text } from '../../../components';
import { SafeAreaView } from 'react-native';
import { PhoneSystem } from '../../../images/svg/PhoneSystem';

export const LoginScreen = () => {
  const title = 'Seamless project management like never before.';
  const description = `Create tasks, add estimations and see all of your team's work in a single application. Get started today!`;

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
        <Button fullWidth variant='outline'>
          Log in
        </Button>
        <Spacer isInline size='sm' />
        <Button fullWidth>Sign up</Button>
      </Box>
    </SafeAreaView>
  );
};
