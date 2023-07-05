
import { Button } from "@hilla/react-components/Button.js";
import { TextField } from "@hilla/react-components/TextField.js";
import { CartaDependencia } from "Frontend/components/cartas/cartaDependencia";
import { CartaDomicilio } from "Frontend/components/cartas/cartaDomicilio";
import { CartaEdificio } from "Frontend/components/cartas/cartaEdificio";
import { DomicilioForm } from "Frontend/components/forms/domicilioForm";
import { EdificioForm } from "Frontend/components/forms/edificioForm"
import Dependencia from "Frontend/generated/com/example/application/Dependencia";
import Domicilio from "Frontend/generated/com/example/application/Domicilio";
import Edificio from "Frontend/generated/com/example/application/Edificio";
import { EdificioEndpoint, DomicilioEndpoint, DependenciaEndpoint } from "Frontend/generated/endpoints";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function IndexView(){

    const [edificios, setEdificios] = useState<Edificio[]>([]);
    const [domicilios, setDomicilios] = useState<Domicilio[]>([]);
    const [dependecias, setDependencias] = useState<Dependencia[]>([])
    
    const id = 0;
    
    useEffect(() => {
        EdificioEndpoint.findAll().then(setEdificios);
        DomicilioEndpoint.findAll().then(setDomicilios);
        DependenciaEndpoint.findAll().then(setDependencias);
        console.log(dependecias);
        console.log(edificios);
    }, [])


    return (
        <div className="p-l">
            <div className="gap-s">
            <h1>Index View</h1>
                <Link to={`/domicilios`}><Button className="btn btn-primary">Domicilios</Button></Link> 
                <Link to={`/edificios`}><Button className="btn btn-primary">Edificios</Button></Link> 
                <Link to={`/dependencias`}><Button className="btn btn-primary">Dependencias</Button></Link> 
            </div>
            <h2>Informacion</h2>
            <ul>
                <li>Las dependencias dependen de los edificios y los edificios de los domicilios 
                    (un edificio puede estar en un solo domicilio)
                </li>
                <li>
                    Se crea un domicilio, despues un edificio, y depsues una dependecia en el edificio.
                </li>
                <li>
                    No se elimina en cascada, si se intenta eliminar un domicilio que este asociado 
                    a un edificio no lo permite. Lo mismo para las dependencias.
                </li>
            </ul>
        </div>
    )
}