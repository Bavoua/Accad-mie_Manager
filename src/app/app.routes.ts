import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { EtudiantComponent } from './component/etudiant/etudiant.component';
import { EnseignantComponent } from './component/enseignant/enseignant.component';
import { CollegeComponent } from './component/college/college.component';
import { DepartementComponent } from './component/departement/departement.component';
import { EvalutionComponent } from './component/evalution/evalution.component';
import { MatiereComponent } from './component/matiere/matiere.component';
import { SalleComponent } from './component/salle/salle.component';
import { Component } from '@angular/core';

export const routes: Routes = 
[
    {path:'',component:ContentComponent},
    {path:'etudiant',component:EtudiantComponent},
    {path:'enseignant',component:EnseignantComponent},
    {path:'college',component:CollegeComponent},
    {path:'departement',component:DepartementComponent},
    {path:'evalution',component:EvalutionComponent},
    {path:'matiere',component:MatiereComponent},
    {path:'salle',component:SalleComponent}
];
