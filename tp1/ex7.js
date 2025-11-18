const notes = [12, 5, 17, 9, 20];
const moyenne = notes.reduce((acc, n) => acc + n, 0) / notes.length;
const tri = [...notes].sort((a, b) => b - a);
const filtre = notes.filter(n => n >= 10);
console.log(moyenne);
console.log(tri);
console.log(filtre);
