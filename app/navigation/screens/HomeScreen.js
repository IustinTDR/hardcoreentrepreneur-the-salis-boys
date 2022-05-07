import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function HomeScreen({navigation}) {
    return(
    <View style={styles.container}>
        <Image source={require('./images/field.png')} style={styles.image} ></Image>
    </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: 16, 
        fontWeight: 'bold'
    },

    image: {
        height: '30%',
        width: '175%',
        marginTop: 0,
        marginBottom: 475,

        //resizeMode: 'contain'

    }
})