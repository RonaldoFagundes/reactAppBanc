import { StyleSheet, StatusBar } from 'react-native';


export default StyleSheet.create({

  body: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },

  header: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginBottom: 15
  },

  headerTitle: {
    fontSize: 24,
    color: '#2ecc71',
    fontWeight: 'bold',
  },

  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25
  },


  headerInfo: {
    flexDirection: 'column',
    padding: 5
  },

  headerInfoTitle: {
    fontSize: 16,
    color: '#2ecc71',
    fontWeight: 'bold',
  },






  containerPost: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 25
  },


  inputPost: {
    width: 300,
    height: 50,
    marginTop: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F92E6A",
    marginLeft: 'auto',
    marginRight: 'auto',
    color: "#bdbdbd"
  },


  btnPost: {
    width: 200,
    height: 50,
    backgroundColor: '#F92E6A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 30
  },

  btnTitle: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
  },

  containerDefault: {
    height: 120,
  },



  containerResult: {
    height: 120,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#F92E6A",
  },


  containerResultTitle: {
    fontSize: 18,
    color: '#2ecc71',
    fontWeight: 'bold',

  }


});