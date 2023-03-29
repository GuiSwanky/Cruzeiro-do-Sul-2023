class Livro{
    constructor(pNome, pPreco){
        this.nome = pNome
        this.preco = pPreco
    }

    get Nome(){
        return this.nome
    }
    set Nome(pNome){
        this.nome = pNome
    }

    get Preco(){
        return this.preco
    }
    set Preco(pNome){
        this.preco = pPreco
    }

    calcularDesconto(pDesconto){
        this.preco = this.preco - pDesconto
    }
}

var obi_livro1 = new Livro("Use a cabeça Java")
//console.log("Nome do Livro: " + obi_livro1)
obi_livro1.calcularDesconto(50)
console.log("O Livro " + obi_livro1.nome + " custa: " + obi_livro1.preco + " reais")-