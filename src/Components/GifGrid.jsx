import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { getGifs } from "../helpers/getGifs";



export const GifGrid = ({ category }) => {

    const [images, setimages] = useState([]);

    const getImages = async() => {
        const newImages = await getGifs( category );
        setimages(newImages);

    }

    useEffect( () =>{
        getImages();
    }, [] )

    
    return (
        <>

            <h3>{ category }</h3>

            <div className="card-grid">

                { images.map( ( image ) => (
                    <GifItem 
                        key={ image.id }
                        { ...image }
                    />
                ) ) }

                


            </div>
        </>
    )
}

/* El useEffect es un hook de react que sirve para disparar efectos
segudarios, el cual es un procesp el cual  se quiere ejecutar cuando 
algo sucesa ejemplo, cuando el counter cambie yo quiero disparar un
efecto*/
