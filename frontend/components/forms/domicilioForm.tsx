import { Button } from "@hilla/react-components/Button.js";
import { NumberField } from "@hilla/react-components/NumberField.js";
import { TextField } from "@hilla/react-components/TextField.js";
import Domicilio from "Frontend/generated/com/example/application/Domicilio";
import { DomicilioEndpoint } from "Frontend/generated/endpoints";
import { useState } from "react";


export function DomicilioForm(){

    const [domicilio, setDomicilio] = useState<Domicilio>();
    const [calle, setCalle] = useState(String);
    const [numero, setNumero] = useState(String);
    const [ciudad, setCiudad] = useState(String);

    async function addDomicilio(){
        const saved = await DomicilioEndpoint.add(ciudad, calle, numero);
        console.log(saved);
        if(saved){
            console.log(saved);
            setDomicilio(saved);
        }
    }

    return(
    <div className="flex gap-s">
        <TextField placeholder="Calle" value={calle} onChange={e => setCalle(e.target.value)}/>
        <NumberField placeholder="Numero" value={numero} onChange={e => setNumero(e.target.value)}/>
        <TextField placeholder="Ciudad" value={ciudad} onChange={e => setCiudad(e.target.value)}/>

        <Button theme="primary" onClick={addDomicilio}>Add Domicilio</Button>
    </div>
    )
}