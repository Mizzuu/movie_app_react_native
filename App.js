import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NativeBaseProvider } from "native-base";
import Tab from "./src/components/layout/Tab";

import AppStack from "./src/components/stacks/AppStacks";
import { NavigationContainer } from "@react-navigation/native";
import MovieContainer from "./src/components/containers/MovieContainer";
import Header from "./src/components/layout/Header";

export default function App() {
    return (
        // <NavigationContainer>
        <NativeBaseProvider>
            <Header />
            <Tab />

            <StatusBar style="light" />
        </NativeBaseProvider>
        // </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
