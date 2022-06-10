import { View } from "native-base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "../screens/IndexScreen.js";

const Stack = createNativeStackNavigator();

const AppStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="Index"
            component={IndexScreen}
            options={{
                title: "Movies App",
                headerStyle: {
                    backgroundColor: "#2c3e50",
                },
                headerTitleStyle: {
                    color: "#fff",
                },
            }}
        />
    </Stack.Navigator>
);

export default AppStack;
