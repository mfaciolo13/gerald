import { Text, StyleSheet } from 'react-native';
import { useDrawerProgress } from '@react-navigation/drawer';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const DummyScreen = () => {
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

  return (
    <Animated.View style={[styles.container, viewStyles]}>
      <Text>Contact screen</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DummyScreen;
