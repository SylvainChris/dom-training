/* ------------------------------------ */
/* --- Exercice 1 --- */

/*const button = document.querySelector('.js-button');
//console.log(button);
button.addEventListener('click', function() {
    
    const text = document.querySelector('.js-text')
    //console.log(text);
    text.classList.toggle('js-text-display');

})*/

document.querySelector('.js-button').addEventListener('click', function(){
    document.querySelector('.js-text').classList.toggle('js-text-display');
})

/* ------------------------------------ */
/* --- Exercice 2 --- */


window.addEventListener("scroll", function () {
    
    //document.getElementById('ex2-scroll-value').textContent = Math.floor(window.scrollY);
    document.querySelector('#ex2-scroll-value').textContent = Math.floor(window.scrollY);
});



/* ------------------------------------ */
/* --- Exercice 3 --- */

document.querySelector('.js-animals-button')
    .addEventListener('click', function(){
        document.querySelector('#ex3-animals')
            .appendChild(document.querySelector('#ex3-animals li:first-Child'));
    });


/* ------------------------------------ */
/* --- Exercice 4 --- */

//const colorButton = document.querySelector('.js3-button');

color = ['blue', 'red', 'green'];
let i = 0;

 
const colorButton = document.querySelector('.js3-button');

colorButton.addEventListener('click', function(event){

        this.classList.add(color[i % color.length]);
           
        this.classList.remove(color[(i-1) % color.length]);
        
        i++;
})

/* ------------------------------------ */
/* --- Exercice 5 --- */


function getRandomColor () {
    return "#" + (Math.floor(Math.random()*0xFFFFFF)).toString(16);
} 

const icones = document.querySelectorAll('.js-ico-button button[type="button"]');

for (const itm of icones) {

    itm.addEventListener('mouseover', function(){
        this.style.backgroundColor = getRandomColor();
    })

    itm.addEventListener('mouseout', function(){
        this.style.backgroundColor = '';
    })

}



/* ------------------------------------ */
/* --- Exercice 6 --- */


const textElement = document.getElementById('ex6-paragraph');
///console.log(textElement);
//console.log(typeof textElement);

const text = textElement.innerText;
//console.log(text);

const textArray = text.split('');
//console.log(textArray);

let counter = 0;
textElement.innerText = "";

const interval = setInterval(function(){
    if (counter >= textArray.length) {
        clearInterval(interval)
        return;
    } 
    textElement.textContent += textArray[counter];
    counter++;
}, 50)




/* ------------------------------------ */
/* --- Exercice 7 --- */

const taskList = [
    "🥖 Acheter du pain",
    "🗑️ Descendre la poubelle",
    "🐶 Sortir le chien",
    "🍽️ Faire la vaisselle",
    "🧹 Passer l'aspirateur",
    "🌳 Tondre la pelouse"
];


function addTask(task) {

    const template = document.getElementById('list-Template');
    const listElement = document.importNode(template.content, true);

    listElement.querySelector('.task-list-task').innerText = task;
    const list = document.querySelector('#ex7-list');
    list.appendChild(listElement);
    return list.lastElementChild;
    //document.querySelector('.js-task-list').appendChild(listElement);
}

/*function addNextTaskToList() {

    if (taskList.length < 1) {
        taskButton.removeEventListener('click', addNextTaskToList);
        return;
    }
    addTask(taskList.shift());
}*/

function getTaskFromList(taskList) {
    const firstElement = taskList.shift();
    taskList.push(firstElement);
    return firstElement;
}

const taskButton = document.getElementById("ex7-button");

taskButton.addEventListener('click', function(){
    const element = addTask(getTaskFromList(taskList));
    element.addEventListener('click', function(event) {
        this.remove();
    })
});



/* ------------------------------------ */
/* --- Exercice 8 --- */

//const lifeButton = document.getElementById('ex8-button-level');

function setProgressBar(element, barId) {
    
    let count = 0;
 
    element.addEventListener('click', function(){
        if (count >= 100) return;
        count +=5;
        console.log(count);
        document.getElementById(barId)
            .style.width = count + '%';
    })
}

setProgressBar(document.getElementById('ex8-button-level'), "ex8-level");
setProgressBar(document.getElementById('ex8-button-strength'), "ex8-strength");
setProgressBar(document.getElementById('ex8-button-shield'), "ex8-shield");



