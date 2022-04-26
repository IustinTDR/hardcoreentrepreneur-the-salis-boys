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
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0

  },

  headerContainer: {
    width: '92%',
    height: '25%',
    margin: 12,
    marginTop: 40,
    borderRadius: 16,
    backgroundColor: 'white'
  },

  bodyContainer: {
    width: '92%',
    height: '50%',
    margin: 12,
    borderRadius: 16,
    backgroundColor: 'white'
  },

  footerContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '92%',
    height: '10%',
    borderRadius: 16,
    margin: 12,
    marginBottom: 20,
    backgroundColor: 'white'
  },

  footerElements: {
    width: '24.75%',
    height: '60%',
    borderRadius: 10,
    margin: 15.25,
    marginTop: 19,
    marginBottom: 16,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center'

  },


});









