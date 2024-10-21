import { Component, ContentChild, EventEmitter, Input, Output, input } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { Etudiant } from '../Models/Etudiant'

@Component({
  selector: 'app-tableau',
  standalone: true,
  imports: [],
  templateUrl: './tableau.component.html',
  styleUrl: './tableau.component.scss'
})
export class TableauComponent {
  nb:number = 6;
  @Input() etudiants!: Etudiant[]
  // permet de lancer l'evenement
  @Output() sortie = new EventEmitter<number>();
  declencher()
  {
    this.sortie.emit(this.nb)
    this.nb++
  }
}
