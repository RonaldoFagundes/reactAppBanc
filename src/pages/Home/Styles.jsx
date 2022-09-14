import {StyleSheet , StatusBar} from 'react-native';


export default StyleSheet.create({  

   
body:{
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor:'rgba(0,0, 50, 0.97)',
   
},





headerContent:{
  // backgroundColor:'rgba(0, 61, 115, 1)',
   height:140,
   //backgroundColor:'rgba(0, 20, 65, 1)',
   backgroundColor:'rgba(0, 74, 80, 0.6)',
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'space-between',
   padding:10,
   
 },


headerTitle:{
    color:"#bdbdbd"
},





mainContainer:{
    //flex: 1,
    height:440,
   //backgroundColor:'rgba(0,63, 85, 0.97)',
   backgroundColor:'rgba(0,0, 50, 0.97)',
   
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'

   },













balanceContainer:{
    width:340,
    height:120,
    backgroundColor:'rgba(0,0, 50, 0.97)',
    flexDirection:'column',
    //padding:20,
    //borderRadius:20,

    justifyContent:'space-between',
    paddingStart:20,
    paddingEnd:18,
    paddingTop:22,
    paddingBottom:22,

    marginTop:-184,
    marginStart:14,
    marginEnd:14,

    borderRadius:10,    
    zIndex:99
 },



 
 balanceContent:{
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-between',
 },


 balanceItem:{
    width:100,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    
 },

 balanceItemTitle:{
    fontSize:20,
    color:'#DADADA',
},


 /* balanceCurrencySymbol:{
     color:'#DADADA',
     marginRight:6
 }, */



 balanceValue:{
     fontSize:22,
     color:'#2ecc71'
 },




 balanceHiden:{
  width:80,
  height:30,
  marginTop:5,
  backgroundColor:'#F92E6A',
  alignItems:'center',
  justifyContent:'center',
  borderRadius:8
  
},

/* balanceHidenText:{
    fontSize:16,
    color:'black',
    fontWeight:'bold',
}, */





 actionContent:{
    width:360,
   // backgroundColor:'rgba(37,73,77, 0.96)',    
    backgroundColor:'rgba(0, 20, 65, 1)',  
    height:124,
    paddingTop:20,
    marginTop:44,
    borderRadius:10
   // paddingEnd:14,
   // paddingStart:14,

    
  },
  
  
  actionButton:{
      alignItems:'center',
      marginLeft:32
  },
  
  actionAreaButton:{
     //backgroundColor:'rgba(0,06,77, 0.96)',
     backgroundColor:'#F92E6A',
     height:60,
     width:60,
     borderRadius:30,
     justifyContent:'center',
     alignItems:'center'
  },
  
  
  actionLabelButton:{
      marginTop:4,
      textAlign:'center',
      fontWeight:'bold',
      color:'rgba(42,233,247, 0.96)',
  },



  
  

  modalContent:{
      flex:1,
     // backgroundColor:'rgba(0,0,0, 0.5)',

      backgroundColor:'black',

      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'  
  },
  modalTextLabel:{
    fontSize:30,
    fontWeight:'bold',
    color:"#F92E6A",
    marginBottom:50
},
  modalTextConfirm:{
      fontSize:18,
      fontWeight:'bold',
      color:'rgba(42,233,247, 0.96)',
  },
  modalTextBtn:{
    fontSize:12,
    fontWeight:'bold',
    color:'rgba(42,233,247, 0.96)',
  },

  modalInput:{
    width:200,
    height:50,
    marginTop:10,
    padding:10,
    borderBottomWidth:1,
    borderBottomColor:"#F92E6A",
  //  marginLeft:'auto',
 //   marginRight:'auto',
    color:"#bdbdbd"
  },
  modalBtn:{
    width:200,
    height:50,
    backgroundColor:'#F92E6A',
    justifyContent:'center',
    alignItems:'center',     
    borderRadius:50,
    marginTop:30
  }
});