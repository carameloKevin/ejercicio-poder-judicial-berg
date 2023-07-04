import Domicilio from "Frontend/generated/com/example/application/Domicilio";

export function CartaDomicilio({calle, ciudad, numero}: Domicilio){
    return(
        <div className="carta-domicilio">
        <div>
            <h4>Domicilio</h4>
            <ul>
                <li>Ciudad: {ciudad}</li>
                <li>Direccion: {calle} {numero}</li>
            </ul>
        </div>
        </div>
    )
}