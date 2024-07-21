
document.addEventListener('DOMContentLoaded',()=>{
    
    const addCartButton = document.querySelectorAll(".button");
    const cartItems = document.getElementById('cart');
    const nothingCart = document.getElementById('nothingCart')
    const addedItemsText = document.getElementById('youAddedItems')
    let cartProducts = [];
        
    addCartButton.forEach(button => {
        button.addEventListener('click',()=>{
            
            /* el metodo closest() selecciona al primer pariente del button que tenga la clase '.w-80'              */
            
            const productElement = button.closest('.w-80');
            
            /* Ahora uso el productElement para seleccionar cada type, product y price (clases) del div para luego meterlo en el carrito */

            const type = productElement.querySelector('#type').textContent.trim()
            const product = productElement.querySelector('#product').textContent.trim()
            const price = productElement.querySelector('#price').textContent.trim()            
            const productId = button.getAttribute('id');

            const existingProduct = cartProducts.find(item => item.id === productId);
            

            if(existingProduct){existingProduct.amount += 1;

            }else {
                const productDetails = {
                    id: productId,
                    type: type,
                    product: product,
                    price: price,
                    amount: 1
                };
                cartProducts.push(productDetails);
            }
            


            showProductInCart();

        })
    })
    


    
    
    
    
    
    
    
    function showProductInCart() {
        
        cartItems.innerHTML = '';
        
        
        if(cartProducts > 0) {
            nothingCart.classList.add('hidden')
        } else {
            nothingCart.classList.remove('hidden')
        };
        
        
        
        cartProducts.forEach(product => { 

            const totalCost = (parseFloat(product.price.replace('$', '')) * product.amount).toFixed(2);

            const newCartItem = document.createElement('div');
            newCartItem.innerHTML = `
            <div class="grid grid-rows-2 mt-5 border-b-2 p-1 text-nowrap">
            <div>
            <h1 class="mb-1 text-lg font-semibold">${product.type}</h1>
            </div>
            <div class="flex text-nowrap text-base items-center">
            <h1 class="mx-2 text-orange-600 font-bold" id="amountOfProducts">x${product.amount}</h1>
            <h1 class="mx-2 font-thin" id="costPerUnit">${product.price}</h1>
            <h1 class="mx-2 font-bold" id="totalCostPerProduct">${totalCost}</h1>
            <button class="ml-auto text-red-600 font-bold remove-btn" data-id="${product.id}">X</button>
            </div>
            </div>
            `
            cartItems.appendChild(newCartItem)
            
        })
        addedItemsText.textContent = `You have added ${cartProducts.length} items to your cart.`;
        

        /* Falta darle funcionalidad de eliminar a los botones X y de poder remover de a 1 los items */
        
        const removeButtons =document.querySelectorAll('.remove-btn'); 
        removeButtons.forEach(button => {
            button.addEventListener('click', ()=> {
                
            })
        })
    }


   
})

