function enviarMensagem(){
    let campoNome = document.getElementById("nome").value;
    if(campoNome != ""){
        let campoEmail = document.getElementById("email").value;
        if(campoEmail != ""){
            let campoMensagem = document.getElementById("mensagem").value;
            if(campoMensagem != ""){
                abrirModal();   
            }
        }        
    }
}

function esconde(){
    if(hide){
        botao.style.visibility = 'hidden';
    }
}

function desceu(){
    var botao = window.document.getElementById("botao-volta");
    
    var hide = true;

    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){

        botao.style.opacity = '1';
        botao.style.visibility = 'visible';
        botao.style.cursor = 'pointer'
        hide = false;

    }else if (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100){
        botao.style.opacity = '0';
        botao.style.cursor = 'auto';
        hide = true;
        window.setTimeout(esconde, 300);
        
        // BASICAMENTE É PRA O CODIGO DENTRO DO TIMEOUT ESPERAR UM TEMPO PARA SER ACIONADO
        // ELE TAVA SUMINDO ANTES DA TRANSIÇÃO, POR ISSO O TEMPO DE ESPERA
    }
}

function abrirModal(){
    document.getElementById("myModal").style.display = "block";
}

function fecharModal(){
    document.getElementById("myModal").style.display = "none";
}
