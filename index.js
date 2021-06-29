let save = document.getElementById("save-btn");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

save.addEventListener('click', function()  {
    var paragraph = document.createElement("p");
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);

    inputField.value = "";

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
        paragraph.style.textDecorationColor = "red";
            })
    paragraph.addEventListener('dblclick', function() {
        toDoContainer.removeChild(paragraph);
    })

})