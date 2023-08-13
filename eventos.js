
document.addEventListener('DOMContentLoaded', function () {



    function clickAlert(){
        alert("Hola!")
     
    }
    
    function divClick(){
        
    }

   const soyElDiv = document.getElementById("div");

   soyElDiv.addEventListener("click", () => {
    alert("Hola! Soy el div")
   }

   )
})