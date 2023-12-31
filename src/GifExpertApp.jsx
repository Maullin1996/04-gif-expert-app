import { useState } from 'react';
import { AddCategory, DeleteCat, GifGrid  } from './Components';
import PropTypes from 'prop-types';

export const GifExpertApp = () => {


    const [Categories, setCategories] = useState(['One Piece']);

    const onAddCategory = ( newCategory ) =>{
        if ( Categories.includes(newCategory) ) return;
        setCategories([ newCategory,...Categories ]);

    }

    const OnNewArray = ( NewArray ) => {
    const index = Categories.indexOf(NewArray);
        if(index > -1) {
            Categories.splice(index, 1);
        }
        
        setCategories([ ...Categories ]);

    }

    return (
        <>

        <h1>GifExpertApp</h1>



        <AddCategory 

        
            onNewCategory = { (event) => onAddCategory(event) }

        />

        <br/>

        {      
            <DeleteCat 
            DeleteCaregory={ (event) =>  OnNewArray(event) }
            />
        }



        { 
            Categories.map( category => (
                <GifGrid key = { category } 
                category={ category }/>
            ))
        }

        
        </>
    )
}