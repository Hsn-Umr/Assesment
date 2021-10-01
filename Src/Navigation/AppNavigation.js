import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar } from 'react-native';
import { HomeTopBar } from '../Components';
import { Home, Friends, Watch, Groups, Notification, Menu } from '../Screens'
import AppColor from '../Theme/colors';
import HomeIcon from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons';
import WatchIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createMaterialTopTabNavigator();

const AppNavigator = () => {
    return (<>
        <HomeTopBar />
        <Tab.Navigator style={{ marginTop: -9 }}>
            <Tab.Screen
                options={{
                    title: ({ focused }) => (
                        <HomeIcon
                            size={25}
                            name={'home'}
                            color={focused ? AppColor.blue : '#272727'}
                        />
                    ),
                }}
                component={Home}
                name='Home'
            />
            <Tab.Screen
                options={{
                    title: ({ focused }) => (
                        <Ionicons
                            size={25}
                            name={'ios-people-outline'}
                            color={focused ? AppColor.blue : '#272727'}
                        />
                    ),
                }}
                component={Friends}
                name='Friends'
            />
            <Tab.Screen
                options={{
                    title: ({ focused }) => (
                        <WatchIcon
                            size={25}
                            name={'television-play'}
                            color={focused ? AppColor.blue : '#272727'}
                        />
                    ),
                }}
                component={Watch}
                name='Watch'
            />
            <Tab.Screen
                options={{
                    title: ({ color, focused }) => (
                        <WatchIcon
                            size={25}
                            name={'account-group-outline'}
                            color={focused ? AppColor.blue : '#272727'}
                        />
                    ),
                }}
                component={Groups}
                name='Groups'
            />
            <Tab.Screen
                options={{
                    title: ({ focused }) => (
                        <Ionicons
                            size={25}
                            name={'notifications-outline'}
                            color={focused ? AppColor.blue : '#272727'}
                        />
                    ),
                }}
                component={Notification}
                name='Notification'
            />
            <Tab.Screen
                options={{
                    title: ({ focused }) => (
                        <Ionicons
                            size={25}
                            name={'ios-menu-outline'}
                            color={focused ? AppColor.blue : '#272727'}
                        />
                    ),
                }}
                component={Menu}
                name='Menu'
            />
        </Tab.Navigator>
    </>);
};

export default AppNavigator;