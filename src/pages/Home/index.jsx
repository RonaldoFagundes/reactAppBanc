import React, { useState, useEffect, useContext, } from 'react';



import {
   ScrollView,
   View,
   Text,
   TextInput,
   TouchableOpacity,
   Modal,
   Alert
} from 'react-native';


import { LinearGradient } from 'expo-linear-gradient';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import Styles from './Styles';

import firebase from '../../database/firebase';

import { AuthContext } from '../../contexts/auth';





export default function Home({ navigation, route }) {


   const data = new Date();
   const day = data.getDate().toString().padStart(2, "0");
   const month = (data.getMonth() + 1).toString().padStart(2, "0");
   const year = data.getFullYear();
   const todayData = day + "/" + month + "/" + year;



   const db = firebase.firestore();

   const [modal, setModal] = useState(true);

   const [showValue, setShowValue] = useState(false);

   const [user, setUser] = useState("");

   const [confirm, setConfirm] = useState("Cadastre");
   const [cadUser, setCadUser] = useState(false);

   const [userName, setUserName] = useState();
   const [userConta, setUserConta] = useState();

   const [newCont, setNewCont] = useState("");


   const [receb, setReceb] = useState([]);
   const [pgto, setPgto] = useState([]);

   const [valores, setValores] = useState([]);


   const { today, setToday } = useContext(AuthContext);
   const { id, setId } = useContext(AuthContext);
   const { name, setName } = useContext(AuthContext);
   const { conta, setConta } = useContext(AuthContext);

   const { relRec, setRelRec } = useContext(AuthContext);
   const { relPgto, setRelPgto } = useContext(AuthContext);

   const { relValores, setRelValores } = useContext(AuthContext);



   const user_id = firebase.auth().currentUser.email;






   const verificarConta = () => {

      db.collection(user_id).doc("conta").get().then((snapshot) => {

         if (snapshot.data() != undefined) {

            setModal(false);
            setName(snapshot.data().name);
            setConta(snapshot.data().number);
            setUserName(snapshot.data().name);
            setUserConta(snapshot.data().number);
         } else {
            setModal(true);
         }
      })

   }








   const verificaSaldo = () => {

      db.collection(user_id).onSnapshot((query) => {
         const recebeList = []
         query.forEach((doc) => {
            recebeList.push({ ...doc.data(), id: doc.id })
         });
         setReceb(recebeList)
         setRelRec(recebeList)
      })


      db.collection(user_id).onSnapshot((query) => {
         const pgtoList = []
         query.forEach((doc) => {
            pgtoList.push({ ...doc.data(), id: doc.id })
         });
         setPgto(pgtoList)
         setRelPgto(pgtoList)
      })



      db.collection(user_id).onSnapshot((query) => {
         const valoresList = []
         query.forEach((doc) => {
            valoresList.push({ ...doc.data(), id: doc.id })
         });
         setValores(valoresList)
         setRelValores(valoresList)
      })

   }




   useEffect(() => {

      verificarConta();
      verificaSaldo();

   }, [],);




   const recebimentos = valores.reduce((soma, valor) => soma + parseFloat(valor.recebimento), 0)

   const pagamentos = valores.reduce((soma, valor) => soma + parseFloat(valor.pagamento), 0)

   const saldo = recebimentos - pagamentos;








   const signOut = () => {
      firebase.auth().signOut().then(() => {
         navigation.navigate("Login")
      }).catch((error) => {
         Alert.alert("erro na funçao signOut")
      });
   }










   const openCont = () => {

      if (user === "") {

         Alert.alert(" Alerta ", "informe um usuario");

      } else {

         if (confirm === "Cadastre") {

            setCadUser(true)
            setConfirm("Solicitar")

            const min = 100;
            const max = 999;

            setNewCont(Math.floor(Math.random() * (max - min)))
         }
      }

      if (confirm === "Solicitar") {


         db.collection(user_id).doc("conta").set({
            data: todayData,
            desc: ' abertura conta nº ' + newCont,
            name: user,
            number: newCont,
            pagamento: 0,
            recebimento: 0
         })

         setModal(false);


         db.collection(user_id).doc("conta").get().then((snapshot) => {
            setName(snapshot.data().name)
            setConta(snapshot.data().number)
            setUserName(snapshot.data().name)
            setUserConta(snapshot.data().number)
         }).catch((e) => console.log(e))


      }


   }















   return (

      <LinearGradient

         colors={
            [
               'rgba(0,0, 50, 0.97)',
               'rgba(0, 0, 10, 0.92)',
            ]
         }
         style={Styles.body}
      >



         <LinearGradient
            colors={
               [
                  'rgba(0, 74, 80, 0.6)',
                  'rgba(0, 24, 60, 0.9)'
               ]
            }
            style={Styles.headerContent}
         >

            <TouchableOpacity >
               <View>
                  <MaterialCommunityIcons
                     name="account"
                     size={24}
                     color="#bdbdbd"
                  />
               </View>

               <Text style={Styles.headerTitle}>{userName}</Text>

            </TouchableOpacity>


            <TouchableOpacity
               onPress={signOut}
            >
               <View>
                  <MaterialCommunityIcons
                     name="logout"
                     size={24}
                     color="#bdbdbd"
                  />
               </View>

               <Text style={Styles.headerTitle} >Log out</Text>

            </TouchableOpacity>

         </LinearGradient>





         <LinearGradient
            colors={
               [
                  'rgba(rgba(20,20, 50, 0.97)',
                  'rgba(rgba(05, 10, 20, 0.6)'
               ]
            }
            style={Styles.mainContainer}
         >



            <LinearGradient
               colors={
                  [
                     'rgba(rgba(rgba(0,0, 50, 0.97)',
                     'rgba(rgba(rgba(0,0, 30, 0.98)'
                  ]
               }
               style={Styles.balanceContainer}
            >
               <View style={Styles.balanceContent} >

                  <Text style={Styles.balanceItemTitle}>Conta</Text>

                  <View style={Styles.balanceItem}>
                     <Text style={Styles.balanceValue}>{`Nº ${userConta}`}</Text>
                  </View>

               </View>


               <View style={Styles.balanceContent}>

                  <Text style={Styles.balanceItemTitle}>Saldo</Text>

                  <View style={Styles.balanceItem}>
                     <TouchableOpacity onPress={() => setShowValue(!showValue)}>
                        {showValue
                           ? (
                              <Text style={Styles.balanceValue}>
                                 {saldo.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                              </Text>
                           )
                           : (
                              <View style={Styles.balanceHiden}>

                                 <MaterialCommunityIcons
                                    name="eye"
                                    size={22}
                                    color="#000000"
                                 />

                              </View>
                           )
                        }
                     </TouchableOpacity>

                  </View>

               </View>

            </LinearGradient>



            <View>

               <ScrollView style={Styles.actionContent}
                  horizontal={true} showsHorizontalScrollIndicator={false}>

                  <TouchableOpacity style={Styles.actionButton}
                     onPress={() =>
                        navigation.navigate("Pagamentos") & setToday(todayData) & setId(user_id)
                     }
                  >

                     <View style={Styles.actionAreaButton}>
                        <MaterialCommunityIcons
                           name="barcode"
                           size={24}
                           color="#000000"
                        />
                     </View>
                     <Text style={Styles.actionLabelButton}>Pagamentos</Text>

                  </TouchableOpacity>


                  <TouchableOpacity style={Styles.actionButton}
                     onPress={() =>
                        navigation.navigate("Recebimentos") & setToday(todayData) & setId(user_id)
                     }
                  >
                     <View style={Styles.actionAreaButton}>
                        <MaterialCommunityIcons
                           name="cash"
                           size={24}
                           color="#000000"
                        />
                     </View>
                     <Text style={Styles.actionLabelButton}>Recebimentos</Text>

                  </TouchableOpacity>



                  <TouchableOpacity style={Styles.actionButton}
                     onPress={() =>
                        navigation.navigate("Extrato") & setToday(todayData)
                     }
                  >
                     <View style={Styles.actionAreaButton}>
                        <MaterialCommunityIcons
                           name="file-check"
                           size={24}
                           color="#000000"
                        />
                     </View>
                     <Text style={Styles.actionLabelButton}>Extrato</Text>

                  </TouchableOpacity>


                  <TouchableOpacity style={Styles.actionButton}
                     onPress={() =>
                        navigation.navigate("Cartao") & setToday(todayData)
                     }
                  >

                     <View style={Styles.actionAreaButton}>
                        <MaterialCommunityIcons
                           name="credit-card"
                           size={24}
                           color="#000000"
                        />
                     </View>
                     <Text style={Styles.actionLabelButton}>Credit-card</Text>

                  </TouchableOpacity>




                  <TouchableOpacity style={Styles.actionButton}
                     onPress={() => navigation.navigate("Investimentos")}
                  >
                     <View style={Styles.actionAreaButton}>
                        <MaterialCommunityIcons
                           name="cash"
                           size={24}
                           color="#000000"
                        />
                     </View>
                     <Text style={Styles.actionLabelButton}>Investimentos</Text>

                  </TouchableOpacity>


               </ScrollView>


            </View>






            <Modal
               animationType='fade'
               visible={modal}
            >


               <View style={Styles.modalContent}>

                  <Text style={Styles.modalTextLabel}>Abra sua Conta!</Text>

                  <Text style={Styles.modalTextConfirm}>
                     {cadUser ? "Solicite sua Conta" : " Cadastre um usuário"}
                  </Text>



                  <TextInput style={Styles.modalInput}
                     placeholder=" digite aqui ... "
                     type="text"
                     onChangeText={(valor) => setUser(valor)}
                     value={user}
                  />




                  <TouchableOpacity style={Styles.modalBtn}
                     onPress={openCont}
                  >
                     <Text style={Styles.modalTextBtn} >{confirm}</Text>
                  </TouchableOpacity>


               </View>


            </Modal>


         </LinearGradient>


      </LinearGradient>
   );

};
