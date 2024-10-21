import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableauComponent } from '../tableau/tableau.component';
import { Etudiant } from '../Models/Etudiant';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [FormsModule,TableauComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  nom = "PALOMA"
  nb:number = 0
      etudiants:Etudiant[] = [
        {
          "code_etud": "q5f4cx6DiN",
          "nom_etud": "NKONJOH",
          "prenom_etud": "Armel",
          "tel_etud": "698752369",
          "mail_etud": "arngomade@yahoo.fr",
          "annee_etud": 2023,
          "created_at": "2024-02-28T09:25:15.000000Z",
          "updated_at": "2024-02-28T09:25:15.000000Z"
      },
      {
        "code_etud": "q5f4cx6DiN",
        "nom_etud": "NKONJOH",
        "prenom_etud": "Armel",
        "tel_etud": "698752369",
        "mail_etud": "arngomade@yahoo.fr",
        "annee_etud": 2023,
        "created_at": "2024-02-28T09:25:15.000000Z",
        "updated_at": "2024-02-28T09:25:15.000000Z"
    },
    {
      "code_etud": "q5f4cx6DiN",
      "nom_etud": "NKONJOH",
      "prenom_etud": "Armel",
      "tel_etud": "698752369",
      "mail_etud": "arngomade@yahoo.fr",
      "annee_etud": 2023,
      "created_at": "2024-02-28T09:25:15.000000Z",
      "updated_at": "2024-02-28T09:25:15.000000Z"
  }
  ]
  factorial(n: number):number
  {
    if(n==0)
      return 1;
        return this.factorial(n-1)*n
  }
  incrementer()
  {
    this.nb++
  }
  recuperation(a : number)
  {
    this.nb +=a
  }
}
