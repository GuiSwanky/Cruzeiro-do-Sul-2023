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
}

var obi_livro1 = new Livro("Use a cabeça Java")
//console.log("Nome do Livro: " + obi_livro1)
console.log("O Livro " + obi_livro1.nome + " custa: " + obi_livro1.preco + " reais")