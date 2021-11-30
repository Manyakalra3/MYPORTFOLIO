window.addEventListener("load", initEvent);
var button1;
var button2;
var content1;
var content2;
function initEvent(){
    button1 = document.querySelector("#srbtn1");
    button2 = document.querySelector("#srbtn2");
    content1 = document.querySelector(".service1");
    content2 = document.querySelector(".service2");
    button2.addEventListener("click",function(){
        content2.style.display = "flex";
        content1.style.display = "none";
        button1.style.backgroundColor = "white";
        button1.style.color = "#007bff";
        button2.style.backgroundColor = "#007bff";
        button2.style.color = "#fff";
    });
    button1.addEventListener("click",function(){
        content1.style.display = "flex";
        content2.style.display = "none";
        button2.style.backgroundColor = "white";
        button2.style.color = "#007bff";
        button1.style.backgroundColor = "#007bff";
        button1.style.color = "#fff";
    });
}