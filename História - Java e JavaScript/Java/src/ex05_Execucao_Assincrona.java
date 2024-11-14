
// Execução Assíncrona
// Java (Threads)
// Java lida com tarefas assíncronas principalmente através de threads.

public class ex05_Execucao_Assincrona extends Thread {
    @Override
    public void run() {
        System.out.println("Tarefa em segundo plano em Java!");
    }

    public static void main(String[] args) {
        ex05_Execucao_Assincrona tarefa = new ex05_Execucao_Assincrona();
        tarefa.start();
    }
}
