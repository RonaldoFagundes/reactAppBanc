import React, { useState,  useContext } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity

} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import Styles from './Styles';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import firebase from '../../database/firebase'


import { AuthContext } from '../../contexts/auth';




export default function Recebimentos({ navigation, route }) {

  const [showResult, setShowResult] = useState(false);

  const { today } = useContext(AuthContext);
  const { name } = useContext(AuthContext);
  const { conta } = useContext(AuthContext);
  const { id } = useContext(AuthContext);

  const database = firebase.firestore();





  const [recebimentos, setRecebimentos] = useState();
  const [description, setDescription] = useState();

  const [valorInf, setValorInf] = useState("");
  const [descInf, setDescInf] = useState("");

  const [comprovante, setComprovate] = useState({
    data: "",
    desc: "",
    valor: ""
  })







  const addRecebimentos = () => {

    database.collection(id).add({
      data: today,
      desc: description,
      recebimento: recebimentos,
      pagamento: 0,
    })



    setComprovate({
      ...comprovante, data: today,
      comprovante, desc: description,
      comprovante, valor: recebimentos
    });

    setShowResult(true)
    setValorInf("")
    setDescInf("")

  }










  return (


    <LinearGradient

      colors={
        [
          'rgba(0, 0, 25, 1)',
          'rgba(0, 0, 15, 0.9)'
        ]
      }
      style={Styles.body}
    >




      <View style={Styles.header}>

        <Text style={Styles.headerTitle}>Tela de Recebimentos</Text>

      </View>




      <View style={Styles.headerContent}>


        <View style={Styles.headerInfo}>

          <Text style={Styles.headerInfoTitle}>{` user:  ${name} `}</Text>

          <Text style={Styles.headerInfoTitle}>{` conta:  ${conta}`}</Text>

        </View>


        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View>
            <MaterialCommunityIcons
              name="home"
              size={24}
              color="#F92E6A"
            />
          </View>
        </TouchableOpacity>



      </View>



      <View style={Styles.containerPost}>

        <TextInput style={Styles.inputPost}
          placeholder=" valor "  placeholderTextColor="#ffffff"
          type="number"
          value={valorInf}
          onChangeText={(value) => setRecebimentos(value) & setValorInf(parseFloat(value))}
        />




        <TextInput style={Styles.inputPost}
          placeholder=" descrição "  placeholderTextColor="#ffffff"
          type="text"
          value={descInf}
          onChangeText={(value) => setDescription(value) & setDescInf(value)}
        />


        <TouchableOpacity style={Styles.btnPost}
          onPress={addRecebimentos}
        >
          <Text style={Styles.btnTitle} >Lançar</Text>
        </TouchableOpacity>



      </View>


      {showResult ? (


        <LinearGradient

          colors={
            [
              'rgba(0, 0, 45, 0.8)',
              'rgba(0, 0, 45, 0.6)'
            ]
          }
          style={Styles.containerResult}
        >

          <Text style={Styles.containerResultTitle}>
            {` Data :   ${comprovante.data}`}
          </Text>

          <Text style={Styles.containerResultTitle}>
            {` Descrição :  ${comprovante.desc}`}
          </Text>

          <Text style={Styles.containerResultTitle}>
            {` Valor  R$ :   ${comprovante.valor} `}
          </Text>

          <Text style={Styles.containerResultTitle}>
            Lançado com sucesso
          </Text>

        </LinearGradient>
      ) :
        (






          <LinearGradient
            colors={
              [
                'rgba(0, 0, 25, 0.3)',
                'rgba(0, 0, 15, 0.1)'
              ]
            }
            style={Styles.containerDefault}
          >
          </LinearGradient>
        )


      }




    </LinearGradient>


  );

};