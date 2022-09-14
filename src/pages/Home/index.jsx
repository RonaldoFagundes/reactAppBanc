import React ,{ useState, useEffect, useContext, }from  'react' ;



import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,  
  Modal 
} from 'react-native';




import {MaterialCommunityIcons } from '@expo/vector-icons';

import Styles  from './Styles';

import firebase from '../../database/firebase';

import {AuthContext} from '../../contexts/auth';





export default function Home({navigation, route}) {   


    const data = new Date();
    const day = data.getDate().toString().padStart(2,"0");
    const month = (data.getMonth()+ 1).toString().padStart(2,"0");
    const year = data.getFullYear();
    const todayData = day+"/"+month+"/"+year; 



    const db = firebase.firestore(); 

    const [modal,setModal] = useState(true);

    const [showValue, setShowValue] = useState(false);

    const [user, setUser] = useState ("");   


    const [confirm,setConfirm] = useState("Cadastre");     
    const [cadUser,setCadUser]  = useState(false);      
    

    const [userName, setUserName] = useState();
    const [userConta, setUserConta] = useState();

    const [newCont, setNewCont] = useState("");
   

    const [receb , setReceb] = useState([]);
    const [pgto , setPgto] = useState([]);



    const {today,setToday} = useContext (AuthContext);
    const {name,setName} = useContext (AuthContext);
    const {conta,setConta} = useContext (AuthContext); 
    const {relRec,setRelRec} = useContext (AuthContext); 
    const {relPgto,setRelPgto} = useContext (AuthContext);


 
     
    //const user_id = firebase.auth().currentUser.uid;

   //const user = await firestore().collection('Users').doc('ABC').get();
    
 
     
    



     useEffect(()=>{
         
             /* db.collection(route.params.idUser).onSnapshot((query)=>{
               const userList =[]
               query.forEach((doc) => {
                    userList.push({...doc.data(), id: doc.id}) 
                 });
                 setInfo(userList)                 
                }) */
                  
                                
                /* db.collection('users').onSnapshot((query)=>{
                  const userList =[]   
                  query.forEach((doc) => {
                       userList.push({...doc.data(), id: doc.id}) 
                    });   
                    setInfo(userList)               
                 })  */


                  db.collection("users").doc("dados").get().then((snapshot) => {
                
                    // console.log(snapshot.data().name)
                    // console.log(snapshot.data().conta)                   

                       if (snapshot.data().conta === undefined){                             
                            setModal(true)
                          }else{
                             setModal(false)
                             setName(snapshot.data().name)                    
                             setConta(snapshot.data().conta)
                             setUserName(snapshot.data().name) 
                             setUserConta(snapshot.data().conta)
                            }   
                         }).catch((e) => console.log(e))

      



                   db.collection('recebimentos').onSnapshot((query)=>{
                     const recebeList =[]
      
                     query.forEach((doc) => {
                          recebeList.push({...doc.data(), id: doc.id}) 
                       });
      
                       setReceb(recebeList)
                       setRelRec(recebeList)
                      })
              




                     db.collection('pagamentos').onSnapshot((query)=>{
                        const pgtoList =[]
         
                        query.forEach((doc) => {
                             pgtoList.push({...doc.data(), id: doc.id}) 
                          });
         
                          setPgto(pgtoList)
                          setRelPgto(pgtoList)
                         }) 



              
                     }, [] , );



              
           
            /*   
               let nm = ""
               let cnt = ""  
           
               const dado = info.map(function(item , x , y){          
                 const  nm =    item.name 
                  const  cnt =   item.conta  
                    
                 setName(nm)
                  setConta(cnt)
                   setCnto(cnt)
                    setModal(false)  
 
                   
              })   */ 
            
             






    const recebimentos = receb.reduce((soma , recebimento) => soma + parseFloat(recebimento.valor),0)

    const pagamentos = pgto.reduce((soma , pagamento) => soma + parseFloat(pagamento.
      valor),0)
        
    const saldo = recebimentos - pagamentos ;      

    

     //const resposta = " recebimentos "+recebimentos+" pagamentos "+pagamentos+" saldo "+saldo 
     //console.log(resposta)


     








  const signOut =()=>{
     firebase.auth().signOut().then(()=>{
          navigation.navigate("Login")
     }).catch((error)=>{
          alert("erro na funça signOut")    
     });
   }
 

 
      






   const openCont =()=>{
    
             if (user === ""){

                  alert ("informe um usuario");               

               }else{
                   
                   if(confirm === "Cadastre" ){
                     
                     setCadUser(true)
                     setConfirm("Solicitar")

                     const min = 100 ;
                     const max = 999;
                  
                     //const newConta = Math.floor(Math.random()*(max - min + 1)) + min 
                     setNewCont(  Math.floor(Math.random()*(max - min )) ) 
                       }

                   }                  
      
                   if (confirm==="Solicitar"){
                     
                     
                    // setNewCont( 7788 )  
                    // const newConta = Math.floor(Math.random()*(max - min ))  

                                       
                   //db.collection(route.params.idUser).add({   
                  // db.collection("users").add({  

                      db.collection("users").doc("dados").set({
                         name:user,
                         conta:newCont
                      })  

                      alert(" usuario criado : "+user+" conta "+newCont);
                      setModal(false);

                      db.collection("users").doc("dados").get().then((snapshot) => {
                        
                             setName(snapshot.data().name)                    
                             setConta(snapshot.data().conta)
                              setUserName(snapshot.data().name) 
                              setUserConta(snapshot.data().conta)
                               
                             }).catch((e) => console.log(e))
                      }

                 
                  // setModal(false)
              
               } 
 








return( 

 
  <View style={Styles.body}>


    <View style={Styles.headerContent}>

      
      {/* <Text style={Styles.headerTitle}>{route.params.idUser}</Text> */}
  

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

 
    </View>  




   <View style={Styles.mainContainer} >



      <View style={Styles.balanceContainer}>          


          <View style={Styles.balanceContent} >

              <Text style={Styles.balanceItemTitle}>Conta</Text>

              <View style={Styles.balanceItem}>
                  {/* <Text style={Styles.balanceCurrencySymbol}>Nº</Text> */}
                  <Text style={Styles.balanceValue}>{`Nº ${userConta}`}</Text>  
             </View>

         </View>



          <View style={Styles.balanceContent}>

             <Text style={Styles.balanceItemTitle}>Saldo</Text>

             <View style={Styles.balanceItem}>              
               <TouchableOpacity onPress={()=>setShowValue(!showValue)}>
                 {showValue 
                 ? (
                 <Text style={Styles.balanceValue}>                  
                   {saldo.toLocaleString("pt-BR",{ style : "currency", currency : "BRL"})}
                 </Text>
                 )
                 :(
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


       </View> 





   <View>  

    <ScrollView  style={Styles.actionContent} 
      horizontal={true} showsHorizontalScrollIndicator={false}>

        <TouchableOpacity style={Styles.actionButton}          
          // onPress={()=> navigation.navigate("Pagamentos",{idUser:route.params.idUser})}
           onPress={()=> 
            navigation.navigate("Pagamentos") & setToday(todayData)         
               }
         > 

           <View style={Styles.actionAreaButton}>
             <MaterialCommunityIcons 
                 name="barcode"
                 size={24}
                // color="#bdbdbd"
                 color="black"
              />
           </View>                    
            <Text style={Styles.actionLabelButton}>Pagamentos</Text>               

        </TouchableOpacity>


        <TouchableOpacity style={Styles.actionButton}          
         //  onPress={()=> navigation.navigate("Recebimentos",{idUser:route.params.idUser})}
         onPress={()=>
             navigation.navigate("Recebimentos") & setToday(todayData)            
            }      
         > 
           <View style={Styles.actionAreaButton}>
            <MaterialCommunityIcons 
                 name="cash"
                 size={24}
                 color="black"
              />
           </View>                     
          <Text style={Styles.actionLabelButton}>Recebimentos</Text>               

       </TouchableOpacity> 



        <TouchableOpacity  style={Styles.actionButton}         
         //  onPress={()=> navigation.navigate("Extrato",{idUser:route.params.idUser})}
           onPress={()=> 
            navigation.navigate("Extrato") & setToday(todayData) 
         }      
         >  
           <View style={Styles.actionAreaButton}>
            <MaterialCommunityIcons 
                 name="file-check"
                 size={24}
                 color="black"
              />
           </View>                    
          <Text style={Styles.actionLabelButton}>Extrato</Text>               

       </TouchableOpacity> 


       <TouchableOpacity style={Styles.actionButton} 
          onPress={()=>
            navigation.navigate("Cartao") & setToday(todayData)            
           }         
         > 

           <View style={Styles.actionAreaButton}>
            <MaterialCommunityIcons 
                 name="credit-card"
                 size={24}
                 color="black"
              />
           </View>                    
           <Text style={Styles.actionLabelButton}>Credit-card</Text>               

       </TouchableOpacity>




        <TouchableOpacity style={Styles.actionButton}
           onPress={()=> navigation.navigate("Investimentos")}            
              > 
           <View style={Styles.actionAreaButton}>
            <MaterialCommunityIcons 
                 name="cash"
                 size={24}
                 color="black"
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
           {cadUser ? "Solicite sua Conta" :" Cadastre um usuário"}        
        </Text>



        <TextInput  style={Styles.modalInput}         
          placeholder=" digite aqui ... "
          type="text"
          onChangeText={(valor)=>setUser(valor) }
          value={user}
        />




        <TouchableOpacity style={Styles.modalBtn}            
             onPress={openCont} 
          >
           <Text style={Styles.modalTextBtn} >{confirm}</Text>
        </TouchableOpacity>     
       

     </View>


    </Modal>
 
   


  </View>



 </View>

  );
   
};
