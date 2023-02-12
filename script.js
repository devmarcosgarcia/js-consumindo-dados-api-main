async function buscaEndereço(cep){
    var mesnsagemErro = document.getElementById('erro')
    mesnsagemErro.innerHTML = ""
    try{
    var consultaCEP = await fetch(`http://viacep.com.br/ws/${cep}/json`)
    var consultaCEPConvertida = await consultaCEP.json()

        if(consultaCEPConvertida.erro){
            throw Error('CEP não existente!')
        }

        var cidade = document.getElementById('cidade')
        var logradouro = document.getElementById('endereco')
        var estado = document.getElementById('estado')
        var bairro = document.getElementById('bairro')

        cidade.value = consultaCEPConvertida.localidade
        logradouro.value = consultaCEPConvertida.logradouro
        estado.value = consultaCEPConvertida.uf
        bairro.value = consultaCEPConvertida.bairro
    
        console.log(consultaCEPConvertida)
        return consultaCEPConvertida

    }catch(erro){
        mesnsagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
        console.log(erro);
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereço(cep.value))