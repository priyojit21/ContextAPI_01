import React, { useState } from "react";
import UserContext from "./UserContext";

// children mane ja compoennt thakbe tai pass koro
const UserContextProvider = ({children}) => {

    // ekta state banalam jeta amra onyo component a globally access korte chai
    // all API calls , logics here
    const [user,setUser] = useState(null);

    return (
        // Provider ekta method dai amader value jekhane amra ja icche object hisebe send korte pari
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider