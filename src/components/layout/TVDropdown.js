import { Select, CheckIcon } from "native-base";

const TVDropdown = (props) => {
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
            <Select.Item label="airing_today" value="airing_today" />
            <Select.Item label="on_the_air" value="on_the_air" />
            <Select.Item label="popular" value="popular" />
            <Select.Item label="top_rated" value="top_rated" />
        </Select>
    );
};

export default TVDropdown;
