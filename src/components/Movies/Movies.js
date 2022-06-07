import { useEffect } from "react";
import { Text, View } from "react-native";
import getMovies from "../../../services/api";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState(null);

    const APP_KEY = "775ee96f4b3f569d265b6eac26272d19";
    const BASE_URL = "https://api.themoviedb.org/3/movie/";
    let url = BASE_URL + "movie/{movie_id}" + APP_KEY;

    const client = axios.create({
        baseURL: url,
    });

    useEffect(() => {
        client.get("?_limit=10").then((response) => {
            setMovies(response.data);
            console.log(movies);
        });
    }, []);

    // const fetchMovies = () => {

    //     getMovies(movie).then(
    //       movies => {
    //         setMovies(movies)
    //       },
    //       error => {
    //         alert('Error', `Something went wrong! ${error}`)
    //       }
    //     )
    //   }

    // const getMovies = (e) => {
    //     e.preventDefault();

    //     axios
    //         .get(url)
    //         .then((response) => {
    //             if (response) {
    //                 setMovies(response.data);
    //                 console.log(movies);
    //             }
    //         })
    //         .catch((err) => console.log(err));
    // };

    return (
        <View>
            <Text>Katmai 8</Text>
        </View>
    );
};

export default Movies;
