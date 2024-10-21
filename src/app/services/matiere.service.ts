import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Matiere } from '../Models/Matiere';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  constructor(private http: HttpClient) { }
  save(data: Matiere) {
    return this.http.post<any>('http://127.0.0.1:8000/api/matiere/', data).pipe(
        map((res: any) => {
          return res;
        })
      );
  }
      get():Observable<Matiere[]>{
        return this.http.get<Matiere[]>('http://127.0.0.1:8000/api/matiere');
    }
    delete(code_mat:string){
      return this.http.delete<any>('http://127.0.0.1:8000/api/matiere/'+code_mat).pipe(
        map((res)=>{return res}))
    }
    update(m:Matiere){
      return this.http.put<any>('http://127.0.0.1:8000/api/matiere/'+m.code_mat, m).pipe(
        map((res) => {
          return res;
        })
      );
    }
}
