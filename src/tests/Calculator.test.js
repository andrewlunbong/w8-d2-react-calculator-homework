import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';



describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should be able to add', ()=>{
    const number1 = container.getByTestId("number1");
    const number4 = container.getByTestId("number4");
    const add = container.getByTestId("operator-add")
    const equal = container.getByTestId("operator-equals")
    fireEvent.click(number1)
    fireEvent.click(add)
    fireEvent.click(number4)
    fireEvent.click(equal)
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('5')
  })

  it('should be able to subtract', ()=>{
    const number7 = container.getByTestId("number7");
    const number4 = container.getByTestId("number4");
    const subtract = container.getByTestId("operator-subtract")
    const equal = container.getByTestId("operator-equals")
    fireEvent.click(number7)
    fireEvent.click(subtract)
    fireEvent.click(number4)
    fireEvent.click(equal)
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3')
  })

  it('should be able to multiply', ()=>{
    const number3 = container.getByTestId("number3");
    const number5 = container.getByTestId("number5");
    const multiply = container.getByTestId("operator-multiply")
    const equal = container.getByTestId("operator-equals")
    fireEvent.click(number3)
    fireEvent.click(multiply)
    fireEvent.click(number5)
    fireEvent.click(equal)
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('15')
  })

  it('should be able to divide', ()=>{
    const number2 = container.getByTestId("number2");
    const number1 = container.getByTestId("number1");
    const number7 = container.getByTestId("number7");
    const divide = container.getByTestId("operator-divide")
    const equal = container.getByTestId("operator-equals")
    fireEvent.click(number2)
    fireEvent.click(number1)
    fireEvent.click(divide)
    fireEvent.click(number7)
    fireEvent.click(equal)
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3')
  })


  it('should be able to concatenate multiple number button clicks', ()=>{
    const number2 = container.getByTestId("number2");
    const number1 = container.getByTestId("number1");
    const equal = container.getByTestId("operator-equals")
    fireEvent.click(number2)
    fireEvent.click(number1)
    fireEvent.click(number2)
    fireEvent.click(number2)
    fireEvent.click(number1)
    fireEvent.click(number2)
    fireEvent.click(equal)
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('212212')
  })

  it('should be able to chain multiple operations together', ()=>{
    const number2 = container.getByTestId("number2");
    const number1 = container.getByTestId("number1");
    const number9 = container.getByTestId("number9");
    const subtract = container.getByTestId("operator-subtract")
    const equal = container.getByTestId("operator-equals")
    const add = container.getByTestId("operator-add")
    fireEvent.click(number2)
    fireEvent.click(add)
    fireEvent.click(number1)
    fireEvent.click(subtract)
    fireEvent.click(number2)
    fireEvent.click(equal)
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('1')
  })

  it('should be able to clear the running total without affecting the calculation', ()=>{
    const number2 = container.getByTestId("number2");
    const number1 = container.getByTestId("number1");
    const number9 = container.getByTestId("number9");
    const subtract = container.getByTestId("operator-subtract")
    const equal = container.getByTestId("operator-equals")
    const add = container.getByTestId("operator-add")
    fireEvent.click(number2)
    fireEvent.click(add)
    fireEvent.click(number1)
    fireEvent.click(subtract)
    fireEvent.click(number2)
    fireEvent.click(equal)
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('1')

  })

  it('should be able to clear the running total without affecting the calculation', ()=>{
    const number1 = container.getByTestId("number1");
    const number4 = container.getByTestId("number4");
    const number2 = container.getByTestId("number2");
    const add = container.getByTestId("operator-add")
    const subtract = container.getByTestId("operator-subtract")
    const equal = container.getByTestId("operator-equals")
    const clear = container.getByTestId("clear")
    fireEvent.click(number4)
    fireEvent.click(add)
    fireEvent.click(number4)
    fireEvent.click(clear)
    fireEvent.click(subtract)
    fireEvent.click(number2)
    fireEvent.click(equal)
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('2')
  })

  

})










