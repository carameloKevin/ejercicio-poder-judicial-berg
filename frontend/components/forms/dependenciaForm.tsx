import { Button } from "@hilla/react-components/Button.js";
import { TextField } from "@hilla/react-components/TextField.js";
import Dependencia from "Frontend/generated/com/example/application/Dependencia";
import { DependenciaEndpoint, EdificioEndpoint } from "Frontend/generated/endpoints";
import { useEffect, useState } from "react"


interface PropsDependenciaForm{
    stateDependencia?: Dependencia[],
    setStateDependencia?: Function,
    dependenciaOriginal?:Dependencia,   //Si esta creada, necesito los datos para mostrarlos y modificarlos
    edificioId:number   //Si no esta creada, depende unicamente del edificio
}

export function DependenciaForm({
    stateDependencia,
    setStateDependencia,
    dependenciaOriginal,
    edificioId}: PropsDependenciaForm){
    
    const [nombreDependencia, setNombreDependencia] = useState("");
    
    useEffect((() => {
        if(dependenciaOriginal){
            setNombreDependencia(dependenciaOriginal.nombre!);
        }
    }),[]);

    async function addDependencia(){
        const edificio = await EdificioEndpoint.findById(edificioId);
        const saved = DependenciaEndpoint.add(nombreDependencia, edificio);
        if(setStateDependencia && stateDependencia){
            setStateDependencia([...stateDependencia, saved])
        }
    }

    async function updateDependencia(){
        if(dependenciaOriginal)
        {
            const depen = await DependenciaEndpoint.findById(dependenciaOriginal.id!);
            depen.nombre = nombreDependencia;
            DependenciaEndpoint.update(depen);
        }
    }

    return (
        <div className="gap-s">
        <TextField value={nombreDependencia} onChange={e => setNombreDependencia(e.target.value)}/>
        {!dependenciaOriginal &&
            <Button theme="primary" onClick={() =>
                addDependencia()
                }>Add Dependencia</Button>
        }
        {dependenciaOriginal &&
            <Button theme="primary" onClick={() =>
                updateDependencia()
                }>Update Dependencia</Button>
        }
    </div>
    )
}
