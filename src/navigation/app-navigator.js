import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import Routes from './routes'

const authStack = createStackNavigator(
    {
        ...Routes.authRoute
    },
    {
        headerMode: 'none'
    }
)

const appStack = createStackNavigator(
    {
        ...Routes.appRoute
    },
    {
        headerMode: 'none',
        defaultNavigationOptions: {
            headerStyle: {
                height: 120,
            },
        },
    },
)

const navigator = createAppContainer(
    createSwitchNavigator(
        {
            auth: authStack,
            app: appStack,
        },
        {
            initialRouteName: 'app',
        }
    )
)

export default navigator