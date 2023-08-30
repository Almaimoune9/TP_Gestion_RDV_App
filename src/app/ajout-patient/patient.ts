
export class Patient {

  public prenom: string;
  public nom: string;
  public sexe: string;
  public naissance: string;
  public telephone: number;
  public email: string;
  public pass: string;
  public confirme: string;

  constructor(
    prenom: string,
    nom: string,
    sexe: string,
    naissance: string,
    email: string,
    pass: string,
    confirme: string,
    telephone: number
  ) {
    this.prenom = prenom;
    this.nom = nom;
    this.sexe = sexe;
    this.naissance = naissance;
    this.email = email;
    this.pass = pass;
    this.confirme = confirme;
    this.telephone = telephone;
  }

}
