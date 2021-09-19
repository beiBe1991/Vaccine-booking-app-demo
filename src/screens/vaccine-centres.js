import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import AppHeader from '../shared-components/app-header'
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "../shared-components/centres-tab-navigator";



class CentresScreen extends React.Component {
    constructor(props) {
        super()
    }

    onPressBackButton = () => {
        this.props.navigation.navigate('home')
    
    }

    render() {
        return (
            <>
                <AppHeader title={this.props.navigation.state.params.title} onPressBackButton={this.onPressBackButton} editButton={true} />
                <NavigationContainer>
                    <TabNavigator {...this.props} />
                </NavigationContainer>
            </>
        )
    }
    componentDidUpdate =()=>{
       
    }
}


const styles = StyleSheet.create({
    mainContainer: {}
})

export default CentresScreen