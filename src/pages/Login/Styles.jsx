import {StyleSheet , StatusBar} from 'react-native';


export default StyleSheet.create({  

  container:{
    flex:1,
    backgroundColor:'rgba(0, 0, 45, 1)',
    alignItems:'center',
    justifyContent:'center',
    //paddingTop: Platform.OS === "ios"? 0 : 50,
  },


  title:{
    fontSize:48,
    color:"#F92E6A",
    fontWeight:'bold',
    marginBottom:10
  },
   
        
   


    input:{
            width:300,
            height:50,
            marginTop:10,
            padding:10,
            borderBottomWidth:1,
            borderBottomColor:"#F92E6A",
            marginLeft:'auto',
            marginRight:'auto',
            color:"#bdbdbd"
        },
        
        
    btnLogin:{
            width:200,
            height:50,
            backgroundColor:'#F92E6A',
            justifyContent:'center',
            alignItems:'center',     
            borderRadius:50,
            marginTop:30
        },

    textLogin:{    
          color:"#ffffff",   
        },


    textRegistration:{
           marginTop:20,
           color:'#bdbdbd' 
        },


    linkSubscribe:{
          color:'#1877f2',
          fontSize:16
        },

    contentAlert:{
          marginTop:20,
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center'
      
        },


    warningAlert:{
          paddingLeft:10,
          color:'#bdbdbd',
          fontSize:16
        } 


      
     




});