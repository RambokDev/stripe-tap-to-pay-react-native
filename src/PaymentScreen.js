import {useEffect, useState} from "react";
import {Text, StatusBar, StyleSheet, View, FlatList, TouchableOpacity, Alert} from "react-native";

import {useStripeTerminal} from "@stripe/stripe-terminal-react-native";
import {connectLocalMobileReader} from "@stripe/stripe-terminal-react-native/src/functions";
import Constants from "expo-constants";


function DiscoverScreen() {
    const [readerChoice, setReaderChoice] = useState(null)


    const {discoverReaders, discoveredReaders} =
        useStripeTerminal({
            onUpdateDiscoveredReaders: (readers) => {
                // The `readers` variable will contain an array of all the discovered readers.
            },
            onDidChangeConnectionStatus: (status) => {
                // access to the current connection status
                console.log(status)
            },
            onDidRequestReaderInput: (options) => {
                // Placeholder for updating your app's checkout UI
                console.log("here")
                Alert.alert(options.join('/'));
            },
            onDidRequestReaderDisplayMessage: (message) => {
                Alert.alert(message);
            },
        });
    console.log("readers", discoveredReaders[0])
    useEffect(() => {
        async function reader() {
            const {error} = await discoverReaders({
                discoveryMethod: 'localMobile',
                // simulated: true,
            });
        }

        reader()

    }, [discoverReaders]);


    useEffect(() => {
        const apiUrl = Constants.expoConfig.extra.apiUrl;

        async function connectToReader() {
            const response = await fetch(`${apiUrl}location/Oliver De Guyenro - Pixel 6a`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },

            });
            const location = await response.json();
            console.log("my location", location)


            const {reader, error} = await connectLocalMobileReader({
                reader: readerChoice,
                locationId: location.id
            });
            if (error) {
                console.log('connectLocalMobileReader error:', error);
                return;
            }

            console.log('Reader connected successfully', reader);
        }

        connectToReader()


    }, [readerChoice]);


    const Item = ({deviceType, item}) => (
        <TouchableOpacity style={styles.item} onPress={() => setReaderChoice(item)}>
            <Text style={styles.title}>{deviceType}</Text>
        </TouchableOpacity>
    );
    const emptyComponent = () => {
        return (
            <View>
                <Text>No Reader Available</Text>
            </View>
        )
    }


    return (
        <View>
            <Text style={{margin: 20, fontSize: 20}}>My readers : </Text>
            <FlatList
                ListEmptyComponent={emptyComponent}
                data={discoveredReaders}
                renderItem={({item}) => <Item deviceType={item.deviceType} item={item}/>}
                keyExtractor={item => item.id}
            />
        </View>
    );
}


export default function PaymentScreen({navigation}) {
    // const [readerChoice, setReaderChoice] = useState(null)
    // const {discoverReaders, connectedReader, discoveredReaders} =
    //     useStripeTerminal({
    //         onUpdateDiscoveredReaders: (readers) => {
    //             // access to discovered readers
    //         },
    //         onDidChangeConnectionStatus: (status) => {
    //             // access to the current connection status
    //         }
    //
    //     });
    //
    // console.log("readers", discoveredReaders[0])

    // useEffect(async () => {
    //     const {error} = await discoverReaders({
    //         discoveryMethod: 'bluetoothScan',
    //         simulated: true,
    //     });
    //
    //
    // }, [discoverReaders]);
    //
    // useEffect(async () => {
    //     console.log("okkkkkk")
    //     const {reader, errorConnect} = await connectLocalMobileReader({
    //         reader: readerChoice,
    //         locationId: 'tml_FbXBsQSyvC2tal'
    //     });
    //
    //     console.log("oooooo", reader)
    //
    //     if (errorConnect) {
    //         console.log('connectLocalMobileReader error:', error);
    //         return;
    //     }
    //
    // }, [readerChoice]);


    // const Item = ({deviceType, item}) => (
    //     <TouchableOpacity style={styles.item} onPress={() => {
    //         setReaderChoice(item)
    //     }}>
    //         <Text style={styles.title}>{deviceType}</Text>
    //     </TouchableOpacity>
    // );

    // const [isVisible, setVisible] = useState(false)
    //
    // const createPayment = useCallback(async () => {
    //     const {error, paymentIntent} = await createPaymentIntent({
    //         amount: 1000,
    //         currency: "eur",
    //     });
    // }, [isVisible]);


    return (
        <View style={styles.container}>
            {/*<Text>Readers</Text>*/}
            {/*<FlatList*/}
            {/*    data={discoveredReaders}*/}
            {/*    renderItem={({item}) => <Item deviceType={item.deviceType} item={item}/>}*/}
            {/*    keyExtractor={item => item.id}*/}
            {/*/>*/}
            {/*<Button*/}
            {/*    title="Go to TAP"*/}
            {/*    onPress={() => {*/}
            {/*        navigation.navigate('tap')*/}
            {/*    }*/}
            {/*    }*/}
            {/*/>*/}
            <DiscoverScreen/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#dedede',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
