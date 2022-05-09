import * as React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import SearchBar from './components/Searchbar';
import ProductList from './components/ProductsList.js'

export default function HomeScreen({navigation}) {
    return(
    <ScrollView style={styles.container}>
        
        <ImageBackground source={require('./images/gradient.png')} style={styles.gradient} blurRadius={16}></ImageBackground>
        <Image source={require('./images/field.png')} style={styles.image} blurRadius={10}></Image>
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
        backgroundColor: '#fff'
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