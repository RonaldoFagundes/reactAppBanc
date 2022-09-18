import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import firebase from '../../database/firebase';

import Styles from './Styles'

import { LinearGradient } from 'expo-linear-gradient';





export default function NewUser({ navigation }) {






  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorRegister, setErrorRegister] = useState("");



  const db = firebase.firestore();


  const cadastrar = () => {

    if (password.length >= 8) {

      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredencial) => {
          let user = userCredencial.user;
          //navigation.navigate("Home",{idUser:user.uid});
          navigation.navigate("Home");
        })
        .catch((error) => {
          setErrorRegister(true);
          let errorCode = error.code;
          let errorMessage = error.message;
        });


    } else {
      setEmail("");
      setPassword("");
      Alert.alert(" Erro ", "cadastre uma senha com no minimo 8 caracteres")
    }



  };





  return (

    <LinearGradient

      colors={
        [
          'rgba(0, 0, 25, 1)',
          'rgba(0, 0, 22, 0.8)'
        ]
      }
      style={Styles.container}
    >


      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={Styles.container}
      >

        <Text style={Styles.title}>Easy Banc App</Text>

        <TextInput
          style={Styles.input}
          placeholder=" enter with a email"
          type="text"
          onChangeText={(valor) => setEmail(valor)}
          value={email}
        />

        <TextInput
          style={Styles.input}
          secureTextEntry={true}
          placeholder=" register a password"
          type="text"

          onChangeText={(valor) => setPassword(valor)
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
            onPress={() => navigation.navigate("Login")}
          >
            {` Login... `}
          </Text>

        </Text>
        <View style={{ height: 100 }}></View>


      </KeyboardAvoidingView>

    </LinearGradient>

  );



};



