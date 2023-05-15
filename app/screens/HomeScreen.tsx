import { Text, Button, View } from 'react-native';
import React from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { StackHeader } from '_components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDrawerProgress } from '@react-navigation/drawer';
import { RootStackParams } from 'app/routes/Stack';
import { StackScreenProps } from '@react-navigation/stack';

export type HomeProps = StackScreenProps<RootStackParams, 'Screen1'>;

const HomeScreen = ({ route, navigation }: HomeProps) => {
  const insets = useSafeAreaInsets();

  const progress: any = useDrawerProgress();

  const viewStyles = useAnimatedStyle(() => {
    const borderTopLeftRadius = interpolate(progress.value, [0, 1], [0, 38]);
    const paddingTop = interpolate(
      progress.value,
      [0, 1],
      [insets.top * 1.2, insets.top * 1],
    );

    return {
      borderTopLeftRadius,
      paddingTop,
    };
  });

  const goToScreen2 = () => navigation.navigate('Screen2');

  return (
    <Animated.View
      style={[
        {
          backgroundColor: 'white',
          flex: 1,
        },
        viewStyles,
      ]}
    >
      <StackHeader />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          flex: 1,
        }}
      >
        <Text>{route.name}</Text>
        <Button title="Go to Screen2" onPress={goToScreen2} />
      </View>
    </Animated.View>
  );
};

export default HomeScreen;
