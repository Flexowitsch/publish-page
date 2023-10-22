const input = document.getElementById("emailInput")
const submit = document.getElementById("submitBtn")
const inputMsg = document.getElementById("inputMsg")
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


let email = ""
let validity = false

input.addEventListener("change", function(){
    
    let email = input.value
    validity = regex.test(email)

})

submit.addEventListener("click", function(){
    if(validity) {
        console.log("success")
        inputMsg.style.display = "none"
        
        input.textContent = "you have successfully subscribed"

    } else {
        inputMsg.style.display = "block"
    }
})
