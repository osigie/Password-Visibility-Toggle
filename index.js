let myPassword = document.querySelector("#password");
let eyeIcon = document.querySelector("#eye");

eyeIcon.addEventListener("click", ()=>{
    if (eye.classList.contains("fa-eye")){
        myPassword.setAttribute("type", "text");
        eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
    }else{
        myPassword.setAttribute( "type", "password");
        eyeIcon.classList.replace("fa-eye-slash", "fa-eye"); 
    }
})