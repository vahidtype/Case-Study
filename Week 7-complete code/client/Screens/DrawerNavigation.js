import React from 'react';
import { View, StyleSheet } from 'react-native';
import skills from './skills';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './Profile';
// import EducationCareer from './EducationCareer';
// import Connect from './Connect';
// import MyConnection from './MyConnection';
// import ShareProfile from './ShareProfile';
import EducationDetails from './EducationDetails';
import PersonalDetails from './PersonalDetails';
import Attendance from './Attendance';
import FeesDetails from './FeesDetails';
import OtherDetails from './OtherDetails';




const Drawer = createDrawerNavigator();
function DrawerNavigation(props) {
  return (
    <Drawer.Navigator initialRouteName= "ProfileScreen">
    <Drawer.Screen name="ProfileScreen" component={Profile}/>
    {/* <Drawer.Screen name="skills" component={skills} /> */}
    {/* <Drawer.Screen name="EducationCareer" component={EducationCareer} /> */}
    {/* <Drawer.Screen name="Connect" component={Connect} /> */}
    {/* <Drawer.Screen name="MyConnection" component={MyConnection} /> */}
    {/* <Drawer.Screen name="ShareProfile" component={ShareProfile} /> */}
    <Drawer.Screen name="PersonalDetails" component={PersonalDetails} />
    <Drawer.Screen name="EducationDetails" component={EducationDetails} />
    <Drawer.Screen name="Attendance" component={Attendance} />
    <Drawer.Screen name="FeesDetails" component={FeesDetails} />
    <Drawer.Screen name="OtherDetails" component={OtherDetails} />




</Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default DrawerNavigation;