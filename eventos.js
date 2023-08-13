


document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById("btn");

    btn.addEventListener ("click", event =>{
        console.log(event.target.classList.contains("btn"))
       if (event.target.classList.contains("btn")){
         alert("Hola!")
     event.stopPropagation()
    }
});

   const soyElDiv = document.getElementById("div");

   soyElDiv.addEventListener("click", event => {
    alert("Hola! Soy el div")
    
   }

   )
});