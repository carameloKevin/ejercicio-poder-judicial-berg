import { CartaDomicilio } from "Frontend/components/cartas/cartaDomicilio";
import { DomicilioForm } from "Frontend/components/forms/domicilioForm";
import Domicilio from "Frontend/generated/com/example/application/Domicilio";
import { DomicilioEndpoint, EdificioEndpoint } from "Frontend/generated/endpoints";
import { useEffect, useState } from "react";



export function DomicilioView(){
    const [domicilios, setDomicilios] = useState<Domicilio[]>();

    useEffect(() => {
        DomicilioEndpoint.findAll().then(setDomicilios);
        console.log(domicilios)
    },[])

    return (
        <div>
            <DomicilioForm />
            {domicilios && domicilios.map((domicilio) => (
                <CartaDomicilio {...domicilio}/>
            ))}
            {domicilios?.length==0 && <h2>No hay Domicilios!</h2>}
        </div>
        
    )
}