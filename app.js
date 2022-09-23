 var btntranslate = document.querySelector("#btn-translate");
 let texttoinput = document.querySelector("#texto-input");
 var outputval = document.querySelector("#output");


 let serverURL = "https://api.funtranslations.com/translate/minion.json"

 const setserverURL = (text) => {
    
    return setURL= serverURL+"?"+"text="+text
        
 }

 const errorHandle = (error) => {
    console.log("error occured bro", error);
    alert("Error occured")
 }

 const getserverURL = () => {
    let textinput = texttoinput.value;
    fetch(setserverURL(textinput))
    .then(response => response.json())
    .then(json => { 
        let translation = json.contents.translated;
        outputval.innerText = translation;
    })
    .catch(errorHandle)
}


 btntranslate.addEventListener("click", getserverURL)

 

