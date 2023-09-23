import { render,screen } from "@testing-library/react"
import { GifGrid } from "../../src/Components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');


describe('Pruebas en <GifGrid', () => {

    useFetchGifs.mockReturnValue({
        images: [],
        isLoading: true
    });    

    const category = 'One Punch'

    test('Debe de mostrar el loading inicialmente', () => {

        render( <GifGrid category= { category } /> );
        //screen.debug();
        expect( screen.getByText( 'Cargando...' ) );
        expect( screen.getByText( category ) );

    });

    test('Debe de mostrar items cuando se cargan las imágenes desde useFetchGif', () => {

        const gifs = [{
            id: 'ABC',
            title: 'Saitama',
            url: 'https://localhost/saitama.jpg'
        },
        {
            id: '123',
            title: 'goku',
            url: 'https://localhost/goku.jpg'
        }
    ] 

    useFetchGifs.mockReturnValue({
        images: gifs,
        isLoading: true
    });
    

        render( <GifGrid category= { category } /> );

        expect( screen.getAllByRole('img').length ).toBe(2);

        //screen.debug();

    });


});