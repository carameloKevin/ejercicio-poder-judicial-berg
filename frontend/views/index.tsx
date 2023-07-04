
import { Button } from "@hilla/react-components/Button.js";
import { TextField } from "@hilla/react-components/TextField.js";
import { CartaEdificio } from "Frontend/components/cartas/cartaEdificio";
import { DomicilioForm } from "Frontend/components/forms/domicilioForm";
import { EdificioForm } from "Frontend/components/forms/edificioForm"
import Dependencia from "Frontend/generated/com/example/application/Dependencia";
import Domicilio from "Frontend/generated/com/example/application/Domicilio";
import Edificio from "Frontend/generated/com/example/application/Edificio";
import { EdificioEndpoint, DomicilioEndpoint, DependenciaEndpoint } from "Frontend/generated/endpoints";
import { useEffect, useState } from "react";

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
        <div className="p-m">
            <h1>Index View Exitoso!</h1>

            <DomicilioForm />
            <EdificioForm />

            <div>
                <h2>Edificios</h2>
                
                {edificios.map(ed => (
                    <CartaEdificio {...ed} />
                ))}
            </div>

            <h2>Domicilios</h2>
            <div>
                {domicilios.map(domi => (
                    <div>
                        <p>{domi.calle} - {domi.numero} - {domi.ciudad}</p>
                    </div>
                ))}
            </div>

            <h2>Dependencia</h2>
            <div>
                {dependecias.map(dep => (
                    <div>
                        <p>{dep.nombre}</p>
                        <p>Edificio: {dep.edificio?.nombre}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}