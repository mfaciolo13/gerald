import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { ExampleStackScreen, HomeScreen } from '_screens';

export type RootStackParams = {
  Screen1;
  Screen2;
};

const StackNav = createStackNavigator<RootStackParams>();

const Stack = () => {
  return (
    <View style={styles.container}>
      <StackNav.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: '#1A172A',
          },
        }}
      >
        <StackNav.Screen
          options={{ headerShown: false }}
          name="Screen1"
          component={HomeScreen}
        />
        <StackNav.Screen name="Screen2" component={ExampleStackScreen} />
      </StackNav.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Stack;
