import { useState, useEffect } from "react";
import { FlatList, View } from "native-base";
import Dropdown from "../layout/Dropdown";
import Movies from "../Movies/Movies";
import MovieDetails from "../Movies/MovieDetails";
import axios from "axios";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const MovieContainer = ({ navigation, route }) => {
    const [movies, setMovies] = useState([]);
    const [selectedOption, setSelectedOption] = useState("now_playing");

    const APP_KEY = "?api_key=775ee96f4b3f569d265b6eac26272d19";
    const BASE_URL = "https://api.themoviedb.org/3/movie/";
    let url = BASE_URL + selectedOption + APP_KEY;

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
    }, [selectedOption]);

    return (
        <View>
            <Dropdown
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
            />

            <Stack.Navigator
                initialRouteName="Movies"
                screenOptions={{
                    headerTintColor: "#ffffff",
                    headerStyle: {
                        backgroundColor: "#333399",
                    },
                }}
                headerMode="float"
            >
                <Stack.Screen name="Movies" component={Movies} />
                <Stack.Screen
                    name="Detail"
                    component={MovieDetails}
                    options={{}}
                />
            </Stack.Navigator>

            <FlatList
                data={movies}
                renderItem={({ item }) => (
                    <Movies
                        imgSrc={item.poster_path}
                        title={item.title}
                        navigation={navigation}
                        popularity={item.popularity}
                        release_date={item.release_date}
                        overview={item.overview}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default MovieContainer;
