import React ,{ useState, useEffect,  useContext }from  'react' ;

import {
  View,
  Text,
  TextInput,
  TouchableOpacity
  
} from 'react-native';

import {MaterialCommunityIcons } from '@expo/vector-icons';

import Styles from './Styles';


import firebase from '../../database/firebase'


import {AuthContext} from '../../contexts/auth';




export default function Pagamentos({navigation, route}) { 

    
const [showResult, setShowResult] = useState(false);

const { today}   = useContext(AuthContext);
const { name  }  = useContext(AuthContext);
const { conta }  = useContext(AuthContext);
const { id }  = useContext(AuthContext);

const database = firebase.firestore();




const [pagamentos, setPagamentos]=useState();
const [description, setDescription]=useState();

const [valorInf , setValorInf ] =useState ("");
const [descInf , setDescInf ] =useState ("");



 const [comprovante , setComprovate] = useState({
     data:"" ,
     desc:"",
     valor:""
})  





const addPagamentos = () => {
    
  database.collection(id).add({
    data:today,  
    desc:description,    
    pagamento:pagamentos,
    recebimento:0 
   })

   /*  database.collection("pagamentos").add({
    data:today,  
    conta:conta,
    desc:description,    
    valor:pagamentos, 
   }) */ 

/*       usar esse 
   database.collection("users").doc(user_id).set({
      pagamentos:{
        data:today,  
        conta:conta,
        desc:description,    
        valor:pagamentos, 
      },
 }) 
 */





     setComprovate({
      ...comprovante, data:today ,
         comprovante, desc:description ,
         comprovante, valor:pagamentos
     } );

     setShowResult(true)
     setValorInf("")   
     setDescInf("")
    alert("desc "+description+" pagamento valor "+pagamentos+" cadastrada com sucesso! ") 
   //navigation.navigate("Comprovante",{idUser:route.params.idUser})
   
   //{saldo.toLocaleString("pt-BR",{ style : "currency", currency : "BRL"})}
 } 











  return( 


    <View style={Styles.body}>

   


     <View style={Styles.header}>
        
        <Text style={Styles.headerTitle}>Tela de Pagamentos</Text>     

  
     </View>

      


    <View style={Styles.headerContent}>


     <View style={Styles.headerInfo}>       

       <Text style={Styles.headerInfoTitle}>{` user:  ${name} `}</Text>

       <Text style={Styles.headerInfoTitle}>{` conta:  ${conta}`}</Text>
       
     </View> 
     
      
      <TouchableOpacity onPress={()=> navigation.navigate("Home")}>
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
          placeholder=" valor "
          type="number"
          value={valorInf}
          onChangeText={(value)=>setPagamentos(value) & setValorInf( parseFloat(value))} 
          // onChangeText={(valor)=> setInfo.pagar(valor)}
          //value={pagamentos}
        /> 
    



        <TextInput style={Styles.inputPost}
          placeholder=" descrição "
          type="text"
          value={descInf}
          onChangeText={(value)=>setDescription(value) & setDescInf(value) }
          //onChangeText={(valor)=> setInfo.description(valor)}
          //value={description}
        /> 
   

          <TouchableOpacity  style={Styles.btnPost}          
             onPress={addPagamentos}
          >
             <Text >Lançar</Text>
          </TouchableOpacity>



    </View>
     

    {showResult  ? ( 

    <View style={Styles.containerResult}>

            <Text style={Styles.containerResultTitle}>
              {` Data :    ${comprovante.data}`}
            </Text>

            <Text style={Styles.containerResultTitle}>
              {` Descrição :   ${comprovante.desc}`}
            </Text>

            <Text style={Styles.containerResultTitle}>
              {` Valor  R$ :    ${comprovante.valor} `}
            </Text>  

            <Text style={Styles.containerResultTitle}>
                    Lançado com sucesso
            </Text>  

     </View>          
   ) : 
   (
    <View style={Styles.containerDefault}></View>
   )


}

         
   </View>

  );

};