import React ,{ useState }from  'react' ;
import {
  View,
  Text, 
  TextInput, 
  TouchableOpacity,
  KeyboardAvoidingView,   
  Platform,
  Alert
} from 'react-native';

import {MaterialCommunityIcons } from '@expo/vector-icons';

import firebase from '../../database/firebase';

import Styles from './Styles'




export default function NewUser({navigation}) {   



 


const [email, setEmail] = useState ("");
const [password, setPassword] = useState ("");
const [errorRegister, setErrorRegister] = useState ("");
const [errorAlert, setErrorAlert] = useState ("");


const db = firebase.firestore();


const cadastrar = ()=>{

    if (password.length >= 8 ){    

   firebase.auth().createUserWithEmailAndPassword(email,password)
  .then((userCredencial)=>{
    let user = userCredencial.user;
    //navigation.navigate("Home",{idUser:user.uid});
    navigation.navigate("Home");
  })
  .catch((error)=>{
    setErrorRegister(true);
    let errorCode = error.code;
    let errorMessage = error.message;
  });   


 }else{
  setErrorAlert(" cadastre uma senha com no minimo 8 caracteres");
  setEmail("");
  setPassword("");
  Alert.alert(" Erro ","cadastre uma senha com no minimo 8 caracteres")
 } 



}; 





return(

  <KeyboardAvoidingView 
  behavior={Platform.OS === "ios" ? "padding" : "height"}
  style={Styles.container}
> 

       <Text style={Styles.title}>Easy Banc App</Text>

        <TextInput 
          style={Styles.input}
          placeholder=" enter with a email"
          type="text"
          onChangeText={(valor)=>setEmail(valor) }
          value={email}
        />

         <TextInput 
          style={Styles.input}
          secureTextEntry={true}
          placeholder=" register a password"          
          type="text"

          onChangeText={(valor)=> setPassword(valor) 
          }
          value={password}
        />
 

           {
          errorRegister === true
          ?
          <View style={Styles.contentAlert}>
              <MaterialCommunityIcons 
                 name="alert-circle"
                 size={24}
                 color="#bdbdbd"
              />
              <Text style={Styles.warningAlert}>invalid email or password</Text>
          </View>            
          :
          <View></View>
        }
        


        {
          email === "" || password === "" 
          ?
          <TouchableOpacity
              disabled={true}
              style={Styles.btnLogin}
          >
            <Text style={Styles.textLogin}>Register</Text>
          </TouchableOpacity>    
          :
          <TouchableOpacity
             style={Styles.btnLogin}
             onPress={cadastrar}
          >
            <Text style={Styles.textLogin}>Register</Text>
          </TouchableOpacity>
        }
         

         <Text style={Styles.textRegistration}>
          {` already register?  `}     

        <Text style={Styles.linkSubscribe}
          onPress={()=> navigation.navigate("Login")}
        >
            {` Login... `}  
        </Text>
           
       </Text>
      <View style={{height:100}}></View>

          

          <Text style={Styles.textRegistration}>{errorAlert}</Text>

 </KeyboardAvoidingView>
);



};


/* const styles = StyleSheet.create ({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    paddingTop: Platform.OS === "ios"? 0 : 50,
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
      color:"#4d5156"
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
     color:'#4d5156' 
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

  }) */
