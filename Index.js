/*Hamburger Menu*/
function toggleClass(){
    let menu = document.querySelector(".mainMenu");
    menu.classList.toggle("toggleCls")

    let hamburger = document.querySelector(".hamIcon");

    /*hamburger.addEventListener("click", toggleClass)*/
}
/*Hamburger menu*/
/*comment section*/
window.onload=function(){
    document.getElementById("submit").addEventListener("click",addComment)
}

function addComment(){
    console.log("test")
    var comment = document.querySelector("#comment").value;
    console.log(comment);
    var name = document.querySelector("#name").value;
    console.log(name);
    var post = document.createElement("div");
    var text = document.createTextNode(name + ": " + comment);
    post.appendChild(text);
    document.querySelector("#comment-section").appendChild(post);
}
/*comment section*/

