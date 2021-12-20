import axios from 'axios'
import Noty from 'noty'
let addToCart=document.querySelectorAll('.add-to-cart')
let cartCounter=document.querySelector(".cartCounter")

function updateCart(pizza){
    axios.post('/update-cart',pizza)
    .then(res=>{
        console.log(res)
        cartCounter.innerText=res.data.totalQty

        new Noty({
            type:'success',
            timeout:1000,
            text:"item added in your cart 👍"
        }).show();
    }).catch(err=>{
        new Noty({
            type:error,
            timeout:1000,
            text:"something went wrong!try again later"
        })
    })
}
addToCart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
    let pizza=JSON.parse(btn.dataset.pizza)
    updateCart(pizza)
    console.log(pizza);
    })
})
