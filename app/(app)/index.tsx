import { Text, View } from 'react-native';
import { useThemeColor } from '../../hooks/useThemeColor';

export default function Index() {
  const neco = useThemeColor('brand');
  console.log('neco :>> ', neco);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: neco,
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
