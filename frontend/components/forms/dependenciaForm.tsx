import { Button } from "@hilla/react-components/Button.js";
import { TextField } from "@hilla/react-components/TextField.js";
import { DependenciaEndpoint, EdificioEndpoint } from "Frontend/generated/endpoints";
import { useState } from "react"

export function DependenciaForm({idEdificio, handleSetDependencia}: {idEdificio:number, handleSetDependencia:Function}){
    
    const [nombreDependencia, setNombreDependencia] = useState("");
    
    async function addDependencia(nombreDependencia:string, id:number){
        console.log("llegue!")
        const nuevaDepen = await DependenciaEndpoint.add(nombreDependencia);
        EdificioEndpoint.addDependenciaToEdifcio(id, nuevaDepen).then(function(nuevoEdificio) {
            EdificioEndpoint.update(nuevoEdificio);
        });
        
        
    }

    return (
        <div className="flex gap-s">
        <TextField value={nombreDependencia} onChange={e => setNombreDependencia(e.target.value)}/>
        <Button theme="primary" onClick={() =>
            addDependencia(nombreDependencia, idEdificio)
            }>Add Dependencia</Button>
    </div>
    )
}