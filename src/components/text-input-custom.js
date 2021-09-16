import React from "react";
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native'
import FontAwsome from 'react-native-vector-icons/FontAwesome'
import { Colors } from '../app-constants/themes'

const EditText = (props) => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.textStyle}>{props.title}</Text>

            <TextInput style={styles.textInputStyle}
                secureTextEntry={props.secure}
                autoCorrect={props.autoCorrect}
                keyboardType={props.type}
                editable={props.isEditable}
                onChangeText={props.onChange}
            />
            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    {props.icon ?
                        <FontAwsome
                            size={20}
                            name={'eye'}
                            color={Colors.primaryTextColor}
                        /> : <View />}
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: 55,
        width: '100%',
        alignItems: 'center',

    },
    textInputStyle: {
        borderWidth: .2,
        height: 55,
        width: '100%',
        borderRadius: 2,
        borderColor: Colors.primaryTextColor,
        fontSize: 18,
        padding: 10,
        marginTop: 11
    },
    textStyle: {
        fontSize: 14,
        color: Colors.primaryTextColor,
        position: 'absolute',
        left: 18,
        right: 0,
        backgroundColor: Colors.primaryColor
    },
    iconContainer: {
        position: 'absolute',
        left: "90%",
        top: '50%'
    }
})

export default EditText