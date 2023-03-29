class Livro{
    constructor(pNome){
        this.nome = pNome
    }

    get Nome(){
        return this.nome
    }

    get Nome(pNome){
        this.nome = pNome
    }
}

var obi_livro1 = new Livro("Use a cabeça Java")
console.log("Nome do Livro: " + obi_livro1)