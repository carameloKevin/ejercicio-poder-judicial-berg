
import { Button } from "@hilla/react-components/Button.js";
import { TextField } from "@hilla/react-components/TextField.js";
import Domicilio from "Frontend/generated/com/example/application/Domicilio";
import Edificio from "Frontend/generated/com/example/application/Edificio";
import { EdificioEndpoint, DomicilioEndpoint } from "Frontend/generated/endpoints";
import { useEffect, useState } from "react";

export function IndexView(){

    const [edificios, setEdificios] = useState<Edificio[]>([]);
    const [domicilios, setDomicilios] = useState<Domicilio[]>([]);
    
    const [edificio, setEdificio] = useState<Edificio>();
    const [nombre, setNombre] = useState(String);

    const [domicilio, setDomicilio] = useState<Domicilio>();
    const [calle, setCalle] = useState(String);
    const [numero, setNumero] = useState(String);
    const [ciudad, setCiudad] = useState(String);
    
    const id = 0;
    
    useEffect(() => {
        EdificioEndpoint.findAll().then(setEdificios);
    }, [])

    async function defineDomicilio(){
        //setDomicilio({calle, ciudad, id, numero});
        const saved = await DomicilioEndpoint.add(ciudad, calle, numero);
        if(saved){
            console.log(saved);
            setDomicilio(saved);
            setDomicilios([...domicilios, saved]);
        }
    }

    function defineEdificio(){
        setEdificio({domicilio, id,  nombre});

    }

    async function addEdificio(){
        console.log(domicilio);
        console.log(edificio);
        const saved = await EdificioEndpoint.add(nombre, domicilio!);   //Asegurarme del ! que hace que typescript confie que es noNull
        if(saved){
            setEdificios([...edificios, saved]);
        }
    }
    return (
        <div className="p-m">
            <h1>Index View Exitoso!</h1>

            <div className="flex gap-s">
                <TextField value={calle} onChange={e => setCalle(e.target.value)}/>
                <TextField value={numero} onChange={e => setNumero(e.target.value)}/>
                <TextField value={ciudad} onChange={e => setCiudad(e.target.value)}/>

                <Button theme="primary" onClick={defineDomicilio}>Add Domicilio</Button>
            </div>
            <div>
                <TextField value={nombre} onChange={e => setNombre(e.target.value)}/>
                <Button theme="primary" onClick={defineEdificio}>(Asegurate de tener un domicilio)</Button>        
                <Button onClick={addEdificio}>agregar edificio</Button>
            </div>

            <div>
                <h2>Edificios</h2>
                {edificios.map(ed => (
                    <div>
                        <p>{ed.nombre}</p>
                    </div>
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
        </div>
    )
}