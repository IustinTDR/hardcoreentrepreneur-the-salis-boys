import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HousingScreen({ navigation }) {
    return (
    <View style={styles.container}>
        <Text
            onPress={() => navigation.navigate('Home')}>Housing Screen
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