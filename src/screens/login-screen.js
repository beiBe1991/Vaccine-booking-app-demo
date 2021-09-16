import React from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native'
import EditText from "../components/text-input-custom";
import AppButton from "../components/app-button";
import { Colors } from '../app-constants/themes'
import { connect } from 'react-redux'
import { requestLogin } from '../actions/auth-actions'

class LoginScreen extends React.Component {

    constructor(props) {
        super()
        this.state = {
            email: '',
            password: '',
            isButtonDisabled: true,
            isEditable: false,
            secure: true,
        }
    }


    BlankSpace = (spaceUnit) => {
        return (
            <View style={{ padding: spaceUnit }} />
        )
    }

    onEmailChange = (email) => {
        this.setState({
            email
        }, () => this.enablePassword(email))
    }


    enablePassword = (email) => {
        let emailAddress = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (emailAddress.test(email) === true) {
            this.setState({
                isEditable: true
            })
        } else {
            this.setState({
                isEditable: false
            })
        }
    }


    onPasswordChange = (password) => {
        this.setState({
            password
        }, () => this.enableButton())
    }


    enableButton = () => {
        if (this.state.password.length != 0 && this.state.email.length != 0) {
            this.setState({
                isButtonDisabled: false
            })
        } else {
            this.setState({
                isButtonDisabled: true
            })
        }
    }

    onPressLogin = () => {
        let payload = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.onLogin(payload)
    }

    onEyePressIn = () => {
        console.log('press in')
        this.setState({
            secure: false
        })
    }

    onEyePressOut = () => {
        console.log('press out')
        this.setState({
            secure: true
        })
    }


    render() {
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.welcomeTextStyle}>Welcome </Text>
                <Text style={styles.subheadingStyle}> Vaccinator & verifier </Text>

                {this.BlankSpace(26)}

                <EditText
                    title={'Email Address'}
                    secure={false}
                    autoCorrect={false}
                    type={'default'}
                    isEditable={true}
                    onChange={this.onEmailChange}
                />

                {this.BlankSpace(13)}

                <EditText
                    title={'Password'}
                    secure={this.state.secure}
                    autoCorrect={false}
                    type={'default'}
                    icon={true}
                    isEditable={this.state.isEditable}
                    onChange={this.onPasswordChange}
                    onPressIn={this.onEyePressIn}
                    onPressOut={this.onEyePressOut}
                />

                {this.BlankSpace(20)}

                <AppButton
                    title={'Log in'}
                    disabled={this.state.isButtonDisabled}
                    onPress={this.onPressLogin}
                />

            </View>
        )
    }

    componentDidUpdate = prevProps => {
        if (this.props.loginResponse != prevProps.loginResponse && this.props.loginResponse != undefined) {
            if (this.props.loginResponse.success) {
                this.props.navigation.navigate('app')
            }
        }
    }
}

const mapStateToProps = (state) => {
    return {
        loginResponse: state.auth.loginResponse
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (payload) => {
            dispatch(requestLogin(payload))
        }
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
        fontSize: 30,
    },
    subheadingStyle: {
        color: Colors.primaryTextColor,
        fontSize: 14
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)