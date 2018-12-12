const React = require("react-native");
const { Platform } = React;

export default {
    layoutContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },


    /* -- Search -- */
    search: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },
    textInput: {
        flex: 8,
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
        //fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        paddingVertical: 8,
        borderRadius: 0,
    },
    searchBtn: {
        flex: 2,
        backgroundColor: '#FFF',
        //fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        justifyContent: 'center',
        paddingVertical: 15,
        borderRadius: 0,
    },
    searchBtnIcon: {
        color: '#999',
        fontSize: 18,
    },


    /* -- Header Button -- */
    btnLayout: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        marginHorizontal: 20,
        marginTop: 15,
        marginBottom: 30,
        backgroundColor: '#FFF',
        borderRadius: 0,
        elevation: 10,
        shadowOffset: {
            width: 15,
            height: 15
        },
        shadowColor: '#999',
        shadowOpacity: 0.1,
        shadowRadius: 0,
        ...Platform.select({
            ios: {
                shadowOffset: {
                    width: 5,
                    height: 5
                },
            },
        }),
    },
    btnBox: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '33%',
        marginBottom: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderColor: '#f0f0f0',
    },
    btnBoxRight: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '33%',
        marginBottom: 1,
        borderBottomWidth: 1,
        borderRightWidth: 0,
        borderColor: '#f0f0f0',
    },
    btnBoxBot: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '33%',
        marginBottom: 1,
        borderBottomWidth: 0,
        borderRightWidth: 1,
        borderColor: '#f0f0f0',
    },
    btnBoxLast: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '33%',
        marginBottom: 1,
        borderBottomWidth: 0,
        borderRightWidth: 0,
        borderColor: '#f0f0f0',
    },
    btnImg: {
        marginBottom: 0,
    },
    btnText: {
        color: '#333',
        //fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        textAlign: 'center'
    },

    


    /* -- Slider -- */
    slider: {
        flex: 1,
        paddingBottom: 10,
    },

    /* -- Featured -- */
    section: {
        flex: 1,
        paddingTop: 30,
        paddingBottom: 30,
    },
    sectionGrey: {
        flex: 1,
        paddingVertical: 30,
        backgroundColor: '#FFF',
    },
    flatList: {
        paddingLeft: 10,
    },
    featureList: {
        paddingLeft: 10,
        paddingBottom: 15,
    },
    headerBg: {
        flexDirection: 'row',
        marginBottom: 1,
        paddingHorizontal: 10,
    },
    headerIcon: {
        fontSize: 24,
        color: '#000',
        marginTop: 15,
    },
    sHeader: {
        color: '#FF0000',
        marginLeft: 3,
        fontSize: 15,
        fontFamily: 'Montserrat-SemiBold',
        marginTop: 15,
    },
    sBtn: {
        padding: 1,
        backgroundColor: '#e7e7e7',
        color: '#FFF',
        borderRadius: 0,
        padding: 0,
    },
    sLink: {
        color: '#666',
        fontSize: 10,
        //fontFamily: 'Montserrat',
    },

    itemList: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 10,
    },
    itemBig: {
        width: 300,
        backgroundColor: '#FFF',
        borderRadius: 0,
        elevation: 10,
        shadowOffset: {
            width: 15,
            height: 15
        },
        shadowColor: '#999',
        shadowOpacity: 0.1,
        shadowRadius: 0,
        margin: 10,
        marginBottom: 40,
    },
    itemImgBig: {
        marginBottom: 10,
        width: '100%',
        height: 150,
        ...Platform.select({
            ios: {
                borderRadius: 0,
            },
        }),
    },
    itemNoCrv: {
        ...Platform.select({
            ios: {
                width: '100%',
                height: 5,
                backgroundColor: '#FFF',
                bottom: 10,
                position: 'absolute',
            },
        }),
    },
    itemBg: {
        ...Platform.select({
            ios: {
                
            },
        }),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    item: {
        width: 200,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#FFF',
        borderRadius: 0,
        elevation: 10,
        shadowOffset: {
            width: 15,
            height: 15
        },
        shadowColor: "#CCC",
        shadowOpacity: 0.1,
        shadowRadius: 0,
        ...Platform.select({
            ios: {
                shadowOffset: {
                    width: 5,
                    height: 5
                },
            },
        }),
    },
    itemImg: {
        marginBottom: 10,
        width: 200,
        height: 100,
        ...Platform.select({
            ios: {
                borderRadius: 0,
            },
        }),
    },
    itemFavorite: {
        position: 'absolute',
        alignSelf: 'flex-end',
        color: '#ED5D02',
        paddingRight: 10,
        fontSize: 24,
    },
    itemTitle: {
        color: '#FF0000',
        fontSize: 12,
        //fontFamily: 'Montserrat-SemiBold',
        paddingHorizontal: 20,
    },
    itemTitleSm: {
        color: '#FF0000',
        fontSize: 12,
        //fontFamily: 'Montserrat-SemiBold',
        paddingHorizontal: 20,
    },
    itemPrice: {
        color: '#333',
        fontSize: 14,
        //fontFamily: 'Montserrat-SemiBold',
        paddingHorizontal: 20,
    },
    itemPriceSm: {
        color: '#333',
        fontSize: 12,
        //fontFamily: 'Montserrat-SemiBold',
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    itemLocation: {
        color: '#999',
        fontSize: 11,
        //fontFamily: 'Montserrat-Regular',
        marginBottom: 10,
        paddingHorizontal: 20,
    },
    crv: {
        borderRadius: 0,
    },
    itemRow: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingBottom: 15,
    },
    itemOverview: {
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    itemIcon: {
        color: '#CCC',
        marginRight: 5,
        fontSize: 14,
    },
    itemDate: {
        color: '#999',
        //fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        marginRight: 20,
    },
    itemPosted: {
        flexDirection: 'row',
        paddingBottom: 10,
        paddingHorizontal: 20,
    },
    itemLeft: {
        flexWrap: 'wrap',
        minWidth: '60%',
        maxWidth: '60%',
    },
    itemLeftSm: {
        flexWrap: 'wrap',
        minWidth: '60%',
        maxWidth: '70%',
    },
    itemRight: {
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        minWidth: '40%',
        maxWidth: '50%',
    },

    /* -- Top Cities -- */
    city: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    },
    btnList: {
        width: '48%',
    },
    btnCity: {
        width: '100%',
        height: 100,
        marginBottom: 10,
    },
    btnCityMain: {
        width: '100%',
        height: 210,
        marginBottom: 10,
    },
    btnCityImg: {
        flex: 1,
        borderRadius: 0,
    },
    btnCityLocation: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnCityLocationMain: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: 210,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnCityBg: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: 100,
        backgroundColor: '#FF0000',
        opacity: 0.5,
    },
    btnCityBgMain: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: 210,
        backgroundColor: '#FF0000',
        opacity: 0.5,
    },
    btnCityText: {
        color: '#FFF',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
    },
    btnCityCount: {
        color: '#FFF',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 24,
    },


    flatCity: {
        paddingLeft: 20,
    },
    itemCity: {
        width: 150,
        marginLeft: 5,
        marginRight: 5,
    },
    itemCityCount: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 64,
    },
    itemCityLocation: {
        color: '#FFF',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 13,
    },
    itemCityImg: {
        marginBottom: 10,
        width: 150,
        height: 64,
        borderRadius: 0,
        textAlign: 'center'
    },

    /* -- Agents -- */
    agents: {
        paddingHorizontal: 15,
        marginBottom: 15,
    },
    itemAgent: {
        width: 72,
        marginLeft: 5,
        marginRight: 5,
    },
    itemAgentImg: {
        marginBottom: 10,
        width: 72,
        height: 72,
        borderRadius: 0,
        textAlign: 'center'
    },
    itemAgentName: {
        color: '#333',
        fontSize: 10,
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center',
    },


    typeBg: {
        borderRadius: 0,
        borderWidth: 1,
        borderColor: '#FFF',
        width: '70%',
    },
    typeBtn: {
        flex: 1,
        borderWidth: 0,
        borderRadius: 0,
    },
    typeBtnText: {
        //fontFamily: 'Montserrat-Regular',
        color: '#999',
        fontSize: 12,
    },

    typeBtnActive: {
        backgroundColor: '#FFF',
        paddingVertical: 8,
        paddingHorizontal: 5,
    },
    typeBtnInactive: {
        backgroundColor: 'transparent',
        paddingVertical: 8,
        paddingHorizontal: 5,
    },
    typeActiveText: {
        color: '#333',
        //fontFamily: 'Montserrat-SemiBold',
        fontSize: 10,
    },
    typeInactiveText: {
        color: '#FFF',
        //fontFamily: 'Montserrat-Regular',
        fontSize: 10,
    },

}