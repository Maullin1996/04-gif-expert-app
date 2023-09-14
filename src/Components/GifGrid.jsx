import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    useEffect( () =>{
        getGifs(category);
    }, [] )

    
    return (
        <>

            <h3>{ category }</h3>
        </>
    )
}

/* El useEffect es un hook de react que sirve para disparar efectos
segudarios, el cual es un procesp el cual  se quiere ejecutar cuando 
algo sucesa ejemplo, cuando el counter cambie yo quiero disparar un
efecto*/
