import { CartaEdificio } from "Frontend/components/cartas/cartaEdificio";
import { EdificioForm } from "Frontend/components/forms/edificioForm";
import Edificio from "Frontend/generated/com/example/application/Edificio";
import { EdificioEndpoint } from "Frontend/generated/endpoints";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function EdificioView(){
    const [edificios, setEdificios] = useState<Edificio[]>();

    useEffect(() => {
        EdificioEndpoint.findAll().then(setEdificios);
        console.log(edificios)
    },[])

    return (
        <div>
            <EdificioForm />
            {edificios && edificios.map((edificio) => (
                <CartaEdificio {...edificio}/>
            ))}
            {edificios?.length==0 && <h2>No hay edificios!</h2>}
        </div>
        
    )
}