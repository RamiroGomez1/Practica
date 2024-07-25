const display = document.getElementById('display');


function appendToDisplay(input){
    display.value += input
 }

function clearButton(){
    display.value = '';
};

function deleteButton(){
    display
}
    
function calculate(){
        try{
            display.value = eval(display.value);
            }
            catch(error){
                display.value = 'Error'
            }
    }


