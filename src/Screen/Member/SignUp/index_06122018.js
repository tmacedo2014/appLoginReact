import React from 'react'
import { StatusBar, TouchableOpacity, TouchableHighlight, TextInput, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, FlatList } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Segment, CardItem, Card, Title, Left, Right, Body, Input, Item, Footer, View, FooterTab, Badge, Thumbnail } from 'native-base'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Member/SignUp/Style'

//const {width, height} = Dimensions.get('window')
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class extends React.Component {
    render() {
        return <Container style={Style.bgMain}>
            <ImageBackground source={require('@Asset/images/bg_main.png')} imageStyle={'cover'} style={Styles.bgCover}>

                <Header style={Style.navigationTransparent}>
                    <StatusBar backgroundColor="#39405B" animated barStyle="light-content" />

                    <View style={Style.actionBarLeft}>
                        <Button transparent style={Style.actionBarBtn} onPress={() => {
                            NavigationService.navigate('PublicHome')
                        }}>
                            <Icon active name='arrow-left' style={Style.textWhite} type="MaterialCommunityIcons" />
                        </Button>
                    </View>
                    <View style={Style.actionBarMiddle}>
                        <Text style={Style.actionBarText}>{'Sign Up!'.toUpperCase()}</Text>
                    </View>
                    <View style={Style.actionBarRight}>
                    </View>
                </Header>

                <Content style={Style.layoutInner}>

                    <View style={Styles.section}>
                        <View style={Styles.logo}>
                            <Image source={require('@Asset/images/logo.png')} />
                        </View>
                        <View style={Styles.signBg}>
                            <View style={Styles.col}>
                                <TextInput style={Styles.textInputHalf} placeholder={'Tel. Celular'} />
                                <TextInput style={Styles.textInputHalf} placeholder={'Confirme o Celular'} />
                            </View>
                            <TextInput style={Styles.textInput} placeholder={'Nome Completo'} />
                            <TextInput style={Styles.textInput} placeholder={'CPF'} />
                            <TextInput style={Styles.textInput} placeholder={'Email'} />
                            <View style={Styles.col}>
                                <TextInput style={Styles.textInputHalf} placeholder={'Senha'} />
                                <TextInput style={Styles.textInputHalf} placeholder={'Confirme a Senha'} />
                            </View>
                            
                            <Button transparent style={Styles.btn} onPress={() => {
                                NavigationService.navigate('MemberSignIn')
                            }}>
                                <Text style={Styles.loginBtnText}>{'CADASTRE-SE'.toUpperCase()}</Text>
                                <Icon active name='arrow-right' type="MaterialCommunityIcons" style={Styles.loginBtnIcon} />
                            </Button>
                        </View>
                        <View style={Styles.login}>
                            <Text style={Styles.account}>Do you have an account?</Text>
                            <Button transparent onPress={() => {
                                NavigationService.navigate('MemberSignIn')
                            }}>
                                <Text style={Styles.btnLogin}>Login</Text>
                            </Button>
                        </View>
                    </View>

                </Content>

            </ImageBackground>
        </Container>
    }
}