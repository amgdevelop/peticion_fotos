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
function pintarFotos(pLista) {
  var contenido = "";

  for (foto of pLista) {
    if (foto.id <= 150) {
      contenido += `
                              <div class="img">
                              <img src="${foto.thumbnailUrl}" alt="">
                              </div>
                              `;
    }
  }
  seccionFoto.innerHTML = contenido;
}
