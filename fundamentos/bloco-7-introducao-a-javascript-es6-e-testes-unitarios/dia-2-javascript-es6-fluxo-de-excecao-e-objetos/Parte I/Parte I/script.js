
function verifyField(value1, value2) {
  if (value1 === '' || value2 === ''){
    throw new Error('Preencha os dois campos corretamente')
  }
  if (typeof value1 !== 'number' || typeof value2 !== 'number'){
    throw new Error('Os valores devem ser numéricos')
  }
}
function sum(value1, value2) {
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    verifyField(value1, value2);
    const result = parseInt(value1) + parseInt(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;  
  } catch(error) {
    document.getElementById('result').innerHTML = `Erro: ${error.message}`; 
  }
  finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
};

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}