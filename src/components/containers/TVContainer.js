import { useState, useEffect } from "react";
import { Box, Button, Center, FlatList, View } from "native-base";
import TV from "../TV/TV";
import TVDropdown from "../layout/TVDropdown";
import axios from "axios";

const TVContainer = ({ navigation, route }) => {
    const [tv, setTv] = useState([]);
    const [selectedOption, setSelectedOption] = useState("on_the_air");

    const APP_KEY = "?api_key=775ee96f4b3f569d265b6eac26272d19";
    const BASE_URL = "https://api.themoviedb.org/3/tv/";
    let url = BASE_URL + selectedOption + APP_KEY;

    const client = axios.create({
        baseURL: url,
    });

    useEffect(() => {
        client
            .get(url)
            .then((response) => {
                setTv(response.data.results);
            })
            .catch((err) => console.log(err));
    }, [selectedOption]);

    return (
        <View>
            <TVDropdown
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
            />
            <FlatList
                data={tv}
                renderItem={({ item }) => (
                    <TV
                        imgSrc={item.poster_path}
                        name={item.name}
                        navigation={navigation}
                        popularity={item.popularity}
                        first_air_date={item.first_air_date}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default TVContainer;
