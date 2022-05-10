import * as React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import SearchBar from './components/Searchbar';
import ProductList from './components/pLhousing.js'

export default function HousingScreen({navigation}) {
    return(
    <ScrollView style={styles.container}>

        <Image source={require('./images/house.png')} style={styles.image} blurRadius={0}></Image>
        <SearchBar></SearchBar>
        <ProductList></ProductList>
        
    </ScrollView>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
        backgroundColor: '#fff0f5'
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
    
    
})
