import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
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
            <Feather
                size={30}
                name={'chevron-left'}
                style={{ paddingTop: 4 }}
            />
            {BlankSpace(3)}
            <Text style={styles.titleStyle}>{props.title}</Text>
            <OptionsMenu
                button={myIcon}
                buttonStyle={{ width: 32, height: 20, margin: 7.5, resizeMode: "contain" }}
                options={[""]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight:15
    },
    titleStyle: {
        fontSize: 17,
        color: Colors.titleColor,
        width: '85%'
    }
})
export default Header