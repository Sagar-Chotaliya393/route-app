import { createContext } from "react";
import { useState } from "react";

const AppContext = createContext();

export default AppContext;

export const AppProvider = ({children}) =>{
    const [theme,setTheme] = useState("light");
    const [loginuser,setLoginuser] = useState(null);

    const updateTheme = () =>{
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    const login = () =>{
        setLoginuser("Sagar");
    }

    const logout = () =>{
        setLoginuser(null);
    }

    return(
        <AppContext.Provider value={{theme,loginuser,updateTheme,login,logout}}>
            {children}
        </AppContext.Provider>
    )
}