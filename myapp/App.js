import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>CAMARA ROMANEASCA</Text>
        </View>

        <View style={styles.headerMidsection}>
          <View style={styles.menu}>
            <Text>=</Text>
          </View>
          <View style={styles.searchbar}>
            <Text>Search...</Text>
          </View>
          <View style={styles.profile}>
            
          </View>
        </View>

        <View style={styles.filterGroup}>
          <View style={styles.filters}>
            <Text>carne</Text>
          </View>
          <View style={styles.filters}>
            <Text>hoteluri</Text>
          </View>
          <View style={styles.filters}>
            <Text>haine</Text>
          </View>
          <View style={styles.filters}>
            <Text>auto</Text>
          </View>
        </View>

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
    height: '20%',
    margin: 12,
    marginTop: 40,
    borderRadius: 16,
    backgroundColor: 'white'
  },

  bodyContainer: {
    width: '92%',
    height: '60%',
    margin: 12,
    marginTop: 0,
    borderRadius: 16,
    backgroundColor: 'white'
  },

  footerContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '92%',
    height: '12.5%',
    borderRadius: 16,
    margin: 12,
    marginBottom: 20,
    marginTop: 0,
    backgroundColor: 'white'
  },

  footerElements: {
    width: '24.75%',
    height: '60%',
    borderRadius: 10,
    margin: 15.25,
    marginTop: 15.5,
    marginBottom: 16,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center'

  },

  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  headerMidsection: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'darkgrey',
  },

  menu: {
    paddingRight: 12, 
    marginLeft: 8,
    marginTop: 12,
    marginBottom: 12,
    paddingTop: 4,
    paddingLeft: 12,
    backgroundColor: 'white',
    borderRadius: 10,
  },

  searchbar: {
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    padding: 6,
    paddingRight: 120,
    backgroundColor: 'lightgrey',
    borderRadius: 10

  },

  profile: {
    marginLeft: 45, 
    marginTop: 4,
    marginBottom: 4,
    marginRight: 2,
    paddingRight: 31,
    paddingLeft: 16,
    padding: 0,
    borderRadius: 50,
    backgroundColor: 'white',

  },

  filterGroup: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'grey',
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
  },

  filters: {
    margin: 12,
    marginTop: 10,
    marginLeft: 14,
    marginRight: 0,
    padding: 5,
    paddingLeft: 10,
    height: '60%',
    width: '20%',
    backgroundColor: 'lightgrey',
    borderRadius: 10
  }

});









