import React from 'react';

import { StatusBar, TouchableOpacity, TouchableHighlight, TextInput, StyleSheet,
         Image, ImageBackground, Dimensions, ScrollView, Platform,
         Alert, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';

import { Container, Header, Content, 
        Button, Icon, Text, Segment, CardItem, Card, Title, Left, 
        Right, Body, Input, Item, Footer, View, FooterTab, Badge,
        Thumbnail } from 'native-base';

import NavigationService from '@Service/Navigation';
import { connect } from 'react-redux';

import { tryLogin } from '../../../actions';

import Style from '@Theme/Style';
import Styles from '@Screen/Member/SignIn/Style';


//const {width, height} = Dimensions.get('window')
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class LoginPage extends React.Component {
    constructor (props){
        super(props);
        
        this.state = {
            email: '',
            password: '',
            isLoading: false,
        }
    }

    /*
    async componentDidMount() {
        await Font.loadAsync({
            'Roboto_medium': require('./../../../../assets/fonts/Roboto-Medium.ttf'),
          });
      
          this.setState({ fontLoaded: true });
    }
    */

    onChangeHandler(field, value){
        this.setState({
            [field]: value
        });
    }

    tryLoginLocal (){
        this.setState({ isLoading: true });
        const {email, password} = this.state;
        console.log(email, password);

        this.props.tryLogin(email, password)
            .then(() => {
                this.setState({ isLoading: false });
                NavigationService.navigate('PublicHome');
            }).catch(error  => {
                //let pos = error.indexOf('code 400');
                //console.log(pos, ' erro na promisse', error);
                this.setState({ isLoading: false });
                Alert.alert(
                    'Login Inválido',
                    'Usuário ou senha inválidos!',
                    [
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
                  )
            });
    }

    renderButtonLogin(){
        if (this.state.isLoading)
            return <ActivityIndicator />

        return(
            <Button
                style={Styles.btn}
                onPress={() => {
                    //NavigationService.navigate('MemberHome')
                    this.tryLoginLocal()
                }}>
                <Text style={Styles.loginBtnText}>{'Entrar'.toUpperCase()}</Text>
                <Icon active name='arrow-right' type="MaterialCommunityIcons" style={Styles.loginBtnIcon} />
            </Button>
        );
    }

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
                        <Text style={Style.actionBarText}>{'Log In'.toUpperCase()}</Text>
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
                            <TextInput 
                                style={Styles.textInput} 
                                value = {this.state.mail}
                                onChangeText = {value => this.onChangeHandler('email', value)}
                                placeholder={'Email ou Telefone'} 
                            />
                            <TextInput
                                style={Styles.textInput}
                                value = {this.state.password}
                                onChangeText = {value => this.onChangeHandler('password', value)}
                                secureTextEntry
                                placeholder={'Senha'}
                            />
                            { this.renderButtonLogin()}                            
                        </View>
                        <View style={Styles.forgot}>
                            <Text style={Styles.btnForgot}>Esqueceu a senha?</Text>
                        </View>
                        <View style={Styles.login}>
                            <Text style={Styles.account}>Não tem uma conta ainda?</Text>
                            <Button transparent onPress={() => {
                                NavigationService.navigate('MemberSignUp')
                            }}>
                                <Text style={Styles.btnLogin}>CADASTRE-SE!</Text>
                            </Button>
                        </View>
                    </View>

                </Content>

            </ImageBackground>
        </Container>
    }
}

//export default connect(mapStateToProps, mapDispatchToProps || { actionCreator})
export default connect(null, { tryLogin })(LoginPage);