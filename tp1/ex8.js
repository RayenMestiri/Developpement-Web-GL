const wait = ms => new Promise(res => setTimeout(res, ms));
console.log("Début");
wait(2000).then(() => console.log("Fin"));
