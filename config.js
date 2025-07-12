

let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
let apiKey = checkApiKey();

function checkApiKey() {
    if (!localStorage.getItem("apiKey")){
        window.open("enter_api_key.html", "_self");
    }
    return localStorage.getItem("apiKey");
}
