import React ,{ useState, useEffect,  useContext }from  'react' ;

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

import Styles from './Styles';

import {MaterialCommunityIcons } from '@expo/vector-icons';

import AsyncStorageSales from '@react-native-async-storage/async-storage';

import firebase from '../../database/firebase';

import {AuthContext} from '../../contexts/auth';




export default function Investimentos({navigation, route}) { 

    
const db = firebase.firestore();

const { name  }  = useContext(AuthContext);
const { conta }  = useContext(AuthContext);



const [selic,setSelic] =useState ({
    aa:0 ,
    am:0,
});


const [valorInf , setValorInf ] =useState ("");

const [clearChossed, setClearChossed] = useState();

const [modal,setModal]= useState (false);





const [produtoOne, setProdutoOne] = useState({   
   name:"",  
   txNominal:0,
   txReal:0, 
   valorApli:0,
   bruto:0,
   liquido:0,
   ir:0,
   valorIr:0,
   prazo:0,
   show:false,   
 });


 const [produtoTwo, setProdutoTwo] = useState({
  name:"",  
  txNominal:0,
  txReal:0, 
  valorApli:0,
  bruto:0,
  liquido:0,
  ir:0,
  valorIr:0,
  prazo:0,
  show:false,
 });


 const [produtoThree, setProdutoThree] = useState({
   name:"",   
   txNominal:0,
   txReal:0, 
   valorApli:0,
   bruto:0,
   liquido:0,
   ir:0,
   valorIr:0,
   prazo:0,
   show:false,
 });


 const [produtoFour, setProdutoFour] = useState({
  name:"",
  txNominal:0,
  txReal:0, 
  valorApli:0,
  bruto:0,
  liquido:0,
  ir:0,
  valorIr:0,
  prazo:0,
  show:false,
 });





 useEffect(()=>{
    

  db.collection("investimentos").doc("taxas").get().then((snapshot) => {
  
           setSelic({
              ...selic , aa:(snapshot.data().selic),  
                         am:(snapshot.data().selic)  / 12 / 100 
            });  
          }).catch((e) => console.log(e));



        db.collection("investimentos").doc("produtoOne").get().then((snapshot) => {

          setProdutoOne ({               
             ...produtoOne , name: ( snapshot.data().name ),                             
                             txNominal: ( snapshot.data().taxa ),       
                             txReal: ( (snapshot.data().taxa ) / 100 ),   
                             ir:   ( ( snapshot.data().ir ) / 100 ),     
                             prazo:( snapshot.data().prazo),  
           });        
           }).catch((e) => console.log(e));



           db.collection("investimentos").doc("produtoTwo").get().then((snapshot) => {

            setProdutoTwo ({               
               ...produtoTwo , name: ( snapshot.data().name ),
                               txNominal: ( snapshot.data().taxa ),      
                               txReal: ( (snapshot.data().taxa ) / 100 ), 
                               ir:   ( ( snapshot.data().ir ) / 100 ),    
                               prazo:( snapshot.data().prazo),  
             });        
             }).catch((e) => console.log(e));



             db.collection("investimentos").doc("produtoThree").get().then((snapshot) => {

              setProdutoThree ({               
                 ...produtoThree , name: ( snapshot.data().name ),
                                 txNominal: ( snapshot.data().taxa ),      
                                 txReal: ( (snapshot.data().taxa ) / 100 ),   
                                 ir:   ( ( snapshot.data().ir ) / 100 ),    
                                 prazo:( snapshot.data().prazo),  
               });          
               }).catch((e) => console.log(e))


               db.collection("investimentos").doc("produtoFour").get().then((snapshot) => {

                setProdutoFour ({               
                   ...produtoFour , name: ( snapshot.data().name ),
                                   txNominal: ( snapshot.data().taxa ),  
                                   txReal: ( (snapshot.data().taxa ) / 100 ), 
                                   ir:   ( ( snapshot.data().ir ) / 100 ),   
                                   prazo:( snapshot.data().prazo),  
                 });       
                }).catch((e) => console.log(e))


         }, [] , );






  const clearValores = ()=>{

     switch(clearChossed){

      case produtoOne.name:

         setProdutoOne({
          ...produtoOne ,
               valorApli : (0),
               bruto : (0),
               liquido : (0), 
               valorIr : (0),  
               show:(false)        
           });            
                           
        
          setProdutoTwo({
            ...produtoTwo , 
               valorApli : (0),
               bruto : (0),
               liquido : (0), 
               valorIr : (0),  
               show:(false)         
             });

             setProdutoThree({
              ...produtoThree , 
                 valorApli : (0),
                 bruto : (0),
                 liquido : (0), 
                 valorIr : (0),  
                 show:(false)         
               }); 

               setProdutoFour({
                ...produtoFour , 
                   valorApli : (0),
                   bruto : (0),
                   liquido : (0), 
                   valorIr : (0),  
                   show:(false)          
                 }); 
                
                 setValorInf("");
                 setModal(false);
        break;

           
         case produtoTwo.name:                             
          
            setProdutoTwo({
              ...produtoTwo , 
                 valorApli : (0),
                 bruto : (0),
                 liquido : (0), 
                 valorIr : (0),  
                 show:(false)         
               });
  
               setProdutoThree({
                ...produtoThree , 
                   valorApli : (0),
                   bruto : (0),
                   liquido : (0), 
                   valorIr : (0),  
                   show:(false)         
                 }); 
  
                 setProdutoFour({
                  ...produtoFour , 
                     valorApli : (0),
                     bruto : (0),
                     liquido : (0), 
                     valorIr : (0),  
                     show:(false)          
                   }); 
                  
                   setProdutoOne({
                    ...produtoOne ,
                         valorApli : (0),
                         bruto : (0),
                         liquido : (0), 
                         valorIr : (0),  
                         show:(false)        
                     });   

                   setValorInf("");
                   setModal(false);
              
          break;

          case produtoThree.name: 
           
             setProdutoThree({
              ...produtoThree , 
                 valorApli : (0),
                 bruto : (0),
                 liquido : (0), 
                 valorIr : (0),  
                 show:(false)         
               }); 

               setProdutoFour({
                ...produtoFour , 
                   valorApli : (0),
                   bruto : (0),
                   liquido : (0), 
                   valorIr : (0),  
                   show:(false)          
                 }); 
                
                 setProdutoOne({
                  ...produtoOne ,
                       valorApli : (0),
                       bruto : (0),
                       liquido : (0), 
                       valorIr : (0),  
                       show:(false)        
                   });   

                   setProdutoTwo({
                    ...produtoTwo , 
                       valorApli : (0),
                       bruto : (0),
                       liquido : (0), 
                       valorIr : (0),  
                       show:(false)         
                     });

                 setValorInf("");
                 setModal(false);         

          break;
         
          case produtoFour.name:

              setProdutoFour({
                ...produtoFour , 
                   valorApli : (0),
                   bruto : (0),
                   liquido : (0), 
                   valorIr : (0),  
                   show:(false)          
                 }); 
                
                 setProdutoOne({
                  ...produtoOne ,
                       valorApli : (0),
                       bruto : (0),
                       liquido : (0), 
                       valorIr : (0),  
                       show:(false)        
                   });   

                   setProdutoTwo({
                    ...produtoTwo , 
                       valorApli : (0),
                       bruto : (0),
                       liquido : (0), 
                       valorIr : (0),  
                       show:(false)         
                     });

                     setProdutoThree({
                      ...produtoThree , 
                         valorApli : (0),
                         bruto : (0),
                         liquido : (0), 
                         valorIr : (0),  
                         show:(false)         
                       }); 

                 setValorInf("");
                 setModal(false); 
            
          break;
 
    
    } 

   }



 



 const setValores = (key, value) => {
   AsyncStorageSales.setItem(key, value);
 }




 const getValores = async (key) => {

   const valor = parseInt(await AsyncStorageSales.getItem(key));  

       if (valorInf === ""){

          Alert.alert(" Valor: ","informe um valor ")

          }else{
               
  
     switch(key){

      case produtoOne.name:

      setModal(true);
     
      setProdutoOne({
          ...produtoOne , 
           valorApli :((valor).toFixed(2) ),     
           bruto  : ((selic.am * produtoOne.txReal * valor).toFixed(2)),
           valorIr : ((selic.am * produtoOne.txReal * valor * produtoOne.ir).toFixed(2)),           
           liquido : (((selic.am * produtoOne.txReal * valor) - (selic.am * produtoOne.txReal * valor * produtoOne.ir)).toFixed(2)),   
           show:(true)        
       })    
       setClearChossed(produtoOne.name);     
     
      break;  

      case produtoTwo.name:
     
         setModal(true);

         setProdutoTwo({   
          ...produtoTwo , 
          valorApli :((valor).toFixed(2) ),     
          bruto  : ((selic.am * produtoTwo.txReal * valor ).toFixed(2)),
          valorIr : ((selic.am * produtoTwo.txReal * valor * produtoTwo.ir).toFixed(2)),           
          liquido : (((selic.am * produtoTwo.txReal * valor) - (selic.am * produtoTwo.txReal * valor * produtoTwo.ir)).toFixed(2)),   
          show:(true)    
          })
          
         setClearChossed(produtoTwo.name);            
               
      break;            
      
      case produtoThree.name:
     
        setModal(true);

         setProdutoThree({
          ...produtoThree , 
          valorApli :((valor).toFixed(2) ),     
          bruto  : ((selic.am * produtoThree.txReal * valor ).toFixed(2)),
          valorIr : ((selic.am * produtoThree.txReal * valor * produtoThree.ir).toFixed(2)),           
          liquido : (((selic.am * produtoThree.txReal * valor) - (selic.am * produtoThree.txReal * valor * produtoThree.ir)).toFixed(2)),   
          show:(true)    
          })       
          setClearChossed(produtoThree.name);   
          
      break;
         
      case produtoFour.name:
     
         setModal(true);

         setProdutoFour({   
         ...produtoFour ,          
           valorApli :((valor).toFixed(2) ),     
           bruto  : ((selic.am * produtoFour.txReal * valor ).toFixed(2)),
           valorIr : ((selic.am * produtoFour.txReal * valor * produtoFour.ir).toFixed(2)),           
         liquido : (((selic.am * produtoFour.txReal * valor) - (selic.am * produtoFour.txReal * valor * produtoFour.ir)).toFixed(2)),   
         show:(true)    
          })
          setClearChossed(produtoThree.name);                      
   
      break; 

       }

    } 

 }







 return(
  


 


<LinearGradient

colors={
  [
    'rgba(0, 0, 45, 1)',
    'rgba(0, 0, 15, 0.5)'
  ]
}
style={Styles.body}
>


  <ScrollView   vertical={true}  showsVerticalScrollIndicator={false} >


     <View style={Styles.header}>        
        <Text style={Styles.headerTitle}>Tela Investimestos</Text>
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

       
    
       


<LinearGradient

colors={
  [
    'rgba(0, 0, 25, 1)',
    'rgba(0, 0, 65, 0.8)'
  ]
}
style={Styles.simulatorContainer}
>



    <Text  style={Styles.simulatorTitle}>Simulador</Text>       

      <View style={Styles.simulatorPrice}>

      
           <TextInput style={Styles.simulatorPriceTitle}

             placeholder=" informe o valor "
             type="number"

             value={valorInf}            
             
              onChangeText={value=> setValorInf( parseFloat(value))
            }          
           /> 
  
          
       </View>


       <Text  style={Styles.simulatorTitle}>{` Pagando até ${produtoFour.txNominal}% do CDI `}</Text>

        <Text style={Styles.simulatorInfoTitle}>{` Selic hoje ${selic.aa}% `}</Text>
      
          <Text style={Styles.simulatorCardsText}>Escolha o investimento</Text>


       


         <LinearGradient

colors={
  [
    'rgba(0, 0, 5, 1)',
    'rgba(0, 0, 45, 1)'
  ]
}
style={Styles.simulatorContentCards}
>     





<LinearGradient

colors={
  [
    'rgba(0, 0, 85, 1)',
    'rgba(0,10,0,0.2)', 
    // 'transparent'
  ]
}
style={Styles.simulatorCards}
> 
           <TouchableOpacity               
              style={Styles.simulatorCards}           
              onPress={(value) => setValores(produtoOne.name, valorInf) & 
                                  getValores(produtoOne.name)}            
             >
            <Text style={Styles.simulatorCardsTitle}>{produtoOne.name}</Text> 
            <Text style={Styles.simulatorCardsInfo}>{`taxa de ${produtoOne.txNominal}% do CDI `}</Text>
          
           </TouchableOpacity>

</LinearGradient>




<LinearGradient

colors={
  [
    'rgba(0, 0, 85, 1)',
    'rgba(0,10,0,0.2)', 
     //'transparent'
  ]
}
style={Styles.simulatorCards}
> 

           <TouchableOpacity                 
                style={Styles.simulatorCards}       
                onPress={(value) => setValores(produtoTwo.name, valorInf) &
                                    getValores(produtoTwo.name)}            
             >         
             <Text style={Styles.simulatorCardsTitle}>{produtoTwo.name}</Text> 
             <Text style={Styles.simulatorCardsInfo}>{`taxa de ${produtoTwo.txNominal}% do CDI `}</Text> 

           </TouchableOpacity>

</LinearGradient>




          </LinearGradient>

       





          

<LinearGradient

colors={
  [
    //'rgba(0, 0, 85, 1)',
    'rgba(0,0,0,0.3)', 
     'transparent'
  ]
}
style={Styles.simulatorContentCards}
>  
 

 



<LinearGradient

colors={
  [
    'rgba(0, 0, 85, 1)',
    'rgba(0,10,0,0.2)',
  ]
}
style={Styles.simulatorCards}
> 

    
           <TouchableOpacity    style={Styles.simulatorCards}              
               
                onPress={(value) => setValores(produtoThree.name, valorInf) &
                                    getValores(produtoThree.name)}     
                  >             
             <Text style={Styles.simulatorCardsTitle}>{produtoThree.name}</Text> 
             <Text style={Styles.simulatorCardsInfo}>{`taxa de ${produtoThree.txNominal}% do CDI `}</Text> 

           </TouchableOpacity>

</LinearGradient>




<LinearGradient

colors={
  [
    'rgba(0, 0, 85, 1)',
    'rgba(0,10,0,0.2)',
  ]
}
style={Styles.simulatorCards}
> 


           <TouchableOpacity    style={Styles.simulatorCards}         
                  
               onPress={(value) => setValores(produtoFour.name, valorInf) &
                                   getValores(produtoFour.name)}               
             >           
             <Text style={Styles.simulatorCardsTitle}>{produtoFour.name}</Text>
             <Text style={Styles.simulatorCardsInfo}>{`taxa de ${produtoFour.txNominal}% do CDI `}</Text>

           </TouchableOpacity> 

     </LinearGradient>









</LinearGradient>
         






   <Modal
     
     animationType='fade'
     visible={modal}
   >

      
   


    <LinearGradient

colors={
  [
    //'rgba(0, 0, 15, 1)',
    //'rgba(0, 0, 05, 0.8)'
    'rgba(0, 0, 45, 0.9)',
    'rgba(0, 0, 25, 1)'
  ]
}
style={Styles.containerModal}
> 



    {produtoOne.show ? (        
        <View style={Styles.resultProdOne }>          
         <Text style={Styles.resultTxt }>{` Aplicação : R$ ${produtoOne.valorApli} `}</Text>     
         <Text style={Styles.resultTxt }>{` valor Bruto : R$ ${produtoOne.bruto} `}</Text> 
         <Text style={Styles.resultTxt }>{` Imposto de renda : R$ ${produtoOne.valorIr} `}</Text>        
         <Text style={Styles.resultTxt }>{` valor liquido : R$ ${produtoOne.liquido} `}</Text> 
         <Text style={Styles.resultTxt }>{` Prazo para resgate :  ${produtoOne.prazo} `}</Text> 
       </View>
         ):
        <View></View>
   }

   {produtoTwo.show ? (
    <View style={Styles.resultProdTwo }>
      <Text style={Styles.resultTxt }>{` Aplicação  : R$ ${valorInf} `}</Text> 
      <Text style={Styles.resultTxt }>{` valor Bruto : R$ ${produtoTwo.bruto} `}</Text> 
      <Text style={Styles.resultTxt }>{` Imposto de renda : R$ ${produtoTwo.valorIr} `}</Text>      
      <Text style={Styles.resultTxt }>{` valor liquido : R$ ${produtoTwo.liquido} `}</Text> 
      <Text style={Styles.resultTxt }>{` Prazo para resgate :  ${produtoTwo.prazo}m + 1 dia `}</Text> 
   </View>
   ):
   <View></View>
  }

  {produtoThree.show ? (
   <View style={Styles.resultProdThree }>
    <Text style={Styles.resultTxt }>{` Aplicação  : R$ ${valorInf} `}</Text> 
    <Text style={Styles.resultTxt }>{` valor Bruto : R$ ${produtoThree.bruto} `}</Text> 
    <Text style={Styles.resultTxt }>{` Imposto de renda : R$ ${produtoThree.valorIr} `}</Text>  
    <Text style={Styles.resultTxt }>{` valor liquido : R$ ${produtoThree.liquido} `}</Text> 
    <Text style={Styles.resultTxt }>{` Prazo para resgate :  ${produtoThree.prazo}m + 1 dia `}</Text> 
   </View>
 ):
  <View></View>
}



{produtoFour.show ? (
  <View style={Styles.resultProdFour }>
   <Text style={Styles.resultTxt }>{` Aplicação : R$ ${valorInf} `}</Text> 
   <Text style={Styles.resultTxt }>{` valor Bruto : R$ ${produtoFour.bruto} `}</Text> 
   <Text style={Styles.resultTxt }>{` Imposto de renda : R$ ${produtoFour.valorIr} `}</Text>    
   <Text style={Styles.resultTxt }>{` valor liquido : R$ ${produtoFour.liquido} `}</Text> 
   <Text style={Styles.resultTxt }>{` Prazo para resgate :  ${produtoFour.prazo}m + 1 dia `}</Text> 
  </View>
 ):
  <View></View>
}


   <TouchableOpacity  style={Styles.btnNew}     
       onPress={clearValores}   
       >
      <Text  style={Styles.textBtnNew} >Escolha outro</Text> 
   </TouchableOpacity>




   </LinearGradient>


 

 </Modal>


</LinearGradient>






</ScrollView>


 </LinearGradient>   
 

 );

};






 