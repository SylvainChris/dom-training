
const ingredients = ["🍅", "🥑", "🥕", "🌽", "🌶️", "🥦", "🥒", "🍄", "🧄", "🧅", "🧀", "🍠", "🥚", "🥬"];
const list = document.querySelector("#salad-ingredients");
const salad = document.querySelector('#salad-final');


for (const ingredient of ingredients) {
    const ingredientsTemplate = document.getElementById("template-ingredients");
    const ingredientItem = document.importNode(ingredientsTemplate.content, true);
    ingredientItem.querySelector('.button').innerText = ingredient;
    list.appendChild(ingredientItem);
}

const ingredientBtn = document.querySelectorAll(".button");

ingredientBtn.forEach(function(element){
    element.addEventListener('click', function(){
        const saladTemplate = document.getElementById("template-salad");
        const saladItem = document.importNode(saladTemplate.content, true);
        saladItem.querySelector('.button-salad').innerText = this.innerText;
        salad.appendChild(saladItem);
        ingredientsNumber = document.getElementById('salad-count');
        ingredientsNumber.innerText++;
        
        const ingredientBtnSalad = document.querySelectorAll(".button-salad");
        ingredientBtnSalad.forEach(function(e){
            e.addEventListener('click', function(){
                console.log(ingredientBtnSalad); 
            })
        })
    })
})





/**
 * Add an ingredient to a list
 * @param {string} ingredient - string representing a picture of the ingredient added
 * @param {ul} list - ul in which the indredient is added
 */
/*function addIngredientToList(ingredient, list) {
    const newLi = document.createElement('li');
    list.appendChild(newLi);
    const newButton = document.createElement('button');
    newLi.appendChild(newButton);
    newButton.classList.add("button");
    newButton.innerText = ingredient;
}*/