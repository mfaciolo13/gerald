import { View, Text, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { HomeProps } from 'app/screens/HomeScreen';

const StackHeader = () => {
  const navigation = useNavigation<HomeProps['navigation']>();

  return (
    <View style={styles.container}>
      <SimpleLineIcons
        name="menu"
        size={22}
        color="#E8E5E5"
        onPress={() => navigation.openDrawer()}
      />
      <Text
        style={{
          fontSize: 20,
          color: '#9f9fa0',
          letterSpacing: 5,
          marginLeft: 22,
          alignSelf: 'flex-end',
        }}
      >
        START
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 22,
  },
});

export default StackHeader;
