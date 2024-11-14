public class ex04_Pessoa_POO {
    // Orientação a Objeto
    // Java (classes e Objetos)
    // Java usa classes e objetos para a orientação a objetos

    String nome;

    public ex04_Pessoa_POO(String nome) {
        this.nome = nome;
    }
    
    public void saudacao(){
        System.out.println("Olá, meu nome é " + nome);
    }

    public static void main(String[] args) {
        ex04_Pessoa_POO pessoa = new ex04_Pessoa_POO("Gabriela"); 
        pessoa.saudacao();
    }
}
