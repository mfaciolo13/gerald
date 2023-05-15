import { View, Text, StyleSheet } from 'react-native';

import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  useDrawerProgress,
} from '@react-navigation/drawer';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const drawerItemProps = {
  inactiveTintColor: 'white',
  inactiveBackgroundColor: 'transparent',
  style: {
    height: 55,
    paddingLeft: 16,
    marginLeft: 24,
  },
  labelStyle: {
    fontSize: 20,
  },
};

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const progress: any = useDrawerProgress();

  const viewStyles = useAnimatedStyle(() => {
    const translateY = interpolate(progress.value, [0, 1], [0, 24]);

    return {
      transform: [{ translateY }],
    };
  });

  return (
    <Animated.View style={[styles.container, viewStyles]}>
      <DrawerContentScrollView {...props}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Beka</Text>
        </View>
        <DrawerItemList {...props} />
        <DrawerItem onPress={() => {}} label="Your Cart" {...drawerItemProps} />
        <DrawerItem onPress={() => {}} label="Favorites" {...drawerItemProps} />
        <DrawerItem
          onPress={() => {}}
          label="Your Orders"
          {...drawerItemProps}
        />
        <View style={styles.spacing} />
        <DrawerItem onPress={() => {}} label="Sign Out" {...drawerItemProps} />
      </DrawerContentScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 36,
    marginBottom: 40,
  },
  title: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: 0,
    lineHeight: 38,
  },
  spacing: {
    height: 1,
    width: 175.5,
    borderColor: '#84818e',
    borderWidth: 1,
    marginVertical: 20,
    marginHorizontal: 30,
  },
});

export default CustomDrawer;
