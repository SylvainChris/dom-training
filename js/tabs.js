const linksArray = document.querySelectorAll(".js-tabs > a");
const articlesArray = document.querySelectorAll("[data-tab-content]");
let j = 0;

linksArray.forEach(function(element){

    element.addEventListener('click', function(){
    
        for (const link of linksArray) {
                link.classList.remove('active');

                for (const article of articlesArray) {
                    article.classList.add('hidden');
                    if (this.classList.contains("active")) {
                        article.classList.remove('hidden');
                    }
                }
            }
        this.classList.add('active');   
    })
})