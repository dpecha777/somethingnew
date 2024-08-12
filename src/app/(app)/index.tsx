import { Box, Button, Spacer, Text } from '../../components';

export default function Index() {
  return (
    <>
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
    </>
  );
}
