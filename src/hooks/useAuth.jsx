import { useContext } from "react";
//Accedes a la informacion de un context
import AuthContext from "../context/AuthProvider";

const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth;