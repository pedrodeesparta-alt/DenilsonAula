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
function acao2() {
    resp.innerHTML += '<p>Clicou no segundo botao</p>';

    switch(prompt("como esta o tempo? use chuvoso, ensolarado ou nublado")) {
        case 'chuvoso':
            resp.innerHTML += '<h1>Leve um guarda-chuva</h1>';
            break;
        case 'ensolarado':
            resp.innerHTML += '<h1>Use protetor solar</h1>';
            break;
        case 'nublado':
            resp.innerHTML += '<h1>Talvez chova, fique atento</h1>';
            break;
        default:
            resp.innerHTML += '<h1>Opcao invalida</h1>';
    }
}
function acao3() { 
    resp.innerHTML += '<p>Clicou no terceiro botao</p>';
    let numero = prompt("informe outro numero");
    for (let i = 0; i < numero; i++) {
        resp.innerHTML += '<p>paragrafo: ' + i + '</p>';
    }

}
function acao4() {
    resp.innerHTML += '<p>Clicou no quarto botao</p>';
    let x = prompt("informe um numero");
    while (x <= 10) {
        resp.innerHTML += '<p>linha: ' + x + '</p>';
        x++;
    }

}

function acao5() {
    resp.innerHTML += '<p>Clicou no quinto botao</p>';
    let x = prompt("informe um numero");
    do {
        resp.innerHTML += '<p>linha: ' + x + '</p>';
        x++;
    } while (x <= 10);
}
function acao6() {
    resp.innerHTML += '<p>Clicou no sexto botao</p>';

    var myarray = [1, 2, 3, 4, 5,6,7,8,9,10,11];
    myarray.forEach(function(value,key) {
        resp.innerHTML += '<p>chave: ' + key + ', valor: ' + value + '</p>';
    });
}
function acao7() {
   let entrada ='bem vindo' + prompt("informe seu nome");
   let saldacao = document.getElementById('titulo');
   saldacao.innerHTML = entrada;

   const collector = document.getElementsByName('animal');
   for (let i = 0; i < collector.length; i++) {
       if (collector[i].type == 'checkbox') {
           if (collector[i].checked) {
               
            resp.innerHTML += 'Clicou no setimo botaoo'

            document.getElementsByTagName('p')[1].innerHTML = 'texto paragrafo 2 substituido com sucesso!';
            let teste = document.getElementsByName('paragrafo');
            teste[1].textContent = 'texto do paragrafo com name paragrafo substituido com sucesso!';
            substituido com sucesso!

            function acao8() {
    resp.innerHTML += '<p>Clicou no oitavo botão</p>';

    function calcularArea() {
        let area = 3 * 5;
        resp.innerHTML += '<h1>Área total: ' + area + '</h1>';
    }

    calcularArea();
}

function acao9() {
    resp.innerHTML += '<p>Clicou no nono botão</p>';

    let largura = prompt("Informe largura");
    let altura = prompt("Informe altura");

    function getArea(width, height) {
        let calculateArea = width * height;
        return calculateArea;
    }

    let area = getArea(largura, altura);
    resp.innerHTML += '<h1>Área total: ' + area + '</h1>';
}
            }
       }
   }
}
