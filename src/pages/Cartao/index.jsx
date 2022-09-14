import React ,{ useState, useContext }from  'react' ;



import {
  View,
  Text,
  TouchableOpacity,  
} from 'react-native';


import Styles from './Styles';

import {MaterialCommunityIcons } from '@expo/vector-icons';

import {AuthContext} from '../../contexts/auth';






export default function Cartao({navigation, route}) { 

   
    const { name  }  = useContext(AuthContext);
    const { conta }  = useContext(AuthContext);


    

    const [card, setCard] = useState(false);

    const [btn, setBtn] = useState(true);
    
    const [cvv, setCvv] = useState(""); 
    


  const createNewCVV =()=>{
     
    const min = 1 ;
    const max = 999;
                  
    const newCVV = Math.floor(Math.random()*(max - min))
    
    setCard(true);
    setCvv(newCVV);
    setBtn(false);
  }




 return(

 <View style={Styles.body} >

    <View style={Styles.header}>
        
        <Text style={Styles.headerTitle}>Cartão online</Text>

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




   <View style={Styles.cardContainer} >



    {btn ? (

     <TouchableOpacity style={Styles.CardButton} 
       onPress={createNewCVV}
      >                             
      <Text style={Styles.CardTextButton}>Gerar cartão on line</Text>               

     </TouchableOpacity>

    ) :(
      <View></View>
     )
   }




    {card? (

    <View style={Styles.cardContent} >


      <Text style={Styles.cardBancName}>Easy Banc</Text>

      <Text style={Styles.cardNumber}>0000 0000 0000 0000</Text>


     <View style={Styles.cardInfo}>     
        <Text style={Styles.cardInfoText}>Exp 07/30</Text>         
        <Text style={Styles.cardInfoText}>{` cvv  ${cvv}`}</Text>      
     </View>
     


     <View style={Styles.cardInfo}> 

       <Text style={Styles.cardMainText}>{name}</Text>    
    
        <MaterialCommunityIcons 
                 name="credit-card-outline"
                 size={26}
                 color="#2ecc71"
              />    
     </View>
 


    </View>
      
      )
     :(
       <View></View>
     )
    }






    </View>    












        </View>
    )

}