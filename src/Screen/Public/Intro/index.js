import React from 'react'
import { Image, StyleSheet, StatusBar, ImageBackground, TouchableHighlight } from 'react-native'
import { Container, Header, Content, View, } from 'native-base'

import AppIntroSlider from 'react-native-app-intro-slider'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
  }
});

const slides = [
  {
    key: "a",
    title: 'Bem vindo ao iBoltt',
    text: 'Tudo fácil e rápido num só lugar! ',
    image: require('@Asset/images/1.png'),
    imageStyle: styles.image,
  },
  {
    key: "b",
    title: 'Prefer The Best',
    text: 'Explore categories to your taste',
    image: require('@Asset/images/2.png'),
    imageStyle: styles.image,
  },
  {
    key: "c",
    title: 'Buy/Sell With Us ',
    text: 'We earn money from services, not from users',
    image: require('@Asset/images/3.png'),
    imageStyle: styles.image,
  },
];

export default class extends React.Component {
  onDone = () => {
    NavigationService.navigate('MemberSignIn')
  }
  onSkip = () => {
    NavigationService.navigate('MemberSignIn')
  }
  render() {
    return <Container style={Style.bgMainIntro}>
      <StatusBar backgroundColor="#FF0000" animated barStyle="light-content" />
      <AppIntroSlider
        slides={slides}
        onDone={this.onDone}
        onSkip={this.onSkip}
        showSkipButton
      />
    </Container>
  }
}