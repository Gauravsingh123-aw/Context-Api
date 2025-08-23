import { useState, type ReactNode } from "react";
import { Appcontext } from "./Appcontext.tsx";
import type { contextVariable } from "./context.types.ts";

type childrenType=ReactNode

function ContextProvider({children}:{children:childrenType}){
    
    const [theme,setTheme]=useState("dark");
    const [value,setValue]=useState(0);
    const fun=()=>{
        setValue(value+1);
    }
    const varToPass:contextVariable={theme,value,fun};
    return(
        <Appcontext.Provider value={varToPass}>{children} </Appcontext.Provider>
    )
}
export default ContextProvider;