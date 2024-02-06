import {createNativeStackNavigator} from "@react-navigation/native-stack";

import PaymentScreen from "../src/PaymentScreen";
import MainScreen from "../src/MainScreen";
import PaymentScreenTap from "../src/PaymentScreenTap";


export default function AppNavigator({navigation}) {
    const MainStack = createNativeStackNavigator();


    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name="Main"
                component={MainScreen}
                options={{title: 'Main tap to pay '}}
            />

            <MainStack.Screen
                name="Payment"
                component={PaymentScreen}
                options={{title: 'Payment'}}
            />
            <MainStack.Screen
                name="tap"
                component={PaymentScreenTap}
                options={{title: 'TAP'}}
            />

        </MainStack.Navigator>
    )


}
