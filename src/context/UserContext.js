import { createContext } from "react";

export const UserCtx = createContext({
    token: "",
    user: "",
    setToken: () => {},
    setUser: () => {}
});