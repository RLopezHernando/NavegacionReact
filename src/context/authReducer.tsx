import { AuthState } from "./AuthContext";

//Acciones
//Es lo que se evalua para retornar un estado
// Hacemos un type con un objeto con las acciones. En este caso solo tenemos una accion en dicho objeto
//Payload ---> El Payload es la informacion adicional que se le manda al string
type AuthAction =
    | { type: 'signIn' }
    | { type: 'logOut' }
    | { type: 'changeFavoriteIcon', payload: string }
    | { type: 'changeUserName', payload: string };




//Reducer
//Recibe un estado y regresa un estado

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {


    switch (action.type) {
        case 'signIn':

            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet'
            }
        case 'logOut':

            return {
                ...state,
                isLoggedIn: false,
                username: undefined,
                favoriteIcon: undefined
            }


        case 'changeFavoriteIcon':
            return {
                ...state,
                favoriteIcon: action.payload,
                username: 'no-username-yet'
            }
        case 'changeUserName':
            return {
                ...state,
                username: action.payload,

            }


        default:
            return state;
    }

}