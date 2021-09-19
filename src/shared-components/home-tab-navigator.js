import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchDist from '../screens/search-by-dist-screen'
import SearchPin from '../screens/search-by-pin-screen'

const Tab = createMaterialTopTabNavigator();

const TabNavigator = (props) => {
   
    return (
        <Tab.Navigator screenOptions={{
            tabBarLabelStyle: { textTransform: 'none', fontSize: 14 },
            tabBarStyle: { height: 60, justifyContent: 'center' }
        }}
        >
            <Tab.Screen
                name='Search by pincode'
                children = {()=><SearchPin {...props}/>}
               
            />
            <Tab.Screen
                name='Search by district'
                children = {()=><SearchDist {...props}/>}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator