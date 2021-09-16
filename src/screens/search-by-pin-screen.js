import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import EditText from "../shared-components/text-input-custom";
import AppButton from "../shared-components/app-button";

class SearchByPinScreen extends React.Component {

    onPinChange = () => { }

    onPressSearch = () => { }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.textInputContainer}>
                    <EditText
                        title={'Pincode'}
                        secure={false}
                        autoCorrect={false}
                        type={'default'}
                        isEditable={true}
                        onChange={this.onPinChange}
                    />
                </View>

                <AppButton
                    title={'Search'}
                    disabled={false}
                    onPress={this.onPressSearch}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 30,
        flex: 1
    },
    textInputContainer: {
        flex: 1
    }
})

export default SearchByPinScreen