import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"


describe('Pruebas en el compoenente GifExpertApp', () => {
  
  const inputValue = 'Saitama'
  
  test('Agregar nueva categoria', () => {
    //Obtenemos el container
    const { container } = render(<GifExpertApp/>);
    // console.log('container :>> ', container);
    //obtenemos le imput y el form
    const input =screen.getByRole('textbox');
    const form =screen.getByRole('form');
    
    //Dispara los evenetos para a;adir las categorias
    fireEvent.input(input,{ target: { value:inputValue }});
    fireEvent.submit( form );
    
    fireEvent.input(input,{ target: { value:inputValue + '2' }});
    fireEvent.submit( form );
    
    // screen.debug();
    expect( container.getElementsByClassName('card-grid').length).toBe(3);
  })

  test('no debe de agregar una categoria si la categoria ya existe', () => {
    //Obtenemos el container
    const { container } = render(<GifExpertApp/>);
    // console.log('container :>> ', container);
    //obtenemos le imput y el form
    const input =screen.getByRole('textbox');
    const form =screen.getByRole('form');
    
    //Dispara los evenetos para a;adir las categorias
    fireEvent.input(input,{ target: { value:inputValue }});
    fireEvent.submit( form );
    
    fireEvent.input(input,{ target: { value:inputValue }});
    fireEvent.submit( form );
    
    // screen.debug();
    expect( container.getElementsByClassName('card-grid').length).toBe(2);
  })
})