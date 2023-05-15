import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Tabs from './Tabs';
import { CustomDrawer } from '_components';

const DrawerNav = createDrawerNavigator();

const Drawer = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top * 1.5 }]}>
      <DrawerNav.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          overlayColor: '#00000000',
          drawerActiveBackgroundColor: '#FC807433',
          drawerActiveTintColor: '#FC8074',
          drawerLabelStyle: {
            fontSize: 20,
          },
          drawerItemStyle: {
            width: '83%',
            borderRadius: 16,
            justifyContent: 'center',
            paddingLeft: 16,
            marginLeft: 24,
          },
          sceneContainerStyle: {
            backgroundColor: '#1A172A',
          },
          drawerStyle: {
            backgroundColor: '#1A172A',
            borderTopLeftRadius: 38,
            width: '55%',
          },
        }}
      >
        <DrawerNav.Screen
          name="Start"
          options={{
            headerShown: false,
          }}
          component={Tabs}
        />
      </DrawerNav.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Drawer;
