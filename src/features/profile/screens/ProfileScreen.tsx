import { useRouter } from 'expo-router';
import { Box, Button, Spacer, Text } from '../../../components';
import { useAuth } from '../../../contexts/AuthProvider/AuthProvider';
import { SafeAreaView } from 'react-native';

export const ProfileScreen = () => {
  const { logout } = useAuth();
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box padding='lg'>
        <Text variant='h1'>Profile</Text>

        <Spacer size='lg' />
        <Text>TODO: This page is not according to the figma desing.</Text>
        <Spacer size='lg' />

        <Button variant='outline' onPress={() => router.push('/style')}>
          Show UI components
        </Button>

        <Spacer size='sm' />
        <Button onPress={logout}>Sign out</Button>
      </Box>
    </SafeAreaView>
  );
};
