import { View } from "react-native";
import MovieContainer from "../containers/MovieContainer";
import Tab from "../../components/layout/Tab";
import MyTabs from "../../components/layout/Tab";

const IndexScreen = ({ navigation }) => (
    <View>
        <MovieContainer navigation={navigation} />
    </View>
);

export default IndexScreen;
