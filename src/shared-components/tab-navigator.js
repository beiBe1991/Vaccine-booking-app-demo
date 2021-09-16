import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchDist from '../screens/search-by-dist-screen'
import SearchPin from '../screens/search-by-pin-screen'

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarLabelStyle: {textTransform:'none',fontSize:14},
            tabBarStyle:{height:60, justifyContent:'center'}
        }}
        >
            <Tab.Screen
                name='Search by pincode'
                component={SearchPin}

            />
            <Tab.Screen
                name='Search by district'
                component={SearchDist}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator