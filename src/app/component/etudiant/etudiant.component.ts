import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../../services/etudiant.service';
import { Etudiant } from '../../Models/Etudiant';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

declare var window: any;
@Component({
  selector: 'app-etudiant',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.scss'
})
export class EtudiantComponent implements OnInit {
  formModal: any
  showAdd!:boolean
  showUpdate!: boolean
  formValue!: FormGroup;
  etudiant  = new Etudiant() 
  totalItems = 100;
  pageSize = 10;
  currentPage = 0;
  addedStatus: boolean = false;
  constructor(private formbuilder: FormBuilder, private service: EtudiantService){}
  etudiants?: Etudiant[]
  ngOnInit(): void {
    this.getAll()
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    )
    this.formValue = this.formbuilder.group({
      nom_etud: [''],
      prenom_etud: [''],
      tel_etud: [''],
      mail_etud: [''],
      annee_etud: [''],
    });
  }
  getAll(){
    this.service.get().subscribe(
      items=>{
        this.etudiants = items;
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

  saveEtudiant() {
    this.etudiant.nom_etud = this.formValue.value.nom_etud;
    this.etudiant.prenom_etud = this.formValue.value.prenom_etud;
    this.etudiant.tel_etud = this.formValue.value.tel_etud;
    this.etudiant.mail_etud = this.formValue.value.mail_etud;
    this.etudiant.annee_etud = this.formValue.value.annee_etud;
    this.service.save(this.etudiant).subscribe(
      (res) => {
        this.formValue.reset();
        this.fermer()
        this.getAll()
      },
      (err) => {
        alert('echec de l ajout');
      }
    );
  }
  clikUpdateEtudiant(e:any){
    this.showAdd = false;
    this.showUpdate = true;
    this.formValue.controls['nom_etud'].setValue(e.nom_etud);
    this.formValue.controls['prenom_etud'].setValue(e.prenom_etud);
    this.formValue.controls['tel_etud'].setValue(e.tel_etud);
    this.formValue.controls['mail_etud'].setValue(e.mail_etud);
    this.formValue.controls['annee_etud'].setValue(e.annee_etud);
    this.formValue.controls['annee_etud'].setValue(e.annee_etud);
    this.etudiant.code_etud = e.code_etud
  }

  updateEtudiant() {
    this.etudiant.nom_etud = this.formValue.value.nom_etud;
    this.etudiant.prenom_etud = this.formValue.value.prenom_etud;
    this.etudiant.tel_etud = this.formValue.value.tel_etud;
    this.etudiant.mail_etud = this.formValue.value.mail_etud;
    this.etudiant.annee_etud = this.formValue.value.annee_etud;
    console.log(this.etudiant.code_etud)
    this.service.update(this.etudiant).subscribe(
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
  deleteEtudiant(e: any){
    this.service.delete(e.code_etud).subscribe({
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