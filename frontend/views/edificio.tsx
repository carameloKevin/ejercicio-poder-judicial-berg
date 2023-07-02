import { CartaEdificio } from "Frontend/components/cartas/cartaEdificio";
import { useLocation } from "react-router-dom";

export function EdificioView(){
    const { state } = useLocation();
    return (
        <div>
            <CartaEdificio {...state.edificio}></CartaEdificio>
        </div>
        
    )
}