import { Departement } from "./departement"
import { Matiere } from "./Matiere"

export interface Enseignant {
  code_ens : string
  code_depart : Departement
  code_mat : Matiere
  code_depart_contenir : string
  nom_ens : string
  prenom_ens : string
  tel_ens : string
  mail_ens : string
  date_prise_ens : Date
}
