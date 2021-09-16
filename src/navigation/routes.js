import LoginScreen from "../screens/login-screen";
import HomeScreen from "../screens/home-screen";
import React from "react";
import Header from '../shared-components/app-header'

const Routes = {
    authRoute: {
        LoginScreen: {
            screen: LoginScreen
        }
    },
    appRoute: {
        home: {
            screen: HomeScreen,
            navigationOptions: {
                headerTitle: () => <Header title={'Change location'} />
            }
        },
    }
}

export default Routes