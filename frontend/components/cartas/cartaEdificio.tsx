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


export function CartaEdificio({
    domicilio,
    id,
    nombre,
    }: Edificio){
    
    let { idUrl } = useParams();
    const [dependecias, setDependencias] = useState<Array<Dependencia>>();

    useEffect(() => {
        EdificioEndpoint.getDependenciasEdificio(id).then(setDependencias);
    }, [])

    function handleRemoveEdificio(){
        EdificioEndpoint.removeEdificio({domicilio, id, nombre});
    }

    return (
        <div className="carta-edificio">
                {/* <Link to={`/${nombre}`} state={{edificio:{domicilio, id, nombre}}} className="btn btn-primary"><h2>{nombre}</h2></Link> */}
                <h2>{nombre}</h2>
                <CartaDomicilio {...domicilio}></CartaDomicilio>
                <h4>Dependencias</h4>
                {dependecias && 
                dependecias.map((dep) => (
                    <CartaDependencia {...dep}/>
                ))}
                <DependenciaForm  idEdificio={id}/>

                <Button theme="secondary" onClick={() => (handleRemoveEdificio())}>Delete Edificio</Button>
        </div>
    )
}