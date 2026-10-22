/*
alert('Hello, world!')
*/
var resp = window.document.getElementById('saida');

//lembre se que toda variavel 
//veja mais sobre escopo

function acao1() {
    resp.innerHTML += '<p>Clicou no primeiro botao</p>';
    let a = prompt("informe um numero");
    
    if (a == 6) { 
        resp.innerHTML += '<h1>Igual a 6</h1>';
    } else {
        resp.innerHTML += '<h1>Diferente de 6</h1>';
    }
}
/*
function acao2() {
    resp.innerHTML += '<p>Clicou no segundo botao</p>'

    switch(prompt("como esta o tempo? use chuvoso,ensola";
'*/