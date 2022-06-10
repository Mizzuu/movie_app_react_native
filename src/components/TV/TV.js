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

function TV(props) {
    const { imgSrc, name, navigation, popularity, first_air_date } = props;

    return (
        <Box borderWidth={1} borderRadius="md" pb={5} mb={10}>
            <HStack space={4} divider={<Divider />}>
                <Box>
                    <Image
                        source={{
                            uri: `https://image.tmdb.org/t/p/original${imgSrc}`,
                        }}
                        alt={name}
                        style={{ width: 100, height: 150 }}
                    />
                </Box>
                <Box>
                    <VStack space={4}>
                        <Heading>{name}</Heading>
                        <Text>Popularity: {popularity}</Text>
                        <Text>First Air Date: {first_air_date}</Text>
                        <Button size="sm">More Details</Button>
                    </VStack>
                </Box>
            </HStack>
        </Box>
    );
}

export default TV;
