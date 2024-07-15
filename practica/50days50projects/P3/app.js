const submit =document.getElementById('submit');
const seccion1 =document.getElementById('seccion1')
const seccion2 =document.getElementById('seccion2')
const selected = document.getElementById('selected')
const goBackButton = document.getElementById('goBack')


submit.addEventListener('click', ()=>{
    seccion1.classList.toggle('hidden');
    seccion2.classList.toggle('hidden');
    goBackButton.classList.toggle('hidden')
    
})


goBackButton.addEventListener('click', ()=>{
    seccion1.classList.toggle('hidden');
    seccion2.classList.toggle('hidden');
    goBackButton.classList.toggle('hidden')
})

document.addEventListener('DOMContentLoaded', ()=>{

    
    let ratingValue;
    const ratingsArray = [];
    
    /* esta variable me permite agarrar a todos los elementos (querySelectorAll) que tengan la clase rating-button */
    const ratingButtons = document.querySelectorAll('.rating-button');
    
    ratingButtons.forEach(button => {
        button.addEventListener('click', ()=>{
            ratingValue = event.target.getAttribute('data-value');
            ratingsArray.push(ratingValue)
            console.log(ratingsArray)
            selected.innerHTML = `You rated us with a ${ratingsArray[ratingsArray.length - 1]} out of 5`
        });
    })
    
    
})