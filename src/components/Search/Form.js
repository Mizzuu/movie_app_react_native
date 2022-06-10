import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
    Button,
    FormControl,
    HStack,
    Icon,
    Input,
    VStack,
    Select,
    CheckIcon,
} from "native-base";

const Form = (props) => {
    // const { fetchRecipes, onInputChange } = props;

    // const [formData, setFormData] = useState({});

    // const onSubmit = () => {
    //     fetchRecipes();
    // };

    return (
        <VStack space={2} width="100%" py={5}>
            <FormControl isRequired>
                <FormControl.Label fontSize="sm">
                    Search Movie/TV Show Name
                </FormControl.Label>
                <HStack width="100%" space={2} alignItems="center">
                    <Input
                        placeholder="i.e. James Bond, CSI"
                        variant="filled"
                        bg="gray.200"
                        px={3}
                        width="85%"
                        InputLeftElement={
                            <Icon
                                size={5}
                                ml={2}
                                color="gray.400"
                                as={<Ionicons name="ios-search" />}
                            />
                        }
                        //  onChangeText={(value) => {
                        //     onInputChange(value);
                        //     setFormData({ ...formData, name: value });
                        // }}
                    />
                </HStack>
                <FormControl.Label fontSize="sm">
                    Choose Search Type
                </FormControl.Label>
                <HStack width="100%">
                    <Select
                        // selectedValue={selectedOption}
                        mx={{
                            base: 0,
                            md: "auto",
                        }}
                        _selectedItem={{
                            bg: "cyan.600",
                            endIcon: <CheckIcon size={4} />,
                        }}
                        accessibilityLabel="Select one of the following options"
                        // onValueChange={(nextValue) => setSelectedOption(nextValue)}
                    >
                        <Select.Item label="movie" value="movie" />
                        <Select.Item label="multi" value="multi" />
                        <Select.Item label="TV" value="TV" />
                    </Select>
                    <Button
                        // onPress={onSubmit}
                        startIcon={<Icon as={Ionicons} name="ios-search" />}
                    >
                        Search
                    </Button>
                </HStack>
            </FormControl>
        </VStack>
    );
};

export default Form;
