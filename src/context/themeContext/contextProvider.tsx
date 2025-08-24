import { useState, type ReactNode } from "react";
import { Appcontext } from "./Appcontext.tsx";
import type { contextVariable } from "./context.types.ts";

type childrenType=ReactNode

function ContextProvider({children}:{children:childrenType}){
    
    const [theme,setTheme]=useState("dark");
    
    const toggle=()=>{
        setTheme("light");
    }
    const varToPass:contextVariable={theme,toggle};
    return(
        <Appcontext.Provider value={varToPass}>{children} </Appcontext.Provider>
    )
}
export default ContextProvider;