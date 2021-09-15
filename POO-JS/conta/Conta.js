export class Conta{
    
    constructor(saldoInicial, cliente, agencia) {

        if(this.constructor == Conta) {
            throw new Error("Você não deveria instanciar um objeto do tipo Conta DIRETAMENTE, esta é uma classe ABSTRATA.");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor) {
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    //Método abstrato
    sacar(valor) {
        throw new Error("Você esta chamando um método ABSTRATO da da classe CONTA.")
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa*valor;
        if(this._saldo >= valorSacado) {
            this._saldo -= valorSacado; 
            return valorSacado;
        }

        return 0;
    }

    depositar(valor) {
        this._saldo += valor;
    }

    tranferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}