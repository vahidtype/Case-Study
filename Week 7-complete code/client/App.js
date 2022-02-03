import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import SignUpScreen from "./Screens/SignUpScreen";
//import AddScreen from "./Screens/AddScreen";
import EducationDetails from "./Screens/EducationDetails";
import OtherDetails from "./Screens/OtherDetails";
import FeesDetails from "./Screens/FeesDetails";
import Attendance from "./Screens/Attendance";
import Personal from "./Screens/PersonalDetails";
import Profile from "./Screens/Profile";
import ProfileScreen from "./Screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigation from "./Screens/DrawerNavigation"
import PersonalDetails from "./Screens/PersonalDetails";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sign In" component={LoginScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        {/* <Stack.Screen name="Add" component={AddScreen} /> */}
        <Stack.Screen name="EducationDetails" component={EducationDetails} />
        <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
        <Stack.Screen name="Attendance" component={Attendance} />
        <Stack.Screen name="FeesDetails" component={FeesDetails} />
        <Stack.Screen name="OtherDetails" component={OtherDetails} />
        <Stack.Screen name="ProfileScreen" component={Profile} />
        <Stack.Screen name="Profile" component={DrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
    /*  <View>
      
       <HomeScreen />
       <LoginScreen />
       <SignUpScreen />
       <ProfileScreen />
       <Profile />
      
      <AddScreen />
    </View> */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
