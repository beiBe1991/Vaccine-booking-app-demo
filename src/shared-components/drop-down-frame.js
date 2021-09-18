import React from "react";
import { View, StyleSheet, Text } from 'react-native'
import { Colors } from "../app-constants/themes";

const DropdownFrame = (props) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container} >
                <Text style={styles.textStyle}>{props.title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: 80,
        justifyContent: 'center',
        
    },
    container: {
        width: '100%',
        height: 55,
        borderRadius: 2,
        borderWidth: .2
    },
    textStyle: {
        fontSize: 14,
        color: Colors.primaryTextColor,
        position: 'absolute',
        left: 18,
        right: 0,
        bottom:'87%',
    }
})

export default DropdownFrame