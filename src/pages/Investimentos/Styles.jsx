import {StyleSheet , StatusBar} from 'react-native';


export default StyleSheet.create({

    body:{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor:'rgba(0, 0, 45, 1)'
    },



    header:{
        alignItems:'center',
        justifyContent:'center',
        padding:5,
        marginBottom:15
    },
    
    headerTitle:{
       fontSize:24,
       color:'#2ecc71',
       fontWeight:'bold',
    },

    headerContent:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginBottom:25
    },


    headerInfo:{
      flexDirection:'column',
      padding:5
    },

    headerInfoTitle:{
       fontSize:16,
       color:'#2ecc71',
       fontWeight:'bold',
    },



   simulatorContainer:{
       height:600,
       flexDirection:'column',
       alignItems:'center',
       backgroundColor:'rgba(0, 0, 45, 1)'
     } ,


   simulatorTitle:{
    fontSize:20,
    color:'#2ecc71',
    fontWeight:'bold',
    marginBottom:10
   },


   simulatorInfoTitle:{
      fontSize:12,
      color:'#2ecc71',
      fontWeight:'bold',
      marginBottom:10
     },



  simulatorPrice:{
      width:240,
      height:50,
      alignItems:'center',
      justifyContent:'center',

      backgroundColor:'#F92E6A',
      color:'#2ecc71',
      borderRadius:10,
      borderWidth:1,
      marginTop:10,
      marginBottom:10
  },


  simulatorPriceTitle:{
     textAlign:'center',
     color:"white",
     fontSize:16,
     fontWeight:'bold', 
     marginBottom:10
  },
  
  simulatorCardsText:{
   fontSize:18,
   color:'#2ecc71',
   fontWeight:'bold',
   marginTop:10,
   marginBottom:20
  },

  simulatorCardsTitle:{
    fontSize:16,
    color:'#2ecc71',
    fontWeight:'bold',
    marginBottom:10
   },

   simulatorCardsInfo:{
      fontSize:14,
      color:'#F92E6A',
      fontWeight:'bold',
      marginBottom:10
     },


  simulatorContentCards:{
    width:340,
    height:100,
    flexDirection :'row' ,
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:10,
    marginBottom:20,
    backgroundColor:'rgba(0, 0, 45, 1)'
 },




  simulatorCards:{
     width:160,
     height:80,
     alignItems:'center',
     justifyContent:'center',
    // marginBottom:20,
    // backgroundColor:'green',
     backgroundColor:'rgba(0, 70, 45, 1)',
     borderRadius:10,
     borderWidth:1,
  },




 btnNew:{
   width:120,
   height:40,
   marginTop:5,
   backgroundColor:'#F92E6A',
   alignItems:'center',
   justifyContent:'center',
   borderRadius:8

 },

 textBtnNew:{
   fontSize:16,
    color:'white',
    fontWeight:'bold',
 },
  


   containerModal:{
      flex:1,
      flexDirection:'column',  
      backgroundColor:'rgba(0, 0, 45, 1)',
      alignItems:'center',
      justifyContent:'center'
   },

  resultProdOne:{
   width:320,
   height:240,
   alignItems:'center',
   justifyContent:'center',
   //backgroundColor:'rgba(0, 80, 45, 1)',
   backgroundColor:'rgba(30, 80, 45,0.1)',
   borderRadius:10,
   borderWidth:2,
   marginBottom:20
  },

  resultProdTwo:{
   width:320,
   height:240,
   alignItems:'center',
   justifyContent:'center',
   //backgroundColor:'rgba(60, 80, 45, 1)',
   backgroundColor:'rgba(30, 80, 45,0.1)',
   borderRadius:10,
   borderWidth:2,
   marginBottom:20
  },

  resultProdThree:{
   width:320,
   height:240,
   alignItems:'center',
   justifyContent:'center',
   //backgroundColor:'rgba(20, 80, 95, 0.9)',
   backgroundColor:'rgba(30, 80, 45,0.1)',
   borderRadius:10,
   borderWidth:2,
   marginBottom:20
  },

  resultProdFour:{
   width:320,
   height:240,
   alignItems:'center',
   justifyContent:'center',
   backgroundColor:'rgba(30, 80, 45,0.1)',
   borderRadius:10,
   borderWidth:2,
   marginBottom:20
  },

   resultTxt:{
      fontSize:18,
      color:'#2ecc71',
      fontWeight:'bold',
      marginBottom:10       
   }
});