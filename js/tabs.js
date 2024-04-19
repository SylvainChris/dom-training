const linksArray = document.querySelectorAll(".js-tabs > a");
const articlesArray = document.querySelectorAll("[data-tab-content]");
let i = 0;

// linksArray.forEach(function(element){

//     element.addEventListener('click', function(){
    
//         for (const link of linksArray) {
//                 link.classList.remove('active');

//                 for (const article of articlesArray) {
//                     article.classList.add('hidden');
//                     if (this.classList.contains("active")) {
//                         article.classList.remove('hidden');
//                     }
//                 }
//             }
//         this.classList.add('active');   
//     })
// })

linksArray.forEach(function(element){

    element.addEventListener('click', function(){
    
        for (const link of linksArray) {
                link.classList.remove('active');  
        }
        i = parseInt(element.dataset.tab);
        this.classList.add('active');   
        
        for (const article of articlesArray) {
            article.classList.add('hidden');  
        }
        articlesArray[i-1].classList.remove('hidden')
    })
})
