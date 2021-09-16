import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { Colors } from '../app-constants/themes'

const AppButton = (props) => {
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity
                disabled={props.disabled}
                onPress={props.onPress}
            >
                <Text style={styles.textStyle}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: 50,
        width: '100%',
        borderRadius: 3,
        backgroundColor: Colors.appButtonColor,
    },
    textStyle: {
        textAlign: 'center',
        textAlignVertical: 'center',
        height: '100%',
        width: '100%',
        fontSize: 13,
        color: Colors.primaryColor
    },
})

export default AppButton