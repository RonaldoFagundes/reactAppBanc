import { createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

import Login from './pages/Login';
import NewUser from './pages/NewUser';
import Home from './pages/Home';
import Pagamentos from './pages/Pagamentos';
import Recebimentos from './pages/Recebimentos';
import Extrato from './pages/Extrato';
import Investimentos from './pages/Investimentos';
import Cartao from './pages/Cartao';



export default function Routes() {
    return (
        
          <Stack.Navigator
              screenOptions={{
                headerShown: false
              }} 
            >         
           
              <Stack.Screen              
                name="Login"
                component={Login}

                /* options={{
                 headerShown:false
                }}  */  

              />

              <Stack.Screen 
                 name="NewUser"
                 component={NewUser} 
                 
                /*  options={{
                  headerShown:false
                 }}  */ 
                 />



                <Stack.Screen 
                 name="Home"
                 component={Home} 

                /*  options={{
                  headerShown:false
                 }} */  
                />

               <Stack.Screen 
                 name="Pagamentos"
                 component={Pagamentos} 
                />

               <Stack.Screen 
                 name="Recebimentos"
                 component={Recebimentos} 
                />

                
                <Stack.Screen 
                 name="Extrato"
                 component={Extrato} 
                />


               <Stack.Screen 
                 name="Investimentos"
                 component={Investimentos} 
                />


              <Stack.Screen 
                 name="Cartao"
                 component={Cartao} 
                />
            



          </Stack.Navigator>
       
    );
  }
  
  