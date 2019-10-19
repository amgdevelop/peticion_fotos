// Se realiza la peticion a la API

var listaFotos = new Array();
var url = "https://jsonplaceholder.typicode.com/photos";
var miJson = new XMLHttpRequest();
miJson.open("get", url, true);
miJson.send();
miJson.addEventListener("readystatechange", cargarArchivo);

// Se carga  el resultado de la peticion y se pinta
function cargarArchivo(event) {
  if (event.target.readyState == 4 && event.target.status == 200) {
    listaFotos = JSON.parse(event.target.response);

    pintarFotos(listaFotos);
  }
}
