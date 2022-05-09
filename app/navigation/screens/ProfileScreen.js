import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function ProfileScreen({navigation}) {
    return (
    <ScrollView style={styles.main}>
        {/* <View style={styles.user}>
            <View style={styles.edit}>
                <Text>Edit profile</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.text}>followers</Text>
                <Text style={styles.text}>following</Text>
            </View>

            <View>
                <Image source={require('./images/profile.png')} style={styles.image}></Image>
            </View>

            <View style={styles.container}>
                <Text style={styles.texts}>38</Text>
                <Text style={styles.texts}>52</Text>
            </View>
        </View>

        <View>
            <Text style={styles.posts}>Recent posts</Text>
        </View>

        <ScrollView style={styles.posts}>
            <View style={styles.post}></View>
            <View style={styles.post}></View>
            <View style={styles.post}></View>
            <View style={styles.post}></View>
            <View style={styles.post}></View>
        </ScrollView> */}

        <View style={styles.user}>

            <View style={styles.edit}>
                <Text>Edit profile</Text>
            </View>

            <View style={styles.imgContainer}>
            <Image source={require('./images/profile.png')} style={styles.profile}></Image>
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
                Recent Posts
            </Text>
        </View>

        <ScrollView style={styles.posts}>
            <View style={styles.post}><Text style={styles.postText}>Vacuum Cleaner</Text></View>
            <View style={styles.post}><Text style={styles.postText}>Vacuum Cleaner</Text></View>
            <View style={styles.post}><Text style={styles.postText}>Vacuum Cleaner</Text></View>
            <View style={styles.post}><Text style={styles.postText}>Vacuum Cleaner</Text></View>
            <View style={styles.post}><Text style={styles.postText}>Vacuum Cleaner</Text></View>
            <View style={styles.post}><Text style={styles.postText}>Vacuum Cleaner</Text></View>
        </ScrollView>

    </ScrollView>
    );
}



const styles = StyleSheet.create({
    main: {
        backgroundColor: 'lightblue'
    },

    edit: {
        backgroundColor: '#d5d5d5',
        width: 100,
        paddingLeft: 15,
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 10,
        marginLeft: 260,
        marginTop: 20,
        
    },

    profile: {
        height: 150,
        width: 150,
        marginLeft: 25,
        marginTop: -25,
        borderRadius: 150
    },

    followers: {
        flexDirection: 'row',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 220,
        marginTop: 12,


    },

    followersText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 40,
        marginLeft: -20

    },

    numbers: {
        flexDirection: 'row',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 215,
        marginTop: -75,
        marginRight: 20,
        

    },

    numbersText: {
        fontSize: 20,
        fontWeight: 'bold',
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
        backgroundColor: '#f4f4f4',
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