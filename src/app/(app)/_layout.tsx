import { Redirect, SplashScreen, Tabs } from 'expo-router';
import { useAuth } from '../../contexts/AuthProvider/AuthProvider';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { appSpacing } from '../../constants/Spacing';
import { useThemeColor } from '../../hooks/useThemeColor';
import { Alert } from 'react-native';
import { TabBarIconContainer } from './_components/TabBarIconContainer';
import { BORDER_WIDHT } from '../../constants/Border';
import { GridIcon, PlusIcon, UserIcon } from '../../icons';

export default function Layout() {
  const { isAuthenticated, isLoading } = useAuth();
  const outlineColor = useThemeColor('outline');
  const bgColor = useThemeColor('primaryBg');

  const [loaded] = useFonts({
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    ObjektivMk1: require('../../../assets/fonts/ObjektivMk1_Trial_Rg.ttf'),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    ObjektivMk1Bold: require('../../../assets/fonts/ObjektivMk1_Trial_Bd.ttf'),
  });
  useEffect(() => {
    if (loaded && !isLoading) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded || isLoading) {
    return null;
  }

  if (!isAuthenticated) {
    return <Redirect href='/login' />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: outlineColor,
          borderTopWidth: BORDER_WIDHT,
          backgroundColor: bgColor,
          height: 122,
          paddingTop: appSpacing.lg,
          paddingBottom: appSpacing.xl,
          paddingHorizontal: appSpacing.md,
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <TabBarIconContainer focused={focused}>
              <GridIcon />
            </TabBarIconContainer>
          ),
        }}
      />
      <Tabs.Screen
        name='createTaskBlank'
        options={{
          title: '',
          tabBarIcon: () => (
            <TabBarIconContainer
              customBackgroundColor='brand'
              showIndicator={false}
              focused
            >
              <PlusIcon color='white' />
            </TabBarIconContainer>
          ),
        }}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            Alert.alert('TODO', 'Create task form modal screen');
          },
        })}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <TabBarIconContainer focused={focused}>
              <UserIcon />
            </TabBarIconContainer>
          ),
        }}
      />
    </Tabs>
  );
}
