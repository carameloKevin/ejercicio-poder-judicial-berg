import Domicilio from "Frontend/generated/com/example/application/Domicilio";

export function CartaDomicilio({calle, ciudad, numero}: Domicilio){
    return(
        <div className="carta-domicilio">
            <ul>
                <li>{ciudad}</li>
                <li>{calle}</li>
                <li>{numero}</li>
            </ul>
        </div>
    )
}