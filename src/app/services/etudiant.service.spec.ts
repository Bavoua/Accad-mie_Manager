import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Etudiant } from '../Models/Etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {


  constructor( private http: HttpClient) { }

  save(data: Etudiant) {
    return this.http.post<any>('http://localhost:8000/api/etudiant_api/', data).pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  get():Observable<Etudiant[]>{
      return this.http.get<Etudiant[]>('http://127.0.0.1:8000/api/etudiant_api');
  }
  delete(code_etud:string){
    return this.http.delete<any>('http://127.0.0.1:8000/api/etudiant_api/'+code_etud).pipe(
      map((res)=>{return res}))
  }
  update(e:Etudiant){
    return this.http.put<any>('http://127.0.0.1:8000/api/etudiant_api/'+e.code_etud, e).pipe(
      map((res) => {
        return res;
      })
    );
  }
}