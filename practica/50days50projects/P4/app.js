
document.addEventListener('DOMContentLoaded',()=>{
    
    const addCartButton = document.querySelectorAll(".button");
    const addedItemsText = document.getElementById('yourAddedItemsText');
    const cartCake = document.getElementById('cartCake');
    
    let cartProductsId = [];
    
    let productId;
    
    addCartButton.forEach(button => {
        button.addEventListener('click',()=>{
            productId = button.getAttribute('id')
            cartProductsId.push(productId);
            console.log(cartProductsId);
            showProductInCart()
        })
    })
    

    function showProductInCart() {
        
    }
    
  
})

