const pictureList = document.getElementById('gallery-thumbs');

const pictureArray = pictureList.children;

for(let i = 0; i < pictureArray.length; i++) {
    pictureArray[i].addEventListener('mouseover', function(){
        const imgElement = document.getElementById("gallery-picture");
        imgElement.src = `img/project-${i+1}.jpg`;
        
        const pictureElement = document.querySelector(`.js-img${i+1}`);
        const titleElement = document.getElementById("gallery-title");
        titleElement.innerText = pictureElement.dataset.title;

        const descriptionElement = document.querySelector(".description");
        descriptionElement.innerText = pictureElement.dataset.description;
    })
}
