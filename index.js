const inputItem = document.getElementById("input");
const lista = document.getElementById("lista");



const { body } = document;



const botaoSalvar = document.getElementById("salvar");
botaoSalvar.addEventListener("click", () => {
  const todo = document.createElement("span");
  const todoValue = input.value;
  todo.innerText = input.value;
  lista.appendChild(todo);

  // Armazenar no LocalStorage.
  localStorage.setItem(localStorage.length + 1, todoValue);
  console.log(todoValue)
})


// "Editar um item" , no caso Button de Save para Salvar.
botaoSalvar.innerText = "Salvar";


// "Apagar um item ja criado" , no caso o Button para carregar.
const botaoCarregar = document.getElementById("carregar");
botaoCarregar.remove();


// Use estilos de preferência.
lista.style = `
background-color: #f5f6f1;
font-family: 'Dancing Script', cursive;
font-size: 24px;
font-weight: bold;
position: absolute;
color: #454545;
padding: 20px;
width: 300px;
border-radius: 8px 0 0 8px;
border: solid 2px;
display: flex;
flex-direction: column;
left: 50%;
top: 40%;
`

body.style = `
background-color: #EFEAD8;
font-family: 'Dancing Script', cursive;
`

h1.style = `
font-family: 'Dancing Script', cursive;
font-size: 48px;
color: #c75c07;
width: 280px;
position: absolute;
top: 50px;
left: 40%;
border-bottom: solid 4px;
`

input.style = `
background-color: #f5f6f1;
color: #454545;
font-family: 'Dancing Script', cursive;
font-size: 20px;
position: absolute;
top: 40%;
left: 30%;
width: 200px;
border: solid 2px;
border-radius: 0 8px 8px 0;
`

salvar.style = `
color: #454545;
font-family: 'Dancing Script', cursive;
position: absolute;
top: 50%;
left: 30%;
border: solid 2px;
border-radius: 0 8px 8px 0;
`

carregar.style = `
color: #454545;
font-family: 'Dancing Script', cursive;
position: absolute;
top: 55%;
left: 30%;
border: solid 2px;
border-radius: 0 8px 8px 0;
`

