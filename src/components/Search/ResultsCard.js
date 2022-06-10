import {
    Box,
    Button,
    Center,
    Divider,
    Heading,
    Image,
    Text,
    VStack,
} from "native-base";

const ResultsCard = (props) => {
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

export default ResultsCard;
