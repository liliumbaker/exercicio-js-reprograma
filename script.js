const input = document.getElementById("newsInputEmail");
const botaoResposta = document.querySelector(".news__button");
function validateEmail(){
let x = xname.value;
if (x==""){
  alert("é necessário preencher seu email");
  return false;

}
}

botaoResposta.addEventListener("click", function(event){
  event.preventDefault();
  const resposta = document.createElement("span");
  const respostaMensagem = document.createTextNode("Email cadastrado com sucesso!");
  resposta.appendChild(respostaMensagem);
  console.log(input.parentNode);
  const elementoPai = input.parentNode;
  elementoPai.insertBefore(resposta, input);

});
