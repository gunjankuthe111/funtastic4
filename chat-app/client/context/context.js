import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [openedUser, setOpenedUser] = useState({name:"",email:""})
  return (
    <div>
      <AppContext.Provider value={{ openedUser,setOpenedUser }}>
        {children}
      </AppContext.Provider>
    </div>
  );
}

export default AppContextProvider;