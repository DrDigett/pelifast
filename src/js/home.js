(async function load() {
  async function getData(url){
    const response = await fetch(url)
    const data = await response.json();
    return data;
  }

    //document.getElementById("modal") "un modal "
    //document.getElementByClassName("modal") Cuantos "modal tengo"
    //document.getElementByTagName("div") Cuantas etiquetas div tengo
   const actionList = await getData("https://yts.mx/api/v2/list_movies.json?genre=action")
   const dramaList = await getData("https://yts.mx/api/v2/list_movies.json?genre=drama")
   const animationList = await getData("https://yts.mx/api/v2/list_movies.json?genre=animation")

   function videoItemTemplate(movie){
     return (
       `<div class="primaryPlaylistItem">
       <div class="primaryPlaylistItem-image">
       <img src="${movie.medium_cover_image}">
       </div>
       <h4 class="primaryPlaylistItem-title">
       ${movie.title}
       </h4>
       </div>`
     )
   }

    const $actionContainer = document.querySelector("#action");
    actionList.data.movies.forEach((movie) => {

    const HTMLString = videoItemTemplate(movie);
     const html = document.implementation.createHTMLDocument(); //para agregar el template en html
     html.body.innerHTML = HTMLString; //rebuscando en html ponemos la variable HTMLString
     $actionContainer.append(html.body.children[0]);//el hijo 0(div) para aregregar
   })


  const $dramaContainer = document.querySelector("#drama");
  const $animationContainer = document.querySelector("#animation");

  const $featuringContainer = document.getElementById("#featuring")
  const $form = document.getElementById("#form");
  const $home = document.getElementById("#home");

  const $modal = document.querySelector(".modal");
  const $overlay = document.getElementById("overlay");
  const $hideModal = document.getElementById("hide-modal");

    const $modalTitle = $modal.querySelector("h1")
    const $modalImage = $modal.querySelector("img")
    const $modalDescription = $modal.querySelector("p")


})()
