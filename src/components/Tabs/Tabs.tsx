import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { appSpacing } from '../../constants/Spacing';
import { Text } from '../Text/Text';
import { useThemeColor } from '../../hooks/useThemeColor';

type TabId = string | number;

type TabContextType = {
  activeTabId: TabId | null;
  setActiveTabId: (id: TabId) => void;
};

const defaultContextValue: TabContextType = {
  activeTabId: null,
  setActiveTabId: () => {},
};

const TabContext = createContext<TabContextType>(defaultContextValue);

const useTabContext = () => useContext(TabContext);

type TabProviderProps = {
  children: ReactNode;
};

const TabProvider: React.FC<TabProviderProps> = ({ children }) => {
  const [activeTabId, setActiveTabId] = useState<TabId | null>(null);
  return (
    <TabContext.Provider value={{ activeTabId, setActiveTabId }}>
      {children}
    </TabContext.Provider>
  );
};

type ContainerProps = {
  children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <TabProvider>{children}</TabProvider>
    </View>
  );
};

type HeaderProps = {
  children: ReactNode;
  defaultTabId: TabId;
};

const Header: React.FC<HeaderProps> = ({ children, defaultTabId }) => {
  if (!defaultTabId) {
    throw new Error('defaultTabId is required');
  }
  const { setActiveTabId } = useTabContext();
  useEffect(() => {
    setActiveTabId(defaultTabId);
  }, []);

  return <View style={styles.tabHeader}>{children}</View>;
};

type ButtonProps = {
  label: string;
  id: TabId;
};

const Button: React.FC<ButtonProps> = ({ label, id }) => {
  const { activeTabId, setActiveTabId } = useContext(TabContext);
  const isActive = activeTabId === id;
  const brandColor = useThemeColor('brand');

  return (
    <TouchableOpacity
      style={[
        styles.tabButton,
        isActive && {
          borderBottomWidth: 2,
          borderBottomColor: brandColor,
        },
      ]}
      onPress={() => setActiveTabId(id)}
    >
      <Text variant='highlight' color={isActive ? 'brand' : 'secondary'} center>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

type ContentProps = {
  id: TabId;
  children: ReactNode;
};

const Content: React.FC<ContentProps> = ({ id, children }) => {
  const { activeTabId } = useContext(TabContext);
  if (activeTabId !== id) return null;
  return <View style={styles.tabContent}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabHeader: {
    flexDirection: 'row',
  },
  tabButton: {
    flex: 1,
    paddingBottom: appSpacing.xs,
    paddingHorizontal: appSpacing.xxs,
  },
  tabContent: {
    flex: 1,
    padding: 20,
  },
});

export const Tabs = {
  Container,
  Header,
  Button,
  Content,
};
