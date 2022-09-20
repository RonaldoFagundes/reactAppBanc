import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';



import { MaterialCommunityIcons } from '@expo/vector-icons';

import firebase from '../../database/firebase';

import Styles from './Styles';

import { LinearGradient } from 'expo-linear-gradient';





export default function Login({ navigation }) {




  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  const db = firebase.firestore();



  useEffect(() => {

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // navigation.navigate("Home",{idUser:user.uid});        
        navigation.navigate("Home");
      }

    });


  }, []);





  const logar = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredencial) => {
        // let user = userCredencial.user;
        // navigation.navigate("Home",{idUser:user.uid});
        navigation.navigate("Home");
        setEmail("");
        setPassword("")
        //navigation.navigate("Home",{idUser:email});
      })
      .catch((error) => {
        setErrorLogin(true);
        let errorCode = error.code;
        let errorMessage = error.message;
      });

  };








  return (

    <LinearGradient

      colors={
        [
          'rgba(0, 0, 45, 1)',
          'rgba(0, 0, 45, 0.8)'
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

          placeholder=" enter with your email" placeholderTextColor="#ffffff"
          type="text"
          onChangeText={(valor) => setEmail(valor)}
          value={email}
        />

        <TextInput
          style={Styles.input}
          secureTextEntry={true}
          placeholder=" enter your password" placeholderTextColor="#ffffff"
          type="text"
          onChangeText={(valor) => setPassword(valor)}
          value={password}
        />

        {
          errorLogin === true
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
              <Text style={Styles.textLogin}>Login</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity
              style={Styles.btnLogin}
              onPress={logar}
            >
              <Text style={Styles.textLogin}>Login</Text>
            </TouchableOpacity>
        }

        <Text style={Styles.textRegistration}>
          {` don't have a registration ?  `}

          <Text style={Styles.linkSubscribe}
            onPress={() => navigation.navigate("NewUser")}
          >
            {` subscribe now... `}
          </Text>

        </Text>
        <View style={{ height: 100 }}></View>



      </KeyboardAvoidingView>

    </LinearGradient>
  )

};


