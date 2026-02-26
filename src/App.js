import { useState } from 'react';
import Buttons from './components/Buttons';
import Input from './components/Input';

import { Container, Content, Row } from './styles';



const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation()
  };
  const handleAddNumber = (number) => {
      setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleSumNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleSubNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMultNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('X')
    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleDivNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('/')
    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleEquals = () => {
    if(firstNumber != '0' && operation != '' && currentNumber != ''){
       switch(operation){
          case '+': 
            handleSumNumbers();
            break;
          case '-': 
            handleSubNumbers();
            break;
          case 'X': 
            handleMultNumbers();
            break;
          case '/': 
            handleDivNumbers();
            break;
          default: 
            break;
       }
    } 
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
         <Row>
          <Buttons label="0" onClick={() => handleAddNumber('0')}/>
          <Buttons label="/" onClick={handleDivNumbers}/>
          <Buttons label="C" onClick={handleOnClear}/>
          <Buttons label="X" onClick={handleMultNumbers}/>
        </Row>
         <Row>
          <Buttons label="7" onClick={() => handleAddNumber('7')}/>
          <Buttons label="8" onClick={() => handleAddNumber('8')}/>
          <Buttons label="9" onClick={() => handleAddNumber('9')}/>
          <Buttons label="-" onClick={handleSubNumbers}/>
        </Row>
        <Row>
          <Buttons label="4" onClick={() => handleAddNumber('4')} />
          <Buttons label="5" onClick={() => handleAddNumber('5')}/>
          <Buttons label="6" onClick={() => handleAddNumber('6')}/>
          <Buttons label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Buttons label="1" onClick={() => handleAddNumber('1')}/>
          <Buttons label="2" onClick={() => handleAddNumber('2')}/>
          <Buttons label="3" onClick={() => handleAddNumber('3')}/>
          <Buttons label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
