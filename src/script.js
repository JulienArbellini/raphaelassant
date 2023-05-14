document.addEventListener("DOMContentLoaded", function() {
  const imageList = [
    "./images/gallery/1.jpeg",
    "./images/gallery/2.jpeg",
    "./images/gallery/3.jpeg",
    "./images/gallery/4.jpeg",
    "./images/gallery/5.jpeg",
    "./images/gallery/6.jpeg",
    "./images/gallery/7.jpeg",
    "./images/gallery/8.jpeg",
    "./images/gallery/9.jpeg",
    "./images/gallery/10.jpeg",
    "./images/gallery/11.jpeg",
  ];

  function displayImages() {
    const imageContainer = document.getElementById("gallery");

    let count = 0;

    imageList.forEach((imageSrc) => {
      const img = document.createElement("img");
      img.src = imageSrc;
      img.id = "image" + count;
      img.onclick = function() {
        extendImage(img.id, img.src);
      };
      imageContainer.appendChild(img);
      count++;
    });
  }

  function extendImage(id, src) {
    const parent = document.getElementById(id);
    if (parent) {
      const modalDesktop = document.createElement("div");
      modalDesktop.id = "modal-desktop";
      modalDesktop.classList.add("fixed", "top-0", "left-0", "w-full", "h-full", "items-center", "justify-center", "bg-black", "bg-opacity-50", "flex", "z-10");
      const modalContent = document.createElement("div");
      modalContent.classList.add("absolute", "top-0", "left-0", "w-full", "h-full", "flex", "items-center", "justify-center");
      const closeButton = document.createElement("button");
      closeButton.classList.add("absolute", "top-0", "right-0", "m-4", "text-3xl", "text-white", "hover:text-gray-300", "focus:outline-none");
      closeButton.innerText = "X";
      closeButton.onclick = function () {
        closeModal(modalDesktop.id);
      };
      const image = document.createElement("img");
      image.src = src;
      image.classList.add("w-auto", "h-[80%]", "max-w-full", "max-h-full");
      image.alt = "Image en grand";

      modalContent.appendChild(closeButton);
      modalContent.appendChild(image);
      modalDesktop.appendChild(modalContent);
      parent.insertAdjacentElement("afterend", modalDesktop);
    }
  }

  displayImages();
});


function closeModal(id) {
  const modal = document.getElementById(id);
  modal.remove();
}




function fontSizeAdapted(myText, desiredWidth, desiredHeight) {
  // Définissez la taille de police initiale
  let fontSize = 13;

  // Boucle jusqu'à ce que la largeur et la hauteur soient égales aux valeurs souhaitées
  while (myText[0].getBoundingClientRect().width < desiredWidth && myText[0].getBoundingClientRect().height < desiredHeight) {
    // Augmentez la taille de police de 0,5 pixel à chaque itération
    fontSize += 0.5;

    // Appliquez la nouvelle taille de police à l'élément de texte
    myText.css("font-size", fontSize + "px");
  }
}


function ajusterPolice(elementId, largeur, hauteur) {
  var element = document.getElementById(elementId);
  var fontSize = parseInt(window.getComputedStyle(element).fontSize);
  var counter = 0; // Ajout d'une variable compteur

  while ((element.scrollWidth > largeur || element.scrollHeight > hauteur) && counter < 100) {
    fontSize--;
    element.style.fontSize = fontSize + 'px';
    counter++; // Incrémentation du compteur à chaque tour de boucle
  }
}






$(document).ready(function() {
  function responsive() {
    // insérer le code de réponse ici
    $.ajaxSetup({ cache: false });
    //  menu-content
    let menuContent = $("#content-list");
  
    //title
    let title = $("#title");
    console.log(title.offset().left);
    console.log(title.width());
  
    // Récupération de la hauteur de l'image principale
    let mainImage = $("#img-main");
    let menuTop = $("#menu-desktop");
    let heightMenuTop = parseFloat(menuTop.css("height"));
    let paddingMenuTop = parseFloat(menuTop.css("padding-top"));
    mainImage.css("top", heightMenuTop + 20 + "px");
    mainImage.css("left", menuContent.offset().left + "px");
    let heightImage = parseFloat(mainImage.css("height"));
    let topImage = parseFloat(mainImage.css("top"));
    let leftImage = parseFloat(mainImage.css("left"));
    let widthImage = parseFloat(mainImage.css("width"));
  
    // Application de la hauteur au titre en chinois
    let chTitle = $("#ch-title");
    let widthChTitle = parseFloat(chTitle.css("width"));
    chTitle.css("top", heightImage + topImage + "px");
    fontSizeAdapted(chTitle, widthImage / 2, 300);
    chTitle.css("left", leftImage + widthImage / 2 + "px");
  
    // Application de la hauteur au titre en français
    let frTitle = $("#vertical");
    frTitle.css("top", topImage + "px");
    frTitle.css("left", title.offset().left + title.width() - 60 + "px");
    frTitle.css("height", heightImage + "px");
    // fontSizeAdapted(frTitle, desiredWidth, desiredHeight);
  
    let titleDescr = $("#title-descr");
    titleDescr.css("top", topImage + heightImage / 2 - 20 + "px");
    titleDescr.css("height", heightImage * 0.6 + "px");
    titleDescr.css("max-width", widthImage + "px");
    // titleDescr.css("max-height", heightImage * 0.6 + "px");
    titleDescr.css("left", leftImage + widthImage + 50 + "px");
  
    menuContent.css("width", mainImage.width() + "px");
  
  }

  // Exécuter la fonction de réponse lors du chargement initial et du redimensionnement de la fenêtre
  $(window).on('load resize', function() {
    responsive();
    $('body').fadeIn('slow');
  });
});


