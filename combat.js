//Exercice noté
let Personnages1 = {
  Nom: "Jinx",
  PointsDeVie: 300,
  Attaque: 30,
  Précision: 0.4,
};
let Personnages2 = {
  Nom: "Vi",
  PointsDeVie: 300,
  Attaque: 20,
  Précision: 0.6,
};
function Précision() {
  return Math.random();
}
function Attaque(Personnage1, Personnage2) {
  if (Math.random() < Personnage1.Précision) {
    Personnage2.PointsDeVie -= Personnage1.Attaque;
    console.log(
      `${Personnage1.Nom} a touché ${Personnage2.Nom} ! Il lui reste ${Personnage2.PointsDeVie} points de vie.`
    );
  }
}
while (Personnages1.PointsDeVie > 0 && Personnages2.PointsDeVie > 0) {
  Attaque(Personnages1, Personnages2);
  if (Personnages2.PointsDeVie <= 0) {
    console.log(
      `${Personnages2.Nom} a été vaincu ! ${Personnages1.Nom} gagne le combat !`
    );
    break;
  }
  Attaque(Personnages2, Personnages1);
  if (Personnages1.PointsDeVie <= 0) {
    console.log(
      `${Personnages1.Nom} a été vaincu ! ${Personnages2.Nom} gagne le combat !`
    );
    break;
  }
}
