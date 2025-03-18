function highlightIngredients(){
    const ingredients = document.querySelectorAll
('#recipe-ingredients li');
    ingredients.forEach((ingredient, index) => {
        if (index % 2 === 0) {
            ingredient.classList.toggle('highlight'); 
        }
    });
}

function checkInstructions(){ ('#recipe-instructions li');
const instructions = document.querySelectorAll

    let index = 0;
    const interval = setInterval(() => {
        if (index < instructions.length) {
            instructions[index].classList.add('is-done'); 
            index++;
        } else {
            clearInterval(interval); 
        }
    }, 3000); 
};
/* */


function resetInstructions(){

};
