import {View, Text, TouchableOpacity} from "react-native";
import {useEffect, useState} from "react";
import {
    collectPaymentMethod, confirmPaymentIntent,
    createPaymentIntent,
    retrievePaymentIntent
} from "@stripe/stripe-terminal-react-native/src/functions";
import Constants from "expo-constants";

export default function PaymentScreenTap({navigation}) {
    const [payment, setPayment] = useState(null)
    const [retrievePayment, setRetrievePayment] = useState(null)
    const [collectPayment, setCollectPayment] = useState(null)
    // useEffect(() => {
    //     async function createPayment() {
    //         const {error, paymentIntent} = await createPaymentIntent({
    //             amount: 1000,
    //             currency: "eur",
    //         });
    //         if (error) {
    //             console.log(error)
    //             return
    //         }
    //         setPayment(paymentIntent)
    //         // if(paymentIntent){
    //         //     console.log("start")
    //         //     console.log(paymentIntent.id)
    //         //     const { paymentIntent, error } = await collectPaymentMethod({ paymentIntent: paymentIntent.id });
    //         //     // console.log(paymentIntent)
    //         //     if (error) {
    //         //         console.log(error)
    //         //         // Placeholder for handling exception
    //         //     }
    //         // }
    //
    //
    //     }
    //
    //     createPayment()
    // }, []);
    //


    useEffect(() => {
        const apiUrl = Constants.expoConfig.extra.apiUrl;
        async function retrievePayment() {
            console.log(apiUrl)
            const response = await fetch(`${apiUrl}payment_intent`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: 1000
                }),
            });
            const secret = await response.json();
            console.log(secret)

            const {
                paymentIntent,
                error
            } = await retrievePaymentIntent(secret.payment);

            if (error) {
                // Placeholder for handling exception
                return;
            }
            setRetrievePayment(paymentIntent)


            // const { paymentIntent2, error2 } = await collectPaymentMethod({ paymentIntent: paymentIntent });
            //
            // if (error2) {
            //     // Placeholder for handling exception
            //     console.log(error2)
            //     return
            // }
            // console.log(paymentIntent2)
        }

        retrievePayment()
    }, []);


    useEffect(() => {
        async function collectPayment() {
            const {paymentIntent, error} = await collectPaymentMethod({paymentIntent: retrievePayment});

            if (error) {
                // Placeholder for handling exception
                console.log(error)
                return
            }
            setCollectPayment(paymentIntent)
            console.log(paymentIntent)



            const { paymentIntent:paymentIntent2, error:error2 } = await confirmPaymentIntent(paymentIntent);
            if (error2) {
                // Placeholder for handling exception$
                console.log(error2)
                return;
            }
            console.log("ici",paymentIntent2)

        }

        collectPayment()
    }, [retrievePayment])

    //
    // useEffect(() => {
    //     console.log(collectPayment)
    //     async function confirmPaymentIntent() {
    //         const {paymentIntent, error} = await confirmPaymentIntent(collectPayment.id);
    //
    //         if (error) {
    //             // Placeholder for handling exception
    //             console.log(error)
    //             return;
    //         }
    //         console.log(paymentIntent)
    //     }
    //
    //     confirmPaymentIntent()
    // }, [collectPayment])


    return (
        <View>
            <Text>Tap to pay</Text>
        </View>
    );
}
