import { CartaDomicilio } from "Frontend/components/cartas/cartaDomicilio";
import { DomicilioForm } from "Frontend/components/forms/domicilioForm";
import Domicilio from "Frontend/generated/com/example/application/Domicilio";
import { DomicilioEndpoint, EdificioEndpoint } from "Frontend/generated/endpoints";
import { useEffect, useState } from "react";



export function DomicilioView(){
    const [domicilios, setDomicilios] = useState<Domicilio[]>([]);

    useEffect(() => {
        DomicilioEndpoint.findAll().then(setDomicilios);
    },[])


    return (
        <div className="p-l">
            <h1>Domicilios</h1>
            <h2>Crear un nuevo edificio</h2>
            <DomicilioForm domicilios = {domicilios} handleSetDomicilios={setDomicilios}/>
            <h2>Listado Domicilios</h2>
            {Array.isArray(domicilios) && domicilios.map((domicilio) => (
                <CartaDomicilio key={`dom${domicilio.id}`} domicilio={domicilio} handleSetDomicilios={setDomicilios} domicilios={domicilios}/>
            ))}
            {domicilios?.length==0 && <h2>No hay Domicilios!</h2>}
        </div>
        
    )
}