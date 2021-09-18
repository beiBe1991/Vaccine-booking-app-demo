import React from "react";
import { View, StyleSheet } from 'react-native'
import EditText from "../shared-components/text-input-custom";
import AppButton from "../shared-components/app-button";
import { Colors } from "../app-constants/themes";
import { connect } from 'react-redux'
import { requestCentreByPin } from "../actions/search-actions";

const PINCODE_LENGTH = 6

class SearchByPinScreen extends React.Component {

    constructor(props) {
        super()
        this.state = {
            isButtonDisabled: true,
            pincode: '',
        }

    }


    onPinChange = (pincode) => {
        this.setState({
            pincode
        }, () => this.enableButton())
    }

    enableButton = () => {
        if (this.state.pincode.length == PINCODE_LENGTH) {
            this.setState({
                isButtonDisabled: false
            })
        } else {
            this.setState({
                isButtonDisabled: true
            })
        }
    }

    onPressSearch = () => {
        let payload = {
            pincode: this.state.pincode
        }
        this.props.searchByPin(payload)
    }

    

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.textInputContainer}>
                    <EditText
                        title={'Pincode'}
                        secure={false}
                        autoCorrect={false}
                        type={'number-pad'}
                        isEditable={true}
                        onChange={this.onPinChange}
                        maxLength={6}
                        onTouchStart={this.onTouchStart}
                    />
                </View>

                

                <AppButton
                    title={'Search'}
                    disabled={this.state.isButtonDisabled}
                    onPress={this.onPressSearch}
                />

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {

    return {
        searchByPin: (payload) => {
            dispatch(requestCentreByPin(payload))
        }
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 30,
        flex: 1,
        backgroundColor: Colors.primaryColor
    },
    textInputContainer: {
        flex: 1
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchByPinScreen)