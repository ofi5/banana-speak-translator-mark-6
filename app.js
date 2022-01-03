 var btntranslate = document.querySelector("#btn-translate");
 var textoinput = document.querySelector("#texto-input");
 var outputval = document.querySelector("#output")

 console.log(outputval)



 function clickity(){
    console.log("clock")
    console.log("inpput",textoinput.value)
 }    
function bananalate() {
    outputval.innerText=("bellow"+textoinput.value)
}

 btntranslate.addEventListener("click", bananalate)

 

