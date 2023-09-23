import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

const inputValue = 'Luffy';

describe('pruebas en <GifExpertApp />', () => {
    test('Dede de agregar la contegoría', () => {
        
        const {container} = render( <GifExpertApp /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // se obtiene el input y el form

        fireEvent.input( input, { target: { value: inputValue} }  );
        fireEvent.submit( form ); //se agrega Luffy

        fireEvent.input( input, { target: { value: inputValue + '2' } }  );
        fireEvent.submit( form ); // Se AGREGA Luffy2


        expect( container.getElementsByClassName('card-grid').length ).toBe( 3 );

    });

    test('No debde de agregar una nueva categoría si ya existe', () => {


        const {container} = render( <GifExpertApp /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue} }  );
        fireEvent.submit( form ); //se agrega Luffy

        fireEvent.input( input, { target: { value: inputValue } }  );
        fireEvent.submit( form ); // Se AGREGA Luffy2

        expect( container.getElementsByClassName('card-grid').length ).toBe( 2 );


    });


});