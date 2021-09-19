import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CentresTodayScreen from "../screens/centres-today-screen";
import CentresWeekScreen from "../screens/centres-this-week-screen";
const Tab = createMaterialTopTabNavigator();

const TabNavigator = (props) => {

    return (
        <Tab.Navigator screenOptions={{
            tabBarLabelStyle: { textTransform: 'none', fontSize: 14 },
            tabBarStyle: { height: 60, justifyContent: 'center' }
        }}
        >
            <Tab.Screen
                name='Today'
                children={()=><CentresTodayScreen {...props}/>}

            />
            <Tab.Screen
                name='This Week'
                children={() => <CentresWeekScreen {...props} />}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator