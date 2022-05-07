import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen({navigation}) {
    return(
    <View style={styles.container}>
        <Text
            onPress={() => alert('This is the "Home" screen. ')}>Home Screen
        </Text>
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
    }
})