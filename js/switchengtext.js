var count = 0
function switchengtext(){
    const interval = setInterval(function() {
        count++
        console.log("test")
    }, 5000);
     
    clearInterval(interval);
    switch(count){
        case 0:
            document.getElementById("languagetext").innerHTML = "java"
            break;
        case 1:
            document.getElementById("languagetext").innerHTML = "node.js"
            break;
        case 2:
            document.getElementById("languagetext").innerHTML = "express"
            break;
        case 3:
            document.getElementById("languagetext").innerHTML = "c#"
            break;
        case 4:
            document.getElementById("languagetext").innerHTML = "c++"
            break;
        default:
            count = 0
    }
}