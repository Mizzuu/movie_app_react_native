import { Select, CheckIcon, Text } from "native-base";

const Dropdown = (props) => {
    const { selectedOption, setSelectedOption } = props;

    return (
        <Select
            selectedValue={selectedOption}
            mx={{
                base: 0,
                md: "auto",
            }}
            _selectedItem={{
                bg: "cyan.600",
                endIcon: <CheckIcon size={4} />,
            }}
            accessibilityLabel="Select one of the following options"
            onValueChange={(nextValue) => setSelectedOption(nextValue)}
        >
            <Select.Item label="now_playing" value="now_playing" />
            <Select.Item label="popular" value="popular" />
            <Select.Item label="top_rated" value="top_rated" />
            <Select.Item label="upcoming" value="upcoming" />
        </Select>
    );
};

export default Dropdown;
