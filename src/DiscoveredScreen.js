import {useStripeTerminal} from "@stripe/stripe-terminal-react-native";
import {useEffect} from "react";
import {View, Text} from "react-native";

export default function DiscoverScreen() {
    const { discoverReaders, discoveredReaders } =
        useStripeTerminal({
            onUpdateDiscoveredReaders: (readers) => {
                // The `readers` variable will contain an array of all the discovered readers.
            },
        });

    useEffect(async () => {
        const {error} = await discoverReaders({
            discoveryMethod: 'localMobile',
        });
    }, [discoverReaders]);
    return(
        <View><Text>Readers</Text></View>
    );
}
