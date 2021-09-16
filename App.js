import React from "react";
import AppNavigator from './src/navigation/app-navigator'
import configureStore from "./src/store/configure-store";
import { Provider } from 'react-redux'

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
        <AppNavigator />
      </Provider>
    )
  }
}

export default App
