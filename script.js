// Métodos DOM
const form = document.querySelector("#form-tarefa");
const inputTarefa = document.querySelector("#tarefa");
const contador = document.querySelector("#contador");
const listaTarefas = document.querySelector("#lista-tarefas");

// Resgate de tarefas do localStorage 
const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []; 

// Ouvir e agir sobre o clique 
form.addEventListener("submit", adicionarTarefa);

// Funções 
function adicionarTarefa(event) {
    event.preventDefault();
    const texto = inputTarefa.value.trim(); // <-- Mudou de 'text' para 'texto' aqui
    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }
    const novaTarefa = {
        id: Date.now(),
        texto: texto,
        concluida: false
    };
    tarefas.push(novaTarefa);
    salvarTarefa();
    inputTarefa.value = "";
    inputTarefa.focus();
}

function rederizarTarefas() {
    tarefas.forEach(function (tarefa, indice) {
        const linha = document.createAttribute("tr");

        const colunaNumero = document.createAttribute("td");
        colunaNumero.textContent = indice + 1;

        const colunaNome = document.createAttribute("td");
        colunaNome.textContent = tarefa.texto;

        if (tarefa.concluida) {
            colunaNome.classList.add(
                "text-decoration-line-through",
                ""
            );
        } 
     });
}

function salvarTarefa() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}
