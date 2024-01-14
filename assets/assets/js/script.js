/* por tag,: getElementByTagName()*/
/*Por id: getElementById() */
/* Por nome: getelementsByName() */
/* por classe: getElementsByClassName()*/
/* por seletor: querySelector() */



let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let dataAge = document.querySelector('#dataAge')
let nomeok = false
let emailok = false
let dataok = false


nome.style.width = "50%"
email.style.width = "50%"

function validNome(){
    let txtnome = document.querySelector("#txtnome")
    if(nome.value.length < 3){
        txtnome.innerHTML = "nome invalido"
        txtnome.style.color = "red"
    }else {
        txtnome.innerHTML = "nome valido"
        txtnome.style.color = "green"
        nomeok = true
    }
}

function validemail(){
    let txtemail = document.querySelector("#txtemail")

    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtemail.innerHTML = "e-mail invalido"
        txtemail.style.color = "red"

    }else {
        txtemail.innerHTML = "email valido"
        txtemail.style.color = "green"
        nomeok = true
    }
}

function validadata(){
    let txtdata = document.querySelector("#txtdata")

    let dataAge = new date(document.querySelector("#dataAge").value);

    if(dataAge.length == 8){
        txtdata.innerHTML = "data valida"
        txtdata.style.color = "green"
        dataok = true
    }else{
        txtdata.innerHTML = "data invalida"
        txtdata.style.color = "red"
    }
   
}

function enviar(){
    if(nomeok == true && emailok == true && dataok == true) {
        alert ("agendamento feito com sucesso")
    }else {
        alert ("preencha todos os campos")
    }
}