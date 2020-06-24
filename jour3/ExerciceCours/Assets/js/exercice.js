var division = (a, b) => {
return new Promise((resolve, reject) => {
if(b != 0)
resolve(a / b);
else
reject("erreur : division par z´ero");
});
};
division(10, 2).then((res) => console.log("r´esultat : " + res))
.catch((error) => console.log(error));
division(5, 0).then((res) => console.log("r´esultat : " + res))
.catch((error) => console.log(error));
console.log("fin");