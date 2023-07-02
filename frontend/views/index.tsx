
import { Button } from "@hilla/react-components/Button.js";
import { TextField } from "@hilla/react-components/TextField.js";
import { CartaEdificio } from "Frontend/components/cartas/cartaEdificio";
import Dependencia from "Frontend/generated/com/example/application/Dependencia";
import Domicilio from "Frontend/generated/com/example/application/Domicilio";
import Edificio from "Frontend/generated/com/example/application/Edificio";
import { EdificioEndpoint, DomicilioEndpoint, DependenciaEndpoint } from "Frontend/generated/endpoints";
import { useEffect, useState } from "react";

export function IndexView(){

    const [edificios, setEdificios] = useState<Edificio[]>([]);
    const [domicilios, setDomicilios] = useState<Domicilio[]>([]);
    const [dependecias, setDependencias] = useState<Dependencia[]>([])
    
    const [edificio, setEdificio] = useState<Edificio>();
    const [nombre, setNombre] = useState(String);

    const [domicilio, setDomicilio] = useState<Domicilio>();
    const [calle, setCalle] = useState(String);
    const [numero, setNumero] = useState(String);
    const [ciudad, setCiudad] = useState(String);
    
    const id = 0;
    
    useEffect(() => {
        EdificioEndpoint.findAll().then(setEdificios);
        DomicilioEndpoint.findAll().then(setDomicilios);
        DependenciaEndpoint.findAll().then(setDependencias);
        console.log(dependecias);
        console.log(edificios);
    }, [])

    async function addDomicilio(){
        const saved = await DomicilioEndpoint.add(ciudad, calle, numero);
        console.log(saved);
        if(saved){
            console.log(saved);
            setDomicilio(saved);
            setDomicilios([...domicilios, saved]);
        }
    }

    async function addEdificio(){
        const saved = await EdificioEndpoint.add(nombre, domicilio!);   //Asegurarme del ! que hace que typescript confie que es noNull
        if(saved){
            setEdificios([...edificios, saved]);
        }
    }
    
    async function addDependencia(nombreDependencia:string, id:number){
        const nuevaDepen = await DependenciaEndpoint.add(nombreDependencia);
        EdificioEndpoint.addDependenciaToEdifcio(id, nuevaDepen);
        
        setDependencias([...dependecias, nuevaDepen]);
    }


    return (
        <div className="p-m">
            <h1>Index View Exitoso!</h1>

            <div className="flex gap-s">
                <TextField value={calle} onChange={e => setCalle(e.target.value)}/>
                <TextField value={numero} onChange={e => setNumero(e.target.value)}/>
                <TextField value={ciudad} onChange={e => setCiudad(e.target.value)}/>

                <Button theme="primary" onClick={addDomicilio}>Add Domicilio</Button>
            </div>
            <div>
                <TextField value={nombre} onChange={e => setNombre(e.target.value)}/>   
                <Button onClick={addEdificio}>agregar edificio</Button>
            </div>

            <div>
                <h2>Edificios</h2>
                {edificios.map(ed => (
                    //<CartaEdificio domicilio={ed.domicilio} id={ed.id} nombre={ed.nombre} handleAddDependencia=(()=>{handleAddDependency}) />
                    <CartaEdificio {...ed} />
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

            <h2>Dependencia</h2>
            <div>
                {dependecias.map(dep => (
                    <div>
                        <p>{dep.nombre}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}