btn = document.createElement("button");
btn.id = "vns-btn-menu";
btn.style =
  "top: 16px; left: 20px; background: teal; padding: 5px; color: #fff; z-index: 9999; position: fixed;";
btn.innerHTML = "Esconder Contatos";
btn.onclick = function () {
  if (btn.innerHTML.includes("Esconder Contatos")) {
    btn.innerText = "Mostrar Contatos";
    document.querySelector("#side").parentNode.style = "display: none;";
  } else {
    btn.innerText = "Esconder Contatos";
    document.querySelector("#side").parentNode.style = "display: block;";
  }
};

document.querySelector("body").appendChild(btn);
