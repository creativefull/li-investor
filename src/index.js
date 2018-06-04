import React, {Component} from 'react'
import {
    createBottomTabNavigator
} from 'react-navigation';
import {Ionicons} from '@expo/vector-icons'

import Home from './home';

export default createBottomTabNavigator({
    App : {
        screen : Home,
        navigationOptions : {
            title : 'Home',
            tabBarIcon : <Ionicons name="ios-home" size={35}/>
        },
    },
    CheckList : {
        screen : Home,
        navigationOptions : {
            title : 'Home',
            tabBarIcon : <Ionicons name="ios-checkbox" size={35}/>
        },
    },
    AddDeal : {
        screen : Home,
        navigationOptions : {
            title : 'Home',
            tabBarIcon : <Ionicons name="ios-add" size={35}/>
        },
    },
    DonePage : {
        screen : Home,
        navigationOptions : {
            title : 'Home',
            tabBarIcon : <Ionicons name="ios-checkmark-circle-outline" size={35}/>
        },
    },
    UserProfile : {
        screen : Home,
        navigationOptions : {
            title : 'UserProfile',
            tabBarIcon : <Ionicons name="ios-person" size={35}/>
        },
    }
}, {
    initialRouteName : 'App',
    tabBarPosition : 'bottom',
    tabBarOptions : {
        showIcon : true,
        showLabel : false,
        activeTintColor : 'tomato',
        inactiveTintColor : 'gray',
        inactiveBackgroundColor : '#FFF',
        activeBackgroundColor : '#FFF'
    },
    style : {
        padding : 20
    }
})