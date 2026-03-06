function mensagem(){

const dicas = [
"Respire fundo por alguns minutos.",
"Fale sobre seus sentimentos.",
"Pratique atividades físicas.",
"Durma bem e cuide da sua mente.",
"Tire um tempo para você."
]

let numero = Math.floor(Math.random() * dicas.length)

document.getElementById("dica").innerText = dicas[numero]

}

// abrir chat
function abrirChat(){
document.getElementById("chat").style.display="flex"
}

// fechar chat
function fecharChat(){
document.getElementById("chat").style.display="none"
}

// enviar mensagem
function enviarMensagem(){

let input = document.getElementById("entrada")
let texto = input.value.toLowerCase()

if(texto.trim() === "") return

let chat = document.getElementById("mensagens")

// mensagem usuário
chat.innerHTML += `<p class="user">${texto}</p>`

let resposta=""

// respostas do bot
if(texto.includes("oi") || texto.includes("olá")){
resposta="Olá 😊 fico feliz que você veio conversar comigo."
}

else if(texto.includes("triste") || texto.includes("depressivo")){
resposta="Sinto muito que você esteja se sentindo assim. Quer conversar sobre o que está acontecendo?"
}

else if(texto.includes("ansioso") || texto.includes("ansiedade")){
resposta="A ansiedade pode causar pensamentos acelerados. Vamos tentar respirar profundamente por alguns segundos."
}

else if(texto.includes("sozinho") || texto.includes("solidão")){
resposta="A solidão pode ser difícil. Você gostaria de falar sobre o que está sentindo?"
}

else if(texto.includes("feliz")){
resposta="Que bom ouvir isso 😊 O que aconteceu de bom hoje?"
}

else if(texto.includes("bem")){
resposta="Que bom saber disso 😊 Mesmo assim estou aqui se quiser conversar."
}

else if(texto.includes("mal") || texto.includes("ruim")){
resposta="Entendo... momentos difíceis acontecem. Quer dividir comigo o que está sentindo?"
}

else if(texto.includes("obrigado")){
resposta="Eu que agradeço por conversar comigo 💚"
}

else{
resposta="Estou aqui para ouvir você. Conte um pouco mais."
}

// resposta do bot
setTimeout(()=>{
chat.innerHTML += `<p class="bot">${resposta}</p>`
chat.scrollTop = chat.scrollHeight
},800)

input.value=""

}