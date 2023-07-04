import { Button } from "@hilla/react-components/Button.js";
import Dependencia from "Frontend/generated/com/example/application/Dependencia";
import { DependenciaEndpoint } from "Frontend/generated/endpoints";

export function CartaDependencia({edificio,id, nombre}:Dependencia){

    function handleRemoveDependencia(){
        DependenciaEndpoint.removeDependencias({edificio, id, nombre})
    }

    return (
        <div>
            <h4>Dependencia: {nombre}</h4>
            <p>Edificio: {edificio?.nombre}</p>
            <Button onClick={()=>(handleRemoveDependencia())}>Delete Dependencia</Button>
        </div>
    )
}