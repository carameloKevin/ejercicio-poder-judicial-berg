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
    },[])

    return (
        <div className="p-l gap-s">
            <h1>Edificios</h1>
            <h2>Crear un nuevo edificio</h2>
            <EdificioForm setStateEdificios={setEdificios} stateEdificios={edificios}/>
            <h2>Listado Edificios</h2>
            {edificios && edificios.map((edificio) => (
                <>
                <CartaEdificio key={`edi${edificio.id}`} edificio={edificio} edificios={edificios} handleSetEdificio={setEdificios}/>
                </>
            ))}
            {edificios?.length==0 && <h2>No hay edificios!</h2>}
        </div>
        
    )
}