
function numberValidation() {   
          let x = document.getElementById("enter-number").value;
          
            if(isNaN(x)){
              document.getElementById("small").innerHTML = "Enter Valid Number";   
            }   
            else{
              document.getElementById("small").innerHTML = " ";
            }
          

}

let nameEnter = document.getElementById("enter-name");
function nameValidation(){
  nameEnter = document.addEventListener("click", () =>{
    if(isNaN(nameEnter)){
      document.getElementById("valid-name").innerHTML = " ";
    }
    else{
      document.getElementById("valid-name").innerHTML = "Enter Valid Name";
    }
  })
}





const text = "Connect with\n Family and friends...";

let index = 0;


function writeText()    {
    document.getElementById("header-text").innerText = text.slice(0, index);

    index++;



    if(index > text.length) {
        index = 0;

    }
}

setInterval(writeText, 200);






