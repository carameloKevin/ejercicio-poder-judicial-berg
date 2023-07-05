import { CartaDependencia } from "Frontend/components/cartas/cartaDependencia";
import { DependenciaForm } from "Frontend/components/forms/dependenciaForm";
import Dependencia from "Frontend/generated/com/example/application/Dependencia";
import { DependenciaEndpoint, DomicilioEndpoint, EdificioEndpoint } from "Frontend/generated/endpoints";
import { useEffect, useState } from "react";



export function DependenciaView(){
    const [dependencias, setDependencias] = useState<Dependencia[]>();

    useEffect(() => {
        DependenciaEndpoint.findAll().then(setDependencias);
        console.log(dependencias)
    },[])

    return (
        <div className="p-l">
            <h1>Dependencias</h1>
            {dependencias && dependencias.map((dependencia) => (
                <CartaDependencia key={dependencia.id} dependenciaRecibida={dependencia} stateDepenendencias={dependencias} setStateDependencias={setDependencias}/>
            ))}
            {dependencias?.length==0 && <h2>No hay Dependencias!</h2>}
        </div>
        
    )
}