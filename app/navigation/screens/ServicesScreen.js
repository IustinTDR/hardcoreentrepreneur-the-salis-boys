import * as React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import SearchBar from './components/Searchbar';
import ProductList from './components/pLservices.js'

export default function ServicesScreen({navigation}) {
    return(
    <ScrollView style={styles.container}>
        
        <ImageBackground source={require('./images/gradient.png')} style={styles.gradient} blurRadius={16}></ImageBackground>
        <Image source={require('./images/flag.png')} style={styles.image} blurRadius={0}></Image>
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
        backgroundColor: '#f5d0b3'
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
