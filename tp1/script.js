// Partie 1
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

function somme(a, b) {
    return a + b;
}
const sommeArrow = (a, b) => a + b;
console.log("Somme:", sommeArrow(5, 7));

const user = { name: "Noor", age: 10, city: "Tunis" };
const { name, age } = user;
console.log(name, age);

const t1 = [1, 2, 3];
const t2 = [4, 5, 6];
const fusion = [...t1, ...t2];
const livre = { titre: "JS", auteur: "Rayen" };
const copie = { ...livre, auteur: "Autre Auteur" };
console.log(fusion);
console.log(copie);

// Partie 2
const livre2 = {
    titre: "L’Étranger",
    auteur: "Albert Camus",
    annee: 1942,
    getInfo() {
        return `${this.titre} écrit par ${this.auteur} en ${this.annee}`;
    }
};
console.log(livre2.getInfo());

class Etudiant {
    constructor(nom, note) {
        this.nom = nom;
        this.note = note;
    }
    getMention() {
        if (this.note >= 16) return "Très bien";
        else if (this.note >= 14) return "Bien";
        else if (this.note >= 10) return "Passable";
        else return "Échec";
    }
}
const e1 = new Etudiant("Ali", 17);
const e2 = new Etudiant("Sami", 12);
const e3 = new Etudiant("Noor", 8);
console.log(e1.nom, e1.getMention());
console.log(e2.nom, e2.getMention());
console.log(e3.nom, e3.getMention());

const notes = [12, 5, 17, 9, 20];
const moyenne = notes.reduce((acc, n) => acc + n, 0) / notes.length;
const tri = [...notes].sort((a, b) => b - a);
const filtre = notes.filter(n => n >= 10);
console.log(moyenne);
console.log(tri);
console.log(filtre);

// Partie 3
const wait = ms => new Promise(res => setTimeout(res, ms));
console.log("Début");
wait(2000).then(() => console.log("Fin"));

async function getPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    data.slice(0, 5).forEach(p => console.log(p.title));
}
getPosts();
