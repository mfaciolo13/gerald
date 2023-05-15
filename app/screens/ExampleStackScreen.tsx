import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from 'app/routes/Stack';
import { View, Text, Button } from 'react-native';

type Props = NativeStackScreenProps<RootStackParams, 'Screen2'>;

const ExampleStackScreen = ({ route, navigation }: Props) => {
  const goToScreen1 = () => navigation.navigate('Screen1');

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>{route.name}</Text>
      <Button title="Go to Screen1" onPress={goToScreen1} />
    </View>
  );
};

export default ExampleStackScreen;
