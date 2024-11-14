//Execução Assíncrona
// JavaScript (Promises e async/await)
//JavaScript usa Promises e async/await para lidar com operações assíncronas.

function tarefa() {
    return new Promise
        (resolve => {
            setTimeout(() => {
                resolve("Tarefa em segundo plano em JavaScript!");
            }, 1000);
        });
}
async function executarTarefa() {
    const resultado = await tarefa();
    console.log(resultado);
}
executarTarefa();



