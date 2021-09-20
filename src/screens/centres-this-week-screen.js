import React from "react";
import { View, StyleSheet, FlatList } from 'react-native'
import AppButton from "../shared-components/app-button";
import { Colors } from '../app-constants/themes'
import { connect } from 'react-redux'

import CentreFilter from "../shared-components/centre-filter";
import ItemCard from "../shared-components/card";

class CentresWeekScreen extends React.Component {
    constructor(props) {
        super()
        this.state = {
            isButtonDisabled: true,
            centreList: [],
            switch: false,
            toggleValue: false,
            isCentreFilterDisabled: true
        }
    }

    onPress = () => {

    }

    onChangeToggle = () => {
        this.setState({
            switch: this.state.switch ? false : true
        })
    }

    onToggleValueChange = (value) => {
        this.setState({
            toggleValue: value
        })
    }

    onPressEighteen = () => {

        let eighteenList = [...this.props.centres.data].map(item => {
            let filteredInner = item.sessions.reduce((filtered, session) => {
                if (session.min_age_limit >= 18) {
                    filtered.push(session)
                }
                return filtered
            }, [])
            return { ...item, sessions: filteredInner }
        })
        this.setState({
            centreList: eighteenList
        })
    }


    onPressFree = () => {
        let freeList = [...this.props.centres.data].filter(item => item.fee_type === 'Free').map(item => item)
        this.setState({
            centreList: freeList
        })
    }

    onPressPaid = () => {

        let paidList = [...this.props.centres.data].filter(item => item.fee_type === 'Paid').map(item => item)
        this.setState({
            centreList: paidList
        })
    }

    onPressFourtyFive = () => {

        let fourtyList = [...this.props.centres.data].map(item => {
            let filteredInner = item.sessions.reduce((filtered, session) => {
                if (session.min_age_limit >= 45) {
                    filtered.push(session)
                }
                return filtered
            }, [])
            return { ...item, sessions: filteredInner }
        })
        this.setState({
            centreList: fourtyList
        })
    }

    render() {
        return (
            <View style={styles.mainContainer}>

                <CentreFilter
                    onToggle={this.onChangeToggle}
                    switch={this.state.switch}
                    onPressEighteen={this.onPressEighteen}
                    onPressFree={this.onPressFree}
                    onPressPaid={this.onPressPaid}
                    onToggleValueChange={this.onToggleValueChange}
                    onPressFourtyFive={this.onPressFourtyFive}
                    disabled={this.state.isCentreFilterDisabled}
                />

                <View style={{ flex: 1, paddingBottom: 20 }}>
                    <FlatList
                        keyExtractor={element => element.center_id.toString()}
                        data={this.state.centreList}
                        renderItem={({ item }) => {
                            return (
                                <ItemCard item={item} firstDose={this.state.toggleValue} />
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
                centreList: this.props.centres.data,
                isCentreFilterDisabled: false

            })
        } else {
            this.setState({
                isCentreFilterDisabled: true
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

export default connect(mapStateToPorps, mapDispatchToProps)(CentresWeekScreen)