import { Button } from "@hilla/react-components/Button.js";
import { TextField } from "@hilla/react-components/TextField.js";
import { DependenciaEndpoint, EdificioEndpoint } from "Frontend/generated/endpoints";
import { useState } from "react"

export function DependenciaForm({idEdificio}: {idEdificio:number}){
    
    const [nombreDependencia, setNombreDependencia] = useState("");
    
    async function addDependencia(nombreDependencia:string, id:number){
        
        const edificio = await EdificioEndpoint.findById(id);
        console.log(edificio);
        console.log("Pase por el edificio")
        const nuevaDepen = await DependenciaEndpoint.add(nombreDependencia, edificio);
        console.log(DependenciaEndpoint.findAll());
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