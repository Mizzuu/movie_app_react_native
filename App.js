import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import axios from "axios";
import { NativeBaseProvider } from "native-base";
import AppStack from "./src/components/stacks/AppStacks";

export default function App() {
    const [movies, setMovies] = useState([]);
    const [shouldOverlapWithTrigger] = useState(false);
    const [position, setPosition] = useState("auto");
    // const [movie, setMovie] = useState(null);

    const APP_KEY = "?api_key=775ee96f4b3f569d265b6eac26272d19";
    const BASE_URL = "https://api.themoviedb.org/3/movie/";
    let url = BASE_URL + "now_playing" + APP_KEY;

    const client = axios.create({
        baseURL: url,
    });

    useEffect(() => {
        client
            .get(url)
            .then((response) => {
                setMovies(response.data.results);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <NativeBaseProvider>
            <AppStack />
            <StatusBar style="light" />
        </NativeBaseProvider>
    );
}

{
    /* <View style={styles.container}>

     <Select
                selectedValue={position}
                mx={{
                    base: 0,
                    md: "auto",
                }}
                onValueChange={(nextValue) => setPosition(nextValue)}
                _selectedItem={{
                    bg: "cyan.600",
                    endIcon: <CheckIcon size={4} />,
                }}
                accessibilityLabel="Select a position for Menu"
            >
                <Select.Item label="now_playing" value="now_playing" />
                <Select.Item label="popular" value="popular" />
                <Select.Item label="top_related" value="top_related" />
                <Select.Item label="upcoming" value="upcoming" />
            </Select>

            <Text>🦦</Text>
            {movies.map((movie) => (
                <View key={movie.id}>
                    <Text>{movie.title}</Text>
                    <Image
                        source={{
                            uri: BASE_URL + movie.id + "images" + APP_KEY,
                        }}
                    ></Image>
                    <Text>
                        {console.log(BASE_URL + movie.id + "images" + APP_KEY)}
                    </Text>
                </View>
            ))} 

            <StatusBar style="auto" />
        </View> */
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
