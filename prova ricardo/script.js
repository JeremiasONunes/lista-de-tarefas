let contador = 0;
let inputTarefa = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let areaLista = document.getElementById("areaLista");

function addTarefa() {
  let valorInput = inputTarefa.value.trim();

  if (valorInput) {
    ++contador;

    let novoItem = `<div id="item_${contador}" class="item">
    <div class="item-icone" onclick="marcarTarefa(${contador})">
        <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
    </div>
    <div class="item-nome" onclick="marcarTarefa(${contador})">
        ${valorInput}
    </div>
    <div class="item-botao">
        <button onclick="deletar(${contador})" class="delete">
            <img src="lixeira.png" alt="remover">
        </button>
    </div>
</div>`;

    areaLista.insertAdjacentHTML("beforeend", novoItem);

    inputTarefa.value = "";
    inputTarefa.focus();
  }
}

function deletar(id) {
  var item = document.getElementById(`item_${id}`);
  item.remove();
}

function marcarTarefa(id) {
  var item = document.getElementById(`item_${id}`);
  var icone = document.getElementById(`icone_${id}`);

  if (!item.classList.contains("clicado")) {
    item.classList.add("clicado");
    icone.classList.replace("mdi-circle-outline", "mdi-check-circle");
    areaLista.appendChild(item);
  } else {
    item.classList.remove("clicado");
    icone.classList.replace("mdi-check-circle", "mdi-circle-outline");
  }
}

inputTarefa.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    btnAdd.click();
  }
});
