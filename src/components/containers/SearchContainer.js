import { useState } from "react";
import { Center, Container, FlatList } from "native-base";
import Form from "../Search/Form";
import Loading from "../layout/Loading";
import ResultsCard from "../Search/ResultsCard";
import axios from "axios";

const SearchContainer = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const [inputWord, setInputWord] = useState(null);
    const [shows, setShows] = useState([]);

    const APP_KEY = "?api_key=775ee96f4b3f569d265b6eac26272d19";
    const BASE_URL = "https://api.themoviedb.org/3/movie/";
    let url = BASE_URL + inputWord + APP_KEY;

    const client = axios.create({
        baseURL: url,
    });

    const fetchShows = () => {
        client
            .get(url)
            .then((response) => {
                setShows(response.data.results);
            })
            .catch((err) => console.log(err));
        setIsLoading(true);

        // getRecipes(ingredient).then(
        //   recipes => {
        //     setRecipes(recipes)
        //     setIsLoading(false)
        //   },
        //   error => {
        //     alert('Error', `Something went wrong! ${error}`)
        //   }
        // )
    };

    const handleInputChange = (inputWord) => {
        setInputWord(inputWord);
    };

    return (
        <Container>
            <Center px={4}>
                <Form
                    onInputChange={handleInputChange}
                    fetchShows={fetchShows}
                />
                {isLoading ? (
                    <Loading />
                ) : (
                    <FlatList
                        data={shows}
                        renderItem={({ item }) => (
                            <ResultsCard
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
                )}
            </Center>
        </Container>
    );
};

export default SearchContainer;
