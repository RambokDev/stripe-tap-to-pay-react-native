import {StyleSheet} from 'react-native';

import {StripeTerminalProvider} from "@stripe/stripe-terminal-react-native";
import Constants from 'expo-constants';
import {NavigationContainer} from "@react-navigation/native";

import AppNavigator from "./Navigation/AppNavigator";

export default function App() {
    const apiUrl = Constants.expoConfig.extra.apiUrl;

  //
  const fetchTokenProvider = async () => {
    console.log(apiUrl)
    const response = await fetch(`${apiUrl}connection_token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const {secret} = await response.json();
    console.log(secret)
    return secret;
  };
  return (
      <NavigationContainer>
        <StripeTerminalProvider
            logLevel="verbose"
            tokenProvider={fetchTokenProvider}
        >
          <AppNavigator/>
          {/*<Main/>*/}
        </StripeTerminalProvider>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
