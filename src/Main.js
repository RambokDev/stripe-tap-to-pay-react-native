import {useEffect, useState} from "react";
import {View, LogBox, Button} from "react-native";


import {requestNeededAndroidPermissions, useStripeTerminal} from "@stripe/stripe-terminal-react-native";

LogBox.ignoreLogs([
    'Overwriting fontFamily style attribute preprocessor',
    // https://reactnavigation.org/docs/5.x/troubleshooting#i-get-the-warning-non-serializable-values-were-found-in-the-navigation-state
    'Non-serializable values were found in the navigation state',
    // https://github.com/software-mansion/react-native-gesture-handler/issues/722
    'RCTBridge required dispatch_sync to load RNGestureHandlerModule. This may lead to deadlocks',
    // https://github.com/react-native-netinfo/react-native-netinfo/issues/486
    'new NativeEventEmitter()` was called with a non-null argument without the required `removeListeners` method.',
    'new NativeEventEmitter()` was called with a non-null argument without the required `addListener` method.',
]);

function Main({navigation}) {
    const { initialize } = useStripeTerminal();
    const [hasPerms, setHasPerms] = useState(false);

    useEffect( () => {
        // const initAndClear = async () => {
        //
        //     const {error, reader} = await initialize();
        //     console.log(error,reader)
        //     if (error) {
        //         Alert.alert('StripeTerminal init failed', error.message);
        //         return;
        //     }
        //
        //     if (reader) {
        //         console.log(
        //             'StripeTerminal has been initialized properly and connected to the reader',
        //             reader
        //         );
        //         return;
        //     }
        //
        // }
        // initAndClear()
        initialize({
            logLevel: 'verbose',
        });

    }, [ initialize,hasPerms]);


    useEffect(() => {
        async function init() {

            try {
                const granted = await requestNeededAndroidPermissions({
                    accessFineLocation: {
                        title: 'Location Permission',
                        message: 'Stripe Terminal needs access to your location',
                        buttonPositive: 'Accept',
                    },
                });
                if (granted) {
                    setHasPerms(true)
                } else {
                    console.error(
                        'Location and BT services are required in order to connect to a reader.'
                    );
                }
            } catch (e) {
                console.error(e);
            }
        }
        init();
    }, []);



    return (
        <View>
            <Button
                title="Go to Jane's profile"
                onPress={() =>{
                    navigation.navigate('Payment')
                }
                }
            />
        </View>
    );
}

export default Main
