import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, FlatList } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Title, Left, Right, Body, Input, Item, Footer, View, FooterTab, Badge } from 'native-base'

import NavigationService from '@Service/Navigation'

import FEATURED from './Featured'


import Style from '@Theme/Style'
import Styles from '@Screen/Public/Ads/Style'

//const {width, height} = Dimensions.get('window')
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class extends React.Component {
    render() {
        return <Container style={Style.bgMain}>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor="#39405B" animated barStyle="light-content" />

                <View style={Style.actionBarLeft}>
                    <Button transparent style={Style.actionBarBtn} onPress={() => {
                        NavigationService.navigate('PublicHome')
                    }}>
                        <Icon active name='arrow-left' style={Style.textWhite} type="MaterialCommunityIcons" />
                    </Button>
                </View>
                <View style={Style.actionBarMiddle}>
                    <Text style={Style.actionBarText}>{'Ads'.toUpperCase()}</Text>
                </View>
                <View style={Style.actionBarRight}>
                    <Button transparent style={Style.actionBtnRight} onPress={() => {
                        NavigationService.navigate('PublicAdsSearch')
                    }}>
                        <Icon active name='search' style={Style.actionIcon} type="FontAwesome" />
                    </Button>
                </View>
            </Header>


            <Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}>
                <ImageBackground source={require('@Asset/images/bg.png')} imageStyle={'cover'} style={Style.slider}>
                    <View style={Styles.section}>
                        <FlatList
                            data={FEATURED}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, separators }) => (
                                <TouchableOpacity style={Styles.item} underlayColor='transparent' onPress={() => { NavigationService.navigate('PublicAdsDetail') }}>
                                    <View style={Styles.itemLeft}>
                                        <Image source={{ uri: item.image }} style={Styles.itemImg} />
                                        <Icon name="bookmark" type="FontAwesome" style={Styles.itemFavorite} />
                                    </View>
                                    <View style={Styles.itemRight}>
                                        <Text style={Styles.itemTitle}>{item.title}</Text>
                                        <Text style={Styles.itemLocation}>{item.location}</Text>
                                        <Text style={Styles.itemPrice}>{item.price}</Text>
                                        <View style={Styles.itemPosted}>
                                            <Icon name="calendar" type="FontAwesome" style={Styles.itemIcon} />
                                            <Text style={Styles.itemDate}>{item.date}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </ImageBackground>
            </Content>

            <Footer style={Style.greyTopLine}>
                <FooterTab style={Style.bgFilter}>
                    <Button style={Style.bgFilter} onPress={() => {
                        NavigationService.navigate('PublicAds')
                    }}>
                        <Icon name="sort-amount-asc" type="FontAwesome" style={Style.textBlue} />
                        <Text style={Style.textBlack}>Sort by</Text>
                    </Button>
                    <Button style={Style.bgFilter} onPress={() => {
                        NavigationService.navigate('PublicAdsSearch')
                    }}>
                        <Icon name="filter" type="FontAwesome" style={Style.textBlue} />
                        <Text style={Style.textBlack}>Filter</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    }
}