import {useEffect, useState} from "react";
import {Text, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity} from "react-native";

import {requestNeededAndroidPermissions, useStripeTerminal} from "@stripe/stripe-terminal-react-native";

export default function MainScreen({navigation}) {

    const {initialize} = useStripeTerminal();
    const [hasPerms, setHasPerms] = useState(false);

    useEffect(() => {
        initialize({
            logLevel: 'verbose',
        });

    }, [initialize, hasPerms]);


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
        <SafeAreaView>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navigation.navigate('Payment')
                }
                }
            ><Text>Get Readers</Text></TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navigation.navigate('tap')
                }
                }
            ><Text>Start Payment</Text></TouchableOpacity>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    button: {
        margin: 20,
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
    title: {
        fontSize: 32,
    },
});
