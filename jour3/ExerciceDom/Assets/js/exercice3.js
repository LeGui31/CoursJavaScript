function getFormValue(){
    var container = document.getElementById("form1");
    var variable = container.firstChild.textContent;
    console.log(variable);
}
getFormValue();

for(var i=0; container.length; i++){
    if(container.elements[i].value != "Submit"){
        alert(container.elements[i].value);
    }
}