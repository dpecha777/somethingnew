import { useState } from 'react';
import { Box, Button, Input, Spacer, Text, Tabs } from '../components';
import { ScrollView } from 'react-native';

export default function Style() {
  const [textValue, setTextValue] = useState('');
  const [disabledTextValue, setDisabledTextValue] = useState('');

  return (
    <ScrollView>
      <Box padding='md'>
        <Text variant='h1'>Tabs</Text>
        <Spacer />

        <Tabs.Container>
          <Tabs.Header defaultTabId={'tab1'}>
            <Tabs.Button label='Tab 1' id='tab1' />
            <Tabs.Button label='Tab 2' id='tab2' />
            <Tabs.Button label='Tab 3' id='tab3' />
          </Tabs.Header>
          <Tabs.Content id='tab1'>
            <Box>
              <Text>Content Tab 1</Text>
            </Box>
          </Tabs.Content>
          <Tabs.Content id='tab2'>
            <Box>
              <Text>Content Tab 2</Text>
            </Box>
          </Tabs.Content>
          <Tabs.Content id='tab3'>
            <Box>
              <Text>Content Tab 3</Text>
            </Box>
          </Tabs.Content>
        </Tabs.Container>
      </Box>

      <Box justifyContent='center' padding='md'>
        <Text variant='h1' color='primary'>
          Typography
        </Text>
        <Spacer />
        <Text variant='h1' color='primary'>
          H1 primary
        </Text>
        <Text variant='highlight' color='primary'>
          Hightlight primary
        </Text>
        <Text variant='regular' color='primary'>
          Regular primary
        </Text>
        <Text variant='regular' color='secondary'>
          Regular secondary
        </Text>
      </Box>

      <Box padding='md'>
        <Text variant='h1' color='primary'>
          Buttons
        </Text>
        <Spacer />
        <Box flexDirection='row'>
          <Button small>Done</Button>
          <Spacer isInline />
          <Button small variant='outline'>
            Done
          </Button>
        </Box>
        <Spacer />
        <Box flexDirection='row'>
          <Button>Button</Button>
          <Spacer isInline />
          <Button variant='outline'>Button</Button>
        </Box>
        <Spacer />
        <Button fullWidth disabled>
          Button
        </Button>
        <Spacer />
        <Button variant='outline' fullWidth disabled>
          Button
        </Button>
      </Box>

      <Box padding='md'>
        <Text variant='h1' color='primary'>
          Inputs
        </Text>
        <Spacer />
        <Input
          placeholder='Text input'
          onChangeText={setTextValue}
          value={textValue}
        />
        <Spacer />
        <Input
          disabled
          placeholder='Disabled input'
          onChangeText={setDisabledTextValue}
          value={disabledTextValue}
        />
      </Box>
    </ScrollView>
  );
}
