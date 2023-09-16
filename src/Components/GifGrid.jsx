import { GifItem } from "./GifItem";
import { useFetchGifs } from "../helpers/hooks/useFetchGifs";



export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    console.log({images, isLoading});

    
    return (
        <>

            <h3>{ category }</h3>

            {
                isLoading && ( <h2> Cargando... </h2> )
            }

            {/* la compuerta and=&& es una forma de hacer un if corto con una sola condición */}

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

