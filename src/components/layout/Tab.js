import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import TVContainer from "../containers/TVContainer";
import MovieContainer from "../containers/MovieContainer";
import SearchContainer from "../containers/SearchContainer";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Movies" component={MovieContainer} />
                <Tab.Screen name="Search Results" component={SearchContainer} />
                <Tab.Screen name="TV Shows" component={TVContainer} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MyTabs;
