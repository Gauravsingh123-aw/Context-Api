import { createContext } from "react";
import type { contextVariable } from "./context.types.ts";
export  const Appcontext= createContext<contextVariable | null>(null);



