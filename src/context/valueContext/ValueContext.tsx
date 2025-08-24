import { Appcontext2 } from "./AppContext";
import { useState, type ReactNode } from "react";

type childrenType={
    children:ReactNode;
}

export default function ValueContext({children}:childrenType) {
    const [value,setValue]=useState(1);
    function square():number{
        return value*value;
    }
    const valueVar={value,setValue,square};
  return (
    <Appcontext2.Provider value={valueVar}>
        {children}
    </Appcontext2.Provider>
  )
}
