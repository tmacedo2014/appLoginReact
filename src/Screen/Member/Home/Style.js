const React = require("react-native");
const { Platform } = React;

export default {
    layoutContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    homeBg: {
        flex: 1,
        paddingBottom: 30,
    },

    section: {
        flex: 1,
        paddingLeft: 0,
        alignItems: 'center',
        width: '100%',
    },

    page: {
        flex: 1,
        width: '100%',
    },

    profile: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 20,
        flexDirection: 'row',
        paddingTop: 5,
    },
    avatar: {
        marginRight: 10,
    },
    profileName: {
        fontSize: 16,
        color: '#FFF',
        marginBottom: 3,
        marginTop: 10,
    },
    profileLocation: {
        fontSize: 12,
        color: '#FFF',
        opacity: 0.7,
    },
    curve: {
        flex: 1,
    },

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
        marginBottom: 10,
    },
    btnText: {
        color: '#333',
        fontSize: 12,
        textAlign: 'center'
    },



    message: {
        flex: 1,
        paddingVertical: 30,
        alignItems: 'center',
        width: '100%',
    },
    item: {
        width: '100%',
        flexDirection: 'column',
    },
    record: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#DDD',
        marginLeft: 0,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
    },
    recordLast: {
        flexDirection: 'row',
        borderBottomWidth: 0,
        marginLeft: 0,
        paddingVertical: 10,
    },
    itemImg: {
        width: 48,
        height: 48,
    },
    itemInfo: {
        flex: 1,
        paddingHorizontal: 15,
    },
    itemTitle: {
        color: '#333',
        fontSize: 12,
        marginBottom: 0,
    },

    itemDesc: {
        color: '#666',
        fontSize: 11,
        marginBottom: 5,
        lineHeight: 16,
    },
    itemDate: {
        color: '#999',
        fontSize: 10,
    },
    crv: {
        flex: 1,
    },


    headerBg: {
        flexDirection: 'row',
        marginBottom: 15,
        paddingHorizontal: 20,
    },
    headerIcon: {
        fontSize: 24,
        color: '#39405B',
        marginRight: 5,
    },
    sHeader: {
        color: '#39405B',
        marginLeft: 3,
        fontSize: 14,
        marginTop: 5,
    },
    sBtn: {
        padding: 1,
        backgroundColor: '#e7e7e7',
        color: '#FFF',
    },
    sLink: {
        color: '#666',
        fontSize: 10,
    },

    


}