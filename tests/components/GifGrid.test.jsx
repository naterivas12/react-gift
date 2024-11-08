import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')

describe('pruebas en <GifGrid/>', () => {
  const category = 'One Punch';
  test('debe de mostrar el loafing inicialmente', () => {

    useFetchGifs.mockReturnValue({
      images:[],
      isLoading: true
    })

    render( <GifGrid category={ category }/>);
    // screen.debug()
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText( category ));
  })

  test('debe de mostrar items cuandos e cargan las imagenes useFetchGi', () => {
    const gifs = [
      {
        id:'ABC',
        title:'Saitama',
        url:'https://localhost/saitama.jpg'
      },
      {
        id:'kh',
        title:'lokilo',
        url:'https://localhost/lokilo.jpg'
      },
    ]
    useFetchGifs.mockReturnValue({
      images:gifs,
      isLoading: false
    });
    render( <GifGrid category={ category }/>);
    // screen.debug();
    expect( screen.getAllByRole('img').length).toBe(2);
  })

})