// script.js

document.addEventListener("DOMContentLoaded", function() {
  const imageList = [
    "./images/gallery/v2/low/low-low/min-00001.jpg",
    "./images/gallery/v2/low/low-low/min-00002.jpg",
    "./images/gallery/v2/low/low-low/min-00003.jpg",
    "./images/gallery/v2/low/low-low/min-00004.jpg",
    "./images/gallery/v2/low/low-low/min-00005.jpg",
    "./images/gallery/v2/low/low-low/min-00006.jpg",
    "./images/gallery/v2/low/low-low/min-00007.jpg",
    "./images/gallery/v2/low/low-low/min-00008.jpg",
    "./images/gallery/v2/low/low-low/min-00009.jpg",
    "./images/gallery/v2/low/low-low/min-00010.jpg",
    "./images/gallery/v2/low/low-low/min-00011.jpg",
    "./images/gallery/v2/low/low-low/min-00012.jpg",
    "./images/gallery/v2/low/low-low/min-00013.jpg",
    "./images/gallery/v2/low/low-low/min-00014.jpg",
    "./images/gallery/v2/low/low-low/min-00015.jpg",
    "./images/gallery/v2/low/low-low/min-00016.jpg",
    "./images/gallery/v2/low/low-low/min-00017.jpg",
    "./images/gallery/v2/low/low-low/min-00018.jpg",
    "./images/gallery/v2/low/low-low/min-00019.jpg",
    "./images/gallery/v2/low/low-low/min-00020.jpg",
    "./images/gallery/v2/low/low-low/min-00021.jpg",
  ];

  const imageListLow = [
    "./images/gallery/v2/low/low-low/min-00001.jpg",
    "./images/gallery/v2/low/low-low/min-00002.jpg",
    "./images/gallery/v2/low/low-low/min-00003.jpg",
    "./images/gallery/v2/low/low-low/min-00004.jpg",
    "./images/gallery/v2/low/low-low/min-00005.jpg",
    "./images/gallery/v2/low/low-low/min-00006.jpg",
    "./images/gallery/v2/low/low-low/min-00007.jpg",
    "./images/gallery/v2/low/low-low/min-00008.jpg",
    "./images/gallery/v2/low/low-low/min-00009.jpg",
    "./images/gallery/v2/low/low-low/min-00010.jpg",
    "./images/gallery/v2/low/low-low/min-00011.jpg",
    "./images/gallery/v2/low/low-low/min-00012.jpg",
    "./images/gallery/v2/low/low-low/min-00013.jpg",
    "./images/gallery/v2/low/low-low/min-00014.jpg",
    "./images/gallery/v2/low/low-low/min-00015.jpg",
    "./images/gallery/v2/low/low-low/min-00016.jpg",
    "./images/gallery/v2/low/low-low/min-00017.jpg",
    "./images/gallery/v2/low/low-low/min-00018.jpg",
    "./images/gallery/v2/low/low-low/min-00019.jpg",
    "./images/gallery/v2/low/low-low/min-00020.jpg",
    "./images/gallery/v2/low/low-low/min-00021.jpg",
  ];

  function displayImages(imageSrcList) {
    const imageContainer = document.getElementById("gallery");
    imageContainer.innerHTML = ''; // Clear existing images

    let count = 0;

    imageSrcList.forEach((imageSrc) => {
      const img = document.createElement("img");
      img.src = imageSrc;
      img.id = "image" + count;

      // Ajouter le style du pointeur
      img.style.cursor = "pointer";

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

  function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.remove();
    }
  }

  function checkConnectionAndLoadImages() {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

    if (connection) {
      if (connection.effectiveType.includes("2g") || connection.saveData) {
        displayImages(imageListLow);
      } else {
        displayImages(imageList);
      }
    } else {
      displayImages(imageList);
    }
  }

  checkConnectionAndLoadImages();
});

function fontSizeAdapted(myText, desiredWidth, desiredHeight) {
  // Définissez la taille de police initiale
  let fontSize = 13;

  // Boucle jusqu'à ce que la largeur et la hauteur soient égales aux valeurs souhaitées
  while (myText[0].getBoundingClientRect().width < desiredWidth && myText[0].getBoundingClientRect().height < desiredHeight) {
    // Augmentez la taille de police de 0.5 pixel à chaque itération
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
    let chContent = $("#text-chinese");
    
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
    // chContent.css("left", leftImage + widthImage / 2 + "px");
  
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
    // chContent.css("width", mainImage.width() + menuContent.width() + chTitle.width() + "px");

  
  }

  // Exécuter la fonction de réponse lors du chargement initial et du redimensionnement de la fenêtre
  $(window).on('load resize', function() {
    responsive();
    $('body').fadeIn('slow');
  });
});

