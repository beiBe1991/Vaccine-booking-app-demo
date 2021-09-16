import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from "../app-constants/themes";
const SearchByPinScreen = () => {
    return (
        <View>
            <Text>Search By Pin Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.primaryColor,
        flex:1
    }
})

export default SearchByPinScreen