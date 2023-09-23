import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/Components/GifItem';

describe('Pruebas en <GifItem/>', () => {
    
    const tittle = 'Saitama';
    const url    = 'https://one-punch.com/saitama.jpg';

    test('Debe de hacer march con el snapshot', () => {

        const { container } =render( <GifItem tittle={ tittle } url= {url} /> );

        expect(container).toMatchSnapshot();

    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {

        render( <GifItem tittle={ tittle } url={ url } /> );
        
        //expect( screen.getByRole('img').src ).toBe( url );
        //screen.debug();
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe( url );
        expect(alt).toBe( alt );

    });

    test('Debe de mostrar el titulo en el componente ', () => {

        render( <GifItem tittle={ tittle } url={ url } /> );
        expect( screen.getByText( tittle ) ).toBeTruthy();

    })

});