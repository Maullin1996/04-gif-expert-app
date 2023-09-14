import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {


    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {

        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <=1) return;

        onNewCategory( inputValue.trim());
        setInputValue('');
    }


    return(
        <form onSubmit={ onSubmit }>
            <input

                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                // una forma onChange={ (event) => onInputChange(event) }
                onChange={ onInputChange }
            
            />
        </form>
    )
}


/*el setInputValue(''); se hace con el fin de borrar lo que se acaba
de escribir en el buscador depues de darle enter */
/*el if( inputValue.trim().length <=1) return; analiza 
si lo que se escribe en el buscador tiene mas de un caracter
con el fin de no llenar la lista de caracteres vacios */
