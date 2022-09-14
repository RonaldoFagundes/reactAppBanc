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












    cardContainer:{       
        height:400,       
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(0, 19, 58, 1)'
    },



    CardButton:{
      width:180,
      height:50,
      marginTop:5,
      backgroundColor:'#F92E6A',
      alignItems:'center',
      justifyContent:'center',
      marginBottom:30,
      borderRadius:10
    },

    CardTextButton:{
      fontSize:16,
      color:'white',
      fontWeight:'bold', 
    },


     cardContent:{
      width:300,
      height:180,
      backgroundColor:'rgba(0, 0, 45, 1)',
      paddingTop:14,
      paddingStart:14,
      borderRadius:20,
      borderWidth:2,
      borderColor:'green'    
     },


     cardBancName:{
      fontSize:20,
      color:'#2ecc71',
      fontWeight:'bold', 
     } ,

    
     cardNumber:{
      fontSize:20,
      color:'#2ecc71',
      fontWeight:'bold', 
      textAlign:'center',
      marginTop:14,
      marginBottom:14
     },



     cardInfo:{
      width:274,  
      height:38,
      flexDirection:'row',
      justifyContent:'space-between',
      
     },




     cardMainText:{
      fontSize:18,
      color:'#2ecc71',
      fontWeight:'bold', 
     },

     cardInfoText:{
      fontSize:14,
      color:'#2ecc71',
      fontWeight:'bold', 
     },

     


});