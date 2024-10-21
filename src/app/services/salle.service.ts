import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Salle } from '../Models/salle';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalleService {

  constructor(private http: HttpClient) { }
  save(data: Salle) {
    return this.http.post<any>('http://127.0.0.1:8000/salle/', data).pipe(
        map((res: any) => {
          return res;
        })
      );
  }
      get():Observable<Salle[]>{
        return this.http.get<Salle[]>('http://127.0.0.1:8000/api/salle');
    }
    delete(num_salle:string){
      return this.http.delete<any>('http://127.0.0.1:8000/api/salle/'+num_salle).pipe(
        map((res)=>{return res}))
    }
    update(s:Salle){
      return this.http.put<any>('http://127.0.0.1:8000/api/salle/'+s.num_salle, s).pipe(
        map((res) => {
          return res;
        })
      );
    }
}
