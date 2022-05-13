import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';


export default function HomeScreen({navigation}) {
    return(
    <View>
        <View style={styles.container}>
            <Text style={styles.title}>Cămara Românească</Text>
        </View>

            

        <View style={styles.posts}>
            <View style={styles.post}>
                
                <Text style={styles.postText}>Miel tăiat 20lei pe kilogram</Text>
                <Text style={styles.postText}>Nume: Ghiță Mureșan</Text>
                <Text style={styles.postText}>Locație: Rădăuți jud. Suceava</Text>
                <Text style={styles.postText}>Nr. Tel.: +40 678 478 7899</Text>
            
            </View>
            <View style={styles.post}>
                
                <Text style={styles.postText}>Vând lemn de stejar calitate bună</Text>
                <Text style={styles.postText}>Nume: Darius Petruș</Text>
                <Text style={styles.postText}>Locație: Ceahlău jud. Neamț</Text>
                <Text style={styles.postText}>Nr. Tel.: +40 345 473 7564</Text>
            
            </View>
            <View style={styles.post}>
                
                <Text style={styles.postText}>Vând dulceață Bio de prune</Text>
                <Text style={styles.postText}>Nume: Iulian Șerban</Text>
                <Text style={styles.postText}>Locație: Vălureni jud. Mureș</Text>
                <Text style={styles.postText}>Nr. Tel.: +40 456 778 7576</Text>
            
            
            </View>
            <View style={styles.post}>
                
                
                <Text style={styles.postText}>Vând sfori de cânepă</Text>
                <Text style={styles.postText}>Nume: Alexandru Grama</Text>
                <Text style={styles.postText}>Locație: Finteușu Mare jud. Maramureș</Text>
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