import { Component, Host } from '@angular/core';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,ContentComponent],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'academie_manager_front';
  choix = false;
  etudiants = [
    {
        "code_etud": "4kBMgsXJPQ",
        "nom_etud": "NKONJOH",
        "prenom_etud": "Armel",
        "tel_etud": "698752369",
        "mail_etud": "arngomade@yahoo.fr",
        "annee_etud": 2023,
        "created_at": "2024-02-28T09:33:13.000000Z",
        "updated_at": "2024-02-28T09:33:13.000000Z"
    },
    {
        "code_etud": "9GRxHoBbIx",
        "nom_etud": "NKONJOH",
        "prenom_etud": "Armel",
        "tel_etud": "698752369",
        "mail_etud": "arngomade@yahoo.fr",
        "annee_etud": 2023,
        "created_at": "2024-02-26T14:52:20.000000Z",
        "updated_at": "2024-02-26T14:52:20.000000Z"
    },
    {
        "code_etud": "BBHlsVA7G6",
        "nom_etud": "NKONJOH",
        "prenom_etud": "Armel",
        "tel_etud": "698752369",
        "mail_etud": "arngomade@yahoo.fr",
        "annee_etud": 2023,
        "created_at": "2024-02-28T09:26:01.000000Z",
        "updated_at": "2024-02-28T09:26:01.000000Z"
    },
    {
        "code_etud": "cNjKIHM2PU",
        "nom_etud": "NKONJOH",
        "prenom_etud": "Armel",
        "tel_etud": "698752369",
        "mail_etud": "arngomade@yahoo.fr",
        "annee_etud": 2023,
        "created_at": "2024-02-28T09:30:00.000000Z",
        "updated_at": "2024-02-28T09:30:00.000000Z"
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
}
