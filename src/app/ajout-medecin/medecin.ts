
export class Medecin {

  public prenom: string;
  public nom: string;
  public telephone: number;
  public email: string;
  public specialite:string;
  public pass:string;
  public confirme:string


  constructor(
    prenom: string,
    nom: string,
    email: string,
    specialite:string,
    telephone: number,
    pass : string,
    confirme :string
  ) {
    this.prenom = prenom;
    this.nom = nom;
    this.email = email;
    this.specialite=specialite;
    this.telephone = telephone;
    this.pass=pass;
    this.confirme=confirme
  }

}
