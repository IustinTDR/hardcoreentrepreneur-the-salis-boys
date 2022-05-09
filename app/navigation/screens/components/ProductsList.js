import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';


export default function HomeScreen({navigation}) {
    return(
    <ScrollView>
        <View style={styles.container}>
            <Text style={styles.title}>Recent posts</Text>
        </View>

        <ScrollView style={styles.posts}>
            <View style={styles.post}>
                
                <Text style={styles.postText}>Electrician and Plumber</Text>
                <Text style={styles.postText}>Nume: Adrian Brincus</Text>
                <Text style={styles.postText}>Nr. Tel.: +40 716 473 9384</Text>
            
            </View>
            <View style={styles.post}>
                
                
                <Text style={styles.postText}>Electrician and Plumber</Text>
            
            
            </View>
            <View style={styles.post}>
                
                
                <Text style={styles.postText}>Electrician and Plumber</Text>
            
            
            </View>
            <View style={styles.post}>
                
                
                <Text style={styles.postText}>Electrician and Plumber</Text>
            
            
            </View>
            <View style={styles.post}>
                
                
                <Text style={styles.postText}>Electrician and Plumber</Text>
            
            
            </View>
            <View style={styles.post}>
                
                
                <Text style={styles.postText}>Electrician and Plumber</Text>
            
            
            </View>
        </ScrollView>
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
        backgroundColor: '#d3f8d3',
        height: 200,
        width: 350,
        marginBottom: 20,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },

    postText: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18
    }


})
