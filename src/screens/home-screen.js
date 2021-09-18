import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from "../app-constants/themes";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "../shared-components/tab-navigator";
import {requestStateList} from '../actions/home-actions'
import { connect } from 'react-redux'

class HomeScreen extends React.Component {
    render() {
        return (
            <>
                <NavigationContainer>
                    <TabNavigator />
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