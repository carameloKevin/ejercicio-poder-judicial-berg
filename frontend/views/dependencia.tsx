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
        <div>
            {/* <DependenciaForm /> */}
            {dependencias && dependencias.map((dependencia) => (
                <CartaDependencia {...dependencia}/>
            ))}
            {dependencias?.length==0 && <h2>No hay Dependencias!</h2>}
        </div>
        
    )
}