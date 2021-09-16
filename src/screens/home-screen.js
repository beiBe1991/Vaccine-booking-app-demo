import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from "../app-constants/themes";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "../shared-components/tab-navigator";

const HomeScreen = () => {
    return (
        <>
            <NavigationContainer>
               <TabNavigator />
            </NavigationContainer>
        </>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.primaryColor,
        flex: 1
    }
})

export default HomeScreen