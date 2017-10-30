a = document.getElementById('first_value').value;
b = document.getElementById('second_value').value;
const setResult = result => document.getElementById('result').innerHTML = `Результат: ${result}`; 
const addition = (a, b) => {

    result = parseInt(a) + parseInt(b); 
    setResult(`${a} + ${b} = ${result}`);
  };

  const multiplication = (a, b) => {
    result = parseInt(a) * parseInt(b); 
    setResult(`${a} * ${b} = ${result}`);
  };

  const division = (a, b) => {
    result = parseInt(a) / parseInt(b); 
    setResult(`${a} / ${b} = ${result}`);
  };

  const minus = (a, b) => {
    result = parseInt(a) - parseInt(b); 
    setResult(`${a} - ${b} = ${result}`);
  };