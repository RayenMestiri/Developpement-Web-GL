var a = 1;
let b = 2;
const c = 3;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log("Bloc :", a, b, c);
}
console.log("Hors bloc :", a, b, c);
