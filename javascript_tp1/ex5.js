const livre = {
    titre: "L’Étranger",
    auteur: "Albert Camus",
    annee: 1942,
    getInfo() {
        return `${this.titre} écrit par ${this.auteur} en ${this.annee}`;
    }
};
console.log(livre.getInfo());
