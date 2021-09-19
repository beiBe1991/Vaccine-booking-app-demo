import React from "react";
import { View, StyleSheet, FlatList, Text } from 'react-native'
import AppButton from "../shared-components/app-button";
import { Colors } from '../app-constants/themes'
import { connect } from 'react-redux'

import CentreFilter from "../shared-components/centre-filter";
import ItemCard from "../shared-components/card";


class CentresTodayScreen extends React.Component {
    constructor(props) {
        super()
        this.state = {
            isButtonDisabled: true,
            centreList: [],
            switchValue: false
        }
    }

    onPress = () => {

    }

    getCurrentDate = () => {
        let dd = new Date().getDate()
        let mm = new Date().getMonth() + 1
        let yy = new Date().getFullYear()

        if (dd < 10) {
            dd = 0 + dd
        }

        if (mm < 10) {
            mm = 0 + mm
        }
        let date = dd + '-' + mm + '-' + yy
        console.log(date)
        return date
    }

    onChangeToggle = () => {
        this.setState({
            switchValue: this.state.switchValue ? false : true
        })
    }

    render() {
        return (
            <View style={styles.mainContainer}>

                <CentreFilter
                    onToggle={this.onChangeToggle}
                    switchValue={this.state.switchValue}
                />

                <View style={{ flex: 1, paddingBottom: 20 }}>
                    <FlatList
                        keyExtractor={element => element.center_id.toString()}
                        data={this.state.centreList}
                        renderItem={({ item }) => {
                            return (
                                <ItemCard item={item} />
                            )
                        }}
                        showsVerticalScrollIndicator={false}
                    />

                </View>

                <AppButton
                    title={'Notify Me'}
                    disabled={this.state.isButtonDisabled}
                    onPress={this.onPress}
                    width={'85%'}
                />
            </View>
        )
    }
    componentDidMount = () => {
        if (Object.keys(this.props.centres).length != 0 && this.props.centres.success) {
            this.setState({
                centreList: this.props.centres.data
            })
        }
    }

}

const mapStateToPorps = (state) => {
    return {
        centres: state.centre.centresList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 18,
        paddingTop: 0,
        flex: 1,
        alignItems: 'center'
    },
})

export default connect(mapStateToPorps, mapDispatchToProps)(CentresTodayScreen)