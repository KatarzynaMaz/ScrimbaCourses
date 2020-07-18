//Ask a user for ULR
//Check if the URL starts with http
//if it doesn't, fix the variable
// then inject a link in the page using innerHTML

let url = prompt("What's your website's url?")
if(url.substr(0,4)=="http"){
    console.log("the url is good");
    } else {
    console.log("url is bad");
    url="http://" + url;
    }
    
    let spanNode= document.getElementById("link");
    spanNode.innerHTML = url; 
    spanNode.innerHTML = "<a href=''>"+ url +" </a>"