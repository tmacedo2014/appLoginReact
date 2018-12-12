import React from 'react'
import {Dimensions} from 'react-native'
import { createDrawerNavigator, createStackNavigator } from "react-navigation"
/*
import { StyleSheet, Text, View } from 'react-native';
*/
import DrawerContent from './Component/Menu/Left'

import PublicAds from '@Screen/Public/Ads'

import PublicIntro from './Screen/Public/Intro'
import PublicHome from './Screen/Public/Home'

import MemberHome from '@Screen/Member/Home'
import MemberSignIn from '@Screen/Member/SignIn'
import MemberSignUp from '@Screen/Member/SignUp'
import HistoricMember from '@Screen/Member/RunsHistoric'


import NavigationService from '@Service/Navigation'

const deviceWidth = Dimensions.get("window").width;

const Drawer = createDrawerNavigator(
  {
    PublicHome: {
      screen: PublicHome,
    },
    MemberHome: {
      screen: MemberHome,
    },
  },
  {
    contentComponent: DrawerContent,
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    headerMode: "none",
    initialRouteName: "PublicHome",
    drawerWidth: deviceWidth - 50
  }
)

const AppNav = createStackNavigator(
  {
    PublicIntro: {
      screen: PublicIntro
    },

    PublicAds: {
      screen: PublicAds
    },

    MemberSignUp: {
      screen: MemberSignUp
    },

    MemberSignIn: {
      screen: MemberSignIn
    },

    HistoricMember: {
      screen: HistoricMember
    },    

    Drawer: {
      screen: Drawer
    }
  },
  {
    headerMode: "none",
    initialRouteName: "PublicIntro"
  }
)

export default class App extends React.Component {
  render() {
    return (
     <AppNav ref={(r) => {NavigationService.setTopLevelNavigator(r)}}/>
    );
  }
}