import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import SearchBar from './components/Searchbar';
import ProductList from './components/pLproducts.js'

export default function ProductsScreen({navigation}) {
    return(
    <ScrollView style={styles.container}>

        <Image source={require('./images/nuts.png')} style={styles.image} blurRadius={0}></Image>
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
        backgroundColor: '#ffe4c4'
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
