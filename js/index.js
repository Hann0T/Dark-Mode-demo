
function changeTheme() {
    let body = document.getElementsByTagName("body")[0];
    let currentTheme = body.attributes[0].value;
    let button = document.getElementsByTagName("button")[0];

    if(currentTheme == "light-mode"){
        body.setAttribute("class","dark-mode")
        button.innerHTML = "on";
    }else{
        body.setAttribute("class","light-mode")
        button.innerHTML = "off";
    }
}
