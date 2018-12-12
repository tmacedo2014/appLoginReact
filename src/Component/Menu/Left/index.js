import React, { Component } from "react";
import { Image } from "react-native";
import { connect } from 'react-redux';

import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge,
  View,
} from "native-base";

import styles from "./Style";
import NavigationService from './../../../Service/Navigation'
import { doLogout } from '../../../actions'

const drawerCover = require("@Asset/images/bg_main_menu.png");
//const drawerImage = require("@Asset/images/avatar.png");
const datas1 = [
  {
    name: "Início",
    route: "PublicHome",
    icon: "home",
  },
  /*
  {
    name: "Ads",
    route: "PublicAds",
    icon: "news",
    type: "Entypo",
  },
  */
  {
    name: "Histórico de Corridas",
    route: "HistoricMember",
    icon: "newspaper-o",
  },
  /*
  {
    name: "Ads Search",
    route: "PublicAdsSearch",
    icon: "search",
  },
  {
    name: "Members",
    route: "PublicMembers",
    icon: "group",
  },
  {
    name: "Member Detail",
    route: "PublicMemberDetail",
    icon: "user-circle-o",
  },
  {
    name: "About oClassify",
    route: "PublicAboutUs",
    icon: "info-circle"
  },
  {
    name: "Contact",
    route: "PublicContact",
    icon: "envelope",
  }
  */
];


const datas2 = [
  /*
  {
    name: "Register",
    route: "MemberSignUp",
    icon: "lock",
  },
  {
    name: "Sign In",
    route: "MemberSignIn",
    icon: "login-variant",
    type: "MaterialCommunityIcons",
  },
  {
    name: "Dashboard",
    route: "MemberHome",
    icon: "home",
  },
  {
    name: "Ads",
    route: "MemberAds",
    icon: "news",
    type: "Entypo",
  },
  {
    name: "Create Ad",
    route: "MemberAdCreate",
    icon: "plus",
  },
  {
    name: "Messages",
    route: "MemberMessages",
    icon: "message",
    type: "MaterialIcons",
  },
  {
    name: "Profile",
    route: "MemberProfile",
    icon: "user-circle-o",
  },
  {
    name: "Bookmark",
    route: "MemberBookmark",
    icon: "bookmarks",
    type: "Entypo",
  },
  {
    name: "Settings",
    route: "MemberSettings",
    icon: "gears",
  },
  */
  {
    name: "Sair",
    route: "MemberSignIn",
    icon: "logout",
    type: "MaterialCommunityIcons",
  }
];


class MenuLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      avatarImage = '',
      shadowRadius: 4
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('passou por aqui');
    //this.setState({propUser : nextProps.user})
    //console.log('imagem=', this.props.user.avatar);
   }

  
  logOut(){
    this.props.doLogout()
        .then(() => {
            NavigationService.navigate('MemberSignIn');
    });
  }
  

  renderList(datas) {
    return (
      <List
        dataArray={datas}
        renderRow={data =>
          <ListItem
            button
            noBorder
            onPress={() => {
              //console.log('passou por aqui', data.route);
              if (data.route = 'MemberSignIn'){
                this.logOut();
              }else {
                NavigationService.navigate(data.route)
              }
            }}
          >
            <Left>
              <Icon
                active
                name={data.icon}
                style={{ color: "#333", fontSize: 24, width: 30 }}
                type={data.type || 'FontAwesome'}
              />
              <Text style={styles.text}>
                {data.name}
              </Text>
            </Left>
            {
              data.types &&
              <Right style={{ flex: 1 }}>
                <Badge>
                  <Text
                    style={styles.badgeText}
                  >{`${data.types}`}</Text>
                </Badge>
              </Right>
            }
          </ListItem>}
      />
    )
  }

  render() {

    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, top: -1 }}
          render
        >
          <Image source={drawerCover} style={styles.drawerCover} />
          <View style={styles.drawerBg}>
            <Image square style={styles.drawerImage} source={ {uri: this.props.user.avatar} } />
            <Text style={styles.drawerText}>{ this.props.user.name }</Text>
          </View>

          <View style={styles.divider}>
            {this.renderList(datas1)}
            {this.renderList(datas2)}
          </View>

        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state;
  //console.log('state11=', state);
  return { user };
}

//export default connect(state => ({user : state.signUpReducer.user })

//export default MenuLeft;
//export default connect(mapStateToProps)(MenuLeft);
export default connect(mapStateToProps, { doLogout })(MenuLeft);

