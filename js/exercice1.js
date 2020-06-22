function biggestNumber() {
    var a, b;
    a = Number(document.getElementById("myInput1").value);
    b = Number(document.getElementById("myInput2").value);

    if (a > b) {
        alert(a);
    } else if (b > a) {
        alert(b);
    } else {
        alert(a = b);
    }
}

function sortNumbers() {
    var a, b, c;
    a = Number(document.getElementById("myInput3").value);
    b = Number(document.getElementById("myInput4").value);
    c = Number(document.getElementById("myInput5").value);

    if (b > a && c > a && b < c) {
        alert(a + "-" + b + "-" + c);
    }
    else if (b > a && c > a && b > c) {
        alert(a + "-" + c + "-" + b);
    }
    else if (c > a && c > b && a > b) {
        alert(b + "-" + a + "-" + c);
    }
    else if (c < a && c > b && a > b) {
        alert(b + "-" + c + "-" + a);
    }
    else if (b > a && b > c && a > c) {
        alert(c + "-" + a + "-" + b);
    }
    else if (b < a && b > c && a > c) {
        alert(c + "-" + b + "-" + a);
    }
}

function biggestNumber2() {
    var a, b, c, d, e;
    a = Number(document.getElementById("myInput6").value);
    b = Number(document.getElementById("myInput7").value);
    c = Number(document.getElementById("myInput8").value);
    d = Number(document.getElementById("myInput9").value);
    e = Number(document.getElementById("myInput10").value);

    if (a > b && a > c && a > d && a > e) {
        alert(a);
    } else if (b > a && b > c && b > d && b > e) {
        alert(b);
    } else if (c > a && c > b && c > d && c > e) {
        alert(c);
    } else if (d > a && d > b && d > c && d > e) {
        alert(d);
    } else if (e > a && e > b && e > c && e > d) {
        alert(e);
    }
}

function displayPair() {
    for (var i = 0; i <= 10; i++) {
        if (i == 0) {

        } else {
            if (i % 2 == 0) {
                console.log(i);
            }
        }
    }
}
displayPair();