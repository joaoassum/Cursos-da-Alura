//Ser autenticavel é ter um método autenticar

export class SistemaDeAutenticacao {

    static login(autenticavel, senha) {
        if(SistemaDeAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);            
        }
        return false;
    }

    static ehAutenticavel(autenticavel) {
        return "autenticar" in autenticavel;
    }
}


