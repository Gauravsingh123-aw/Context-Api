import { createContext } from "react";
import type { contextVariable } from "./context.types"
export  const Appcontext= createContext<contextVariable | null>(null);



