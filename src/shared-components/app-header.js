import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors } from '../app-constants/themes'
import Feather from 'react-native-vector-icons/Feather'
import OptionsMenu from 'react-native-option-menu'

const myIcon = require('../../assets/overflowIcon.png')

const BlankSpace = (size) => {
    return (
        <View style={{ padding: size }} />
    )
}

const Header = (props) => {
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={props.onPressBackButton}>
                <Feather
                    size={30}
                    name={'chevron-left'}
                    style={{ paddingTop: 4 }}
                />
            </TouchableOpacity>
            {BlankSpace(3)}
            <Text style={styles.titleStyle}>{props.title}</Text>

            {props.editButton?<TouchableOpacity onPress={props.onPressBackButton}>
                <Text style={styles.editTextStyle}>edit</Text></TouchableOpacity>:<></>}

            <View style={styles.overflowContainer}>
                <OptionsMenu
                    button={myIcon}
                    buttonStyle={{ width: 32, height: 20, margin: 7.5, resizeMode: "contain" }}
                    options={[""]}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: 110,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 13,
        paddingTop: 55,
        backgroundColor: Colors.primaryColor,
        borderBottomWidth: .1,
        elevation: 5,
        alignItems: 'center'
    },
    titleStyle: {
        fontSize: 17,
        color: Colors.titleColor,
    },
    editTextStyle: {
        color: '#014ED0',
        marginLeft:5,
        marginTop:3,
        fontSize:12,
        textAlign:'center'
    },
    overflowContainer:{
        height:'100%',
        justifyContent:'center',
        position:'absolute',
        right:0,
        bottom:0
        
    }
})
export default Header