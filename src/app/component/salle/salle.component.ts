import { Component } from '@angular/core';
import { Salle } from '../../Models/salle';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SalleService } from '../../services/salle.service';
import { CommonModule } from '@angular/common';

declare var window: any;
@Component({
  selector: 'app-salle',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './salle.component.html',
  styleUrl: './salle.component.scss'
})
export class SalleComponent {
  formModal: any
  showAdd!:boolean
  showUpdate!: boolean
  formValue!: FormGroup;
  salle  = new Salle() 
  totalItems = 100;
  pageSize = 10;
  currentPage = 0;
  addedStatus: boolean = false;
  constructor(private formbuilder: FormBuilder, private service: SalleService){}
  salles?: Salle[]
  ngOnInit(): void {
    this.getAll()
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    )
    this.formValue = this.formbuilder.group({
      num_salle: [''],
      nb_place: ['']
    });
  }
  getAll(){
    this.service.get().subscribe(
      items=>{
        this.salles = items;
      }
    )
  }
  openModal() {
    this.formModal.show()
  }
  fermer(){
    this.formModal.hide()
  }
  clickAjout(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  saveSalle() {
    this.salle.num_salle = this.formValue.value.num_salle;
    this.salle.nb_place = this.formValue.value.nb_place;
    this.service.save(this.salle).subscribe(
      (res) => {
        this.getAll()
        this.formValue.reset();
        this.fermer()
      },
      (err) => {
        alert('echec de l ajout');
      }
    );
  }
  clikUpdateSalle(s:any){
    this.showAdd = false;
    this.showUpdate = true;
    this.formValue.controls['num_salle'].setValue(s.num_salle);
    this.formValue.controls['nb_place'].setValue(s.nb_place);
    this.salle.num_salle= s.num_salle
  }

  updateSalle() {
    this.salle.nb_place = this.formValue.value.nb_place;
    console.log(this.salle.num_salle)
    this.service.update(this.salle).subscribe(
      (res) => {
        this.formValue.reset();
        this.fermer()
        this.getAll()
      },
      (err) => {
        alert('echec de la mis à jour'+err.error);
      }
    );
  }
  deleteSalle(s: any){
    this.service.delete(s.num_salle).subscribe({
      next: (res) => {
        alert('suppresion effectue avec success');
        this.getAll();
      },
      error:(error) => {
        console.log(error.error)
      }
    });
  }

  pageChanged(event: any) {
    this.currentPage = event.pageIndex;
  }
}

