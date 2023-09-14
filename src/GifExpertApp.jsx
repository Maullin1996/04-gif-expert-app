import { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {


    const [Categories, setCategories] = useState(['Batman']);

    const onAddCategory = ( newCategory ) =>{
        if ( Categories.includes(newCategory) ) return;
        //Forma 1.
        setCategories([...Categories, newCategory]);
        //Forma 2.
        //setCategories(cat => [...cat, 'Batman'];
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