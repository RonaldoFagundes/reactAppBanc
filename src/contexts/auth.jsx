import React , {createContext,useState} from 'react';


export const AuthContext = createContext({});


  function AuthProvider ({children}){

   
     const [today,setToday] = useState ({});

     const [id,setId] = useState ({});   
     
     const [name,setName] = useState ({});   

     const [conta,setConta] = useState ({});



     const [relRec,setRelRec] = useState ({});

     const [relPgto,setRelPgto] = useState ({});


     const [relValores,setRelValores] = useState ({});



     return(
       <AuthContext.Provider value={ 
          { 
             setToday , today , 
             setId , id , 
             setName, name ,
             setConta , conta , 
             setRelRec , relRec,
             setRelPgto , relPgto ,
             setRelValores , relValores
          } 
          
          }>
    
          {children} 
       </AuthContext.Provider>
     )
  }

  export default  AuthProvider;
