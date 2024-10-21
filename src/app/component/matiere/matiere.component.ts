import { Component } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { MatiereService } from '../../services/matiere.service';
import { Matiere } from '../../Models/Matiere';
import { CommonModule } from '@angular/common';
import { Salle } from '../../Models/salle';
import { SalleService } from '../../services/salle.service';

declare var window: any;
@Component({
  selector: 'app-matiere',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './matiere.component.html',
  styleUrl: './matiere.component.scss'
})
export class MatiereComponent {
  formModal: any
  showAdd!:boolean
  showUpdate!: boolean
  formValue!: FormGroup;
  matiere = new Matiere();
  totalItems = 100;
  pageSize = 10;
  currentPage = 0;
  addedStatus: boolean = false;
    constructor(private formbuilder: FormBuilder, private service: MatiereService, private serviceS: SalleService){}
  matieres?: Matiere[]
  salles?: Salle[]
  ngOnInit(): void {
    this.getAll()
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    )
    this.formValue = this.formbuilder.group({
      code_mat: [''],
      label_mat : [''],
      credit_mat: [''],
      vh_mat: [''],
      num_salle: ['']
    });
  }
  getAll(){
    this.service.get().subscribe(
      items=>{
        this.matieres = items;
      }
    )
    this.serviceS.get().subscribe(
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
  saveMatiere() {
    this.matiere.code_mat = this.formValue.value.code_mat;
    this.matiere.label_mat = this.formValue.value.label_mat;
    this.matiere.credit_mat = this.formValue.value.credit_mat;
    this.matiere.vh_mat = this.formValue.value.vh_mat;
    this.matiere.num_salle = this.formValue.value.num_salle;
    this.service.save(this.matiere).subscribe(
      (res) => {
        this.getAll()
        this.formValue.reset();
        this.fermer()
        this.showNotification('Matière ajouter avec succès.');
      },
      (err) => {
        alert('echec de l ajout');
      }
    );
  }
  clikUpdateMatiere(m:any){
    this.showAdd = false;
    this.showUpdate = true;
    this.formValue.controls['code_mat'].setValue(m.code_mat);
    this.formValue.controls['label_mat'].setValue(m.label_mat);
    this.formValue.controls['credit_mat'].setValue(m.credit_mat);
    this.formValue.controls['vh_mat'].setValue(m.vh_mat);
    this.matiere.code_mat= m.code_mat
  }

  updateMatiere() {
    this.matiere.label_mat = this.formValue.value.label_mat;
    this.matiere.credit_mat = this.formValue.value.credit_mat;
    this.matiere.vh_mat = this.formValue.value.vh_mat;
    console.log(this.matiere.code_mat)
    this.service.update(this.matiere).subscribe(
      (res) => {
        this.formValue.reset();
        this.fermer()
        this.getAll()
        this.showNotification('Matière mise à jour avec succès.');
      },
      (err) => {
        alert('echec de la mis à jour'+err.error);
      }
    );
  }
  deleteMatiere(m: any){
    this.service.delete(m.cod_mat).subscribe({
      next: (res) => {
        alert('suppresion effectue avec success');
        this.getAll();
        this.showNotification('Matière supprimer avec succès.');
      },
      error:(error) => {
        console.log(error.error)
      }
    });
  }

  pageChanged(event: any) {
    this.currentPage = event.pageIndex;
  }
  showNotification(message: string) {
    const toastContainer = document.querySelector('.toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast show';
    toast.innerHTML = `
      <div class="toast-body">
        ${message}
      </div>
    `;
    toastContainer?.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 5000);
  }
}
