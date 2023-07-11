const container = document.querySelector(".container"),
generateBtn = container.querySelector(".form button") ;
qrInput = container.querySelector(".form input") ;
qrImg = container.querySelector(".qr-code img") ;


generateBtn.addEventListener("click" , ()=>{
    let qrValue = qrInput.value ;
    if (!qrValue) return ;
    generateBtn.innerHTML="Generating QR code..."
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`
    qrImg.addEventListener("load" , ()=>{
        container.classList.add("active")
        generateBtn.innerHTML="Generate QR code"
    })
})

qrInput.addEventListener("keyup" , ()=>{
    if (!qrInput.value) {
        container.classList.remove("active")
    }
});