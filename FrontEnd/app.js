function CreateSmallCard(smallCard){
    const galleryModal = document.getElementById("gallery-modal");
    const photoModal = document.createElement("figure");
    const imageUrlModal = document.createElement("img");
    imageUrlModal.src = smallCard.imageUrl;

    const titleImgModal = document.createElement("figcaption");

    galleryModal.appendChild(photoModal);
    galleryModal.appendChild(imageUrlModal);
    imageUrlModal.appendChild(titleImgModal);
};    

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

//Style des éléments du modal-wrapper
const titleModal = document.getElementById("titlemodal");
titleModal.style.height = "30px";
titleModal.style.fontFamily = "work sans";
titleModal.style.fontWeight = "400";
titleModal.style.color = "black";
titleModal.style.marginRight = "228px";

const buttonCloseModal = document.getElementById("closemodal");
buttonCloseModal.style.height = "24px";
buttonCloseModal.style.fontSize = "24px"
buttonCloseModal.style.backgroundColor = "white";
buttonCloseModal.style.border = "none";

