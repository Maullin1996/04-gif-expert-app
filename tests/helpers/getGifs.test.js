import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas en getGifs()', () => {

    test('Debe de retornar arreglo de gifs', async() => {

        const gifs = await getGifs('One Punch');
        //console.log(gifs);
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            tittle: expect.any( String ),
            url: expect.any( String )
        });
    });
});