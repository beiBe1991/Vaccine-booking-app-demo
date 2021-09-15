import React from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native'
import EditText from "../components/text-input-custom";
import AppButton from "../components/app-button";
import { Colors } from '../app-constants/themes'

class LoginScreen extends React.Component {

    BlankSpace = (spaceUnit) => {
        return (
            <View style={{ padding: spaceUnit }} />
        )
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.welcomeTextStyle}>Welcome </Text>
                <Text style={styles.subheadingStyle}> Vaccinator & verifier </Text>

                {this.BlankSpace(26)}

                <EditText
                    title={'Email Address'}
                    secure={true}
                    autoCorrect={false}
                    type={'default'}
                />

                {this.BlankSpace(13)}

                <EditText
                    title={'Password'}
                    secure={true}
                    autoCorrect={false}
                    type={'default'}
                    icon={true}
                />

                {this.BlankSpace(20)}

                <AppButton
                    title={'Log in'}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.primaryColor,
        paddingTop: 125,
        paddingLeft: 30,
        paddingRight: 30,

    },
    welcomeTextStyle: {
        color: Colors.primaryTextColor,
        fontSize: 30
    },
    subheadingStyle: {
        color: Colors.primaryTextColor,
        fontSize: 14
    },
})

export default LoginScreen