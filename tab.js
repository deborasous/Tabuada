function gerar() {
  let numb = document.querySelector('#num')
  let tab = document.querySelector('#tab')

  let num = Number(numb.value)
  let cont = 1
  tab.innerHTML = '' 



//1-, vamos arranjar um meio de pegar o valor do radiobutton para saber qual a operaçao o usuário selecionou

var radioValue = document.mainForm.operat.value;

//2-Switch case que vai funcionar como 04 ifs diferentes, para ver qual foi o radio que o usuario selecionou

switch (radioValue) {
case  '1':
  console.log('Voce escolheu soma');
    while (cont <= 10) {
          let item = document.createElement('option')
          item.text = `${num} + ${cont} = ${num+cont}`
          item.value = `tab${cont}` 
          tab.appendChild(item)
          cont++
    }
  
break;
case '2':
  console.log('Voce escolheu subtracao');
   while (cont <= 10) {
          let item = document.createElement('option')
          item.text = `${num} - ${cont} = ${num-cont}`
          item.value = `tab${cont}` 
          tab.appendChild(item)
          cont++
    }
break;
case '3':
  console.log('Voce escolheu multipicacao');
  while (cont <= 10) {
          let item = document.createElement('option')
          item.text = `${num} x ${cont} = ${num*cont}`
          item.value = `tab${cont}` 
          tab.appendChild(item)
          cont++
    }
break;
case '4':
  while (cont <= 10) {
          let item = document.createElement('option')
          item.text = `${num} / ${cont} = ${num/cont}`
          item.value = `tab${cont}` 
          tab.appendChild(item)
          cont++
    }
break;
default:
  console.log('selecione uma opcao');
}


}