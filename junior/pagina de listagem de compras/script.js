let list = [];

document.getElementById("renameBtn").onclick = () => {
  const newName = prompt("Renomear a lista:");
  document.querySelector("h1").innerText = newName;
};

document.getElementById("createBtn").onclick = () => {
  const name = document.querySelector("input[type=text]").value;
  const qtd = document.querySelector("input[type=number]").value;

  if (name) {
    list.push({ n: name, q: !qtd ? 1 : qtd, c: false });
    renderList();
    document.querySelector("input[type=text]").value = null;
    document.querySelector("input[type=number]").value = null;
  }
};

function renderList() {
  document.getElementById("list").innerHTML = null;
  list.forEach(({ n, q, c }, i) => {
    document.getElementById("list").innerHTML += `
        <div class="item">
                <label class="checkbox">
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </label>
                <span class="title">${n}</span>
                <span class="qtd">QTD: ${q}</span>
                <button onclick="del(${i})">🗑</button>
            </div>
        `;
  });
}

function del(id) {
  const newList = [];
  list.forEach((e, i) => {
    if (id !== i) {
      newList.push(e);
    }
  });
  list = newList;
  renderList();
}
