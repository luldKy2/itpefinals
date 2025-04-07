let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
   
    cart.push({ name: productName, price: productPrice });
    
   
    totalPrice += productPrice;
    
    
    document.getElementById('cart-count').innerText = cart.length;
    
   
    document.getElementById('total-price').innerText = totalPrice.toFixed(2);
    
    
    alert(`${productName} has been added to your cart.`);
}

function completePurchase() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const purchaseDate = document.getElementById('purchase-date').value;

   
    if (name && email && purchaseDate) {
      
        alert(`Thank you for your purchase, ${name}! Your total is $${totalPrice.toFixed(2)}. A confirmation email will be sent to ${email}.`);
        
       
        cart = [];
        totalPrice = 0;
        document.getElementById('cart-count').innerText = 0;
        document.getElementById('total-price').innerText = '0.00';
        
        
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('purchase-date').value = '';
        
        closeCheckoutModal(); 
    } else {
        alert('Please fill in all fields.');
    }
}

function closeCheckoutModal() {
    document.getElementById('checkout-modal').style.display = 'none';
}


function openCheckoutModal() {
    document.getElementById('checkout-modal').style.display = 'block';
}


document.querySelector('.cart').addEventListener('click', openCheckoutModal);