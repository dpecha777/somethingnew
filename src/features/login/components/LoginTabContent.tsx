import { useForm } from 'react-hook-form';
import { AuthErrorResponse, useAuthLogin } from '../../../api';
import { Box, Button, Spacer, TabId, Tabs } from '../../../components';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormInput } from '../../../components';
import { useAuth } from '../../../contexts/AuthProvider/AuthProvider';
import { useRouter } from 'expo-router';

type LoginTabContentProps = {
  tabId: TabId;
  dismissModal: () => void;
};

const loginFormSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6),
  })
  .required();

type LoginFormSchemaType = z.infer<typeof loginFormSchema>;

export const LoginTabContent = ({
  tabId,
  dismissModal,
}: LoginTabContentProps) => {
  const router = useRouter();
  const { control, handleSubmit } = useForm<LoginFormSchemaType>({
    mode: 'onSubmit',
    resolver: zodResolver(loginFormSchema),
  });

  const { login } = useAuth();
  const { mutate: authLogin, isPending } = useAuthLogin();
  const handleFormSubmit = handleSubmit((data) => {
    authLogin(data, {
      onSuccess: async (data) => {
        login(data.access_token);
        router.replace('/(app)');
        dismissModal();
      },
      onError: (err) => {
        const error = err as AuthErrorResponse;
        const errorMessage = error.response?.data?.message;
        dismissModal();
        router.push({ pathname: '/error', params: { error: errorMessage } });
      },
    });
  });

  return (
    <Tabs.Content id={tabId}>
      <Box fullHeight>
        <FormInput
          control={control}
          name='email'
          placeholder='Username'
          defaultValue=''
          textContentType='emailAddress'
          autoCapitalize='none'
        />
        <Spacer size='sm' />
        <FormInput
          control={control}
          name='password'
          placeholder='Password'
          defaultValue=''
          secureTextEntry
          autoCapitalize='none'
        />
        <Spacer size='xl' />
        <Button fullWidth onPress={handleFormSubmit} disabled={isPending}>
          Login
        </Button>
      </Box>
    </Tabs.Content>
  );
};
