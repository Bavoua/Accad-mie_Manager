import { Etudiant } from "./Etudiant"
import { Matiere } from "./Matiere"

export interface Evaluation {
  code_mat : Matiere
  code_etud : Etudiant
  note : number
}
