var boton1 = document.querySelectorAll("li")[0];
boton1.addEventListener("click", pintarListaFiltrada);
var boton2 = document.querySelectorAll("li")[1];
boton2.addEventListener("click", pintarListaFiltrada);
var boton3 = document.querySelectorAll("li")[2];
boton3.addEventListener("click", pintarListaFiltrada);

function pintarListaFiltrada(event) {
  switch (event.target.value) {
    case 1:
      pintarFotos(filtrarFotos(listaFotos, 1));
      break;
    case 2:
      pintarFotos(filtrarFotos(listaFotos, 2));
      break;
    case 3:
      pintarFotos(filtrarFotos(listaFotos, 3));
      break;
  }
}
