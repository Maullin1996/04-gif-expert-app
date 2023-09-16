import { useState } from 'react';
import { AddCategory, GifGrid  } from './Components';

export const GifExpertApp = () => {


    const [Categories, setCategories] = useState(['One Piece']);

    const onAddCategory = ( newCategory ) =>{
        if ( Categories.includes(newCategory) ) return;
        setCategories([ newCategory,...Categories ]);

    }

    return (
        <>

        <h1>GifExpertApp</h1>

        <AddCategory 
        
            onNewCategory = { (event) => onAddCategory(event) }

        />



        { 
            Categories.map( category => (
                <GifGrid key = { category } 
                category={ category }/>
            ))
        }

        
        </>
    )
}