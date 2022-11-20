let cardDom=document.querySelector('#cardTshirt')
let listenNameDOM=document.querySelector('#listenName')
let takeListenDOM=document.querySelector('#qr-input')
let btn=document.querySelector('#ekle')
btn.addEventListener("click",function(){
 let cardİtem=document.createElement('div')
    cardİtem.innerHTML=`
    <div class="p-3 card id="carditems">
     <img src="https://i.pinimg.com/originals/62/98/b0/6298b026a65cf80bcf9dce061e9b79c9.png" alt="">
     <h4>${listenNameDOM.value}</h4>
     <p>${takeListenDOM.value}</p>
   </div>`
cardDom.appendChild(cardİtem)

let subtractDOM=document.querySelector('#subtract')
subtractDOM.addEventListener("click",function(){
   
    cardDom.removeChild(cardİtem)    
})
})



