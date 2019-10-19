var seccionFoto = document.getElementById("seccionFoto");
// Se realiza la funcion de filtrado

function filtrarFotos(pLista, pAlbumId) {
  var listaFiltrada = new Array();
  for (lista of pLista) {
    if (lista.albumId == pAlbumId) {
      listaFiltrada.push(lista);
    }
  }
  return listaFiltrada;
}

// Se crea la funcion para pintar los elementos recibidos o filtrados
function pintarFotos(pListaFiltrada) {
  var contenido = "";
  for (var i = 0; i < 150; i++) {
    contenido += `
                        <div class="img">
                        <img src="${pListaFiltrada[i].thumbnailUrl}" alt="">
                        </div>
                        `;
  }
  seccionFoto.innerHTML += contenido;
}
