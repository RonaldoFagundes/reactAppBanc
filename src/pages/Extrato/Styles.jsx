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


    relContainer:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(0, 0, 45, 1)'
    },


   relContent:{
     marginBottom:50
   },
   

   relTextLabel:{
    fontSize:20,
    color:'#2ecc71',
    fontWeight:'bold',
    textAlign:'center'
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
     flexDirection:'row',
     justifyContent:'space-between'

  }


   


    

});