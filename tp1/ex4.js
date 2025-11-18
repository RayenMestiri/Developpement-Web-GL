const t1 = [1, 2, 3];
const t2 = [4, 5, 6];
const fusion = [...t1, ...t2];
const livre = { titre: "JS", auteur: "Rayen" };
const copie = { ...livre, auteur: "Autre Auteur" };
console.log(fusion);
console.log(copie);
