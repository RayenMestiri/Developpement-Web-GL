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
const e1 = new Etudiant("rayen", 17);
const e2 = new Etudiant("mestiri", 12);
const e3 = new Etudiant("ahmed", 8);
console.log(e1.nom, e1.getMention());
console.log(e2.nom, e2.getMention());
console.log(e3.nom, e3.getMention());
