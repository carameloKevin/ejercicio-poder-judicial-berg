import { Button } from "@hilla/react-components/Button.js"
import { RadioButton } from "@hilla/react-components/RadioButton.js";
import { RadioGroup } from "@hilla/react-components/RadioGroup.js";
import { TextField } from "@hilla/react-components/TextField.js"
import { VirtualList } from "@hilla/react-components/VirtualList.js";
import Domicilio from "Frontend/generated/com/example/application/Domicilio";
import Edificio from "Frontend/generated/com/example/application/Edificio";
import { DomicilioEndpoint, EdificioEndpoint } from "Frontend/generated/endpoints";
import { useEffect, useState } from "react"

interface PropsEdificioForm{
    stateEdificios?: Edificio[]
    setStateEdificios?: Function;
    edificioOriginal?:Edificio
}

export function EdificioForm({
    stateEdificios,
    setStateEdificios,
    edificioOriginal
}:PropsEdificioForm){

    const[nombreEdificio, setNombreEdificio] = useState(String);
    const[domicilioSelect, setDomicilioSelect] = useState<Domicilio>()
    const[domicilios, setDomicilios] = useState<Domicilio[]>()


    async function addEdificio(){
        if(nombreEdificio && nombreEdificio.length != 0 && domicilioSelect){
        const nuevoEdificio = await EdificioEndpoint.add(nombreEdificio, domicilioSelect);
        if(setStateEdificios && stateEdificios){
            setStateEdificios([...stateEdificios, nuevoEdificio]);
            }  
        }
    }

    async function updateEdificio(){
    if(edificioOriginal && nombreEdificio && nombreEdificio.length != 0)
        {
            const saved = await EdificioEndpoint.findById(edificioOriginal.id);
            saved.nombre = nombreEdificio
            DomicilioEndpoint.update(saved);
        }
    }

    useEffect(() => {
        DomicilioEndpoint.findAll().then(setDomicilios);
    },[])

    return(
        <div>
            {domicilios?.length! > 0 && (
            <div>
            <TextField placeholder= "Nombre Edificio" value={nombreEdificio} onChange={e => setNombreEdificio(e.target.value)}/>
                <div>
                <RadioGroup label="domicilios" theme="vertical">
                {domicilios && domicilios.map((dom) => (
                        <RadioButton key={dom.id} value={String(dom.id)} onClick={()=>{setDomicilioSelect(dom)}} label={`${dom.ciudad}: ${dom.calle} ${dom.numero}`} />
                ))
                }
                </RadioGroup>
                </div>

            {!edificioOriginal && 
                <Button theme="primary" onClick={addEdificio}>Agregar edificio</Button>
            }
            {
                edificioOriginal &&
                    <Button theme="primary" onClick={updateEdificio}>Actualizar edificio</Button>
            }
            </div>
            )
            }
            {domicilios?.length == 0 && (
                <h2>Necesita crear un domicilio antes de continuar!</h2>
            )}
            

            
        </div>
    )
}