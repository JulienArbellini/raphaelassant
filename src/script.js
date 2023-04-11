// const button = document.querySelector('.button');
const navbar = document.querySelector('#navbar');
const content = document.querySelector('#content');
const text = document.querySelector('#text-description-mobile');
const gallery = document.querySelector('#gallery');
// button.addEventListener('click', () => {
//   navbar.classList.toggle('hidden');
//   content.classList.toggle('hidden');
//   text.classList.toggle('hidden');
//   gallery.classList.toggle('hidden');
// })

function showModal() {
const modal = document.getElementById("modal");
modal.classList.add("visible");
console.log("showModal");
}
function closeModal() {
const modal = document.getElementById("modal");
modal.classList.remove("visible");
console.log("closeModal");
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
    mainImage.css("top", heightMenuTop + 20 +"px");
    mainImage.css("left", menuContent.offset().left + "px");
    let heightImage = parseFloat(mainImage.css("height"));
    let topImage = parseFloat(mainImage.css("top"));
    let leftImage = parseFloat(mainImage.css("left"));
    let widthImage = parseFloat(mainImage.css("width"));
    
    // Application de la hauteur au titre en chinois
    let chTitle = $("#ch-title");
    let widthChTitle = parseFloat(chTitle.css("width"));
    chTitle.css("top", heightImage + topImage + "px");
    fontSizeAdapted(chTitle, widthImage/2 , 300);
    chTitle.css("left", leftImage + widthImage/2 + "px");
    
    // Application de la hauteur au titre en français
    let frTitle = $("#vertical");
    frTitle.css("top", topImage + "px");
    frTitle.css("left", title.offset().left + title.width() - 60  + "px");
    frTitle.css("height", heightImage + "px");
    // fontSizeAdapted(frTitle, desiredWidth, desiredHeight);
    
    let titleDescr = $("#title-descr");
    titleDescr.css("top", topImage+heightImage/2 - 20 + "px");
    titleDescr.css("height", heightImage * 0.6 + "px");
    titleDescr.css("max-width", widthImage + "px");
    // titleDescr.css("max-height", heightImage * 0.6 + "px");
    titleDescr.css("left", leftImage + widthImage + 50 + "px");
    
    menuContent.css("width", mainImage.width()+ "px");
});



