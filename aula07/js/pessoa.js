const pessoa = {
    nome: "Gabriela",
    idade: 20,
    saudacao: function(){
        return `Olá, meu nome é ${this.nome}, e tenho ${this.idade} anos`
    }
};
console.log(pessoa.nome); // Acessa a propriedade nome
console.log(pessoa.saudacao()); //Executa o método saudação 