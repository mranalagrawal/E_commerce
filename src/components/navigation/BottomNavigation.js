import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../screens/Home'
import Favourite from '../../screens/Favourite'
import Notification from '../../screens/Notification'
import Profile from '../../screens/Profile'
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../../assets/theme/theme'
import{createDrawerNavigator} from '@react-navigation/drawer'







function MyDrawer() {
const Drawer = createDrawerNavigator()
    return (
      <Drawer.Navigator>
   <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    );
  }

const BottomTab = () => {

const BottomTabs = createBottomTabNavigator()

  return (
   <BottomTabs.Navigator
  screenOptions={({route}) => ({
    tabBarActiveTintColor: 'white',
    tabBarInactiveTintColor: 'white',
    tabBarShowLabel: false,
    tabBarStyle: {
      backgroundColor:COLORS.CARDBACKGROUND,
      height: 70,
    },
    tabBarIcon: ({focused, size, color}) => {
      let iconName;
      if (route.name === 'Home') {
        (iconName = focused ? 'ios-home' : 'ios-home-outline'),
          (size = focused ? size + 15 : size + 5);
          (color = focused ? color=COLORS.BTNCOLOR : color="black");
      } else if (route.name === 'Favourite') {
        (iconName = focused ? 'ios-heart' : 'ios-heart-outline'),
          (size = focused ? size + 15 : size + 5);
          (color = focused ? color=COLORS.BTNCOLOR : color="black");
      } else if (route.name === 'Notification') {
        (iconName = focused ? 'ios-notifications' : 'ios-notifications-outline'),
          (size = focused ? size + 15 : size + 5);
          (color = focused ? color=COLORS.BTNCOLOR : color="black");
      } 
       else if (route.name === 'Profile') {
        (iconName = focused
          ? 'person-circle-sharp'
          : 'person-circle-outline'),
          (size = focused ? size + 15 : size + 5);
          (color = focused ? color=COLORS.BTNCOLOR : color="black");;
      }
      return <Icon name={iconName} size={size} color={color} />;
    },
  })}> 
    <BottomTabs.Screen name='Home' component={MyDrawer} />
    <BottomTabs.Screen name='Favourite' component={Favourite} />
    <BottomTabs.Screen name='Notification' component={Notification} />
    <BottomTabs.Screen name='Profile' component={Profile} />
  </BottomTabs.Navigator>
  )
}

export default BottomTab

const styles = StyleSheet.create({})