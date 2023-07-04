import { Button } from "@hilla/react-components/Button.js"
import { TextField } from "@hilla/react-components/TextField.js"
import { VirtualList } from "@hilla/react-components/VirtualList.js";
import Domicilio from "Frontend/generated/com/example/application/Domicilio";
import Edificio from "Frontend/generated/com/example/application/Edificio";
import { DomicilioEndpoint, EdificioEndpoint } from "Frontend/generated/endpoints";
import { useEffect, useState } from "react"

interface PropsEdificioForm{
    stateEdificios?: Edificio[]
    setStateEdificios?: Function;
}

export function EdificioForm({
    stateEdificios,
    setStateEdificios
}:PropsEdificioForm){
    
    const[nombreEdificio, setNombreEdificio] = useState(String);
    const[domicilioSelect, setDomicilioSelect] = useState<Domicilio>()
    const[domicilios, setDomicilios] = useState<Domicilio[]>()

    useEffect(() => {
        DomicilioEndpoint.findAll().then(setDomicilios);
    },[])

    async function addEdificio(){
        if(domicilioSelect && nombreEdificio)
        {
            console.log(nombreEdificio);
            const nuevoEdificio = await EdificioEndpoint.add(nombreEdificio, domicilioSelect);
            if(setStateEdificios && stateEdificios){
            setStateEdificios(...stateEdificios, nuevoEdificio);
            }else{
                console.log("Missing Edificios State! Not updating")
            }
        }
    }

    return(
        <div>
            <TextField placeholder= "Nombre Edificio" value={nombreEdificio} onChange={e => setNombreEdificio(e.target.value)}/>
            {domicilios && domicilios.map((dom) => (
                <div>
                    <Button onClick={()=>(setDomicilioSelect(dom))}>{dom.ciudad} - {dom.calle} - {dom.numero}</Button>
                </div>
            ))
            }
            <Button theme="primary" onClick={addEdificio}>Agregar edificio</Button>
        </div>
    )
}