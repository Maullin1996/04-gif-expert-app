import { useEffect, useState } from 'react';
import { getGifs } from '../getGifs';

export const useFetchGifs = ( category ) => {

    const [images, setimages] = useState([]);
    const [isLoading, setIsLoaiding] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setimages(newImages);
        setIsLoaiding(false);

    }

    useEffect( () =>{
        getImages();
    }, [] )

    return{
        images: images,
        isLoading: isLoading
    }

}
