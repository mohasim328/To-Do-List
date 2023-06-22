const inputBox = document.getElementById("item");
const listcontainer = document.getElementById("list-container");

function addtask() {
    if (inputBox.value === '') {
        alert("You must write somthing");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    savadata();
}
listcontainer.addEventListener("click", function(e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
        savadata();
    } else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        savadata();
    }
}, false)
 function savadata(){
localStorage.setItem("data",listcontainer.innerHTML);

 }
 function showTask(){

    listcontainer.innerHTML= localStorage.getItem("data");
 }
 showTask();
 