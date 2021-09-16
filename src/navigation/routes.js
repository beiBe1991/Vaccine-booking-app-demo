import LoginScreen from "../screens/login-screen";
import HomeScreen from "../screens/home-screen";

const Routes = {
    authRoute: {
        LoginScreen: {
            screen: LoginScreen
        }
    },
    appRoute: {
        home: {
            screen: HomeScreen
        }
    }
}

export default Routes