import { StatusBar } from "expo-status-bar";
import {
    Text,
    HStack,
    Box,
    Divider,
    Heading,
    Image,
    VStack,
    Button,
} from "native-base";
import { View, StyleSheet } from "react-native";
import MovieDetails from "./MovieDetails";

const Movies = (props) => {
    const { imgSrc, title, popularity, release_date, navigation, overview } =
        props;

    return (
        <Box borderWidth={1} borderRadius="md" pb={5} mb={10}>
            <HStack space={4} divider={<Divider />}>
                <Box>
                    <Image
                        source={{
                            uri: `https://image.tmdb.org/t/p/original${imgSrc}`,
                        }}
                        alt={title}
                        style={{ width: 100, height: 150 }}
                    />
                </Box>
                <Box>
                    <VStack space={4}>
                        <Heading>{title}</Heading>
                        <Text>Popularity: {popularity}</Text>
                        <Text>Release Date: {release_date}</Text>
                        <Button
                            onPress={() => {
                                navigation.navigate("MovieDetails");
                            }}
                        >
                            More Details
                        </Button>
                    </VStack>
                </Box>
            </HStack>
        </Box>
    );
};

export default Movies;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
