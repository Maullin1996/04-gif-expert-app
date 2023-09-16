import { useState } from 'react';
import { AddCategory, DeleteCat, GifGrid  } from './Components';

export const GifExpertApp = () => {


    const [Categories, setCategories] = useState(['One Piece']);

    const onAddCategory = ( newCategory ) =>{
        if ( Categories.includes(newCategory) ) return;
        setCategories([ newCategory,...Categories ]);

    }

    const OnNewArray = ( NewArray ) => {
        console.log( NewArray);

    }

    return (
        <>

        <h1>GifExpertApp</h1>

        <DeleteCat

            DeleteCaregory={ (event) =>  OnNewArray(event) }
        
        />

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