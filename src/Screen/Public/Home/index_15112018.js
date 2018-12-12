import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, FlatList, ToolbarAndroid } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Title, Left, Right, Body, Input, Item, Footer, View, FooterTab, Badge } from 'native-base'

import NavigationService from '@Service/Navigation'

/*
import FEATURED from './Featured'
import RECENT from './Recent'
import TOPCITIES from './TopCities'
import AGENTS from './Agents'
*/


import Style from '@Theme/Style'
import Styles from '@Screen/Public/Home/Style'

//const {width, height} = Dimensions.get('window')
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class extends React.Component {
    /*
    componentDidMount() {
        Font.loadAsync({
          'open-sans-bold': require('../../../assets/fonts/OpenSans-Bold.ttf'),
        });
      }
      */
      
    render() {
        return <Container>
                <Header style={Style.navigation}>
                    <StatusBar backgroundColor="#39405B" animated barStyle="light-content" />

                    <View style={Style.actionBarLeft}>
                        <Button transparent style={Style.actionMenu} onPress={() => {
                            NavigationService.openDrawer()
                        }}>
                            <Image source={require('@Asset/images/menu.png')} />
                        </Button>
                    </View>
                    <View style={Style.actionBarMiddle}>
                        <Text style={Style.actionBarText}>{'Home'.toUpperCase()}</Text>
                    </View>
                    <View style={Style.actionBarRight}>
                    </View>
                </Header>
                
                <Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}>

                    <ImageBackground key="a" source={require('@Asset/images/bg.png')} imageStyle={'cover'} style={Styles.slider}>

                        <View style={Styles.search}>
                            <TextInput placeholder={'e.g. iPhone 6 Plus'} style={Styles.textInput} />
                            <Button transparent style={Styles.searchBtn} onPress={() => {
                                NavigationService.navigate('PublicAds')
                            }}>
                                <Icon active name='search' type="FontAwesome" style={Styles.searchBtnIcon} />
                            </Button>
                        </View>


                        <View style={Styles.btnLayout}>
                            <TouchableOpacity style={Styles.btnBox} onPress={() => {
                                NavigationService.navigate('PublicAds')
                            }}>
                                <Image source={require('@Asset/images/btn-real_estate.png')} resizeMode={'cover'} style={Styles.btnImg} />
                                <Text style={Styles.btnText}>Real Estate</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={Styles.btnBox} onPress={() => {
                                NavigationService.navigate('PublicAds')
                            }}>
                                <Image source={require('@Asset/images/btn-car.png')} style={Styles.btnImg} />
                                <Text style={Styles.btnText}>Cars</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={Styles.btnBoxRight} onPress={() => {
                                NavigationService.navigate('PublicAds')
                            }}>
                                <Image source={require('@Asset/images/btn-eletronics.png')} style={Styles.btnImg} />
                                <Text style={Styles.btnText}>Electronics</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={Styles.btnBox} onPress={() => {
                                NavigationService.navigate('PublicAds')
                            }}>
                                <Image source={require('@Asset/images/btn-fashion.png')} style={Styles.btnImg} />
                                <Text style={Styles.btnText}>Fashion</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={Styles.btnBox} onPress={() => {
                                NavigationService.navigate('PublicAds')
                            }}>
                                <Image source={require('@Asset/images/btn-books.png')} style={Styles.btnImg} />
                                <Text style={Styles.btnText}>Books</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={Styles.btnBoxRight} onPress={() => {
                                NavigationService.navigate('PublicAds')
                            }}>
                                <Image source={require('@Asset/images/btn-household.png')} style={Styles.btnImg} />
                                <Text style={Styles.btnText}>Household</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={Styles.btnBoxBot} onPress={() => {
                                NavigationService.navigate('PublicAds')
                            }}>
                                <Image source={require('@Asset/images/btn-pets.png')} style={Styles.btnImg} />
                                <Text style={Styles.btnText}>Pets</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={Styles.btnBoxBot} onPress={() => {
                                NavigationService.navigate('PublicAds')
                            }}>
                                <Image source={require('@Asset/images/btn-jobs.png')} style={Styles.btnImg} />
                                <Text style={Styles.btnText}>Jobs</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={Styles.btnBoxLast} onPress={() => {
                                NavigationService.navigate('PublicAds')
                            }}>
                                <Image source={require('@Asset/images/btn-services.png')} style={Styles.btnImg} />
                                <Text style={Styles.btnText}>Services</Text>
                            </TouchableOpacity>
                        </View>



                        <View style={Styles.headerBg}>
                            <Icon name="clock" type="Feather" style={Styles.headerIcon} />
                            <Text style={Styles.sHeader}>{'Featured Ads'.toUpperCase()}</Text>
                            <Right>
                            <Button small rounded transparent onPress={() => { NavigationService.navigate('PublicAds') }}>
                                    <Image source={require('@Asset/images/dot.png')} />
                                </Button>
                            </Right>
                        </View>                    
                    </ImageBackground>
                </Content>



                <View style={Style.footer}>
                    <View style={Style.fNav}>
                        <Button transparent style={Style.fBtn} onPress={() => {
                            NavigationService.navigate('PublicHome')
                        }}>
                            <Icon name='home' style={Style.fBtnIcon} type="FontAwesome" />
                        </Button>
                    </View>
                    <View style={Style.fNav}>
                        <Button transparent style={Style.fBtn} onPress={() => {
                            NavigationService.navigate('PublicAdsSearch')
                        }}>
                            <Icon name='search' style={Style.fBtnIcon} type="FontAwesome" />
                        </Button>
                    </View>
                    <View style={Style.fNavActive}>
                        <Button transparent style={Style.fBtn} onPress={() => {
                            NavigationService.navigate('MemberAdCreate')
                        }}>
                            <Icon name='plus' style={Style.fBtnIconActive} type="Foundation" />
                        </Button>
                    </View>
                    <View style={Style.fNav}>
                        <Button transparent style={Style.fBtn} onPress={() => {
                            NavigationService.navigate('MemberBookmark')
                        }}>
                            <Icon name='bookmark' style={Style.fBtnIcon} type="Octicons" />
                        </Button>
                    </View>
                    <View style={Style.fNav}>
                        <Button transparent style={Style.fBtn} onPress={() => {
                            NavigationService.navigate('MemberMessages')
                        }}>
                            <Icon name='bell' style={Style.fBtnIcon} type="Entypo" />
                        </Button>
                    </View>
                </View>                
        </Container>
    }
}