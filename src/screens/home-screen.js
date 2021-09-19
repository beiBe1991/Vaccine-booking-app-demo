import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from "../app-constants/themes";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "../shared-components/home-tab-navigator";
import {requestStateList} from '../actions/home-actions'
import { connect } from 'react-redux'
import AppHeader from '../shared-components/app-header'

class HomeScreen extends React.Component {
    constructor(props){
        super()
    }


    onPressBack =()=>{
        this.props.navigation.goBack()
    }

    render() {
        return (
            <>
            <AppHeader title={'Change location'} onPressBackButton = {this.onPressBack}/>
                <NavigationContainer>
                    <TabNavigator {...this.props}/>
                </NavigationContainer>
            </>
        )
    }
    componentDidMount = () => {
        this.props.requestStates()
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestStates: ()=>{
            dispatch(requestStateList())
        }
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.primaryColor,
        flex: 1
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)