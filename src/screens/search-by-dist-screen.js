import React from "react";
import { View, StyleSheet } from 'react-native'
import EditText from "../shared-components/text-input-custom";
import AppButton from "../shared-components/app-button";

class SearchByDistScreen extends React.Component {
    constructor(props) {
        super()
        this.state = {
            stateName: '',
            district: '',
            isDisabled: true,
        }

    }

    onStateTextChange = () => { }

    onDistrictChange = () => { }

    onPressSearch = () => { }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.textInputContainer}>
                    <EditText
                        title={'State'}
                        secure={false}
                        autoCorrect={false}
                        type={'default'}
                        isEditable={true}
                        onChange={this.onStateTextChange}
                    />
                    <View style={{ padding: 18 }} />
                    <EditText
                        title={'District'}
                        secure={false}
                        autoCorrect={false}
                        type={'default'}
                        isEditable={true}
                        onChange={this.onDistrictChange}
                    />
                </View>

                <AppButton
                    title={'Search'}
                    disabled={this.state.isDisabled}
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

export default SearchByDistScreen