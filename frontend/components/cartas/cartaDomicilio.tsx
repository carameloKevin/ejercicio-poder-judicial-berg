import { Button } from "@hilla/react-components/Button.js";
import Domicilio from "Frontend/generated/com/example/application/Domicilio";
import { DomicilioEndpoint } from "Frontend/generated/endpoints";
import { DomicilioForm } from "../forms/domicilioForm";
import Edificio from "Frontend/generated/com/example/application/Edificio";

interface PropsDomicilioCarta{
    // calle: string
    // ciudad: string;
    // id: number;
    // numero:string;
    domicilio:Domicilio;
    domicilios?:Domicilio[];
    handleSetDomicilios?:Function
}

export function CartaDomicilio({domicilio, domicilios, handleSetDomicilios}: PropsDomicilioCarta){

    async function handlerRemoveDomicilio()
    {
        const saved = await DomicilioEndpoint.findById(domicilio.id);
        DomicilioEndpoint.remove(saved)
        if(handleSetDomicilios){
            handleSetDomicilios(domicilios?.filter(dom => dom.id != domicilio.id))
        }
    }


    return(
        <div className="p-l carta-domicilio">

            <p>{domicilio.ciudad}: {domicilio.calle} - {domicilio.numero}</p>
            <Button theme="secondary"onClick={() => (handlerRemoveDomicilio())}>Delete Direccion</Button>
            <DomicilioForm calle={domicilio.calle} ciudad={domicilio.ciudad} id={domicilio.id} numero={domicilio.numero}/>
        </div>
    )
}