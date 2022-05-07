import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

//Screens

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ServicesScreen from './screens/ServicesScreen';
import HousingScreen from './screens/HousingScreen';
import ProductsScreen from './screens/ProductsScreen';

// Screen Names
const homeName = 'Home';
const profileName = 'Profile';
const servicesName = 'Services';
const housingName = 'Housing';
const productsName = 'Products';

const Tab = createBottomTabNavigator()

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName={homeName}  
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        
                        let iconName;
                        let rn = route.name
                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (rn === profileName) {
                            iconName = focused ? 'profile' : 'home-outline';
                        } else if (rn === productsName) {
                            iconName = focused ? 'product' : 'home-outline';
                        } else if (rn === housingName) {
                            iconName = focused ? 'housing' : 'home-outline';
                        } else if (rn === servicesName) {
                            iconName = focused ? 'services' : 'home-outline';
                        
                        return <Ionicons name={iconName} size={size} color={color}/>
                        }
                    },
                
                })}
                tabBarOptions={{
                    activeTintColor: 'brown',
                    inactiveTintColor: 'black',
                    labelStyle: { paddingBottom: 10, fontSize: 10},
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