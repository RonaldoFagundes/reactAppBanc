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
         background-color: rgba(0, 48, 63, 0.91);
         display: block;
         justify-content: center;
         align-items: center;
       }
       #rel {
        width: auto;
        height: auto;
        background-color: rgba(0, 48, 63, 0.56);
      }
    </style>

   </head>
   <body>
     <h1>${today}</h1>
     <div id="rel">
         ${table}
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

          <Text style={Styles.relTextLabel}> Relatório de Movimentação </Text>

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
