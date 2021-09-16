import { createAppContainer, createSwitchNavigator } from 'react-navigation'
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
        headerMode:'screen',
    }
  
)



const navigator = createAppContainer(
    createSwitchNavigator(
        {
            auth: authStack,
            app: appStack
        },
        {
            initialRouteName:'auth'
        }
    )
)

export default navigator