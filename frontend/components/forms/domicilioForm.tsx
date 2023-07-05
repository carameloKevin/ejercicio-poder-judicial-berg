import { Button } from "@hilla/react-components/Button.js";
import { NumberField } from "@hilla/react-components/NumberField.js";
import { TextField } from "@hilla/react-components/TextField.js";
import Domicilio from "Frontend/generated/com/example/application/Domicilio";
import { DomicilioEndpoint } from "Frontend/generated/endpoints";
import { useEffect, useState } from "react";

interface PropsDomicilioForm{
    calle?: string
    ciudad?: string;
    id?: number;
    numero?:string;
    domicilios?:Domicilio[];
    handleSetDomicilios?:Function
}
export function DomicilioForm({calle, ciudad, id, numero, domicilios, handleSetDomicilios}:PropsDomicilioForm, ){

    const [domicilio, setDomicilio] = useState<Domicilio>();
    const [calleIngresada, setCalle] = useState(String);
    const [numeroIngresado, setNumero] = useState(String);
    const [ciudadIngresada, setCiudad] = useState(String);

    useEffect(() => {
        if(calle){
            setCalle(calle);
        }

        if(ciudad){
            setCiudad(ciudad);
        }

        if(numero){
            setNumero(numero)
        }
    },[])

    async function addDomicilio(){
        const saved = await DomicilioEndpoint.add(ciudadIngresada, calleIngresada, numeroIngresado);
        console.log(saved);
        if(saved && handleSetDomicilios && domicilios){
            handleSetDomicilios([...domicilios, saved]);
            
        }
    }

    async function updateDomicilio(){
    if(id && calle?.length != 0 && ciudad?.length != 0 && numero?.length != 0)
        {
            const saved = await DomicilioEndpoint.findById(id);
            saved.calle = calleIngresada;
            saved.ciudad = ciudadIngresada;
            saved.numero = numeroIngresado;
            DomicilioEndpoint.update(saved);
        }
    }

    return(
    <div className="flex gap-s">

        <TextField placeholder="Calle" value={calleIngresada} onChange={e => setCalle(e.target.value)}/>
        <TextField placeholder="Numero" value={numeroIngresado} onChange={e => setNumero(e.target.value)}/>
        <TextField placeholder="Ciudad" value={ciudadIngresada} onChange={e => setCiudad(e.target.value)}/>
        
        {!id && 
        <Button theme="primary" onClick={addDomicilio}>Add Domicilio</Button>
        }
        {id &&
        <Button theme="primary" onClick={updateDomicilio}>Update Domicilio</Button>}
    </div>
    )
}