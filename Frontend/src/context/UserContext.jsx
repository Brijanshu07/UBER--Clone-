import React, { createContext, useState } from 'react'

export const UserDataContext = createContext();
const UserContext = ({children}) => {
    const [user, setUSer] = useState({
        fullname:{
            firstname: '',
            lastname: ''
        },
        email: '',
        password:''
    });

  return (
    <div>
        <UserDataContext.Provider>
            {children}
        </UserDataContext.Provider>
    </div>
  )
}

export default UserContext