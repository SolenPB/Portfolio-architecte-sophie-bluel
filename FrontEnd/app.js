fetch("http://localhost:5678/api/works/")
.then (res => res.json())
.then(worksArray => {
    for(let works of worksArray){
    CreateSmallCard(works);
}}); 

const modal = document.getElementById('modal1');

const openModal = document.getElementById('js-modal');
openModal.addEventListener("click", function(event) {
        event.preventDefault();
        const modal = document.getElementById('modal1');
        modal.style.display = null;
        modal.removeAttribute('aria-hidden');
        modal.setAttribute('aria-modal', 'true');
});    

const closeModal = document.getElementById("closemodal"); 
    closeModal.addEventListener('click', function (event) {
    event.preventDefault();
    modal.style.display = "none";
    modal.setAttribute('aria-hidden', 'true');
    modal.removeAttribute('aria-modal');
});

//Importation et création de l'emplacement des travaux dans la modale

function CreateSmallCard(smallCard){
    const galleryModal = document.getElementById("gallery-modal");
    const photoModal = document.createElement("figure");
    photoModal.style.width = "85px";
    photoModal.style.marginRight = "8px";
    const movePicture = document.createElement("i");
    movePicture.setAttribute("class", "fa-regular fa-trash-can");
    movePicture.style.backgroundColor = "black";
    movePicture.style.color = "white";
    movePicture.style.fontSize = "20px";
    movePicture.style.justifyContent = "flex-start";
    movePicture.zIndex = "2";
    const pictureModal = document.createElement("div");
    pictureModal.setAttribute("id", "picture");
    const imageUrlModal = document.createElement("img");
    imageUrlModal.src = smallCard.imageUrl;
    imageUrlModal.style.width = "85px";
    imageUrlModal.style.height = "128px";
    const titleImgModal = document.createElement("figcaption");
    titleImgModal.textContent = "Editer";
        
    galleryModal.appendChild(photoModal);
    photoModal.appendChild(pictureModal);
    pictureModal.appendChild(imageUrlModal);
    pictureModal.appendChild(titleImgModal);
    imageUrlModal.appendChild(movePicture);
};    

//Style des éléments du modal-wrapper

const titleModal = document.getElementById("titlemodal");
titleModal.style.height = "30px";
titleModal.style.fontFamily = "work sans";
titleModal.style.fontWeight = "400";
titleModal.style.color = "black";

const buttonCloseModal = document.getElementById("closemodal");
buttonCloseModal.style.marginLeft = "580px";
buttonCloseModal.style.height = "24px";
buttonCloseModal.style.fontSize = "24px"
buttonCloseModal.style.backgroundColor = "white";
buttonCloseModal.style.border = "none";

const styleModalGallery = document.getElementById("gallery-modal");
styleModalGallery.style.marginTop = "40px";
styleModalGallery.style.paddingLeft = "65px";
styleModalGallery.style.width = "530px";
styleModalGallery.style.height = "450px" 
styleModalGallery.style.display = "flex";
styleModalGallery.style.flexDirection = "row";
styleModalGallery.style.flexWrap = "wrap";

const changeModal = document.getElementById("change-modal");
changeModal.style.display = "flex";
changeModal.style.flexDirection = "column";
changeModal.style.justifyContent = "center";
changeModal.style.width = ""
changeModal.style.borderTop = "solid", "black", "2px";

const changePhoto = document.getElementById("change-photo");
changePhoto.style.fontFamily ="syne";
changePhoto.style.fontWeight = "700";
changePhoto.style.color = "white";
changePhoto.style.backgroundColor = "#1D6154";
changePhoto.style.margin = "2em", "auto";
changePhoto.style.padding = "1em";
changePhoto.style.width = "180px";
changePhoto.style.justifyContent = "center";
changePhoto.style.borderRadius = "60px";

const deleteGallery = document.getElementById("delete-gallery");
deleteGallery.style.display = "flex";
deleteGallery.style.justifyContent = "center";
deleteGallery.style.color = "black";
deleteGallery.style.textDecoration = "none";

//Intégration de la modale d'ajout de photo

