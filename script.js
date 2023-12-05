const btn = document.querySelectorAll("button")
// console.log(btn)
btn.forEach(function(button,index){
button.addEventListener("click",function(event){{
    var btnItem = event.target
    var product =btnItem.parentElement
    var productImg = product.querySelector("img").src
    var productName = product.querySelector("h1").innerText
    var productPrice = product.querySelector("span").innerText
    // console.log(productPrice,productImg,productName)
    addcart(productPrice,productImg,productName)

}})

})
function addcart(productPrice,productImg,productName){
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for ( var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".Tensp")
        if (productT[i].innerHTML == productName){
            alert("Sản phẩm đã có trong giỏ hàng")
            return  
        }   
    }

    var trcontent = '<tr><td style="display: flex; align-items: center;"><img style="width: 70px;" src="'+productImg+'" alt=""><span class="Tensp">'+productName+'</span></td><td><p><span class="Gia">'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width: 30px;outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="Clean-cart">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    // console.log(cartTable)
    cartTable.append(addtr)
    carttotal()
    deleteCart()

 }

/* -----------------------------Total Price------------------------------- */
function carttotal (){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    // console.log(cartItem.length)
    for ( var i=0;i<cartItem.length;i++){
      var inputValue = cartItem[i].querySelector("input").value
    //   console.log(inputValue)
      var productPrice = cartItem[i].querySelector(".Gia").innerHTML
      console.log(productPrice)
      totalA = inputValue*productPrice*1000
    //   totalB =totalA.toLocaleString('de-De')
    //   console.log(totalB)
      totalC = totalC + totalA
    //   totalD = totalC.toLocaleString('de-De')
        }
        var cartTotalA = document.querySelector(".price-total span")
        var cartPrice = document.querySelector(".cart-icon span")
        cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
        cartPrice.innerHTML = totalC.toLocaleString('de-DE')
        inputchange()
        
        // console.log(cartTotalA)
 }
//  -----------------------------------Delete Cart---------------------------------
function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for ( var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".Clean-cart")
        productT[i].addEventListener("click",function(event){
            var cartDelete = event.target
            var cartitemR = cartDelete.parentElement.parentElement
            cartitemR.remove()
            carttotal()
            // console.log( cartitemR)
        })
       
    }
}
function inputchange (){
    var cartItem = document.querySelectorAll("tbody tr")
    for ( var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            carttotal()
        })
       
        }
       
    }
    const cartbtn = document.querySelector(".fa-times")
    const cartshow = document.querySelector(".fa-shopping-cart")
    cartshow.addEventListener("click",function(){
        document.querySelector(".cart").style.right = "0"
    })
    cartbtn.addEventListener("click",function(){
        document.querySelector(".cart").style.right = "-100%"
    })  
    




    


