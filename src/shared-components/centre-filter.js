import React from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native'
import { Colors } from '../app-constants/themes'

const CentreFilter = (props) => {
    return (
        <View style={styles.mainContainer} pointerEvents={props.disabled?'none':'auto'}>
            <TouchableOpacity onPress={props.onPressEighteen}>
                <View style={styles.buttonStyle}>
                    <Text style={styles.textStyle}>18+</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress ={props.onPressFourtyFive}>
                <View style={styles.buttonStyle}>
                    <Text style={styles.textStyle}>45+</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={props.onPressFree}>
                <View style={styles.buttonStyle}>
                    <Text style={styles.textStyle}>Free</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress = {props.onPressPaid}>
                <View style={styles.buttonStyle}>
                    <Text style={styles.textStyle}>Paid</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.toggleContainer}>
                <Text style={styles.textStyle}>First Dose</Text>
                <View style={{ padding: 3 }} />
                <Switch
                    thumbColor={Colors.primaryColor}
                    disabled={false}
                    onChange={props.onToggle}
                    value={props.switch}
                    onValueChange={props.onToggleValueChange}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        width:'100%',
        paddingLeft:10
    },
    buttonStyle: {
        backgroundColor: Colors.primaryColor,
        borderRadius: 12,
        paddingVertical: 4,
        paddingHorizontal: 7,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 6
    },
    textStyle: {
        fontSize: 13
    },
    toggleContainer: {
        flexDirection: 'row',
        height: '100%',
        alignItems: 'center',
        position: 'absolute',
        right: 5
    }
})

export default CentreFilter