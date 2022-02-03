import React, { useReducer } from "react";
import { createContext } from "react"
import { Props } from "react-native-paper/lib/typescript/components/RadioButton/RadioButton";
import { authReducer } from "./authReducer";


//Definir como luce o que informacion tendre aqui

export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

//Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
}


// Lo usaremos para decirle a React como luce y que expone el context
//En este punto definimos todo lo que nuestro contexto le exponga a los hijos
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logOut:() => void;
    changeFavoriteIcon: (iconName: string) => void;
    changeUserName: (username: string) => void;
}

//Crear el Contexto
//El nombre del contexto es el que buscamos cuando utilizamos un UseContext
export const AuthContext = createContext({} as AuthContextProps);
//Componente proveedor del estado
export const AuthProvider = ({ children }: any) => {

    //Reducer
    //reducer = generaEstado
    //El trabajo de un reducer es recibir un argumento y generar un nuevo estado

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    //El dispatch es el unico medio que tenemos para hacer una modificacion a el estado
    const signIn = () => {
        dispatch({ type: 'signIn' })
    }

    const logOut = () => {
        dispatch({ type: 'logOut' })
    }

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({ type: 'changeFavoriteIcon', payload: iconName })
    }

    const changeUserName = (username: string) => {
        dispatch({ type: 'changeUserName', payload: username })
    }

   

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            logOut,
            changeFavoriteIcon,
            changeUserName
        }}>
            {children}
        </AuthContext.Provider>
    )
}
