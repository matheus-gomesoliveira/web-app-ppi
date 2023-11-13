import { Interface } from "readline";

function validaNome(nome){
    return (nome.split(" ").length > 2)
}

function validaEmail(email){
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return reg.test(email);
}

export function validaDadosUsuario(usuario){
    var err = []
    
    if(!validaNome(usuario.nome)){
        err.push({erro:"FORM-1", mensagem:"Insira o nome completo!"});
    }

    if(!validaEmail(usuario.email)){
        err.push({erro:"FORM-2", mensagem:"Insira um email válido"})
    }

    return err;
}