import React ,{ useState, useEffect, useContext }from  'react' ;

import {
  View,
  Text,
  TextInput,
  TouchableOpacity
  
} from 'react-native';


import Styles from './Styles';

import {MaterialCommunityIcons } from '@expo/vector-icons';

import firebase from '../../database/firebase'


import {AuthContext} from '../../contexts/auth';




export default function Recebimentos({navigation, route}) { 
    
const [showResult, setShowResult] = useState(false);

const { today}   = useContext(AuthContext);
const { name  }  = useContext(AuthContext);
const { conta }  = useContext(AuthContext);

const database = firebase.firestore();





const [recebimentos, setRecebimentos]=useState();
const [description, setDescription]=useState();


const [comprovante , setComprovate] = useState({
  data:"",
  desc:"",
  valor:""
})




 


 const addRecebimentos = () => {

  // database.collection(route.params.idUser).add({ 
     database.collection("recebimentos").add({   
      data:today,    
      conta:conta,   
      desc:description,
      valor:recebimentos,
 }) 
 
 setComprovate({
  ...comprovante, data:today ,
     comprovante, desc:description ,
     comprovante, valor:recebimentos
 } );

 alert("conta Nº "+conta+" valor "+recebimentos+" cadastrada com sucesso! ") 



 //navigation.navigate("Comprovante",{idUser:route.params.idUser})

 
}










  return( 

    <View style={Styles.body}>

   


    <View style={Styles.header}>
       
       <Text style={Styles.headerTitle}>Tela de Recebimentos</Text>

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
         onChangeText={(valor)=>setRecebimentos(valor)}        
       /> 
   



       <TextInput style={Styles.inputPost}
         placeholder=" descrição "
         type="text"
         onChangeText={(valor)=>setDescription(valor)}        
       /> 
  

         <TouchableOpacity  style={Styles.btnPost}          
            onPress={addRecebimentos}
         >
            <Text >Lançar</Text>
         </TouchableOpacity>



   </View>
    

   {showResult  ? ( 

   <View style={Styles.containerResult}>

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

    </View>          
  ) : 
  (
   <View style={Styles.containerDefault}></View>
  )


}

        
  </View>




  );

};