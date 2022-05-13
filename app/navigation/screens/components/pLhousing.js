import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';


export default function HousingScreen({navigation}) {
    return(
    <View>
        <View style={styles.container}>
            <Text style={styles.title}>Cămara Românească</Text>
        </View>

            

        <View style={styles.posts}>
            <View style={styles.post}>
                
                <Text style={styles.postText}>Închiriez apartament</Text>
                <Text style={styles.postText}>Nume: Răzvan Zlampa</Text>
                <Text style={styles.postText}>Locație: Petroșani jud. Hunedoara</Text>
                <Text style={styles.postText}>Nr. Tel.: +40 678 478 7899</Text>
            
            </View>
            <View style={styles.post}>
                
                <Text style={styles.postText}>Vând teren, 5 hectare de pădure</Text>
                <Text style={styles.postText}>Nume: Bogdan Ionescu</Text>
                <Text style={styles.postText}>Locație: Mireșu Mare jud. Maramureș</Text>
                <Text style={styles.postText}>Nr. Tel.: +40 345 473 7564</Text>
            
            </View>
            <View style={styles.post}>
                
                <Text style={styles.postText}>Vând casă bătrânească</Text>
                <Text style={styles.postText}>Nume: Andreea Pop</Text>
                <Text style={styles.postText}>Locație: Scornicești jud. Olt</Text>
                <Text style={styles.postText}>Nr. Tel.: +40 456 778 7576</Text>
            
            
            </View>
            <View style={styles.post}>
                
                
                <Text style={styles.postText}>Închiriez cabană în munții apuseni</Text>
                <Text style={styles.postText}>Nume: Andrei Ungureanu</Text>
                <Text style={styles.postText}>Locație: Câmpeni jud. Alba</Text>
                <Text style={styles.postText}>Nr. Tel.: +40 231 301 7506</Text>
            
            
            </View>


        </View>
    </View>    
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    title: {
        marginLeft: 16,
        marginTop: 0,
        fontSize: 24,
        fontWeight: 'bold',
    

    },
    posts: {
        marginLeft: 17,
        marginTop: 20,
        backgroundColor: 'transparent'
    },

    post: {
        backgroundColor: '#fff',
        height: 200,
        width: 350,
        marginBottom: 20,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },

    postText: {
        alignItems: 'center',
        //justifyContent: 'center',
        fontSize: 18
    }


})