var listaFotos = new Array();
var seccionFoto = document.getElementById("seccionFoto");
function peticionUrl() {
  var url = "https://jsonplaceholder.typicode.com/photos";
  var miJson = new XMLHttpRequest();
  miJson.open("get", url, true);
  miJson.send();
  miJson.addEventListener("readystatechange", cargarArchivo);
}

peticionUrl();

function cargarArchivo(event) {
  if (event.target.readyState == 4 && event.target.status == 200) {
    var listaFotos = new Array();
    listaFotos = JSON.parse(event.target.response);
    pintarFotos(listaFotos);
    return listaFotos;
  }
}

function pintarFotos(listaFotos) {
  var contenido = "";
  for (var i = 0; i < 50; i++) {
    contenido += `
                    <div class="img">
                    <img src="${listaFotos[i].thumbnailUrl}" alt="">
                    </div>
                    `;
  }
  seccionFoto.innerHTML += contenido;
}
