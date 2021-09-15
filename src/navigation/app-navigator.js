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



const navigator = createAppContainer(
    createSwitchNavigator(
        {
            auth: authStack,
        },
        {
            initialRouteName:'auth'
        }
    )
)

export default navigator