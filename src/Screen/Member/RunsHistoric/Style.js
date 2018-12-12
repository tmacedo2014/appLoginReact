const React = require("react-native");
const { Platform } = React;


export default {
  layoutContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  section: {
    flex: 1,
    paddingVertical: 30,
  },


  type: {
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  title: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  location: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  bed: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  price: {
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  btnBg: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },


  propertyType: {
    marginBottom: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  label: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#333',
    marginBottom: 10,
  },
  labelPrice: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#333',
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  textView: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  textInput: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#333',
    width: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  btn: {
    width: '100%',
    borderRadius: 0,
    backgroundColor: '#FF0000',
    paddingVertical: 20,
    ...Platform.select({
      android: {
        height: 50,
      },
    }),
  },
  btnText: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFF',
    fontSize: 12,
    alignSelf: 'center',
  },
  btnIcon: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFF',
    fontSize: 16,
    alignSelf: 'center',
  },
  radio: {
    flexDirection: 'column',
    marginLeft: 0,
    justifyContent: 'center',
    fontFamily: 'Montserrat-Regular',
    color: '#666',
    backgroundColor: '#f0f0f0',
    borderRadius: 0,
    marginRight: 10,
  },
  radioList: {
    flexDirection: 'row',
    flex: 1,
  },
  radioText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    textAlign: 'center',
  },

  col: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  add: {
    flex: 1,
    flexDirection: 'row',
  },
  addText: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 12,
  },
  addBtn: {
    color: '#333',
    backgroundColor: '#f0f0f0',
    borderRadius: 0,
  },
  addIcon: {
    color: '#666',
    fontSize: 12,
  },


  typeBg: {
    flex: 1,
  },
  typeBtn: {
    flex: 1,
    borderWidth: 0,
    marginHorizontal: 5,
  },
  typeBtnText: {
    fontFamily: 'Montserrat-Regular',
    color: '#999',
    fontSize: 12,
  },

  typeBtnActive: {
    backgroundColor: '#39405B',
    paddingVertical: 12,
  },
  typeBtnInactive: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 12,
  },
  typeActiveText: {
    color: '#FFF',
    fontFamily: 'Montserrat-SemiBold',
  },
  typeInactiveText: {
    color: '#999',
    fontFamily: 'Montserrat-Regular',
  },

  priceDropdown: {
    flex: 1,
  },
  priceSelect: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
  },
  pricePicker: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingLeft: 10,
    fontFamily: 'Montserrat-Regular',
    borderRadius: 0,
    marginHorizontal: 5,
  },
  picker: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingLeft: 10,
    paddingVertical: 0,
    fontFamily: 'Montserrat-Regular',
    borderRadius: 0,
    marginHorizontal: 20,
    marginBottom: 10,
  },

}