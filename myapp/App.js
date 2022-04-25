import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';







export default function App() {
  return (
    <View style={styles.container}>

      

      <View style={styles.textContainer}>
        <Text>Hello React Native</Text>
      </View>

    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textContainer: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
    backgroundColor: '#d3d3d3'


  }
});
