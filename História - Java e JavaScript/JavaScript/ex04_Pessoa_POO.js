//Orientação a Objeto
// Javascript (Prototipagem e Flexibilidade)
//JavaScript permite criar Objetos sem classes, usando o protótipos ou a plavra-chave class. 

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    } saudacao() {
        console.log("Olá,meu nome é " + this.nome);
    }
}
const pessoa = new Pessoa("Gabriela");
pessoa.saudacao();
        
    
