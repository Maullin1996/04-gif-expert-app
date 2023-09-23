import { useState } from 'react';

export const DeleteCat = ({ DeleteCaregory }) => {

    const [inputValue, setNewValue] = useState('');

    const onInputCange = ({target}) => {
        setNewValue( target.value );
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if( inputValue.trim().length <=1 ) return;

        DeleteCaregory( inputValue.trim() );

        setNewValue('');
    }

    return (
        <form onSubmit={ (event)=> onSubmit(event) } >
            <input
                type = "text"
                placeholder= "Delete gifs"
                value = {inputValue}
                onChange ={ onInputCange }
            />
        </form>
    )
}
