import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, FlatList, Picker } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Title, Left, Radio, Right, Body, Input, ListItem, Form, Footer, Textarea, View, FooterTab, Badge, Label } from 'native-base'

import NavigationService from '@Service/Navigation'
//import Button as cButton from '@Component/Button'
import Style from '@Theme/Style'
import Styles from '@Screen/Member/RunsHistoric/Style'


//const {width, height} = Dimensions.get('window')
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export const propertyType = [{
    label: 'Buy',
    value: 'type_buy'
}, {
    label: 'Rent',
    value: 'type_rent'
}, {
    label: 'Projects',
    value: 'type_projects'
}];

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: undefined,
            sliderOneChanging: false,
            sliderOneValue: [10000],
            multiSliderValue: [100, 100000],
        };
    }
    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    sliderOneValuesChangeStart = () => {
        this.setState({
            sliderOneChanging: true,
        });
    }

    sliderOneValuesChange = (values) => {
        let newValues = [0];
        newValues[0] = values[0];
        this.setState({
            sliderOneValue: newValues,
        });
    }

    sliderOneValuesChangeFinish = () => {
        this.setState({
            sliderOneChanging: false,
        });
    }

    multiSliderValuesChange = (values) => {
        this.setState({
            multiSliderValue: values,
        });
    }



    render() {
        return <Container style={Style.bgMain}>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor="#FF0000" animated barStyle="light-content" />

                <View style={Style.actionBarLeft}>
                    <Button transparent style={Style.actionBarBtn} onPress={() => {
                        NavigationService.navigate('PublicAds')
                    }}>
                        <Icon active name='arrow-left' style={Style.textWhite} type="MaterialCommunityIcons" />
                    </Button>
                </View>
                <View style={Style.actionBarMiddle}>
                    <Text style={Style.actionBarText}>{'Histórico de Corridas'.toUpperCase()}</Text>
                </View>
                <View style={Style.actionBarRight}>
                </View>
            </Header>


            <Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}>

                <View style={Styles.section}>
                    <View style={Styles.textView}>
                        <Label style={Styles.labelPrice}>Escolher o serviço:</Label>
                    </View>
                    <View style={Styles.picker}>
                        <Picker
                            selectedValue={this.state.language}
                            onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                            <Picker.Item label="MotoBoy" value="1" />
                            <Picker.Item label="iBollt Car" value="2" />                            
                            <Picker.Item label="iBoltt Táxi" value="electronics" />
                            <Picker.Item label="Jobs" value="jobs" />
                            <Picker.Item label="Services" value="services" style={Styles.pickerText} />
                        </Picker>
                    </View>

                    <View style={Styles.btnBg}>
                        <Button style={Styles.btn} onPress={() => {
                            NavigationService.navigate('PublicHome')
                        }}>
                            <Text style={Styles.btnText}>{'Buscar'.toUpperCase()}</Text>
                            <Icon active name='search' type="FontAwesome" style={Styles.btnIcon} />
                        </Button>
                    </View>
                </View>
            </Content>
        </Container>
    }
}