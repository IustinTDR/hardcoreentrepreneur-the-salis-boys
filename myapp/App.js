import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';




export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        
      </View>


      <View style={styles.bodyContainer}>
        
      </View>


      <View style={styles.footerContainer}>
        <View style={styles.footerElements}>
          <Text>SERVICII</Text>
        </View>
        <View style={styles.footerElements}>
          <Text>PRODUSE</Text>
        </View>
        <View style={styles.footerElements}>
          <Text>CAZARE</Text>
        </View>
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
    margin: 16

  },

  headerContainer: {
    width: '100%',
    height: '25%',
    margin: 10,
    borderRadius: 20,
    backgroundColor: '#d3d3d3'
  },

  bodyContainer: {
    width: '100%',
    height: '50%',
    margin: 16,
    borderRadius: 20,
    backgroundColor: '#d3d3d3'
  },

  footerContainer: {
    width: '100%',
    height: '10%',
    borderRadius: 20,
    margin: 8,
    marginBottom: -24,
    backgroundColor: '#d3d3d3'
  },

  footerElements: {
    width: '25%',
    height: '60%',
    borderRadius: 10,
    margin: 16,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center'

  },


});
