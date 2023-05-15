import { Platform, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDrawerProgress } from '@react-navigation/drawer';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

import { DummyScreen } from '_screens';
import Stack from './Stack';

export const Tab = createBottomTabNavigator();

const Tabs = () => {
  const progress: any = useDrawerProgress();

  const isAndroid = Platform.OS === 'android';

  const viewStyles = useAnimatedStyle(() => {
    const rotate = interpolate(progress.value, [0, 1], [0, -7]);
    const translateY = interpolate(
      progress.value,
      [0, 1],
      [0, isAndroid ? 50 : 20],
    );
    const translateX = interpolate(
      progress.value,
      [0, 1],
      [0, isAndroid ? 275 : 33],
    );

    return {
      transform: [{ rotate: `${rotate}deg` }, { translateY }, { translateX }],
    };
  });

  return (
    <Animated.View style={[styles.container, viewStyles]}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            paddingBottom: 4,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Stack}
          options={{
            tabBarIcon: ({ focused }) => (
              <Entypo
                name="home"
                size={25}
                color={focused ? 'rgb(0, 122, 255)' : '#8E8E8F'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          component={DummyScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                name="contact-page"
                size={25}
                color={focused ? 'rgb(0, 122, 255)' : '#8E8E8F'}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Tabs;
