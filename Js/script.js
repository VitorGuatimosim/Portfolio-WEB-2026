
/* Função que faz as verificações do formulário de envio de mensagem*/
function enviarMensagem(){
    let campoNome = document.getElementById("nome").value;
    if(campoNome != ""){
        let campoEmail = document.getElementById("email").value;
        if(campoEmail != ""){
            let campoMensagem = document.getElementById("mensagem").value;
            if(campoMensagem != ""){

                /* Após as verificações exibe o modal de aviso e limpa o formulário*/
                abrirModal();
                document.getElementById("nome").value = "";
                document.getElementById("email").value = "";
                document.getElementById("mensagem").value = "";

                /* Adiciona o listener para que o modal feche ao ser clicado em qualquer lugar da tela */
                window.addEventListener("click", 
                    function(event){
                        if(event.target == document.getElementById("modal-form")){
                            fecharModal();
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

/* Função para esconder o botão que volta rapidamente ao topo da tela */
function esconde(){
    if(hide){
        botao.style.visibility = 'hidden';
    }
}


/* Essa função controla a descida (scroll) para exibir/esconder o botão de voltar rapidamente ao topo*/
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
        /* Uma função de espera para gerar uma transição ao esconder o botão para que ele suma suavemente*/

    }
}