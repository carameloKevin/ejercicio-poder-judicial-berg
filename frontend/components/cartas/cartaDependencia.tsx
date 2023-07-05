import { Button } from "@hilla/react-components/Button.js";
import Dependencia from "Frontend/generated/com/example/application/Dependencia";
import { DependenciaEndpoint } from "Frontend/generated/endpoints";
import { DependenciaForm } from "../forms/dependenciaForm";

interface PropsEdificioForm{
    stateDepenendencias?: Dependencia[]
    setStateDependencias?: Function;
    dependenciaRecibida:Dependencia
}

export function CartaDependencia({
    stateDepenendencias,
    setStateDependencias,
    dependenciaRecibida
}:PropsEdificioForm){

    function handleRemoveDependencia()
    {
        DependenciaEndpoint.removeDependencias(dependenciaRecibida)
        if(setStateDependencias){
            setStateDependencias(stateDepenendencias?.filter(dep => dep.id != dependenciaRecibida.id))
        }
    }

    return (
        <div className="p-l">
            <h4>Dependencia: {dependenciaRecibida.nombre}</h4>
            <p>Edificio: {dependenciaRecibida.edificio?.nombre}</p>
            <Button onClick={()=>(handleRemoveDependencia())}>Delete Dependencia</Button>
            { dependenciaRecibida.edificio?.id &&
            <DependenciaForm stateDependencia={stateDepenendencias} setStateDependencia={setStateDependencias} dependenciaOriginal = {dependenciaRecibida} edificioId={dependenciaRecibida.edificio?.id}/>}
        </div>
    )
}