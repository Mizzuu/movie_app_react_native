import { Box, Button, Center, Text } from "native-base";

const MovieContainer = ({ navigation, route }) => {
    // const { label, url } = route.params;

    return (
        <>
            <Box width="100%">
                <Center py={10}>
                    <Text>MAK</Text>
                    {/* <Button
                        variant="ghost"
                        onPress={() =>
                            navigation.navigate("Web", {
                                label,
                                url,
                            })
                        }
                    >
                        View Online
                    </Button> */}
                </Center>
            </Box>
        </>
    );
};

export default MovieContainer;
