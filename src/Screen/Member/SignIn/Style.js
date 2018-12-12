const React = require("react-native");
const { Platform } = React;

export default {

    layoutContent: {
        flex: 1,
        alignItems: 'center',
    },
    bgCover: {
        flex: 1,
    },
    section: {
        marginTop: 65,
        width: '100%',
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginTop: 50,
        marginBottom: 20,
    },
    logoImage: {
        position: 'absolute',
        width: 300,
        height: 100
    },
    signBg: {
        width: '100%',
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
    col: {
        flexDirection: 'row',
    },
    textInput: {
        borderBottomWidth: 1,
        borderColor: '#DDD',
        paddingHorizontal: 20,
        paddingVertical: 15,
        fontSize: 13,
        width: '100%',
    },
    textInputHalf: {
        borderBottomWidth: 1,
        borderColor: '#DDD',
        paddingHorizontal: 20,
        paddingVertical: 15,
        fontSize: 12,
        width: '50%',
    },
    btn: {
        width: '100%',
        backgroundColor: '#FF0000',
        paddingHorizontal: 5,
        paddingVertical: 15,
        borderRadius: 0,
        ...Platform.select({
            android: {
                height: 60,
            },
        }),
    },
    btnText: {
        color: '#333',
        fontSize: 14,
        alignSelf: 'center',
    },

    loginBtnText: {
        color: '#FFF',
        fontSize: 12,
        textAlign: 'center',
    },
    loginBtnIcon: {
        color: '#FFF',
        fontSize: 24,
    },

    login: {
        flex: 1,
        marginVertical: 30,
        width: '100%',
        alignItems: 'center',
    },
    account: {
        color: '#000',
        fontSize: 14,
    },
    btnLogin: {
        color: '#000',
        fontSize: 14,
        justifyContent: 'center',
        flex: 1,
        height: 40,
        padding: 5,
        textAlign: 'center',
    },
    forgot: {
        width: '100%',
        justifyContent: 'flex-end'
    },
    btnForgot: {
        color: '#000',
        paddingVertical: 15,
        textAlign: 'left',
        fontSize: 14,
    }


}