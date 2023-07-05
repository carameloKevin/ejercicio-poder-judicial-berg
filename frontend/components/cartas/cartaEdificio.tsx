import Domicilio from "Frontend/generated/com/example/application/Domicilio"
import { Link, useParams } from "react-router-dom"

import { CartaDomicilio } from "./cartaDomicilio"
import { CartaDependencia } from "./cartaDependencia"
import Edificio from "Frontend/generated/com/example/application/Edificio"
import { DependenciaForm } from "../forms/dependenciaForm"
import Dependencia from "Frontend/generated/com/example/application/Dependencia"
import { useEffect, useState } from "react"
import { Button } from "@hilla/react-components/Button.js"
import { EdificioEndpoint } from "Frontend/generated/endpoints"

interface PropsDomicilioForm{
    edificio:Edificio,
    handleSetEdificio?:Function,
    edificios?: Edificio[]
}

export function CartaEdificio({
    edificio,
    handleSetEdificio,
    edificios}:PropsDomicilioForm){
    
    let { idUrl } = useParams();
    const [dependecias, setDependencias] = useState<Array<Dependencia>>();

    useEffect(() => {
        EdificioEndpoint.getDependenciasEdificio(edificio.id).then(setDependencias);
    }, [])

    async function handleRemoveEdificio(){
        try{
            await EdificioEndpoint.remove(edificio);
            if(handleSetEdificio){
                handleSetEdificio(edificios?.filter(edf => edf.id != edificio.id))
            }
        }catch(e){
            console.log("Error - Hay alguna dependencia asociada a este edificio?")
        }
    }

    return (
        <div className="p-l carta-edificio">
                <h2>{edificio.nombre}</h2>
                <h3>Domicilio de {edificio.nombre}</h3>
                {edificio.domicilio && (
                    <CartaDomicilio domicilio={edificio.domicilio}></CartaDomicilio>
                )}
                <h3>Dependencias de {edificio.nombre}</h3>
                {dependecias && 
                dependecias.map((dep) => (
                    <CartaDependencia key={`dep${dep.id}`} stateDepenendencias={dependecias} setStateDependencias={setDependencias} dependenciaRecibida={dep}/>
                ))}
                <DependenciaForm stateDependencia={dependecias} setStateDependencia={setDependencias} edificioId={edificio.id}/>

                <Button theme="secondary" onClick={() => (handleRemoveEdificio())}>Delete Edificio</Button>
        </div>
    )
}