import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from "../app-constants/themes";
const SearchByDistScreen = () => {
    return (
        <View>
            <Text>Search By Dist Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.primaryColor,
        flex:1
    }
})

export default SearchByDistScreen