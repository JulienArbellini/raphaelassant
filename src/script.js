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
    "./images/gallery/12.jpeg",
    "./images/gallery/13.jpeg",
    "./images/gallery/14.jpeg",
    "./images/gallery/15.jpeg",
    "./images/gallery/16.jpeg",
    "./images/gallery/17.jpeg",
    "./images/gallery/18.jpeg",
    "./images/gallery/19.jpeg",
    "./images/gallery/20.jpeg",
    "./images/gallery/21.jpeg",
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
      modalDesktop.classList.add("fixed", "top-0", "left-0", "w-full", "h-full", "items-center", "justify-center", "bg-black", "bg-opacity-90", "flex", "z-10", "justify-center");
      const modalContent = document.createElement("div");
      modalContent.classList.add("w-full", "h-full", "flex", "items-center", "justify-center");
      const closeButton = document.createElement("button");
      closeButton.classList.add("absolute", "top-0", "right-0", "m-4", "text-3xl", "text-white", "hover:text-gray-300", "focus:outline-none");
      closeButton.innerText = "x";
      closeButton.onclick = function () {
        closeModal(modalDesktop.id);
      };
      const image = document.createElement("img");
      image.src = src;
      image.classList.add("w-auto", "h-auto" ,"lg:h-[90%]", "max-w-full", "max-h-full");
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


function ajusterPolice(element, hauteurCible) {
  // Obtenez la largeur actuelle de l'élément et la taille de la police
  let elementDOM = element.get(0);
  console.log(elementDOM);
  const largeurActuelle = elementDOM.getBoundingClientRect().width;
  const hauteurActuelle = elementDOM.getBoundingClientRect().height;
  console.log(hauteurCible);
  console.log(hauteurActuelle);
  const taillePoliceActuelle = parseFloat(window.getComputedStyle(elementDOM).fontSize);

  // Calculez le rapport entre la largeur cible et la largeur actuelle
  const rapport = hauteurCible / hauteurActuelle;

  // Ajustez la taille de la police en fonction du rapport
  const nouvelleTaillePolice = taillePoliceActuelle * rapport;

  // Appliquez la nouvelle taille de police à l'élément
  elementDOM.style.fontSize = `${nouvelleTaillePolice}px`;
}








$(document).ready(function() {
  function responsive() {
    // insérer le code de réponse ici
    $.ajaxSetup({ cache: false });
    //  menu-content
    let menuContent = $("#menu-list");
    
    //title
    let title = $("#title");
    // console.log(title.offset().left);
    // console.log(title.width());
    
    menuContent.css("left", title.css("height")+100+"px");
    
    // Récupération de la hauteur de l'image principale
    let mainImage = $("#img-main");
    let menuTop = $("#menu-desktop");
    let heightMenuTop = parseFloat(menuTop.css("height"));
    let paddingMenuTop = parseFloat(menuTop.css("padding-top"));
    mainImage.css("top", heightMenuTop + "px");
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
    ajusterPolice(frTitle, mainImage.height());
    frTitle.css("left", title.offset().left + title.width() - (frTitle.outerWidth()*0.75) + "px");
    console.log(`largeur du titre vertical H : ${frTitle.outerWidth()}`);
    console.log(`largeur du texte vertical h : ${frTitle.innerWidth()}`);

 
    // frTitle.css("height", heightImage + "px");
    // fontSizeAdapted(frTitle, desiredWidth, desiredHeight);
  
    let titleDescr = $("#title-descr");
    titleDescr.css("top", topImage + heightImage * 0.4 + "px");
    titleDescr.css("height", heightImage * 0.6 + "px");
    titleDescr.css("max-width", widthImage*0.9 + "px");
    titleDescr.css("max-height", heightImage * 0.6 + "px");
    titleDescr.css("left", leftImage + widthImage + 30 + "px");
    menuContent.css("width", mainImage.width() + "px");
  
  }

  // Exécuter la fonction de réponse lors du chargement initial et du redimensionnement de la fenêtre
  $(window).on('load resize', function() {
    responsive();
    $('body').fadeIn('slow');
  });
});


