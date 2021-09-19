import LoginScreen from "../screens/login-screen";
import HomeScreen from "../screens/home-screen";
import CentresScreen from "../screens/vaccine-centres";
import React from "react";
import Header from '../shared-components/app-header'


const Routes = {
    authRoute: {
        LoginScreen: {
            screen: LoginScreen
        },

    },
    appRoute: {
        home: {
            screen: HomeScreen,
            // navigationOptions: {
            //     headerTitle: () => <Header  backButtonDisabled={true} title={'Change location'} />
            // }
        },
        centres: {
            screen: CentresScreen,
            navigationOptions: {
                headerTitle: () => <Header  backButtonDisabled={false}  title={'Change location'} />
            }
        }
    }
}

export default Routes