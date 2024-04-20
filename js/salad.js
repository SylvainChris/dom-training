
const ingredients = ["🍅", "🥑", "🥕", "🌽", "🌶️", "🥦", "🥒", "🍄", "🧄", "🧅", "🧀", "🍠", "🥚", "🥬"];
const list = document.querySelector("#salad-ingredients");
const salad = document.querySelector('#salad-final');


for (const ingredient of ingredients) {
    addIngredientToList(ingredient, list);
}

const ingredientBtn = document.querySelectorAll(".button");

ingredientBtn.forEach(function(element){
    element.addEventListener('click', function(){
        //console.log(element);
        addIngredientToList(this.innerText, salad);
        ingredientsNumber = document.getElementById('salad-count');
        ingredientsNumber.innerText++;
        
        /*const saladCompleted = document.querySelectorAll("#salad-final .button");
        saladCompleted.forEach(function(e){
            e.addEventListener('click', function(){
                console.log(e);
            })
        })*/
    })
})



/**
 * Add an ingredient to a list
 * @param {string} ingredient - string representing a picture of the ingredient added
 * @param {ul} list - ul in which the indredient is added
 */
function addIngredientToList(ingredient, list) {
    const newLi = document.createElement('li');
    list.appendChild(newLi);
    const newButton = document.createElement('button');
    newLi.appendChild(newButton);
    newButton.classList.add("button");
    newButton.innerText = ingredient;
}