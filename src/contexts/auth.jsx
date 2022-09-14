import React , {createContext,useState} from 'react';


export const AuthContext = createContext({});


  function AuthProvider ({children}){

   
     const [today,setToday] = useState ({});

     const [name,setName] = useState ({});   

     const [conta,setConta] = useState ({});

     const [relRec,setRelRec] = useState ({});

     const [relPgto,setRelPgto] = useState ({});



     return(
       <AuthContext.Provider value={ 
          { 
             setToday , today ,  
             setName, name ,
             setConta , conta , 
             setRelRec , relRec,
             setRelPgto , relPgto 
             
          } 
          
          }>
    
          {children} 
       </AuthContext.Provider>
     )
  }

  export default  AuthProvider;
