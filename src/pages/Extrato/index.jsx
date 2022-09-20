import React, { useContext } from 'react';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';


import {  
  View,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native';


import Styles from './Styles';

import { LinearGradient } from 'expo-linear-gradient';

import { MaterialCommunityIcons } from '@expo/vector-icons';


import { AuthContext } from '../../contexts/auth';






export default function Extrato({ navigation, route }) {



  const { today } = useContext(AuthContext);
  const { name } = useContext(AuthContext);
  const { conta } = useContext(AuthContext);
  
  const { relValores } = useContext(AuthContext);

  const [selectedPrinter, setSelectedPrinter] = React.useState();


  const safeToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html: createDynamicTable(),
      printerUrl: selectedPrinter?.url, // iOS only    
    });
  }


  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({
      html: createDynamicTable(),
    });
    console.log('File has been saved to:', uri);
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  }






  const createDynamicTable = () => {

    var table = "";

    for (let i in relValores) {
      const item = relValores[i];
      table = table +
        `
     <tr>
      <td>${item.data}</td>
      <td>${item.recebimento}</td>
      <td>${item.pagamento}</td>
      <td>${item.desc}</td>      
     </tr>   
    `
    }
    const html = `  
  <!DOCTYPE html>
   <html>
    <head>
     <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" /> 

    <style>
       body{
         margin:0px;
         padding:0px;
         text-align: center;
        }

        #div {
          width: 1000px;
          height: 800px;
          background-color: rgba(27, 59, 78, 1);
          background-image: linear-gradient(to bottom, transparent, rgba(27, 59, 78, 0.5));
          padding: 20px;
          margin-left: 10px;
          margin-top: 80px
        }

      table {
        height: auto;
        width: 98%;
        padding: 5px;
        border-collapse: separate;
        border-spacing: 2px;
        background-color: rgba(0, 0, 0, 0.3);
        margin: 10px;
      }
      th {
        font-size: 1.6em;
        text-transform: capitalize;
        color: rgba(221, 240, 210, 0.9);
        background-color: black;
      }
      tr,
      td {
        border: 2px solid black;
        text-align: center;
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        font-size: 1.1em;
        line-height: 1.66667em;
        color: rgba(256, 234, 211, 0.8);
        text-transform: capitalize;
        padding: 2px;
      }
    </style>

   </head>

   <body>   
    

      <div id="div">
         
        <table>

         <thead>

          <tr>
           <td colspan="20">${today}</td>
          </tr>

          <tr>
            <th colspan="20">Extrato</th>
          </tr>
            
          <tr>
           <td colspan="1" rowspan="3">Data</td>
           <td colspan="1" rowspan="3">Recebimentos</td>
           <td colspan="1" rowspan="3">Pagamentos</td>
           <td colspan="1" rowspan="3">Descrição</td>          
         </tr>
          
        </thead>

        <tbody>          
         <tr>
          ${table}
         </tr>             
        </tbody>

      </table>

      </div>    
   </body>
  </html> 

  `;
    return html;
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

         <Text style={Styles.headerTitle}>Tela de Extrato</Text>

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


      <View style={Styles.relContainer} >
     

        <View style={Styles.relContent} >       
          <FlatList
            data={relValores}
            renderItem={({ item }) => {

              return (

                <View style={Styles.flatContent} >

                  <Text style={Styles.relTextDescription}>
                    {` Data :        ${item.data}`}
                  </Text>

                  <Text style={Styles.relTextDescription}>
                    {` Recebimentos : ${item.recebimento}`}
                  </Text>

                  <Text style={Styles.relTextDescription}>
                    {` Pagamentos :  ${item.pagamento}`}
                  </Text>

                  <Text style={Styles.relTextDescription}>
                    {` Descrição :   ${item.desc}`}
                  </Text>

                </View>

               )
             }
            }
          />
        </View>




        <View style={Styles.pdfContent}>

          <TouchableOpacity style={Styles.extButton}
            onPress={printToFile}
           >
            <View>
              <MaterialCommunityIcons
                name="share"
                size={50}
                color="#F92E6A"
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.extButton}
            onPress={safeToFile} >
            <View>
              <MaterialCommunityIcons
                name="file-pdf-box"
                size={50}
                color="#F92E6A"
              />
            </View>
          </TouchableOpacity>

        </View>



      </View>

    </LinearGradient>

  

  
  
  );

};
