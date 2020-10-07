import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import Profile from "./src/screens/Profile";
import SemestersScreen from "./src/screens/SemestersScreen";
import FacultyMembersScreen from "./src/screens/FacultyMembersScreen";
import CourseListScreen from "./src/screens/CourseListScreen"

const stack = createStackNavigator();

function App()
{
    return(
        <NavigationContainer>
            <stack.Navigator initialRouteName="Home">
                <stack.Screen name= "Home" component= {HomeScreen}></stack.Screen>
                <stack.Screen name= "Profile" component= {Profile}></stack.Screen>
                <stack.Screen name= "SemestersScreen" component= {SemestersScreen}></stack.Screen>
                <stack.Screen name= "FacultyMembersScreen" component= {FacultyMembersScreen}></stack.Screen>
                <stack.Screen name= "CourseListScreen" component= {CourseListScreen}></stack.Screen>
            </stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
