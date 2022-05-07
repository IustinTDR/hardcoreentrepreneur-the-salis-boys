import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'


//Icons

import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

//Screens

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ServicesScreen from './screens/ServicesScreen';
import HousingScreen from './screens/HousingScreen';
import ProductsScreen from './screens/ProductsScreen';

// Screen Names
const homeName = 'Acasă';
const profileName = 'Profil';
const servicesName = 'Servicii';
const housingName = 'Cazare';
const productsName = 'Produse';

const Tab = createBottomTabNavigator()

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName={homeName}  
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        
                        
                        let rn = route.name
                        
                        if (rn === homeName) {
                            return <Octicons name="home" size={24} color="black" />

                        } else if (rn === profileName) {
                            return <Feather name="user" size={24} color="black" />
                            
                        } else if (rn === productsName) {
                            return <MaterialCommunityIcons name="shopping-outline" size={24} color="black" />

                        } else if (rn === housingName) {
                            return <FontAwesome5 name="building" size={24} color="black" />
                            
                        } else if (rn === servicesName) {
                            return <MaterialIcons name="emoji-people" size={24} color="black" />
                        }
                    },
                
                })}
                tabBarOptions={{
                    activeTintColor: 'green',
                    inactiveTintColor: 'black',
                    labelStyle: { paddingBottom: 8, fontSize: 10, paddingTop: -12},
                    style: {padding: 10, height: 70}
                }}
                
            
            >
                
               
                <Tab.Screen name={servicesName} component={ServicesScreen}/>
                <Tab.Screen name={productsName} component={ProductsScreen}/>
                <Tab.Screen name={housingName} component={HousingScreen}/>
                <Tab.Screen name={homeName} component={HomeScreen}/>
                <Tab.Screen name={profileName} component={ProfileScreen}/>
                



            </Tab.Navigator>
        </NavigationContainer>
    
    
    )

}
