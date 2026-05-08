function enviarMensagem(){
    let campoNome = document.getElementById("nome").value;
    if(campoNome != ""){
        let campoEmail = document.getElementById("email").value;
        if(campoEmail != ""){
            let campoMensagem = document.getElementById("mensagem").value;
            if(campoMensagem != ""){
                abrirModal();
                document.getElementById("nome").value = "";
                document.getElementById("email").value = "";
                document.getElementById("mensagem").value = "";

                // ADICIONA UM EVENTO QUE ESPERA O CLIQUE FORA DO MODAL PARA FECHA-LO
                window.addEventListener("click", 
                    function(event){
                        if(event.target == document.getElementById("modal-form")){
                            document.getElementById("modal-form").style.display = "none";
                        }
                    }, false)
            }
        }        
    }
}

function abrirModal(){
    document.getElementById("modal-form").style.display = "block";
}

function fecharModal(){
    document.getElementById("modal-form").style.display = "none";
}

function esconde(){
    if(hide){
        botao.style.visibility = 'hidden';
    }
}

function desceu(){
    let botao = window.document.getElementById("botao-volta");
    
    let hide = true;

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
