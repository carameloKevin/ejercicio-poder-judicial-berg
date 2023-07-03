import Domicilio from "Frontend/generated/com/example/application/Domicilio"
import { Link } from "react-router-dom"

import { CartaDomicilio } from "./cartaDomicilio"
import Edificio from "Frontend/generated/com/example/application/Edificio"
import { DependenciaForm } from "../forms/dependenciaForm"
import Dependencia from "Frontend/generated/com/example/application/Dependencia"
import { useEffect, useState } from "react"
import { Button } from "@hilla/react-components/Button.js"


export function CartaEdificio({
    //dependencia,
    domicilio,
    id,
    nombre,
    }: Edificio){

    //const [dependecias, setDependencias] = useState(dependencia);

    return (
        <div className="carta-edificio">
            <ul>
                <Link to={`/${nombre}`} state={{edificio:{domicilio, id, nombre}}} className="btn btn-primary">{nombre}</Link>
                <CartaDomicilio {...domicilio}></CartaDomicilio>
                {/* { {dependecias && 
                dependecias.map((dep) => (
                    <p>dep.nombre</p>
                ))} } */}
                <DependenciaForm  idEdificio={id}/>
            </ul>
        </div>
    )
}