import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function ProfileScreen({navigation}) {
    return (
    <ScrollView style={styles.main}>
        

        <View style={styles.user}>

            <View style={styles.edit}>
                <Text>Edit profile</Text>
            </View>

            <View style={styles.imgContainer}>
            <Image source={require('./images/peasant.jpg')} style={styles.profile}></Image>
            </View>

            <View>
                <Text style={styles.location}>Cârțișoara, jud. Sibiu</Text>
                <Text style={styles.name}>Ion Popescu</Text>
                
            </View>

            <View style={styles.numbers}>
                <Text style={styles.numbersText}>173</Text>
                <Text style={styles.numbersText}>271</Text>
            </View>

            <View style={styles.followers}>
                <Text style={styles.followersText}>followers</Text>
                <Text style={styles.followersText}>following</Text>
            </View>


        </View>

        <View>
            <Text style={styles.title}>
                Anunțuri publicate
            </Text>
        </View>

        <View style={styles.posts}>
            <View style={styles.post}><Text style={styles.postText}>Miere de albină</Text></View>
            <View style={styles.post}><Text style={styles.postText}>Caș ardelenesc din inima Sibiului</Text></View>
        </View>

    </ScrollView>
    );
}



const styles = StyleSheet.create({
    main: {
        backgroundColor: '#f2c2c2'
    },

    edit: {
        backgroundColor: '#d3d3d3',
        width: 100,
        paddingLeft: 15,
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 10,
        marginLeft: 260,
        marginTop: 15,
        
    },

    profile: {
        height: 150,
        width: 150,
        marginLeft: 25,
        marginTop: -25,
        borderRadius: 150
    },

    name: {
        marginLeft: 220,
        marginTop: -45,
        fontSize: 18,
        fontWeight: 'bold'
    },

    location: {
        marginLeft: 220,
        marginTop: -80,
        fontSize: 12,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },


    followers: {
        flexDirection: 'row',
        fontSize: 16,
        marginLeft: 220,
        marginTop: 12,


    },

    followersText: {
        fontSize: 16,
        marginRight: 40,
        marginLeft: -20

    },

    numbers: {
        flexDirection: 'row',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 215,
        marginTop: -40,
        marginRight: 20,
        

    },

    numbersText: {
        fontSize: 20,
        marginRight: 52
    },

    user: {
        backgroundColor: '#fff',
        height: 225,
    },

    title: {
        fontWeight: 'bold',
        fontSize: 24,
        marginLeft: 30,
        marginTop: 20,

        
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
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },

    postText: {
        fontSize: 18
    }
})