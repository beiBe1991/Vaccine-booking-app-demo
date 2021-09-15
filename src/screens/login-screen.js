import React from "react";
import {View, Text, StyleSheet} from 'react-native'

class LoginScreen extends React.Component {
    render(){
        return(
            <View>
                <Text>Login Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:'center'
    },
    textStyle:{
        alignItems:'center'
    }
})

export default LoginScreen