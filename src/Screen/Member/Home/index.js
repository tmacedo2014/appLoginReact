import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, StyleSheet, Image, TouchableHighlight, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, FlatList } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Title, Left, Right, Body, Input, Item, Footer, View, FooterTab, Badge } from 'native-base'

import NavigationService from '@Service/Navigation'

import MESSAGES from './Messages'

import Style from '@Theme/Style'
import Styles from '@Screen/Member/Home/Style'

//const {width, height} = Dimensions.get('window')
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class extends React.Component {
    render() {
        return <Container style={Style.bgMain}>
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
                    <Text style={Style.actionBarText}>{''.toUpperCase()}</Text>
                </View>
                <View style={Style.actionBarRight}>
                </View>
            </Header>


            <Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}>



                <View style={Styles.section}>
                    <ImageBackground source={require('@Asset/images/bg_in.png')} imageStyle={'cover'} style={Styles.crv}>

                        <View style={Styles.profile}>
                            <Image source={require('@Asset/images/avatar.png')} style={Styles.avatar} />
                            <View>
                                <Text style={Styles.profileName}>Hey Russell Crowe!</Text>
                                <Text style={Styles.profileLocation}>New York, United States</Text>
                            </View>
                        </View>

                        <View style={Styles.btnLayout}>
                            <TouchableOpacity style={Styles.btnBox} onPress={() => {
                                NavigationService.navigate('MemberAds')
                            }}>
                                <Image source={require('@Asset/images/btn-ads.png')} resizeMode={'cover'} style={Styles.btnImg} />
                                <Text style={Styles.btnText}>My Ads</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={Styles.btnBox} onPress={() => {
                                NavigationService.navigate('MemberMessages')
                            }}>
                                <Image source={require('@Asset/images/btn-message.png')} style={Styles.btnImg} />
                                <Text style={Styles.btnText}>Messages</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={Styles.btnBox} onPress={() => {
                                NavigationService.navigate('MemberProfile')
                            }}>
                                <Image source={require('@Asset/images/btn-jobs.png')} style={Styles.btnImg} />
                                <Text style={Styles.btnText}>Profile</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={Styles.btnBoxBot} onPress={() => {
                                NavigationService.navigate('MemberBookmark')
                            }}>
                                <Image source={require('@Asset/images/btn-bookmark.png')} style={Styles.btnImg} />
                                <Text style={Styles.btnText}>Bookmarks</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={Styles.btnBoxBot} onPress={() => {
                                NavigationService.navigate('MemberSettings')
                            }}>
                                <Image source={require('@Asset/images/btn-services.png')} style={Styles.btnImg} />
                                <Text style={Styles.btnText}>Settings</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={Styles.btnBox}>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                    <View style={Styles.message}>
                        <View style={Styles.headerBg}>
                            <Icon name="envelope" type="FontAwesome" style={Styles.headerIcon} />
                            <Text style={Styles.sHeader}>{'Recent Messages'.toUpperCase()}</Text>
                            <Right>
                                <Button small rounded transparent onPress={() => { NavigationService.navigate('PublicAds') }}>
                                    <Image source={require('@Asset/images/dot.png')} />
                                </Button>
                            </Right>
                        </View>
                        <FlatList
                            data={MESSAGES}
                            style={Styles.item}
                            renderItem={({ item, separators }) => (
                                <TouchableHighlight underlayColor='transparent' onPress={() => { NavigationService.navigate('MemberMessages') }}>
                                    <View style={Styles.record}>
                                        <Image source={{ uri: item.image }} style={Styles.itemImg} />
                                        <View style={Styles.itemInfo}>
                                            <Text style={Styles.itemTitle}>{item.name}</Text>
                                            <Text style={Styles.itemDesc}>{item.desc}</Text>
                                        </View>
                                        <Text style={Styles.itemDate}>{item.date}</Text>
                                    </View>
                                </TouchableHighlight>
                            )}
                        />
                    </View>

                </View>

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