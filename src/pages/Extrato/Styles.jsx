import {StyleSheet , StatusBar} from 'react-native';


export default StyleSheet.create({

    body:{
        flex: 1,
        paddingTop: StatusBar.currentHeight,       
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




    relContainer:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        marginTop:30,
        marginBottom:200,
       },



   relContent:{
     marginBottom:10
   },
   

  

   relTextDescription:{
    fontSize:14,
    color:'#2ecc71',
    fontWeight:'bold',
   },
   

    
  flatContent:{
     width:300,
     height:120,
     paddingTop:10,
     paddingStart:14,
     marginTop:10,
     marginBottom:10,
     borderRadius:30,
     borderWidth:2,
     borderColor:'white',
     backgroundColor:'rgba(0, 40, 45, 0.8)'
  },


  
  pdfContent:{
     width:200,
     height:40,
     flexDirection:'row',
     justifyContent:'space-between'
  }


   
    

});