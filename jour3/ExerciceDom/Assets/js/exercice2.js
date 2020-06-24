function changer_style(){
    var paragraphe = document.getElementById("parag1");
    paragraphe.classList.add("active");
    // paragraphe.style.color = "white";
    // paragraphe.style.backgroundColor = "black";
    // paragraphe.style.border = "1px";
    // paragraphe.style.border = "dotted";
    // paragraphe.style.marginLeft = "50px";
}

function getAttributes(){
    var lien = document.querySelector("a");
    var href = lien.href;
    var hreflang = lien.hreflang;
    var rel = lien.rel;
    var target = lien.target;
    var type = lien.type;

    alert("href: "+href+ "\nhreflang: " +hreflang+"\nrel: "+rel+"\ntarget: "+target+ "\ntype: " +type);
}