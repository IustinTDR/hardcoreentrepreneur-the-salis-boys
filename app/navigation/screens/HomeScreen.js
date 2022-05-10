import * as React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import SearchBar from './components/Searchbar';
import ProductList from './components/ProductsList.js';
//import { AntDesign } from '@expo/vector-icons';

export default function HomeScreen({navigation}) {
    return(
    <ScrollView style={styles.container}>

        <Image source={require('./images/field.png')} style={styles.image} blurRadius={0}></Image>
        <SearchBar></SearchBar>
        <ProductList></ProductList>
        {/* <View style={styles.plus}></View>
            <AntDesign name="pluscircleo" size={24} color="black" />
        </View> */}
    </ScrollView>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
        backgroundColor: '#b0e0e6'
    },

    text: {
        fontSize: 16, 
        fontWeight: 'bold'
    },

    image: {
        height: 130,
        width: '175%',
        marginTop: 0,
        marginBottom: 30,
    },
    
    // plus: {
        
    // }
})
